const jobs = [
  {
    title:    'Finance Division',
    company:  'TRSS 24 Hour Reaction',
    location: 'Randburg',
    period:   'Oct 2025 – Present',
    current:  true,
    bullets: [
      'Manage weekly vendor and supplier payment runs in line with approved payment terms and cash flow planning',
      'Process EFT payments accurately and ensure timely execution to avoid penalties and delays',
      'Maintain payment schedules and track remittances to ensure suppliers are updated',
      'Support improvements in internal financial processes to increase efficiency and accuracy',
    ],
  },
  {
    title:    'Finance Division – Emerging Markets',
    company:  'Wood-Mizer Africa',
    location: 'Lanseria',
    period:   'Aug 2023 – Jul 2025',
    current:  false,
    bullets: [
      'Processed local and international supplier payments, including EFTs and wire transfers',
      'Ensured accurate and timely payments while adhering to company policies and cash flow requirements',
      'Maintained detailed payment schedules and communicated remittance information to vendors',
      'Assisted in streamlining financial processes to improve workflow and reduce errors',
    ],
  },
  {
    title:    'Reception & Office Administration',
    company:  'Wood-Mizer Africa',
    location: 'Johannesburg',
    period:   'Jun 2022 – Jul 2025',
    current:  false,
    bullets: [
      'Managed front desk operations, acting as the first point of contact for clients and visitors',
      'Handled a high-volume multi-line phone system, directing calls and managing inquiries professionally',
      'Coordinated travel arrangements including flights, accommodation, and transport for staff and executives',
      'Monitored and managed office supplies, ensuring stock availability and cost control',
      'Maintained office organisation, meeting room setup, and overall workplace efficiency',
    ],
  },
  {
    title:    'Sales & Admin Assistant',
    company:  'Cat Box Pet Hyper',
    location: 'Johannesburg & Pretoria',
    period:   'Jun 2021 – May 2022',
    current:  false,
    bullets: [
      'Provided customer service and sales support, assisting clients and handling queries professionally',
      'Processed transactions using POS systems, ensuring accuracy in cash and card payments',
      'Managed stock control, including stock counts, merchandising, and receiving deliveries',
      'Supported administrative functions such as reporting, scheduling, and daily operations',
      'Assisted multiple branches during peak periods, ensuring smooth store operations',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <span className="label">Career</span>
        <h2 className="section-title">Professional Experience</h2>

        <div className="exp-list">
          {jobs.map((job, i) => (
            <div key={i} className="exp-item">
              {/* Timeline dot */}
              <div className="exp-dot-wrap">
                <div className={`exp-dot${job.current ? ' exp-dot--active' : ''}`} />
                {i < jobs.length - 1 && <div className="exp-line" />}
              </div>

              {/* Content */}
              <div className="exp-content">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-title">{job.title}</h3>
                    <p className="exp-company">
                      {job.company}
                      <span className="exp-location"> · {job.location}</span>
                    </p>
                  </div>
                  <div className="exp-period-wrap">
                    <span className="exp-period">{job.period}</span>
                    {job.current && <span className="tag" style={{ fontSize:'11px' }}>Current</span>}
                  </div>
                </div>

                <ul className="exp-bullets">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="exp-bullet">{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .exp-list {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .exp-item {
          display: grid;
          grid-template-columns: 40px 1fr;
          gap: 0 32px;
        }

        /* Timeline */
        .exp-dot-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 4px;
        }
        .exp-dot {
          width: 14px; height: 14px;
          border-radius: 50%;
          background: var(--pink-200);
          border: 2px solid var(--pink-400);
          flex-shrink: 0;
          transition: background 0.2s;
        }
        .exp-dot--active {
          background: var(--pink-500);
          border-color: var(--pink-500);
          box-shadow: 0 0 0 4px var(--pink-200);
        }
        .exp-line {
          width: 1px;
          flex: 1;
          min-height: 48px;
          background: var(--border);
          margin: 8px 0;
        }

        /* Content */
        .exp-content {
          padding-bottom: 56px;
        }
        .exp-item:last-child .exp-content { padding-bottom: 0; }

        .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }
        .exp-title {
          font-size: 1.4rem;
          font-weight: 500;
          color: var(--charcoal);
          margin-bottom: 4px;
        }
        .exp-company {
          font-size: 14px;
          color: var(--mid);
          font-weight: 400;
        }
        .exp-location { color: var(--light-txt); }

        .exp-period-wrap {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 6px;
          flex-shrink: 0;
        }
        .exp-period {
          font-size: 13px;
          color: var(--light-txt);
          letter-spacing: 0.04em;
          white-space: nowrap;
        }

        .exp-bullets {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .exp-bullet {
          font-size: 15px;
          color: var(--mid);
          line-height: 1.7;
          padding-left: 20px;
          position: relative;
        }
        .exp-bullet::before {
          content: '';
          position: absolute;
          left: 0; top: 11px;
          width: 6px; height: 1.5px;
          background: var(--pink-400);
        }

        @media (max-width: 640px) {
          .exp-item { grid-template-columns: 28px 1fr; gap: 0 16px; }
          .exp-header { flex-direction: column; }
          .exp-period-wrap { align-items: flex-start; }
        }
      `}</style>
    </section>
  )
}
