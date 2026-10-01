'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import type { Job, Agency } from '@/lib/supabase';

export default function HomePage() {
  const [featuredJobs, setFeaturedJobs] = useState<Job[]>([]);
  const [agencies, setAgencies] = useState<Agency[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [jobsRes, agenciesRes] = await Promise.all([
          fetch('/api/jobs'),
          fetch('/api/agencies')
        ]);
        const jobsData = await jobsRes.json();
        const agenciesData = await agenciesRes.json();
        
        setFeaturedJobs((jobsData.jobs || []).slice(0, 4));
        setAgencies(agenciesData.agencies || []);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <SiteHeader />

      <main>
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Trusted Taiwan Jobs & Visa Support</p>
              <h1>找到適合的台灣工作，從選擇職缺到合法申請一步到位</h1>
              <p className="lead">
                針對越南、印尼、馬來西亞希望來台工作的勞工，整理熱門職缺、薪資範圍與合法仲介公司，協助您了解台灣就業機會與申請流程。
              </p>

              <div className="actions-row">
                <Link href="/jobs" className="button button-primary">
                  查看工作機會
                </Link>
                <Link href="/agencies" className="button button-secondary">
                  找仲介公司
                </Link>
              </div>

              <div className="stats-row">
                <div>
                  <strong>12+</strong>
                  <span>熱門職種</span>
                </div>
                <div>
                  <strong>3</strong>
                  <span>主要國家</span>
                </div>
                <div>
                  <strong>24/7</strong>
                  <span>資訊查詢</span>
                </div>
              </div>
            </div>

            <div className="hero-panel">
              <div className="panel-card">
                <div className="panel-header">
                  <span className="dot blue" />
                  <span>熱門職缺</span>
                </div>
                <ul className="mini-list">
                  {isLoading ? (
                    <li><span>載入中...</span></li>
                  ) : featuredJobs.length === 0 ? (
                    <li><span>目前沒有職缺</span></li>
                  ) : (
                    featuredJobs.map((job) => (
                      <li key={job.id}>
                        <span>{job.title}</span>
                        <strong>NT$ {job.salary_min} ~ {job.salary_max}</strong>
                      </li>
                    ))
                  )}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="country-strip">
          <div className="container country-row">
            <span>越南</span>
            <span>印尼</span>
            <span>馬來西亞</span>
            <span>台灣仲介服務</span>
            <span>合法申請流程</span>
          </div>
        </section>

        <section className="container section-block">
          <div className="feature-grid">
            <article className="feature-card">
              <span className="icon">🏭</span>
              <h3>製造業</h3>
              <p>工廠與電子、食品、紡織、金屬加工產業職缺，適合適應力強且穩定工作者。</p>
            </article>
            <article className="feature-card">
              <span className="icon">🍽️</span>
              <h3>餐飲/服務</h3>
              <p>餐廳、連鎖餐飲與飯店服務相關職務，適合具有溝通與服務能力者。</p>
            </article>
            <article className="feature-card">
              <span className="icon">🚚</span>
              <h3>物流倉儲</h3>
              <p>包裝、出貨、盤點、搬運相關工作，通常適合體力穩定及分工明確的工時制度。</p>
            </article>
          </div>
        </section>

        <section className="section-block bg-soft">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">工作機會</p>
              <h2>依國家與職種選擇適合的工作</h2>
            </div>

            {isLoading ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <p>載入中...</p>
              </div>
            ) : (
              <div className="job-grid">
                {featuredJobs.map((job) => (
                  <article key={job.id} className="job-card">
                    <div className="card-top-row">
                      <span className="country-badge">{job.country}</span>
                      <span className="small-label">截止 {job.deadline || '未指定'}</span>
                    </div>
                    <h3>{job.title}</h3>
                    <div className="pill-row">
                      <span className="pill">{job.category}</span>
                      <span className="pill">{job.location}</span>
                    </div>
                    <p>{job.description}</p>
                    <div className="salary">NT$ {job.salary_min} ~ {job.salary_max}</div>
                    <div className="card-footer">
                      <span className="pill">{job.shift}</span>
                      <Link href="/agencies" className="button button-primary small-button">
                        查看仲介
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="section-block">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">仲介公司</p>
              <h2>合法仲介公司協助辦理相關手續</h2>
            </div>

            {isLoading ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <p>載入中...</p>
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
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
