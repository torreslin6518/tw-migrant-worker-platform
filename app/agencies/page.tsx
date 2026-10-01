'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import type { Agency } from '@/lib/supabase';

export default function AgenciesPage() {
  const [agencies, setAgencies] = useState<Agency[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAgencies = async () => {
      setIsLoading(true);
      try {
        const res = await fetch('/api/agencies');
        const data = await res.json();
        setAgencies(data.agencies || []);
      } catch (error) {
        console.error('Failed to fetch agencies:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAgencies();
  }, []);

  return (
    <>
      <SiteHeader />

      <main className="page-shell">
        <section className="container section-block">
          <div className="section-heading">
            <p className="eyebrow">仲介公司</p>
            <h2>合法仲介公司協助辦理相關手續</h2>
          </div>

          {isLoading ? (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <p>載入中...</p>
            </div>
          ) : agencies.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <p>目前沒有認證的仲介公司</p>
            </div>
          ) : (
            <div className="agency-grid">
              {agencies.map((agency) => (
                <article key={agency.id} className="agency-card">
                  <div className="card-top-row">
                    <span className="country-badge">{agency.country}</span>
                    <span className="small-label">認證服務</span>
                  </div>
                  <h3>{agency.name}</h3>
                  <div className="pill-row">
                    {agency.services.split(',').map((item) => (
                      <span key={item.trim()} className="pill">
                        {item.trim()}
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
          )}
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
