import { Link } from 'react-router-dom';

const services = [
  {
    icon: 'bi-kanban-fill',
    title: 'Project Management',
    color: '#f7a21e',
    tagline: 'Deliver every project on time, every time.',
    desc: 'Our project management module gives you end-to-end visibility into all your construction projects. Plan tasks, set milestones, assign resources, and track progress on a real-time Gantt dashboard — all in one place.',
    features: [
      'Interactive Gantt charts & milestone tracking',
      'Task assignment with priority levels',
      'Document & drawing management',
      'Progress % reporting per phase',
      'Deadline alerts and delay escalations',
    ],
    roles: ['Project Manager', 'Admin'],
  },
  {
    icon: 'bi-truck',
    title: 'Vendor Management',
    color: '#2ecc71',
    tagline: 'The right vendor, at the right time, at the right cost.',
    desc: 'Digitalize your entire vendor lifecycle — from onboarding to payment. Evaluate vendor performance, automate purchase orders, and maintain a trusted vendor registry that speeds up procurement on every project.',
    features: [
      'Digital vendor registration & verification',
      'Purchase order creation and approval',
      'Delivery tracking and goods receipt',
      'Vendor rating and blacklist management',
      'Integrated payment milestone tracking',
    ],
    roles: ['Vendor Manager', 'Finance', 'Admin'],
  },
  {
    icon: 'bi-cash-coin',
    title: 'Finance Tracking',
    color: '#3498db',
    tagline: 'Every rupee, accounted for in real time.',
    desc: 'Take full control of your construction finances with live budget dashboards, multi-level expense approvals, and automated financial summaries. Reduce budget overruns before they happen.',
    features: [
      'Project-wise budget allocation',
      'Expense submission and approval workflow',
      'Invoice and payment reconciliation',
      'Automated monthly & quarterly reports',
      'Budget variance alerts',
    ],
    roles: ['Finance Head', 'Project Manager', 'Admin'],
  },
  {
    icon: 'bi-shield-check',
    title: 'Safety Monitoring',
    color: '#e74c3c',
    tagline: 'Zero accidents. Full compliance. Always.',
    desc: 'Digital safety management for construction sites — from daily toolbox talks and inspection checklists to incident reporting and regulatory compliance tracking. Protect your workers and your reputation.',
    features: [
      'Digital safety inspection checklists',
      'Real-time incident & near-miss reporting',
      'PPE compliance tracking per worker',
      'Safety score per site per week',
      'Regulatory audit-ready documentation',
    ],
    roles: ['Safety Officer', 'Site Engineer', 'Admin'],
  },
  {
    icon: 'bi-geo-alt-fill',
    title: 'Site Management',
    color: '#9b59b6',
    tagline: 'Your entire site, visible from anywhere.',
    desc: 'Monitor all active construction sites from a single dashboard. Track workforce attendance, material consumption, equipment availability, and daily progress reports — without leaving your desk.',
    features: [
      'Digital workforce attendance (biometric / QR)',
      'Material inventory and usage tracking',
      'Equipment allocation and maintenance logs',
      'Daily site progress reports with photos',
      'Multi-site comparison dashboards',
    ],
    roles: ['Site Engineer', 'Project Manager', 'Admin'],
  },
  {
    icon: 'bi-person-gear',
    title: 'Admin Control',
    color: '#1abc9c',
    tagline: 'Governance, compliance, and total control.',
    desc: 'The admin module gives your leadership team complete oversight — manage users, assign roles, configure permissions, and maintain full system audit logs for every action taken on the platform.',
    features: [
      'User creation, role assignment & deactivation',
      'Role-based access control (RBAC)',
      'Full system audit trail & activity logs',
      'Platform configuration & settings',
      'Data export and backup management',
    ],
    roles: ['Admin', 'Management'],
  },
];

const ServicePage = () => {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="py-5"
        style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', minHeight: 320 }}
      >
        <div className="container d-flex flex-column align-items-center justify-content-center text-center py-4">
          <span className="badge mb-3 px-3 py-2" style={{ backgroundColor: '#f7a21e22', color: '#f7a21e' }}>
            Our Services
          </span>
          <h1 className="fw-bold text-white display-5 mb-3">
            Digitalizing Every Corner of Construction
          </h1>
          <p className="text-secondary mx-auto" style={{ maxWidth: 620 }}>
            BuildSmart replaces paper-based chaos with a connected digital platform — purpose-built
            for construction project management at every scale.
          </p>
        </div>
      </section>

      {/* ── WHY DIGITAL ── */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-12 col-lg-6">
              <span className="badge px-3 py-2 mb-2" style={{ backgroundColor: '#fff3cd', color: '#856404' }}>
                The Problem
              </span>
              <h2 className="fw-bold mb-3">Construction Still Runs on Paper — That's a Problem</h2>
              <p className="text-muted">
                Spreadsheets lost in email threads, safety forms filed in folders, vendor invoices
                taking weeks to process, and project managers making decisions on stale data.
              </p>
              <p className="text-muted mb-0">
                BuildSmart replaces all of that with a real-time, role-specific platform where
                every team member has the information they need, exactly when they need it.
              </p>
            </div>
            <div className="col-12 col-lg-6">
              <div className="row g-3">
                {[
                  { label: 'Average project delay due to poor communication', value: '23%' },
                  { label: 'Budget overrun in manual-managed projects', value: '18%' },
                  { label: 'Safety incidents from missed inspections', value: '3x' },
                  { label: 'Cost savings reported by BuildSmart clients', value: '30%' },
                ].map((s, i) => (
                  <div className="col-6" key={i}>
                    <div className="card border-0 rounded-4 shadow-sm p-3 text-center">
                      <div className="fw-bold mb-1" style={{ fontSize: 32, color: '#f7a21e' }}>
                        {s.value}
                      </div>
                      <div className="small text-muted">{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE CARDS ── */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold display-6">Our Six Core Modules</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: 540 }}>
              Each module is purpose-built for a specific construction role and integrates
              seamlessly with the others.
            </p>
          </div>

          {services.map((svc, i) => (
            <div
              key={i}
              className={`row align-items-center g-4 mb-5 pb-5 ${i < services.length - 1 ? 'border-bottom' : ''}`}
            >
              {/* Alternate layout */}
              <div className={`col-12 col-lg-5 ${i % 2 === 1 ? 'order-lg-2' : ''}`}>
                <div
                  className="rounded-4 d-flex align-items-center justify-content-center"
                  style={{
                    height: 260,
                    backgroundColor: svc.color + '12',
                    border: `2px solid ${svc.color}30`,
                  }}
                >
                  <i className={`bi ${svc.icon}`} style={{ fontSize: 96, color: svc.color, opacity: 0.8 }}></i>
                </div>
              </div>
              <div className={`col-12 col-lg-7 ${i % 2 === 1 ? 'order-lg-1' : ''}`}>
                <div
                  className="badge mb-3 px-3 py-2"
                  style={{ backgroundColor: svc.color + '20', color: svc.color }}
                >
                  <i className={`bi ${svc.icon} me-1`}></i> Module {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="fw-bold mb-1">{svc.title}</h3>
                <p className="fw-semibold mb-3" style={{ color: svc.color }}>{svc.tagline}</p>
                <p className="text-muted mb-4">{svc.desc}</p>
                <ul className="list-unstyled mb-4">
                  {svc.features.map((f, j) => (
                    <li key={j} className="mb-2 small d-flex align-items-start gap-2">
                      <i className="bi bi-check-circle-fill mt-1" style={{ color: svc.color }}></i>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="d-flex flex-wrap gap-2">
                  {svc.roles.map((r) => (
                    <span
                      key={r}
                      className="badge px-3 py-2 small"
                      style={{ backgroundColor: svc.color + '15', color: svc.color }}
                    >
                      <i className="bi bi-person-fill me-1"></i>{r}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-5" style={{ background: 'linear-gradient(135deg, #1a1a2e, #16213e)' }}>
        <div className="container text-center">
          <h2 className="fw-bold text-white mb-2">See All Modules in Action</h2>
          <p className="text-secondary mb-4">
            Book a free 30-minute demo and see how BuildSmart fits your team.
          </p>
          <Link to="/contact" className="btn btn-warning btn-lg px-5 fw-semibold text-dark">
            Book a Free Demo
          </Link>
        </div>
      </section>
    </>
  );
};

export default ServicePage;
