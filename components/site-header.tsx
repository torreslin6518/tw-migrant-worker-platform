import Link from 'next/link';

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container nav">
        <Link href="/" className="brand" aria-label="台灣移工媒合平台首頁">
          <span className="brand-mark">TW</span>
          <span>台灣移工媒合平台</span>
        </Link>

        <nav className="main-nav" aria-label="主導覽">
          <Link href="/jobs">工作機會</Link>
          <Link href="/agencies">仲介公司</Link>
          <Link href="/process">申請流程</Link>
          <Link href="/faq">FAQ</Link>
        </nav>

        <Link href="/jobs" className="button button-primary">
          立即查看
        </Link>
      </div>
    </header>
  );
}
