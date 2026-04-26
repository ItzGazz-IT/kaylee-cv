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
      <div className="navbar__inner container">
        {/* Logo / name */}
        <a href="#hero" className="navbar__logo" onClick={close}>
          KS
        </a>

        {/* Desktop links */}
        <nav className="navbar__links" aria-label="Site navigation">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} className="navbar__link">
              {l.label}
            </a>
          ))}
          <a
            href="/kaylee-cv/kaylee-schneider-cv.pdf"
            download
            className="btn btn--dark navbar__cta"
          >
            Download CV
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          className={`navbar__burger${open ? ' open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile${open ? ' navbar__mobile--open' : ''}`}>
        {navLinks.map(l => (
          <a key={l.href} href={l.href} className="navbar__mobile-link" onClick={close}>
            {l.label}
          </a>
        ))}
        <a
          href="/kaylee-cv/kaylee-schneider-cv.pdf"
          download
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
          top: 0; left: 0; right: 0;
          z-index: 100;
          transition: background 0.3s ease, box-shadow 0.3s ease, padding 0.3s ease;
          padding: 24px 0;
        }
        .navbar--scrolled {
          background: rgba(255,248,249,0.92);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          box-shadow: 0 2px 24px rgba(217,108,124,0.10);
          padding: 14px 0;
        }
        .navbar__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .navbar__logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 500;
          letter-spacing: 0.12em;
          color: var(--charcoal);
          text-decoration: none;
        }
        .navbar__links {
          display: flex;
          align-items: center;
          gap: 36px;
        }
        .navbar__link {
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.08em;
          color: var(--mid);
          text-decoration: none;
          transition: color 0.2s;
        }
        .navbar__link:hover { color: var(--charcoal); }
        .navbar__cta { padding: 10px 24px; font-size: 13px; }

        /* Burger */
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

        /* Mobile menu */
        .navbar__mobile {
          display: none;
          flex-direction: column;
          align-items: flex-start;
          gap: 4px;
          padding: 12px 20px 20px;
          background: rgba(255,248,249,0.97);
          backdrop-filter: blur(14px);
        }
        .navbar__mobile--open { display: flex; }
        .navbar__mobile-link {
          font-size: 16px;
          font-weight: 400;
          letter-spacing: 0.06em;
          color: var(--charcoal);
          padding: 10px 0;
          width: 100%;
          border-bottom: 1px solid var(--border);
          text-decoration: none;
        }

        @media (max-width: 768px) {
          .navbar__links { display: none; }
          .navbar__burger { display: flex; }
        }
      `}</style>
    </header>
  )
}
