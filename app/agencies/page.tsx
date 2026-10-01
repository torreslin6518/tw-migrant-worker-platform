import Link from 'next/link';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { agencies } from '@/data/site-data';

export default function AgenciesPage() {
  return (
    <>
      <SiteHeader />

      <main className="page-shell">
        <section className="container section-block">
          <div className="section-heading">
            <p className="eyebrow">仲介公司</p>
            <h2>合法仲介公司協助辦理相關手續</h2>
          </div>

          <div className="agency-grid">
            {agencies.map((agency) => (
              <article key={agency.name} className="agency-card">
                <div className="card-top-row">
                  <span className="country-badge">{agency.country}</span>
                  <span className="small-label">認證服務</span>
                </div>
                <h3>{agency.name}</h3>
                <div className="pill-row">
                  {agency.services.map((item) => (
                    <span key={item} className="pill">
                      {item}
                    </span>
                  ))}
                </div>
                <p>{agency.description}</p>
                <div className="card-footer">
                  <span className="pill">資源充足</span>
                  <Link href="/process" className="text-link">
                    了解流程
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
