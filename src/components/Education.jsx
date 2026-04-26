import { useScrollReveal } from '../hooks/useAnimations'

const subjects = [
  'Afrikaans','English','Mathematics Literacy',
  'Life Orientation','Tourism','Business Studies','Accounting',
]

export default function Education() {
  const [ref, visible] = useScrollReveal({ threshold: 0.15 })

  return (
    <section id="education" ref={ref} className="section">
      <div className="container">
        <div className={`edu-title${visible ? ' edu-reveal' : ''}`}>
          <span className="label">Education</span>
          <h2 className="section-title">Academic Background</h2>
        </div>

        <div className={`edu-card${visible ? ' edu-reveal edu-reveal--delay1' : ''}`}>
          <div className="edu-icon">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
              <path d="M6 12v5c3 3 9 3 12 0v-5"/>
            </svg>
          </div>
          <div className="edu-body">
            <div className="edu-header">
              <div>
                <h3 className="edu-degree">Matric Certificate</h3>
                <p className="edu-school">Hoërskool Monument, Krugersdorp</p>
              </div>
              <span className="edu-period">2016 – 2020</span>
            </div>
            <p className="edu-subjects-label">Subjects</p>
            <div className="edu-subjects">
              {subjects.map((s, i) => (
                <span
                  key={s}
                  className={`tag${visible ? ' tag-animate' : ''}`}
                  style={{ '--tag-delay': `${0.5 + i * 0.06}s` }}
                >{s}</span>
              ))}
            </div>
          </div>
        </div>

        <div className={`references-note${visible ? ' edu-reveal edu-reveal--delay2' : ''}`}>
          <div className="references-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <p><strong>References</strong> — available upon request</p>
        </div>
      </div>

      <style>{`
        .edu-title {
          opacity: 0; transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .edu-reveal { opacity: 1 !important; transform: none !important; }
        .edu-reveal--delay1 { transition-delay: 0.15s !important; }
        .edu-reveal--delay2 { transition-delay: 0.28s !important; }

        .edu-card {
          display: flex; gap: 32px;
          background: var(--pink-100); border: 1px solid var(--border);
          border-radius: 24px; padding: 40px;
          align-items: flex-start; margin-bottom: 20px;
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease;
        }
        .edu-card:hover { box-shadow: 0 12px 40px rgba(217,108,124,0.12); }
        .edu-icon {
          width: 60px; height: 60px; border-radius: 16px;
          background: var(--pink-200); color: var(--pink-600);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .edu-header {
          display: flex; justify-content: space-between;
          align-items: flex-start; gap: 16px;
          margin-bottom: 20px; flex-wrap: wrap;
        }
        .edu-degree { font-size: 1.5rem; font-weight: 500; color: var(--charcoal); margin-bottom: 5px; }
        .edu-school { font-size: 14px; color: var(--mid); }
        .edu-period { font-size: 13px; color: var(--light-txt); white-space: nowrap; }
        .edu-subjects-label {
          font-size: 11px; font-weight: 600; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--light-txt); margin-bottom: 12px;
        }
        .edu-subjects { display: flex; flex-wrap: wrap; gap: 8px; }

        /* Stagger-animate tags */
        .tag-animate {
          opacity: 0; transform: scale(0.85);
          animation: tagPop 0.35s ease forwards;
          animation-delay: var(--tag-delay);
        }
        @keyframes tagPop {
          to { opacity: 1; transform: scale(1); }
        }

        .references-note {
          display: flex; align-items: center; gap: 16px;
          padding: 22px 28px; background: var(--white);
          border: 1px solid var(--border); border-radius: 16px;
          color: var(--mid); font-size: 15px;
          opacity: 0; transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .references-icon { color: var(--pink-400); flex-shrink: 0; }

        @media (max-width: 640px) {
          .edu-card { flex-direction: column; padding: 24px 20px; gap: 18px; }
          .edu-header { flex-direction: column; }
        }
      `}</style>
    </section>
  )
}

