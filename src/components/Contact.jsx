import { useState } from 'react'
import { useScrollReveal } from '../hooks/useAnimations'

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)
  const [ref, visible]      = useScrollReveal({ threshold: 0.1 })

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
    const body    = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:kayleeschneider41@gmail.com?subject=${subject}&body=${body}`
    setStatus('ok')
  }

  return (
    <section id="contact" ref={ref} className="section section--alt">
      <div className="container">
        <div className={`ct-title${visible ? ' ct-revealed' : ''}`}>
          <span className="label">Get in touch</span>
          <h2 className="section-title">Contact Me</h2>
        </div>

        <div className="contact-grid">
          {/* Info panel */}
          <div className={`contact-info${visible ? ' ct-revealed ct-delay1' : ''}`}>
            <p className="contact-intro">
              Open to new opportunities and happy to connect. Reach out via
              the form or directly through the details below.
            </p>

            <div className="contact-items">
              {[
                {
                  href: 'mailto:kayleeschneider41@gmail.com',
                  label: 'Email', value: 'kayleeschneider41@gmail.com',
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                },
                {
                  href: 'tel:+27832617228',
                  label: 'Phone', value: '+27 83 261 7228',
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.37a16 16 0 0 0 7.73 7.73l.87-.87a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 17z"/></svg>
                },
                {
                  href: null,
                  label: 'Location', value: 'Johannesburg, South Africa',
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                },
              ].map(item => (
                item.href
                  ? <a key={item.label} href={item.href} className="contact-item">
                      <div className="contact-item-icon">{item.icon}</div>
                      <div><p className="contact-item-label">{item.label}</p><p className="contact-item-value">{item.value}</p></div>
                    </a>
                  : <div key={item.label} className="contact-item contact-item--static">
                      <div className="contact-item-icon">{item.icon}</div>
                      <div><p className="contact-item-label">{item.label}</p><p className="contact-item-value">{item.value}</p></div>
                    </div>
              ))}
            </div>

            <a href="/kaylee-cv/kaylee-schneider-cv.pdf" download className="btn btn--pink contact-download">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Full CV (PDF)
            </a>
          </div>

          {/* Form */}
          <div className={`contact-form-wrap${visible ? ' ct-revealed ct-delay2' : ''}`}>
            {status === 'ok' ? (
              <div className="contact-success">
                <div className="contact-success-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
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
                    <input id="name" name="name" type="text" placeholder="Jane Smith" required value={form.name} onChange={handleChange} />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Email address</label>
                    <input id="email" name="email" type="email" placeholder="jane@example.com" required value={form.email} onChange={handleChange} />
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" placeholder="Hi Kaylee, I'd love to discuss an opportunity…" required value={form.message} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn--dark contact-submit">
                  Send message
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .ct-title {
          opacity: 0; transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .ct-revealed { opacity: 1 !important; transform: none !important; }
        .ct-delay1 { transition-delay: 0.15s !important; }
        .ct-delay2 { transition-delay: 0.28s !important; }

        .contact-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 48px; align-items: start;
        }
        .contact-info, .contact-form-wrap {
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .contact-intro { font-size: 15px; color: var(--mid); line-height: 1.75; margin-bottom: 28px; }
        .contact-items { display: flex; flex-direction: column; gap: 4px; margin-bottom: 28px; }

        .contact-item {
          display: flex; align-items: center; gap: 14px;
          padding: 16px; background: var(--white);
          border: 1px solid var(--border); border-radius: 14px;
          text-decoration: none; color: inherit;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .contact-item:not(.contact-item--static):hover {
          box-shadow: 0 6px 24px rgba(217,108,124,0.14);
          transform: translateY(-2px);
        }
        .contact-item-icon {
          width: 42px; height: 42px; border-radius: 50%;
          background: var(--pink-100); color: var(--pink-500);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .contact-item-label { font-size: 11px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--light-txt); margin-bottom: 2px; }
        .contact-item-value { font-size: 13px; color: var(--charcoal); }
        .contact-download { width: 100%; justify-content: center; }

        .contact-form-wrap {
          background: var(--white); border: 1px solid var(--border);
          border-radius: 24px; padding: 36px;
        }
        .contact-form { display: flex; flex-direction: column; gap: 18px; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .form-field { display: flex; flex-direction: column; gap: 7px; }
        .form-field label { font-size: 13px; font-weight: 500; color: var(--charcoal); }
        .form-field input, .form-field textarea {
          font-family: 'DM Sans', sans-serif; font-size: 14px;
          color: var(--charcoal); background: var(--pink-50);
          border: 1.5px solid var(--border); border-radius: 12px;
          padding: 12px 14px; outline: none; resize: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .form-field input::placeholder, .form-field textarea::placeholder { color: var(--light-txt); }
        .form-field input:focus, .form-field textarea:focus {
          border-color: var(--pink-400);
          box-shadow: 0 0 0 4px rgba(217,108,124,0.1);
        }
        .contact-submit { width: 100%; justify-content: center; }

        .contact-success {
          display: flex; flex-direction: column; align-items: center;
          text-align: center; gap: 14px; padding: 20px 0;
        }
        .contact-success-icon {
          width: 68px; height: 68px; border-radius: 50%;
          background: var(--pink-100); color: var(--pink-500);
          display: flex; align-items: center; justify-content: center;
        }
        .contact-success h3 { font-size: 1.5rem; color: var(--charcoal); }
        .contact-success p { font-size: 14px; color: var(--mid); max-width: 260px; }

        @media (max-width: 860px) { .contact-grid { grid-template-columns: 1fr; } }
        @media (max-width: 560px) {
          .form-row { grid-template-columns: 1fr; }
          .contact-form-wrap { padding: 24px 18px; }
        }
      `}</style>
    </section>
  )
}

