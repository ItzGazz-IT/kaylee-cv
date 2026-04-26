import { useState } from 'react'
import { useScrollReveal } from '../hooks/useAnimations'

const actions = [
  {
    id: 'email',
    href: 'mailto:kayleeschneider41@gmail.com',
    label: 'Send an email',
    value: 'kayleeschneider41@gmail.com',
    cta: 'Open email app →',
    bg: 'linear-gradient(135deg, #fff0f3 0%, #fde8ec 100%)',
    accent: '#d96c7c',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="3"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
  {
    id: 'phone',
    href: 'tel:+27832617228',
    label: 'Give me a call',
    value: '+27 83 261 7228',
    cta: 'Call now →',
    bg: 'linear-gradient(135deg, #fdf4f7 0%, #f9e4eb 100%)',
    accent: '#c25568',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.37a16 16 0 0 0 7.73 7.73l.87-.87a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 17z"/>
      </svg>
    ),
  },
  {
    id: 'whatsapp',
    href: 'https://wa.me/27832617228?text=Hi%20Kaylee%2C%20I%20found%20your%20CV%20and%20would%20love%20to%20connect!',
    label: 'WhatsApp me',
    value: '+27 83 261 7228',
    cta: 'Open WhatsApp →',
    bg: 'linear-gradient(135deg, #f0fbf5 0%, #d4f5e2 100%)',
    accent: '#25a244',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" fill="#25a244"
          d="M16 2C8.268 2 2 8.268 2 16c0 2.426.638 4.702 1.756 6.676L2 30l7.53-1.724A13.938 13.938 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2Z"
        />
        <path fill="#fff"
          d="M22.003 19.274c-.31-.155-1.831-.903-2.115-1.006-.283-.103-.49-.155-.696.155-.207.31-.8 1.006-.98 1.213-.18.207-.36.232-.67.077-.31-.155-1.308-.482-2.491-1.538-.92-.822-1.542-1.836-1.723-2.146-.18-.31-.019-.477.136-.631.14-.138.31-.36.464-.54.155-.18.207-.31.31-.516.103-.207.052-.387-.026-.542-.077-.155-.696-1.677-.953-2.297-.252-.602-.507-.52-.696-.53-.18-.009-.387-.011-.593-.011-.207 0-.542.077-.826.387s-1.084 1.059-1.084 2.582c0 1.523 1.11 2.996 1.264 3.203.155.207 2.185 3.337 5.295 4.681.74.319 1.318.51 1.768.652.743.236 1.42.203 1.954.123.596-.089 1.831-.748 2.089-1.47.258-.723.258-1.343.18-1.473-.077-.129-.283-.207-.593-.362Z"
        />
      </svg>
    ),
  },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [ref, visible]      = useScrollReveal({ threshold: 0.1 })

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('kayleeschneider41@gmail.com')
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {
      /* clipboard not available */
    }
  }

  return (
    <section id="contact" ref={ref} className="section section--alt ct-section">
      <div className="container">

        <div className={`ct-head${visible ? ' ct-in' : ''}`}>
          <span className="label">Let&rsquo;s connect</span>
          <h2 className="ct-title-big">Ready to work<br/><em>together?</em></h2>
          <p className="ct-sub">One click is all it takes. No forms, no hassle.</p>
        </div>

        <div className="ct-cards">
          {actions.map((a, i) => (
            <a
              key={a.id}
              href={a.href}
              target={a.id === 'whatsapp' ? '_blank' : undefined}
              rel={a.id === 'whatsapp' ? 'noopener noreferrer' : undefined}
              className={`ct-card${visible ? ' ct-card-in' : ''}`}
              style={{ '--bg': a.bg, '--accent': a.accent, '--i': i }}
            >
              <div className="ct-card-icon" style={{ color: a.accent, border: `1.5px solid ${a.accent}33` }}>
                {a.icon}
              </div>
              <div className="ct-card-body">
                <p className="ct-card-label">{a.label}</p>
                <p className="ct-card-value">{a.value}</p>
              </div>
              <span className="ct-card-cta" style={{ color: a.accent }}>{a.cta}</span>
              <div className="ct-card-glow" />
            </a>
          ))}
        </div>

        <div className={`ct-copy${visible ? ' ct-in ct-in--d3' : ''}`}>
          <span className="ct-copy-text">kayleeschneider41@gmail.com</span>
          <button className={`ct-copy-btn${copied ? ' ct-copy-btn--done' : ''}`} onClick={copyEmail}>
            {copied
              ? (<><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Copied!</>)
              : (<><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy email</>)
            }
          </button>
        </div>

        <div className={`ct-download${visible ? ' ct-in ct-in--d4' : ''}`}>
          <a href="/kaylee-cv/cv-print.html?print=1" target="_blank" rel="noopener noreferrer" className="ct-dl-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download Full CV (PDF)
          </a>
          <p className="ct-dl-note">Johannesburg, South Africa &middot; Available immediately</p>
        </div>

      </div>

      <style>{`
        .ct-head, .ct-copy, .ct-download {
          opacity: 0; transform: translateY(22px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }
        .ct-in { opacity: 1 !important; transform: none !important; }
        .ct-in--d3 { transition-delay: 0.38s !important; }
        .ct-in--d4 { transition-delay: 0.52s !important; }

        .ct-section { overflow: hidden; }
        .ct-head { text-align: center; margin-bottom: 52px; }
        .ct-title-big {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.8rem, 6vw, 5rem);
          font-weight: 400; line-height: 1.05;
          color: var(--charcoal); margin-bottom: 14px;
        }
        .ct-title-big em { color: var(--pink-500); font-style: italic; }
        .ct-sub { font-size: 15px; color: var(--light-txt); letter-spacing: 0.03em; }

        .ct-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-bottom: 20px;
        }
        .ct-card {
          position: relative;
          display: flex; flex-direction: column;
          gap: 14px; overflow: hidden;
          padding: 28px 24px 24px;
          border-radius: 24px;
          background: var(--bg);
          border: 1px solid rgba(0,0,0,0.06);
          text-decoration: none; color: inherit;
          opacity: 0; transform: translateY(32px);
          transition:
            opacity 0.55s ease calc(var(--i) * 0.1s),
            transform 0.55s ease calc(var(--i) * 0.1s),
            box-shadow 0.25s ease,
            scale 0.25s ease;
        }
        .ct-card-in { opacity: 1 !important; transform: none !important; }
        .ct-card:hover {
          box-shadow: 0 20px 50px rgba(0,0,0,0.10);
          scale: 1.025;
        }
        .ct-card-glow {
          position: absolute; inset: 0; border-radius: 24px;
          background: radial-gradient(circle at 80% 20%, var(--accent, #d96c7c) 0%, transparent 60%);
          opacity: 0; transition: opacity 0.3s;
          pointer-events: none; mix-blend-mode: multiply;
        }
        .ct-card:hover .ct-card-glow { opacity: 0.12; }

        .ct-card-icon {
          width: 62px; height: 62px; border-radius: 18px;
          background: rgba(255,255,255,0.75);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .ct-card-body { flex: 1; }
        .ct-card-label {
          font-size: 13px; font-weight: 600;
          letter-spacing: 0.06em; text-transform: uppercase;
          color: var(--charcoal); margin-bottom: 4px;
        }
        .ct-card-value { font-size: 14px; color: var(--mid); }
        .ct-card-cta {
          font-size: 13px; font-weight: 600; letter-spacing: 0.04em;
          transition: letter-spacing 0.25s;
        }
        .ct-card:hover .ct-card-cta { letter-spacing: 0.1em; }

        .ct-copy {
          display: flex; align-items: center; justify-content: center;
          gap: 14px; flex-wrap: wrap;
          background: var(--white); border: 1px solid var(--border);
          border-radius: 50px; padding: 14px 24px; margin-bottom: 20px;
        }
        .ct-copy-text { font-size: 14px; color: var(--mid); letter-spacing: 0.02em; }
        .ct-copy-btn {
          display: inline-flex; align-items: center; gap: 7px;
          font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 600;
          letter-spacing: 0.06em; cursor: pointer;
          background: var(--pink-100); color: var(--pink-600);
          border: 1.5px solid var(--pink-300); border-radius: 50px;
          padding: 8px 18px;
          transition: background 0.2s, transform 0.2s;
        }
        .ct-copy-btn:hover { background: var(--pink-200); transform: scale(1.04); }
        .ct-copy-btn--done { background: #d4f5e2 !important; color: #1a7a3c !important; border-color: #a8e6c0 !important; }

        .ct-download { text-align: center; }
        .ct-dl-btn {
          display: inline-flex; align-items: center; gap: 10px;
          font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 500;
          letter-spacing: 0.06em; padding: 16px 36px;
          border-radius: 50px; background: var(--charcoal); color: var(--white);
          text-decoration: none; margin-bottom: 14px;
          transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
        }
        .ct-dl-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 36px rgba(0,0,0,0.22);
          background: #2d2d2d;
        }
        .ct-dl-note { font-size: 13px; color: var(--light-txt); letter-spacing: 0.04em; }

        @media (max-width: 860px) { .ct-cards { grid-template-columns: 1fr; } }
        @media (max-width: 560px) {
          .ct-copy { flex-direction: column; border-radius: 20px; text-align: center; }
        }
      `}</style>
    </section>
  )
}

