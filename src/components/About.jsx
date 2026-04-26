import { useScrollReveal, useCountUp } from '../hooks/useAnimations'

const STATS = [
  { value: 5,   suffix: '+', label: 'Years of Experience' },
  { value: 3,   suffix: '',  label: 'Companies Served'    },
  { value: 100, suffix: '%', label: 'Deadline Commitment' },
  { value: 4,   suffix: '+', label: 'Roles & Departments' },
]

function StatCard({ value, suffix, label, active }) {
  const count = useCountUp(value, 1400, active)
  return (
    <div className="about-stat">
      <span className="about-stat__value">{count}{suffix}</span>
      <span className="about-stat__label">{label}</span>
    </div>
  )
}

export default function About() {
  const [sectionRef, visible] = useScrollReveal({ threshold: 0.15 })

  return (
    <section id="about" ref={sectionRef} className={`section section--alt reveal${visible ? ' revealed' : ''}`}>
      <div className="container">
        <div className="about-grid">
          <div className="about-main stagger-1">
            <span className="label">About</span>
            <h2 className="section-title" style={{ marginBottom: '24px' }}>
              A career built on<br />
              <em style={{ fontStyle:'italic', color:'var(--pink-500)' }}>precision & trust</em>
            </h2>
            <p className="about-body">
              Detail-oriented Creditors Clerk with hands-on experience in accounts payable,
              supplier payments, and financial administration across local and international vendors.
              Proficient in Sage and Microsoft Excel, with a strong focus on accuracy, meeting
              deadlines, and maintaining positive supplier relationships.
            </p>
            <p className="about-body" style={{ marginTop:'18px' }}>
              Proven ability to manage payment schedules, process high volumes of transactions,
              and support efficient financial operations — consistently delivering results that
              keep businesses running smoothly.
            </p>
            <div className="about-tags">
              {[
                'Accounts Payable',
                'Creditor Reconciliation',
                'Payment Processing',
                'Invoice Processing',
                'Bank Reconciliation',
                'Supplier Relations',
                'Vendor Management',
                'Sage Accounting',
                'Microsoft Excel',
                'Age Analysis',
                'Purchase Orders',
                'Financial Administration',
              ].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

          <div className="about-stats stagger-2">
            {STATS.map(s => (
              <StatCard key={s.label} {...s} active={visible} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 64px;
          align-items: start;
        }
        .about-body {
          font-size: 15px;
          line-height: 1.8;
          color: var(--mid);
        }
        .about-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 28px;
        }
        .about-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .about-stat {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 24px 18px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .about-stat:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(217,108,124,0.14);
        }
        .about-stat__value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.8rem;
          font-weight: 400;
          color: var(--pink-500);
          line-height: 1;
        }
        .about-stat__label {
          font-size: 11px;
          color: var(--light-txt);
          letter-spacing: 0.04em;
          line-height: 1.4;
        }

        /* Scroll reveal base */
        .reveal .stagger-1,
        .reveal .stagger-2 {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .revealed .stagger-1 { opacity:1; transform:none; transition-delay: 0.1s; }
        .revealed .stagger-2 { opacity:1; transform:none; transition-delay: 0.3s; }

        @media (max-width: 860px) {
          .about-grid { grid-template-columns: 1fr; gap: 40px; }
          .about-stats { grid-template-columns: repeat(4,1fr); }
        }
        @media (max-width: 560px) {
          .about-stats { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </section>
  )
}

