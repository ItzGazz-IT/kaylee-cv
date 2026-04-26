import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About',      href: '#about'      },
  { label: 'Experience', href: '#experience'  },
  { label: 'Skills',     href: '#skills'      },
  { label: 'Education',  href: '#education'   },
  { label: 'Contact',    href: '#contact'     },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__shell">
        <div className="navbar__inner">
          <a href="#hero" className="navbar__logo" onClick={close}>
            <span className="navbar__logo-mark">KS</span>
            <span className="navbar__logo-text">Kaylee Schneider</span>
          </a>

          <nav className="navbar__links" aria-label="Site navigation">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} className="navbar__link">
                {l.label}
              </a>
            ))}
            <a
              href="/kaylee-cv/cv-print.html?print=1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--dark navbar__cta"
            >
              Download CV
            </a>
          </nav>

          <button
            className={`navbar__burger${open ? ' open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(o => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      <div className={`navbar__mobile${open ? ' navbar__mobile--open' : ''}`}>
        {navLinks.map(l => (
          <a key={l.href} href={l.href} className="navbar__mobile-link" onClick={close}>
            {l.label}
          </a>
        ))}
        <a
          href="/kaylee-cv/cv-print.html?print=1"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--dark"
          onClick={close}
          style={{ marginTop: '8px' }}
        >
          Download CV
        </a>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 14px;
          left: 0;
          right: 0;
          z-index: 120;
          transition: transform 0.3s ease;
        }

        .navbar__shell {
          width: min(1120px, calc(100% - 24px));
          margin: 0 auto;
          border-radius: 999px;
          position: relative;
          padding: 8px;
          background:
            radial-gradient(circle at 10% 50%, rgba(240,160,171,0.28), transparent 42%),
            radial-gradient(circle at 90% 45%, rgba(217,108,124,0.2), transparent 45%),
            linear-gradient(135deg, rgba(255,255,255,0.82), rgba(255,245,247,0.92));
          border: 1px solid rgba(240,185,194,0.68);
          box-shadow:
            0 18px 45px rgba(169,73,95,0.14),
            inset 0 1px 0 rgba(255,255,255,0.75);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
        }

        .navbar__shell::before,
        .navbar__shell::after {
          content: '';
          position: absolute;
          top: 50%;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: rgba(194,85,104,0.5);
          transform: translateY(-50%);
          box-shadow: 0 0 0 6px rgba(255,255,255,0.4);
        }

        .navbar__shell::before { left: 14px; }
        .navbar__shell::after { right: 14px; }

        .navbar--scrolled {
          transform: translateY(-3px) scale(0.99);
        }

        .navbar--scrolled .navbar__shell {
          box-shadow:
            0 10px 28px rgba(169,73,95,0.17),
            inset 0 1px 0 rgba(255,255,255,0.8);
        }

        .navbar__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 2px 6px 2px 4px;
        }

        .navbar__logo {
          min-width: 188px;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 4px 10px 4px 4px;
          border-radius: 999px;
          background: rgba(255,255,255,0.5);
          font-family: 'Cormorant Garamond', serif;
          color: #1d1b1c;
          text-decoration: none;
        }

        .navbar__logo-mark {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 1px solid rgba(194,85,104,0.35);
          background: linear-gradient(150deg, #fff, #fdeff1);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          letter-spacing: 0.08em;
          color: var(--pink-600);
        }

        .navbar__logo-text {
          font-size: 15px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .navbar__links {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px;
          border-radius: 999px;
          border: 1px solid rgba(240,185,194,0.7);
          background: rgba(255,255,255,0.75);
        }

        .navbar__link {
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 9px 14px;
          border-radius: 999px;
          border: 1px solid transparent;
          color: var(--mid);
          text-decoration: none;
          transition: color 0.2s, transform 0.2s, background 0.2s, border-color 0.2s;
        }

        .navbar__link:hover {
          color: var(--charcoal);
          background: rgba(255,255,255,0.92);
          border-color: rgba(240,185,194,0.9);
          transform: translateY(-1px);
        }

        .navbar__cta {
          padding: 9px 18px;
          font-size: 12px;
          letter-spacing: 0.1em;
        }

        .navbar__burger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }
        .navbar__burger span {
          display: block;
          width: 24px; height: 1.5px;
          background: var(--charcoal);
          transition: transform 0.25s ease, opacity 0.25s ease;
        }
        .navbar__burger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
        .navbar__burger.open span:nth-child(2) { opacity: 0; }
        .navbar__burger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

        .navbar__mobile {
          display: none;
          flex-direction: column;
          gap: 6px;
          width: min(1120px, calc(100% - 24px));
          margin: 8px auto 0;
          padding: 16px;
          border-radius: 24px;
          border: 1px solid rgba(240,185,194,0.75);
          background: rgba(255,248,249,0.97);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          box-shadow: 0 16px 40px rgba(169,73,95,0.14);
        }

        .navbar__mobile--open { display: flex; }

        .navbar__mobile-link {
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--charcoal);
          padding: 12px 14px;
          width: 100%;
          border-radius: 12px;
          border: 1px solid rgba(240,185,194,0.7);
          background: rgba(255,255,255,0.72);
          text-decoration: none;
        }

        @media (max-width: 980px) {
          .navbar { top: 10px; }
          .navbar__logo-text { display: none; }
          .navbar__logo { min-width: auto; }
          .navbar__links { gap: 4px; }
          .navbar__link { padding: 8px 10px; font-size: 11px; }
          .navbar__cta { padding: 8px 12px; }
        }

        @media (max-width: 768px) {
          .navbar__links { display: none; }
          .navbar__burger { display: flex; }
          .navbar__shell {
            width: calc(100% - 20px);
            border-radius: 24px;
          }
          .navbar__shell::before,
          .navbar__shell::after { display: none; }
          .navbar__mobile { width: calc(100% - 20px); }
        }
      `}</style>
    </header>
  )
}
