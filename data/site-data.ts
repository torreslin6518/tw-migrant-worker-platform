export type Job = {
  title: string;
  country: '越南' | '印尼' | '馬來西亞';
  category: '製造業' | '餐飲業' | '物流倉儲' | '清潔保全';
  salary: string;
  location: string;
  shift: string;
  deadline: string;
  description: string;
};

export type Agency = {
  name: string;
  country: string;
  services: string[];
  description: string;
};

export const jobs: Job[] = [
  {
    title: '工廠作業員',
    country: '越南',
    category: '製造業',
    salary: 'NT$ 32,000 ~ 45,000',
    location: '桃園 / 台中',
    shift: '8 小時 / 日',
    deadline: '2026-10-31',
    description: '適合有基本製造流程經驗者，協助組裝、檢查與生產線作業。'
  },
  {
    title: '物流倉儲人員',
    country: '印尼',
    category: '物流倉儲',
    salary: 'NT$ 33,000 ~ 48,000',
    location: '新北 / 高雄',
    shift: '8.5 小時 / 日',
    deadline: '2026-11-20',
    description: '負責貨物分揀、包裝、搬運與庫存管理，需求細心與體力穩定者。'
  },
  {
    title: '餐飲服務生',
    country: '馬來西亞',
    category: '餐飲業',
    salary: 'NT$ 30,000 ~ 42,000',
    location: '台北 / 台中',
    shift: '8 小時 / 日',
    deadline: '2026-12-05',
    description: '協助接待、點餐服務與餐桌清潔，重視溝通能力與服務態度。'
  },
  {
    title: '清潔人員',
    country: '越南',
    category: '清潔保全',
    salary: 'NT$ 28,000 ~ 38,000',
    location: '台南 / 高雄',
    shift: '7.5 小時 / 日',
    deadline: '2026-12-10',
    description: '負責辦公室、工廠與宿舍區域的清潔與日常維護工作。'
  },
  {
    title: '食品加工作業員',
    country: '印尼',
    category: '製造業',
    salary: 'NT$ 31,000 ~ 43,000',
    location: '彰化 / 雲林',
    shift: '8 小時 / 日',
    deadline: '2026-11-30',
    description: '從事食品包裝、標示與品管流程，需具備衛生意識與團隊配合。'
  },
  {
    title: '保全人員',
    country: '馬來西亞',
    category: '清潔保全',
    salary: 'NT$ 30,000 ~ 40,000',
    location: '新竹 / 台中',
    shift: '12 小時 / 2 班制',
    deadline: '2026-11-15',
    description: '負責門禁管理、環境巡檢與設施安全檢查，適合責任感強者。'
  }
];

export const featuredJobs = jobs.slice(0, 4);

export const agencies: Agency[] = [
  {
    name: '台灣職涯協進',
    country: '越南 / 印尼',
    services: ['簽證協助', '履歷評估', '面試安排', '到台安置'],
    description: '專門協助東南亞勞工進行就業媒合與入境前準備，提供較完整的申請支援。'
  },
  {
    name: '東亞勞務中心',
    country: '馬來西亞 / 印尼',
    services: ['合約審閱', '醫療檢查', '住宿安排', '法令諮詢'],
    description: '協助工作前與工作後資訊說明，強調勞動權益與職缺透明化。'
  },
  {
    name: '台灣就業聯盟',
    country: '越南 / 馬來西亞',
    services: ['職缺媒合', '語言溝通', '簽證文件', '返程協助'],
    description: '提供跨國就業媒合與台灣企業招募資訊，適合中長期工作者。'
  }
];
