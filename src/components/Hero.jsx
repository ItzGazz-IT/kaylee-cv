import { useEffect, useState } from 'react'

const ROLES = [
  'Creditors Clerk',
  'AP Administrator',
  'Finance Professional',
  'Supplier Relations',
]

function Typewriter() {
  const [roleIdx, setRoleIdx]   = useState(0)
  const [text, setText]         = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = ROLES[roleIdx]
    let timeout

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && text === '') {
      setDeleting(false)
      setRoleIdx(i => (i + 1) % ROLES.length)
    } else {
      const speed = deleting ? 50 : 90
      timeout = setTimeout(() => {
        setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1))
      }, speed)
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, roleIdx])

  return (
    <span className="typewriter">
      {text}
      <span className="typewriter-cursor">|</span>
    </span>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      {/* Animated drifting blobs */}
      <div className="hero-blob hero-blob--1" aria-hidden="true" />
      <div className="hero-blob hero-blob--2" aria-hidden="true" />
      <div className="hero-blob hero-blob--3" aria-hidden="true" />

      <div className="container hero-inner">
        {/* Left: text */}
        <div className="hero-text">
          <span className="label hero-label-anim">
            <Typewriter />
          </span>

          <h1 className="hero-name">
            <span className="hero-name-line1">Kaylee</span><br />
            <em className="hero-name-line2">Schneider</em>
          </h1>

          <p className="hero-tagline">
            Detail-oriented finance professional with a passion for accuracy,
            supplier relationships, and efficient financial operations —
            based in Johannesburg, South Africa.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn--dark mag-btn">
              Contact me
            </a>
            <a
              href="/kaylee-cv/kaylee-schneider-cv.pdf"
              download
              className="btn btn--outline mag-btn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download CV
            </a>
          </div>

          <div className="hero-meta">
            <a href="mailto:kayleeschneider41@gmail.com" className="hero-meta-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              kayleeschneider41@gmail.com
            </a>
            <span className="hero-meta-divider">·</span>
            <a href="tel:+27832617228" className="hero-meta-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.37a16 16 0 0 0 7.73 7.73l.87-.87a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 17z"/>
              </svg>
              +27 83 261 7228
            </a>
          </div>
        </div>

        {/* Right: photo */}
        <div className="hero-photo-wrap">
          <div className="hero-photo-frame">
            <img
              src="/kaylee-cv/profile.jpg"
              alt="Kaylee Schneider"
              className="hero-photo"
              onLoad={e  => { e.target.nextSibling.style.display = 'none' }}
              onError={e => { e.target.style.display = 'none' }}
            />
            <div className="hero-photo-fallback">KS</div>
          </div>
          <div className="hero-photo-ring" aria-hidden="true" />
          <div className="hero-float-tag">
            <span>5+</span>
            <small>years experience</small>
          </div>
          {/* Floating skill pills */}
          <div className="hero-pill hero-pill--1">Sage</div>
          <div className="hero-pill hero-pill--2">Excel</div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hero-scroll">
        <div className="hero-scroll-line" />
        <span>scroll</span>
      </div>

      <style>{`
        /* ---- Typewriter ---- */
        .typewriter-cursor {
          animation: blink 0.9s step-end infinite;
          color: var(--pink-500);
          font-weight: 300;
        }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

        /* ---- Hero section ---- */
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 100px 0 60px;
          overflow: hidden;
        }

        /* Blobs — drift animations */
        .hero-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }
        .hero-blob--1 {
          width: 600px; height: 600px;
          background: radial-gradient(circle, #fadadd 0%, #f7bec5 60%, transparent 100%);
          opacity: 0.5;
          top: -150px; right: -120px;
          animation: drift1 12s ease-in-out infinite alternate;
        }
        .hero-blob--2 {
          width: 380px; height: 380px;
          background: radial-gradient(circle, #fdedef 0%, #fadadd 60%, transparent 100%);
          opacity: 0.5;
          bottom: -60px; left: -100px;
          animation: drift2 15s ease-in-out infinite alternate;
        }
        .hero-blob--3 {
          width: 220px; height: 220px;
          background: radial-gradient(circle, #f0a0ab 0%, transparent 70%);
          opacity: 0.25;
          top: 40%; left: 38%;
          animation: drift3 18s ease-in-out infinite alternate;
        }
        @keyframes drift1 {
          from { transform: translate(0,0) scale(1); }
          to   { transform: translate(40px, 30px) scale(1.08); }
        }
        @keyframes drift2 {
          from { transform: translate(0,0) scale(1); }
          to   { transform: translate(-30px, -40px) scale(1.1); }
        }
        @keyframes drift3 {
          from { transform: translate(0,0); }
          to   { transform: translate(60px, -40px); }
        }

        /* ---- Hero layout ---- */
        .hero-inner {
          display: grid;
          grid-template-columns: 1fr 400px;
          align-items: center;
          gap: 64px;
          position: relative;
          z-index: 1;
        }

        /* Text entry animations */
        .hero-label-anim {
          animation: fadeUp 0.7s ease both;
          animation-delay: 0.1s;
        }
        .hero-name { animation: fadeUp 0.7s ease both; animation-delay: 0.25s; }
        .hero-tagline { animation: fadeUp 0.7s ease both; animation-delay: 0.4s; }
        .hero-actions { animation: fadeUp 0.7s ease both; animation-delay: 0.55s; }
        .hero-meta { animation: fadeUp 0.7s ease both; animation-delay: 0.7s; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .hero-name {
          font-size: clamp(3.8rem, 8vw, 6.5rem);
          font-weight: 300;
          line-height: 0.95;
          color: var(--charcoal);
          margin-bottom: 22px;
        }
        .hero-name em {
          font-style: italic;
          font-weight: 400;
          color: var(--pink-500);
        }
        .hero-tagline {
          font-size: 15px;
          line-height: 1.75;
          color: var(--mid);
          max-width: 440px;
          margin-bottom: 32px;
        }
        .hero-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }
        .hero-meta {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }
        .hero-meta-item {
          display: flex; align-items: center; gap: 7px;
          font-size: 13px; color: var(--light-txt);
          text-decoration: none;
          transition: color 0.2s;
        }
        .hero-meta-item:hover { color: var(--pink-500); }
        .hero-meta-divider { color: var(--border); }

        /* Photo */
        .hero-photo-wrap {
          position: relative;
          width: 360px; height: 460px;
          margin-left: auto;
          animation: fadeLeft 0.9s ease both;
          animation-delay: 0.3s;
        }
        @keyframes fadeLeft {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .hero-photo-frame {
          position: relative;
          width: 320px; height: 420px;
          border-radius: 160px 160px 140px 140px;
          overflow: hidden;
          background: var(--pink-200);
          z-index: 2;
        }
        .hero-photo {
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: 34% 15%;
          transition: transform 0.6s ease;
        }
        .hero-photo-frame:hover .hero-photo { transform: scale(1.04); }
        .hero-photo-fallback {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Cormorant Garamond', serif;
          font-size: 80px; font-weight: 300;
          color: var(--pink-400);
        }
        .hero-photo-ring {
          position: absolute;
          top: 16px; left: 16px;
          width: 320px; height: 420px;
          border-radius: 160px 160px 140px 140px;
          border: 1.5px solid var(--pink-300);
          z-index: 1;
          animation: ringPulse 3s ease-in-out infinite;
        }
        @keyframes ringPulse {
          0%,100% { transform: scale(1); opacity: 1; }
          50%      { transform: scale(1.015); opacity: 0.6; }
        }
        .hero-float-tag {
          position: absolute;
          bottom: 24px; right: -14px;
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 12px 18px;
          display: flex; flex-direction: column; align-items: center;
          box-shadow: 0 8px 30px rgba(217,108,124,0.14);
          z-index: 3;
          animation: float 4s ease-in-out infinite;
        }
        .hero-float-tag span {
          font-family: 'Cormorant Garamond', serif;
          font-size: 26px; font-weight: 500;
          color: var(--pink-500); line-height: 1;
        }
        .hero-float-tag small {
          font-size: 10px; color: var(--light-txt);
          letter-spacing: 0.06em; margin-top: 3px;
        }

        /* Floating skill pills */
        .hero-pill {
          position: absolute;
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 50px;
          padding: 7px 16px;
          font-size: 12px;
          font-weight: 500;
          color: var(--pink-600);
          box-shadow: 0 4px 16px rgba(217,108,124,0.12);
          z-index: 3;
          white-space: nowrap;
        }
        .hero-pill--1 {
          top: 40px; right: -20px;
          animation: float 5s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        .hero-pill--2 {
          top: 110px; right: -30px;
          animation: float 6s ease-in-out infinite;
          animation-delay: 1.2s;
        }
        @keyframes float {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-10px); }
        }

        /* Magnetic button effect */
        .mag-btn { transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease; }

        /* Scroll cue */
        .hero-scroll {
          position: absolute;
          bottom: 28px; left: 50%;
          transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 8px;
          z-index: 1;
        }
        .hero-scroll-line {
          width: 1px; height: 48px;
          background: linear-gradient(to bottom, transparent, var(--pink-300));
          animation: scrollPulse 2s ease-in-out infinite;
        }
        .hero-scroll span {
          font-size: 10px; letter-spacing: 0.2em;
          text-transform: uppercase; color: var(--light-txt);
        }
        @keyframes scrollPulse {
          0%,100% { opacity: 0.4; }
          50% { opacity: 1; }
        }

        /* Responsive */
        @media (max-width: 900px) {
          .hero-inner { grid-template-columns: 1fr; gap: 48px; text-align: center; }
          .hero-tagline { margin-left: auto; margin-right: auto; }
          .hero-actions { justify-content: center; }
          .hero-meta { justify-content: center; }
          .hero-photo-wrap { width: 260px; height: 330px; margin: 0 auto; }
          .hero-photo-frame { width: 240px; height: 310px; }
          .hero-photo-ring { width: 240px; height: 310px; }
          .hero-pill { display: none; }
          .hero-scroll { display: none; }
        }
      `}</style>
    </section>
  )
}

