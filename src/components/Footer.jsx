export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-name">Kaylee Schneider</span>
        <p className="footer-copy">© {year} · Johannesburg, South Africa</p>
        <div className="footer-links">
          <a href="mailto:kayleeschneider41@gmail.com" className="footer-link">Email</a>
          <a href="tel:+27832617228"                  className="footer-link">Phone</a>
          <a href="#hero"                             className="footer-link">Back to top ↑</a>
        </div>
      </div>

      <style>{`
        .footer {
          background: var(--charcoal);
          padding: 48px 0;
        }
        .footer-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }
        .footer-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px;
          font-weight: 400;
          color: var(--pink-200);
          letter-spacing: 0.06em;
        }
        .footer-copy {
          font-size: 13px;
          color: #666;
        }
        .footer-links {
          display: flex;
          gap: 24px;
        }
        .footer-link {
          font-size: 13px;
          color: #888;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-link:hover { color: var(--pink-300); }

        @media (max-width: 600px) {
          .footer-inner { flex-direction: column; text-align: center; }
          .footer-links { flex-wrap: wrap; justify-content: center; }
        }
      `}</style>
    </footer>
  )
}
