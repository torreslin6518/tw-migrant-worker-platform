# Supabase 雲端資料庫設定指南

## 步驟 1: 在 Supabase 建立表格

進入你的 Supabase 專案，開啟 SQL Editor，執行以下 SQL 語句：

### 建立 jobs 表格

```sql
CREATE TABLE jobs (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title TEXT NOT NULL,
  country TEXT NOT NULL,
  category TEXT NOT NULL,
  salary_min INT NOT NULL DEFAULT 0,
  salary_max INT NOT NULL DEFAULT 0,
  location TEXT NOT NULL,
  shift TEXT NOT NULL,
  deadline TEXT,
  description TEXT NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 建立索引以加快查詢速度
CREATE INDEX idx_jobs_active ON jobs(is_active);
CREATE INDEX idx_jobs_country ON jobs(country);
CREATE INDEX idx_jobs_category ON jobs(category);
```

### 建立 agencies 表格

```sql
CREATE TABLE agencies (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  country TEXT NOT NULL,
  services TEXT NOT NULL,
  description TEXT NOT NULL,
  is_verified BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 建立索引
CREATE INDEX idx_agencies_verified ON agencies(is_verified);
```

## 步驟 2: 建立 RLS (Row Level Security) 策略

### 為 jobs 表格設定 RLS

```sql
-- 啟用 RLS
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;

-- 所有人都可以讀取活躍的職缺
CREATE POLICY "Anyone can view active jobs"
  ON jobs
  FOR SELECT
  USING (is_active = true);

-- 管理員可以插入職缺
CREATE POLICY "Authenticated users can insert jobs"
  ON jobs
  FOR INSERT
  WITH CHECK (true);
```

### 為 agencies 表格設定 RLS

```sql
-- 啟用 RLS
ALTER TABLE agencies ENABLE ROW LEVEL SECURITY;

-- 所有人都可以讀取驗證過的仲介公司
CREATE POLICY "Anyone can view verified agencies"
  ON agencies
  FOR SELECT
  USING (is_verified = true);

-- 管理員可以插入仲介公司
CREATE POLICY "Authenticated users can insert agencies"
  ON agencies
  FOR INSERT
  WITH CHECK (true);
```

## 步驟 3: 初始化範例資料（選擇性）

如果想要新增初始職缺與仲介公司資料，執行以下 SQL：

```sql
-- 新增初始職缺
INSERT INTO jobs (title, country, category, salary_min, salary_max, location, shift, deadline, description)
VALUES
  ('工廠作業員', '越南', '製造業', 32000, 45000, '桃園 / 台中', '8 小時 / 日', '2026-10-31', '適合有基本製造流程經驗者，協助組裝、檢查與生產線作業。'),
  ('物流倉儲人員', '印尼', '物流倉儲', 33000, 48000, '新北 / 高雄', '8.5 小時 / 日', '2026-11-20', '負責貨物分揀、包裝、搬運與庫存管理，需求細心與體力穩定者。'),
  ('餐飲服務生', '馬來西亞', '餐飲業', 30000, 42000, '台北 / 台中', '8 小時 / 日', '2026-12-05', '協助接待、點餐服務與餐桌清潔，重視溝通能力與服務態度。'),
  ('清潔人員', '越南', '清潔保全', 28000, 38000, '台南 / 高雄', '7.5 小時 / 日', '2026-12-10', '負責辦公室、工廠與宿舍區域的清潔與日常維護工作。');

-- 新增初始仲介公司
INSERT INTO agencies (name, country, services, description, is_verified)
VALUES
  ('台灣職涯協進', '越南 / 印尼', '簽證協助,履歷評估,面試安排,到台安置', '專門協助東南亞勞工進行就業媒合與入境前準備，提供較完整的申請支援。', true),
  ('東亞勞務中心', '馬來西亞 / 印尼', '合約審閱,醫療檢查,住宿安排,法令諮詢', '協助工作前與工作後資訊說明，強調勞動權益與職缺透明化。', true),
  ('台灣就業聯盟', '越南 / 馬來西亞', '職缺媒合,語言溝通,簽證文件,返程協助', '提供跨國就業媒合與台灣企業招募資訊，適合中長期工作者。', true);
```

## 步驟 4: 驗證連線設定

1. 確保 `.env.local` 檔案中已設定：
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`

2. 在本機測試應用程式：
   ```bash
   npm run dev
   ```

3. 造訪 http://localhost:3000/jobs 確認資料是否正確載入

## 步驟 5: Vercel 部署

1. 將 `.env.local` 中的變數設定到 Vercel 專案設定
2. 部署應用程式
3. 應用程式將自動連接到雲端資料庫

## 常見問題

### Q: 新增職缺時收到 403 錯誤
A: 確保你的 RLS 策略正確設定了寫入權限

### Q: 無法從應用程式讀取資料
A: 檢查 `.env.local` 中的 Supabase URL 和金鑰是否正確

### Q: 如何限制只有管理員能新增資料
A: 修改 RLS 策略使用 `auth.role()` 進行身份驗證（需要實現認證系統）
