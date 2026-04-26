import { useScrollReveal } from '../hooks/useAnimations'

const hobbies = [
  {
    id: 'padel',
    title: 'Padel',
    desc: 'On the court whenever I can — padel is my favourite way to stay active, competitive and social all at once.',
    accent: '#d96c7c',
    bg: 'linear-gradient(135deg, #fff0f3 0%, #fde0e5 100%)',
    icon: (
      <svg width="38" height="38" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Padel racket */}
        <rect x="18" y="8" width="28" height="30" rx="14" fill="currentColor" opacity="0.18"/>
        <rect x="18" y="8" width="28" height="30" rx="14" stroke="currentColor" strokeWidth="2.5" fill="none"/>
        {/* strings */}
        <line x1="26" y1="9" x2="26" y2="37" stroke="currentColor" strokeWidth="1.2" opacity="0.5"/>
        <line x1="32" y1="8" x2="32" y2="38" stroke="currentColor" strokeWidth="1.2" opacity="0.5"/>
        <line x1="38" y1="9" x2="38" y2="37" stroke="currentColor" strokeWidth="1.2" opacity="0.5"/>
        <line x1="19" y1="18" x2="45" y2="18" stroke="currentColor" strokeWidth="1.2" opacity="0.5"/>
        <line x1="18" y1="24" x2="46" y2="24" stroke="currentColor" strokeWidth="1.2" opacity="0.5"/>
        <line x1="19" y1="30" x2="45" y2="30" stroke="currentColor" strokeWidth="1.2" opacity="0.5"/>
        {/* handle */}
        <rect x="29" y="37" width="6" height="18" rx="3" fill="currentColor" opacity="0.7"/>
        {/* ball */}
        <circle cx="50" cy="14" r="6" fill="currentColor" opacity="0.3"/>
        <circle cx="50" cy="14" r="6" stroke="currentColor" strokeWidth="1.8" fill="none"/>
      </svg>
    ),
  },
  {
    id: 'theatre',
    title: 'Music & Theatre',
    desc: 'From live concerts to stage productions — I love the energy of a great performance and the stories only theatre can tell.',
    accent: '#7c5cbf',
    bg: 'linear-gradient(135deg, #f5f0ff 0%, #ebe0fa 100%)',
    icon: (
      <svg width="38" height="38" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Comedy + tragedy masks simplified */}
        <circle cx="22" cy="26" r="13" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="2.2"/>
        <circle cx="42" cy="28" r="13" fill="currentColor" opacity="0.08" stroke="currentColor" strokeWidth="2.2"/>
        {/* happy eyes */}
        <circle cx="18" cy="23" r="1.8" fill="currentColor"/>
        <circle cx="26" cy="23" r="1.8" fill="currentColor"/>
        {/* happy mouth */}
        <path d="M17 29 Q22 34 27 29" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
        {/* sad eyes */}
        <circle cx="38" cy="25" r="1.8" fill="currentColor"/>
        <circle cx="46" cy="25" r="1.8" fill="currentColor"/>
        {/* sad mouth */}
        <path d="M37 33 Q42 28 47 33" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
        {/* music note */}
        <path d="M52 10 L52 20 M52 20 Q54 22 54 24 Q54 26 52 26 Q50 26 50 24 Q50 22 52 20" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'hiking',
    title: 'Hiking',
    desc: 'Nothing resets the mind like a good trail. I love getting outdoors, exploring new routes and taking in the views.',
    accent: '#2e8b57',
    bg: 'linear-gradient(135deg, #f0faf4 0%, #d4f0e0 100%)',
    icon: (
      <svg width="38" height="38" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* mountain */}
        <path d="M4 52 L20 24 L36 52Z" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round"/>
        <path d="M24 52 L40 18 L56 52Z" fill="currentColor" opacity="0.25" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round"/>
        {/* snow cap */}
        <path d="M40 18 L34 30 L46 30Z" fill="currentColor" opacity="0.45" stroke="none"/>
        {/* sun */}
        <circle cx="52" cy="14" r="5" fill="currentColor" opacity="0.35" stroke="currentColor" strokeWidth="1.8"/>
        <line x1="52" y1="6" x2="52" y2="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="52" y1="22" x2="52" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="44" y1="14" x2="42" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="60" y1="14" x2="62" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'social',
    title: 'Social Butterfly',
    desc: 'People are my energy. I thrive in social settings, love meeting new faces and building genuine connections wherever I go.',
    accent: '#e07b3a',
    bg: 'linear-gradient(135deg, #fff8f0 0%, #fde8d0 100%)',
    icon: (
      <svg width="38" height="38" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* three people */}
        <circle cx="32" cy="16" r="8" fill="currentColor" opacity="0.25" stroke="currentColor" strokeWidth="2.2"/>
        <path d="M16 52 Q16 38 32 38 Q48 38 48 52" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
        <circle cx="12" cy="24" r="6" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M2 50 Q2 40 12 40" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
        <circle cx="52" cy="24" r="6" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M62 50 Q62 40 52 40" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
        {/* sparkle */}
        <path d="M44 8 L45 12 L49 13 L45 14 L44 18 L43 14 L39 13 L43 12Z" fill="currentColor" opacity="0.6"/>
      </svg>
    ),
  },
]

export default function Hobbies() {
  const [ref, visible] = useScrollReveal({ threshold: 0.1 })

  return (
    <section id="hobbies" ref={ref} className="section hobbies-section">
      <div className="container">

        <div className={`hb-head${visible ? ' hb-in' : ''}`}>
          <span className="label">Beyond the desk</span>
          <h2 className="section-title">Interests &amp; Hobbies</h2>
        </div>

        <div className="hb-grid">
          {hobbies.map((h, i) => (
            <div
              key={h.id}
              className={`hb-card${visible ? ' hb-card-in' : ''}`}
              style={{ '--hb-bg': h.bg, '--hb-accent': h.accent, '--i': i }}
            >
              <div className="hb-icon" style={{ color: h.accent }}>
                {h.icon}
              </div>
              <div className="hb-body">
                <h3 className="hb-title" style={{ color: h.accent }}>{h.title}</h3>
                <p className="hb-desc">{h.desc}</p>
              </div>
              <div className="hb-glow" />
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .hobbies-section { background: var(--pink-50); }

        .hb-head {
          opacity: 0; transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .hb-in { opacity: 1 !important; transform: none !important; }

        .hb-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .hb-card {
          position: relative;
          overflow: hidden;
          border-radius: 24px;
          padding: 28px 22px 24px;
          background: var(--hb-bg);
          border: 1px solid rgba(0,0,0,0.06);
          display: flex;
          flex-direction: column;
          gap: 16px;
          opacity: 0;
          transform: translateY(36px);
          transition:
            opacity 0.55s ease calc(var(--i) * 0.1s),
            transform 0.55s ease calc(var(--i) * 0.1s),
            box-shadow 0.25s ease,
            scale 0.25s ease;
        }
        .hb-card-in { opacity: 1 !important; transform: none !important; }
        .hb-card:hover {
          box-shadow: 0 20px 50px rgba(0,0,0,0.09);
          scale: 1.03;
        }

        .hb-glow {
          position: absolute; inset: 0; border-radius: 24px;
          background: radial-gradient(circle at 90% 10%, var(--hb-accent) 0%, transparent 55%);
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
          mix-blend-mode: multiply;
        }
        .hb-card:hover .hb-glow { opacity: 0.12; }

        .hb-icon {
          width: 68px; height: 68px;
          border-radius: 20px;
          background: rgba(255,255,255,0.75);
          border: 1.5px solid rgba(0,0,0,0.06);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        .hb-body { flex: 1; }
        .hb-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.25rem;
          font-weight: 500;
          margin-bottom: 8px;
          letter-spacing: 0.01em;
        }
        .hb-desc {
          font-size: 13px;
          color: var(--mid);
          line-height: 1.7;
        }

        @media (max-width: 1000px) { .hb-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px)  { .hb-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
