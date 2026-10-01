'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { jobs } from '@/data/site-data';

const filters = ['全部', '越南', '印尼', '馬來西亞', '製造業', '餐飲業', '物流倉儲', '清潔保全'];

export default function JobsPage() {
  const [activeFilter, setActiveFilter] = useState('全部');

  const visibleJobs = useMemo(() => {
    if (activeFilter === '全部') return jobs;
    return jobs.filter((job) => job.country === activeFilter || job.category === activeFilter);
  }, [activeFilter]);

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

          <div className="job-grid jobs-page-grid">
            {visibleJobs.map((job) => (
              <article key={`${job.title}-${job.country}`} className="job-card">
                <div className="card-top-row">
                  <span className="country-badge">{job.country}</span>
                  <span className="small-label">截止 {job.deadline}</span>
                </div>
                <h3>{job.title}</h3>
                <div className="pill-row">
                  <span className="pill">{job.category}</span>
                  <span className="pill">{job.location}</span>
                </div>
                <p>{job.description}</p>
                <div className="salary">{job.salary}</div>
                <div className="card-footer">
                  <span className="pill">{job.shift}</span>
                  <Link href="/agencies" className="button button-primary small-button">
                    查看仲介
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
