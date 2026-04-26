import { useScrollReveal } from '../hooks/useAnimations'

const techSkills = [
  { name: 'Accounts Payable',       level: 95 },
  { name: 'Invoice Processing',     level: 92 },
  { name: 'Payment Runs & Remittances', level: 92 },
  { name: 'Creditor Reconciliation',level: 90 },
  { name: 'Sage Accounting',        level: 90 },
  { name: 'Bank Reconciliation',    level: 86 },
  { name: 'Microsoft Excel',        level: 88 },
  { name: 'Data Entry & Reporting', level: 90 },
]

const coreSkills = [
  'Attention to Detail',
  'Time Management',
  'Organisational Skills',
  'Communication',
  'Problem Solving',
  'Adaptability',
  'Confidentiality & Discretion',
  'Teamwork & Collaboration',
  'Multi-tasking Under Pressure',
]

const tools = [
  { name: 'Sage',         color: '#0e7c46' },
  { name: 'Microsoft Excel',   color: '#1d6f42' },
  { name: 'Microsoft Word',    color: '#2b579a' },
  { name: 'Microsoft Outlook', color: '#0072c6' },
  { name: 'Microsoft Teams',   color: '#5558af' },
  { name: 'Microsoft PowerPoint', color: '#d24726' },
  { name: 'Google Workspace',  color: '#4285f4' },
  { name: 'Pastel Accounting',   color: '#e8762b' },
  { name: 'Purchase Orders',   color: '#7c5cbf' },
  { name: 'Age Analysis',      color: '#2e8b57' },
]

const languages = [
  { lang: 'English',   prof: 'Fluent' },
  { lang: 'Afrikaans', prof: 'Fluent' },
]

export default function Skills() {
  const [sectionRef, visible] = useScrollReveal({ threshold: 0.1 })

  return (
    <section id="skills" ref={sectionRef} className="section section--alt">
      <div className="container">
        <div className={`skills-title-wrap${visible ? ' sk-revealed' : ''}`}>
          <span className="label">Capabilities</span>
          <h2 className="section-title">Skills &amp; Expertise</h2>
        </div>

        <div className="skills-grid">
          {/* Technical skill bars */}
          <div className={`skills-card sk-card-1${visible ? ' sk-revealed' : ''}`}>
            <h3 className="skills-card-title">Technical Skills</h3>
            <div className="skill-bars">
              {techSkills.map((s, i) => (
                <div key={s.name} className="skill-bar-item">
                  <div className="skill-bar-label">
                    <span>{s.name}</span>
                    <span className="skill-bar-pct">{s.level}%</span>
                  </div>
                  <div className="skill-bar-track">
                    <div
                      className={`skill-bar-fill${visible ? ' skill-bar-fill--go' : ''}`}
                      style={{ '--fill-w': `${s.level}%`, '--bar-delay': `${0.2 + i * 0.1}s` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-right">
            {/* Core skills */}
            <div className={`skills-card sk-card-2${visible ? ' sk-revealed' : ''}`}>
              <h3 className="skills-card-title">Core Skills</h3>
              <div className="core-skills">
                {coreSkills.map((s, i) => (
                  <div
                    key={s}
                    className={`core-skill-item${visible ? ' core-visible' : ''}`}
                    style={{ '--cs-delay': `${0.35 + i * 0.07}s` }}
                  >
                    <div className="core-skill-icon">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className={`skills-card sk-card-3${visible ? ' sk-revealed' : ''}`}>
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

        {/* Software & Tools full-width row */}
        <div className={`skills-card tools-card sk-card-4${visible ? ' sk-revealed' : ''}`}>
          <h3 className="skills-card-title">Software &amp; Tools</h3>
          <div className="tools-grid">
            {tools.map((t, i) => (
              <div
                key={t.name}
                className={`tool-pill${visible ? ' tool-pill-in' : ''}`}
                style={{ '--tp-delay': `${0.4 + i * 0.06}s`, '--tp-color': t.color }}
              >
                <span className="tool-dot" />
                {t.name}
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        .skills-title-wrap {
          opacity: 0; transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .skills-title-wrap.sk-revealed { opacity:1; transform:none; }

        .sk-card-1, .sk-card-2, .sk-card-3, .sk-card-4 {
          opacity: 0; transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .sk-card-1.sk-revealed { opacity:1; transform:none; transition-delay:0.15s; }
        .sk-card-2.sk-revealed { opacity:1; transform:none; transition-delay:0.22s; }
        .sk-card-3.sk-revealed { opacity:1; transform:none; transition-delay:0.32s; }
        .sk-card-4.sk-revealed { opacity:1; transform:none; transition-delay:0.4s; }

        .skills-grid {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 20px;
          align-items: start;
          margin-bottom: 20px;
        }
        .skills-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 24px;
          padding: 32px;
          transition: box-shadow 0.3s ease;
        }
        .skills-card:hover { box-shadow: 0 10px 36px rgba(217,108,124,0.1); }
        .skills-card-title {
          font-size: 1.1rem; font-weight: 500;
          color: var(--charcoal); margin-bottom: 22px;
          font-family: 'Cormorant Garamond', serif;
          letter-spacing: 0.02em;
        }

        /* Bars */
        .skill-bars { display: flex; flex-direction: column; gap: 15px; }
        .skill-bar-label {
          display: flex; justify-content: space-between;
          font-size: 13px; color: var(--mid); margin-bottom: 7px;
        }
        .skill-bar-pct { color: var(--light-txt); }
        .skill-bar-track {
          height: 6px; background: var(--pink-100);
          border-radius: 50px; overflow: hidden;
        }
        .skill-bar-fill {
          height: 100%; width: 0;
          background: linear-gradient(90deg, var(--pink-300), var(--pink-500));
          border-radius: 50px;
          transition: width 0s;
        }
        .skill-bar-fill--go {
          width: var(--fill-w);
          transition: width 1s cubic-bezier(.4,0,.2,1) var(--bar-delay);
        }

        /* Core skills */
        .skills-right { display: flex; flex-direction: column; gap: 20px; }
        .core-skills { display: flex; flex-direction: column; gap: 8px; }
        .core-skill-item {
          display: flex; align-items: center; gap: 12px;
          font-size: 13px; color: var(--mid);
          opacity: 0; transform: translateX(-12px);
          transition: opacity 0.4s ease var(--cs-delay), transform 0.4s ease var(--cs-delay);
        }
        .core-skill-item.core-visible { opacity:1; transform:none; }
        .core-skill-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: var(--pink-100);
          display: flex; align-items: center; justify-content: center;
          color: var(--pink-500); flex-shrink: 0;
        }

        /* Languages */
        .lang-list { display: flex; flex-direction: column; }
        .lang-item {
          display: flex; justify-content: space-between; align-items: center;
          padding: 12px 0; border-bottom: 1px solid var(--border);
        }
        .lang-item:last-child { border-bottom: none; padding-bottom: 0; }
        .lang-name { font-size: 15px; color: var(--charcoal); }

        /* Tools */
        .tools-card { width: 100%; }
        .tools-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .tool-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 500;
          color: var(--charcoal);
          background: var(--pink-50);
          border: 1.5px solid var(--border);
          border-radius: 50px;
          padding: 8px 16px;
          opacity: 0;
          transform: scale(0.9);
          transition: opacity 0.35s ease var(--tp-delay), transform 0.35s ease var(--tp-delay), box-shadow 0.2s, border-color 0.2s;
        }
        .tool-pill-in { opacity:1 !important; transform:none !important; }
        .tool-pill:hover {
          border-color: var(--tp-color);
          box-shadow: 0 4px 16px rgba(0,0,0,0.08);
        }
        .tool-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: var(--tp-color);
          flex-shrink: 0;
        }

        @media (max-width: 860px) {
          .skills-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}

