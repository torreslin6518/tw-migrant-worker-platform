import Link from 'next/link';

export default function AdminPage() {
  return (
    <main className="container" style={{ padding: '40px 20px', minHeight: '100vh' }}>
      <h1>管理後台</h1>
      <p>在這裡可以新增或管理職缺與仲介公司資訊</p>

      <div style={{ display: 'grid', gap: '16px', marginTop: '24px', maxWidth: '400px' }}>
        <Link
          href="/admin/jobs"
          style={{
            display: 'block',
            padding: '16px',
            background: 'linear-gradient(135deg, #0f5bd3, #2f7df7)',
            color: 'white',
            borderRadius: '12px',
            fontWeight: 'bold',
            textAlign: 'center'
          }}
        >
          管理職缺
        </Link>
        <Link
          href="/admin/agencies"
          style={{
            display: 'block',
            padding: '16px',
            background: 'linear-gradient(135deg, #0f5bd3, #2f7df7)',
            color: 'white',
            borderRadius: '12px',
            fontWeight: 'bold',
            textAlign: 'center'
          }}
        >
          管理仲介公司
        </Link>
        <Link
          href="/"
          style={{
            display: 'block',
            padding: '16px',
            background: '#f0f0f0',
            color: '#333',
            borderRadius: '12px',
            fontWeight: 'bold',
            textAlign: 'center'
          }}
        >
          返回首頁
        </Link>
      </div>
    </main>
  );
}
