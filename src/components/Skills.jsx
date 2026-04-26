const techSkills = [
  { name: 'Sage',             level: 90 },
  { name: 'Microsoft Excel',  level: 88 },
  { name: 'Accounts Payable', level: 95 },
  { name: 'Invoice Processing',level:92 },
  { name: 'Data Entry',       level: 90 },
]

const coreSkills = [
  'Attention to Detail',
  'Communication',
  'Problem Solving',
  'Time Management',
  'Organisational Skills',
]

const languages = [
  { lang: 'English',  prof: 'Fluent'  },
  { lang: 'Afrikaans',prof: 'Fluent'  },
]

export default function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <span className="label">Capabilities</span>
        <h2 className="section-title">Skills & Languages</h2>

        <div className="skills-grid">
          {/* Technical */}
          <div className="skills-card">
            <h3 className="skills-card-title">Technical Skills</h3>
            <div className="skill-bars">
              {techSkills.map(s => (
                <div key={s.name} className="skill-bar-item">
                  <div className="skill-bar-label">
                    <span>{s.name}</span>
                    <span className="skill-bar-pct">{s.level}%</span>
                  </div>
                  <div className="skill-bar-track">
                    <div
                      className="skill-bar-fill"
                      style={{ '--fill-w': `${s.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core & Languages */}
          <div className="skills-right">
            <div className="skills-card">
              <h3 className="skills-card-title">Core Skills</h3>
              <div className="core-skills">
                {coreSkills.map(s => (
                  <div key={s} className="core-skill-item">
                    <div className="core-skill-icon" aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="skills-card">
              <h3 className="skills-card-title">Languages</h3>
              <div className="lang-list">
                {languages.map(l => (
                  <div key={l.lang} className="lang-item">
                    <span className="lang-name">{l.lang}</span>
                    <span className="tag" style={{ fontSize:'11px' }}>{l.prof}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 24px;
          align-items: start;
        }

        .skills-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 24px;
          padding: 36px;
        }
        .skills-card-title {
          font-size: 1.3rem;
          font-weight: 500;
          color: var(--charcoal);
          margin-bottom: 28px;
        }

        /* Bars */
        .skill-bars { display: flex; flex-direction: column; gap: 20px; }
        .skill-bar-item {}
        .skill-bar-label {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          color: var(--mid);
          margin-bottom: 8px;
        }
        .skill-bar-pct { color: var(--light-txt); }
        .skill-bar-track {
          height: 6px;
          background: var(--pink-100);
          border-radius: 50px;
          overflow: hidden;
        }
        .skill-bar-fill {
          height: 100%;
          width: var(--fill-w);
          background: linear-gradient(90deg, var(--pink-300), var(--pink-500));
          border-radius: 50px;
          animation: barGrow 1s cubic-bezier(.4,0,.2,1) both;
          animation-delay: 0.2s;
        }
        @keyframes barGrow {
          from { width: 0 }
          to   { width: var(--fill-w) }
        }

        /* Core */
        .skills-right { display: flex; flex-direction: column; gap: 24px; }
        .core-skills { display: flex; flex-direction: column; gap: 14px; }
        .core-skill-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 15px;
          color: var(--mid);
        }
        .core-skill-icon {
          width: 28px; height: 28px;
          border-radius: 50%;
          background: var(--pink-100);
          display: flex; align-items: center; justify-content: center;
          color: var(--pink-500);
          flex-shrink: 0;
        }

        /* Languages */
        .lang-list { display: flex; flex-direction: column; gap: 14px; }
        .lang-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 0;
          border-bottom: 1px solid var(--border);
        }
        .lang-item:last-child { border-bottom: none; padding-bottom: 0; }
        .lang-name { font-size: 15px; color: var(--charcoal); }

        @media (max-width: 860px) {
          .skills-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
