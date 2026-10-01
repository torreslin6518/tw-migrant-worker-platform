# 台灣移工媒合平台

這是一個完整的台灣移工媒合平台網站雛形，包含：
- 首頁介紹
- 工作機會列表與篩選
- 仲介公司介紹
- 申請流程頁
- FAQ 頁面
- 可擴充的資料結構與前端架構

## 啟動方式

1. 安裝依賴：
   ```bash
   npm install
   ```
2. 啟動開發伺服器：
   ```bash
   npm run dev
   ```
3. 在瀏覽器開啟：
   ```text
   http://localhost:3000
   ```

## 主要檔案

- `app/page.tsx`：首頁
- `app/jobs/page.tsx`：工作機會列表
- `app/agencies/page.tsx`：仲介公司列表
- `app/process/page.tsx`：申請流程
- `app/faq/page.tsx`：FAQ
- `data/site-data.ts`：工作與仲介資料
- `app/globals.css`：網站樣式

## 後續可擴充

- 加入後端 API 與資料庫
- 加入真實仲介公司資訊
- 建立工作詳情頁、公司詳情頁
- 增加會員登入與表單提交功能
- 支援多語言版本（越南文 / 印尼文 / 馬來西亞文）
- 部署到 Vercel

## 技術棧

- Next.js
- React
- TypeScript
- CSS Modules / 原生 CSS

