import { useState } from 'react'

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // 'sending' | 'ok' | 'err'

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    // Uses mailto: as a safe, no-server fallback
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
    const body    = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )
    window.location.href = `mailto:kayleeschneider41@gmail.com?subject=${subject}&body=${body}`
    setStatus('ok')
  }

  return (
    <section id="contact" className="section section--alt">
      <div className="container">
        <span className="label">Get in touch</span>
        <h2 className="section-title">Contact Me</h2>

        <div className="contact-grid">
          {/* Info */}
          <div className="contact-info">
            <p className="contact-intro">
              Open to new opportunities and happy to connect. Reach out via
              the form or directly through the details below.
            </p>

            <div className="contact-items">
              <a href="mailto:kayleeschneider41@gmail.com" className="contact-item">
                <div className="contact-item-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
                <div>
                  <p className="contact-item-label">Email</p>
                  <p className="contact-item-value">kayleeschneider41@gmail.com</p>
                </div>
              </a>

              <a href="tel:+27832617228" className="contact-item">
                <div className="contact-item-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.37a16 16 0 0 0 7.73 7.73l.87-.87a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 17z"/>
                  </svg>
                </div>
                <div>
                  <p className="contact-item-label">Phone</p>
                  <p className="contact-item-value">+27 83 261 7228</p>
                </div>
              </a>

              <div className="contact-item contact-item--static">
                <div className="contact-item-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <p className="contact-item-label">Location</p>
                  <p className="contact-item-value">Johannesburg, South Africa</p>
                </div>
              </div>
            </div>

            <a
              href="/kaylee-cv/kaylee-schneider-cv.pdf"
              download
              className="btn btn--pink contact-download"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Full CV (PDF)
            </a>
          </div>

          {/* Form */}
          <div className="contact-form-wrap">
            {status === 'ok' ? (
              <div className="contact-success">
                <div className="contact-success-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <h3>Message sent!</h3>
                <p>Your email client should have opened. I'll get back to you shortly.</p>
                <button className="btn btn--pink" onClick={() => setStatus(null)}>Send another</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name">Your name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Jane Smith"
                      required
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Email address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="jane@example.com"
                      required
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Hi Kaylee, I'd love to discuss an opportunity…"
                    required
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn btn--dark contact-submit">
                  Send message
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }
        .contact-intro {
          font-size: 16px;
          color: var(--mid);
          line-height: 1.75;
          margin-bottom: 36px;
        }
        .contact-items {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-bottom: 36px;
        }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 18px;
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 16px;
          text-decoration: none;
          color: inherit;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .contact-item:not(.contact-item--static):hover {
          box-shadow: 0 6px 24px rgba(217,108,124,0.12);
          transform: translateY(-2px);
        }
        .contact-item-icon {
          width: 44px; height: 44px;
          border-radius: 50%;
          background: var(--pink-100);
          color: var(--pink-500);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .contact-item-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--light-txt);
          margin-bottom: 3px;
        }
        .contact-item-value {
          font-size: 14px;
          color: var(--charcoal);
        }
        .contact-download {
          width: 100%;
          justify-content: center;
        }

        /* Form */
        .contact-form-wrap {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 24px;
          padding: 40px;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .form-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .form-field label {
          font-size: 13px;
          font-weight: 500;
          color: var(--charcoal);
          letter-spacing: 0.04em;
        }
        .form-field input,
        .form-field textarea {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          color: var(--charcoal);
          background: var(--pink-50);
          border: 1.5px solid var(--border);
          border-radius: 12px;
          padding: 14px 16px;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          resize: none;
        }
        .form-field input::placeholder,
        .form-field textarea::placeholder { color: var(--light-txt); }
        .form-field input:focus,
        .form-field textarea:focus {
          border-color: var(--pink-400);
          box-shadow: 0 0 0 4px rgba(217,108,124,0.12);
        }
        .contact-submit { width: 100%; justify-content: center; }

        /* Success */
        .contact-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 16px;
          padding: 20px 0;
        }
        .contact-success-icon {
          width: 72px; height: 72px;
          border-radius: 50%;
          background: var(--pink-100);
          color: var(--pink-500);
          display: flex; align-items: center; justify-content: center;
        }
        .contact-success h3 {
          font-size: 1.6rem;
          color: var(--charcoal);
        }
        .contact-success p {
          font-size: 15px;
          color: var(--mid);
          max-width: 280px;
        }

        @media (max-width: 860px) {
          .contact-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 560px) {
          .form-row { grid-template-columns: 1fr; }
          .contact-form-wrap { padding: 28px 20px; }
        }
      `}</style>
    </section>
  )
}
