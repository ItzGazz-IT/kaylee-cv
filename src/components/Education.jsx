const subjects = [
  'Afrikaans', 'English', 'Mathematics Literacy',
  'Life Orientation', 'Tourism', 'Business Studies', 'Accounting',
]

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <span className="label">Education</span>
        <h2 className="section-title">Academic Background</h2>

        <div className="edu-card">
          {/* Left: icon */}
          <div className="edu-icon" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
              <path d="M6 12v5c3 3 9 3 12 0v-5"/>
            </svg>
          </div>

          {/* Content */}
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
              {subjects.map(s => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
          </div>
        </div>

        {/* References note */}
        <div className="references-note">
          <div className="references-icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <p>
            <strong>References</strong> — available upon request
          </p>
        </div>
      </div>

      <style>{`
        .edu-card {
          display: flex;
          gap: 36px;
          background: var(--pink-100);
          border: 1px solid var(--border);
          border-radius: 24px;
          padding: 44px;
          align-items: flex-start;
          margin-bottom: 32px;
        }
        .edu-icon {
          width: 64px; height: 64px;
          border-radius: 18px;
          background: var(--pink-200);
          color: var(--pink-600);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .edu-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }
        .edu-degree {
          font-size: 1.6rem;
          font-weight: 500;
          color: var(--charcoal);
          margin-bottom: 6px;
        }
        .edu-school {
          font-size: 14px;
          color: var(--mid);
        }
        .edu-period {
          font-size: 13px;
          color: var(--light-txt);
          white-space: nowrap;
          flex-shrink: 0;
        }
        .edu-subjects-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--light-txt);
          margin-bottom: 12px;
        }
        .edu-subjects {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        /* References */
        .references-note {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 24px 32px;
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 16px;
          color: var(--mid);
          font-size: 15px;
        }
        .references-icon {
          color: var(--pink-400);
          flex-shrink: 0;
        }

        @media (max-width: 640px) {
          .edu-card { flex-direction: column; padding: 28px 24px; gap: 20px; }
          .edu-header { flex-direction: column; }
        }
      `}</style>
    </section>
  )
}
