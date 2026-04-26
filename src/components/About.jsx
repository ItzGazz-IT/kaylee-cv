export default function About() {
  return (
    <section id="about" className="section section--alt">
      <div className="container">
        <div className="about-grid">
          {/* Left: summary */}
          <div className="about-main">
            <span className="label">About</span>
            <h2 className="section-title" style={{ marginBottom: '28px' }}>
              A career built on<br /><em style={{ fontStyle:'italic', color:'var(--pink-500)' }}>precision & trust</em>
            </h2>

            <p className="about-body">
              Detail-oriented Creditors Clerk with hands-on experience in accounts payable, supplier payments,
              and financial administration across local and international vendors.
              Proficient in Sage and Microsoft Excel, with a strong focus on accuracy, meeting deadlines,
              and maintaining positive supplier relationships.
            </p>
            <p className="about-body" style={{ marginTop:'20px' }}>
              Proven ability to manage payment schedules, process high volumes of transactions,
              and support efficient financial operations — consistently delivering results that keep
              businesses running smoothly.
            </p>

            <div className="about-tags">
              {['Accounts Payable','Sage','Microsoft Excel','EFT Payments','Invoice Processing','Supplier Relations'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

          {/* Right: stats */}
          <div className="about-stats">
            {[
              { value: '5+', label: 'Years of Experience'    },
              { value: '3',  label: 'Companies Served'        },
              { value: '∞',  label: 'Invoices Processed'      },
              { value: '100%', label: 'Deadline Commitment'   },
            ].map(s => (
              <div key={s.label} className="about-stat">
                <span className="about-stat__value">{s.value}</span>
                <span className="about-stat__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 80px;
          align-items: start;
        }
        .about-body {
          font-size: 16px;
          line-height: 1.8;
          color: var(--mid);
        }
        .about-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 36px;
        }
        .about-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2px;
        }
        .about-stat {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 28px 20px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .about-stat__value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3rem;
          font-weight: 400;
          color: var(--pink-500);
          line-height: 1;
        }
        .about-stat__label {
          font-size: 12px;
          color: var(--light-txt);
          letter-spacing: 0.04em;
          line-height: 1.4;
        }

        @media (max-width: 860px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .about-stats { grid-template-columns: repeat(4, 1fr); gap: 12px; }
        }
        @media (max-width: 560px) {
          .about-stats { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </section>
  )
}
