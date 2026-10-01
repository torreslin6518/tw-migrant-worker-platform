import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand" style={{ marginBottom: '16px' }}>
            <span className="brand-mark">TW</span>
            <span>台灣移工媒合平台</span>
          </div>
          <p>協助越南、印尼、馬來西亞勞工了解台灣就業機會與合法申請資訊。</p>
        </div>

        <div>
          <h4>快速連結</h4>
          <ul>
            <li><Link href="/jobs">工作機會</Link></li>
            <li><Link href="/agencies">仲介公司</Link></li>
            <li><Link href="/process">申請流程</Link></li>
          </ul>
        </div>

        <div>
          <h4>聯絡資訊</h4>
          <ul>
            <li>電子郵件：hello@taiwanmigrantjobs.tw</li>
            <li>服務時間：週一至週六</li>
            <li>支援語言：中文 / 英文 / 越南文</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
