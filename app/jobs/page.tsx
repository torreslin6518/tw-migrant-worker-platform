'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import type { Job } from '@/lib/supabase';

const filters = ['全部', '越南', '印尼', '馬來西亞', '製造業', '餐飲業', '物流倉儲', '清潔保全'];

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [activeFilter, setActiveFilter] = useState('全部');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      setIsLoading(true);
      try {
        const res = await fetch('/api/jobs');
        const data = await res.json();
        setJobs(data.jobs || []);
      } catch (error) {
        console.error('Failed to fetch jobs:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const visibleJobs = jobs.filter((job) => {
    if (activeFilter === '全部') return true;
    return job.country === activeFilter || job.category === activeFilter;
  });

  return (
    <>
      <SiteHeader />

      <main className="page-shell">
        <section className="container section-block">
          <div className="section-heading">
            <p className="eyebrow">工作機會</p>
            <h2>依國家與職種選擇適合的工作</h2>
          </div>

          <div className="filter-row">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={filter === activeFilter ? 'filter active' : 'filter'}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          {isLoading ? (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <p>載入中...</p>
            </div>
          ) : visibleJobs.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <p>目前沒有符合條件的職缺</p>
            </div>
          ) : (
            <div className="job-grid jobs-page-grid">
              {visibleJobs.map((job) => (
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
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
