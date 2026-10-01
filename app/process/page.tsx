import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export default function ProcessPage() {
  const steps = [
    {
      number: '01',
      title: '選擇職缺',
      description: '依照個人條件與工作偏好選擇適合之職種，確認薪資、工時與工作地點。'
    },
    {
      number: '02',
      title: '備妥文件',
      description: '準備護照、照片、健康證明、履歷與身份文件，供仲介公司評估。'
    },
    {
      number: '03',
      title: '仲介協助',
      description: '由合法仲介公司協助簽訂合約、安排面試、辦理簽證與來台前準備。'
    },
    {
      number: '04',
      title: '抵台就業',
      description: '完成入境、安排住宿與訓練，確保到台後可順利適應工作環境。'
    }
  ];

  return (
    <>
      <SiteHeader />

      <main className="page-shell">
        <section className="container section-block">
          <div className="section-heading">
            <p className="eyebrow">申請流程</p>
            <h2>從提交資料到入台工作，流程簡化</h2>
          </div>

          <div className="process-grid">
            {steps.map((step) => (
              <article key={step.number} className="process-card">
                <span className="step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
