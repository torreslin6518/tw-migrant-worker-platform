import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

const faqs = [
  {
    question: '申請臺灣工作需要哪些文件？',
    answer: '通常包括護照、照片、健康證明、履歷、學歷證明與工作經驗證明，詳細可由仲介公司提供清單。'
  },
  {
    question: '有哪些工作是較常見的選擇？',
    answer: '常見包括工廠、生產線、物流倉儲、餐飲服務、清潔保全與農業相關工作。依個人條件選擇最適合的類型。'
  },
  {
    question: '仲介公司是否可協助簽證？',
    answer: '合法仲介公司可協助辦理申請相關流程與文件，協助改善資料準備與就業安排，建議確認其合法性與服務內容。'
  },
  {
    question: '工資與津貼有哪些注意事項？',
    answer: '務必確認合約中薪資、工時、加班、住宿與保險條款，避免後續權益被忽略。'
  }
];

export default function FAQPage() {
  return (
    <>
      <SiteHeader />

      <main className="page-shell">
        <section className="container section-block faq-layout">
          <div className="section-heading faq-heading">
            <p className="eyebrow">常見問題</p>
            <h2>移工申請與工作前須了解的重點</h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq) => (
              <article key={faq.question} className="faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
