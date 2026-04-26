export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      {/* Decorative blobs */}
      <div className="hero-blob hero-blob--1" aria-hidden="true" />
      <div className="hero-blob hero-blob--2" aria-hidden="true" />

      <div className="container hero-inner">
        {/* Left: text */}
        <div className="hero-text">
          <span className="label">Creditors Clerk · AP Administrator</span>

          <h1 className="hero-name">
            Kaylee<br />
            <em>Schneider</em>
          </h1>

          <p className="hero-tagline">
            Detail-oriented finance professional with a passion for accuracy,
            supplier relationships, and efficient financial operations —
            based in Johannesburg, South Africa.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn--dark">
              Contact me
            </a>
            <a
              href="/kaylee-cv/kaylee-schneider-cv.pdf"
              download
              className="btn btn--outline"
            >
              {/* Download icon */}
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

        {/* Right: photo frame */}
        <div className="hero-photo-wrap">
          <div className="hero-photo-frame">
            <img
              src="/kaylee-cv/profile.jpg"
              alt="Kaylee Schneider"
              className="hero-photo"
              onError={e => { e.target.style.display = 'none' }}
            />
            {/* Fallback initials if no photo */}
            <div className="hero-photo-fallback">KS</div>
          </div>
          {/* Decorative ring */}
          <div className="hero-photo-ring" aria-hidden="true" />
          {/* Floating tag */}
          <div className="hero-float-tag">
            <span>5+</span>
            <small>years experience</small>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hero-scroll">
        <div className="hero-scroll-line" />
        <span>scroll</span>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 120px 0 80px;
          overflow: hidden;
        }

        /* Blobs */
        .hero-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.45;
          pointer-events: none;
        }
        .hero-blob--1 {
          width: 560px; height: 560px;
          background: radial-gradient(circle, #fadadd, #f7bec5);
          top: -120px; right: -100px;
        }
        .hero-blob--2 {
          width: 360px; height: 360px;
          background: radial-gradient(circle, #fdedef, #fadadd);
          bottom: 0; left: -80px;
        }

        /* Inner layout */
        .hero-inner {
          display: grid;
          grid-template-columns: 1fr 420px;
          align-items: center;
          gap: 80px;
          position: relative;
          z-index: 1;
        }

        /* Text */
        .hero-name {
          font-size: clamp(3.8rem, 8vw, 7rem);
          font-weight: 300;
          line-height: 0.95;
          color: var(--charcoal);
          margin-bottom: 28px;
        }
        .hero-name em {
          font-style: italic;
          font-weight: 400;
          color: var(--pink-500);
        }
        .hero-tagline {
          font-size: 16px;
          line-height: 1.75;
          color: var(--mid);
          max-width: 460px;
          margin-bottom: 40px;
        }
        .hero-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 36px;
        }
        .hero-meta {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }
        .hero-meta-item {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 13px;
          color: var(--light-txt);
          text-decoration: none;
          transition: color 0.2s;
        }
        .hero-meta-item:hover { color: var(--pink-500); }
        .hero-meta-divider { color: var(--border); }

        /* Photo */
        .hero-photo-wrap {
          position: relative;
          width: 380px;
          height: 480px;
          margin-left: auto;
        }
        .hero-photo-frame {
          position: relative;
          width: 340px;
          height: 440px;
          border-radius: 180px 180px 160px 160px;
          overflow: hidden;
          background: var(--pink-200);
          z-index: 2;
        }
        .hero-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
        }
        .hero-photo-fallback {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Cormorant Garamond', serif;
          font-size: 80px;
          font-weight: 300;
          color: var(--pink-400);
        }
        .hero-photo-ring {
          position: absolute;
          top: 20px; left: 20px;
          width: 340px; height: 440px;
          border-radius: 180px 180px 160px 160px;
          border: 1.5px solid var(--pink-300);
          z-index: 1;
        }
        .hero-float-tag {
          position: absolute;
          bottom: 30px; right: -10px;
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 14px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 8px 30px rgba(217,108,124,0.12);
          z-index: 3;
        }
        .hero-float-tag span {
          font-family: 'Cormorant Garamond', serif;
          font-size: 28px;
          font-weight: 500;
          color: var(--pink-500);
          line-height: 1;
        }
        .hero-float-tag small {
          font-size: 11px;
          color: var(--light-txt);
          letter-spacing: 0.06em;
          margin-top: 3px;
        }

        /* Scroll cue */
        .hero-scroll {
          position: absolute;
          bottom: 32px; left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          z-index: 1;
        }
        .hero-scroll-line {
          width: 1px;
          height: 48px;
          background: linear-gradient(to bottom, transparent, var(--pink-300));
          animation: scrollPulse 2s ease-in-out infinite;
        }
        .hero-scroll span {
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--light-txt);
        }
        @keyframes scrollPulse {
          0%,100% { opacity: 0.4; }
          50% { opacity: 1; }
        }

        /* Responsive */
        @media (max-width: 900px) {
          .hero-inner {
            grid-template-columns: 1fr;
            gap: 60px;
            text-align: center;
          }
          .hero-tagline { margin-left: auto; margin-right: auto; }
          .hero-actions { justify-content: center; }
          .hero-meta { justify-content: center; }
          .hero-photo-wrap {
            width: 260px; height: 330px;
            margin: 0 auto;
          }
          .hero-photo-frame { width: 240px; height: 310px; }
          .hero-photo-ring { width: 240px; height: 310px; }
          .hero-float-tag { right: -20px; }
          .hero-scroll { display: none; }
        }
      `}</style>
    </section>
  )
}
