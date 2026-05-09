import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const stats = [
  { icon: 'bi-buildings', value: '350+', label: 'Projects Completed' },
  { icon: 'bi-handshake', value: '120+', label: 'Partner Companies' },
  { icon: 'bi-people-fill', value: '5000+', label: 'Happy Clients' },
  { icon: 'bi-calendar-check', value: '15+', label: 'Years of Experience' },
];

const services = [
  {
    icon: 'bi-kanban-fill',
    title: 'Project Management',
    desc: 'End-to-end project lifecycle tracking with real-time progress dashboards, task assignments, and milestone alerts.',
    color: '#f7a21e',
  },
  {
    icon: 'bi-truck',
    title: 'Vendor Management',
    desc: 'Onboard, evaluate, and manage vendors digitally. Automate purchase orders and track delivery schedules.',
    color: '#2ecc71',
  },
  {
    icon: 'bi-cash-coin',
    title: 'Finance Tracking',
    desc: 'Real-time budget monitoring, expense approval workflows, and automated financial reports for every project.',
    color: '#3498db',
  },
  {
    icon: 'bi-shield-check',
    title: 'Safety Monitoring',
    desc: 'Digital incident reporting, compliance checklists, and safety audits to keep your workforce protected.',
    color: '#e74c3c',
  },
  {
    icon: 'bi-geo-alt-fill',
    title: 'Site Management',
    desc: 'Monitor attendance, material inventory, and equipment usage across all active construction sites.',
    color: '#9b59b6',
  },
  {
    icon: 'bi-person-gear',
    title: 'Admin Control',
    desc: 'Centralized user management, role-based access, and full system audit logs for governance.',
    color: '#1abc9c',
  },
];

const testimonials = [
  {
    name: 'Arjun Mehta',
    role: 'Project Manager, InfraBuild Corp',
    quote:
      'BuildSmart transformed how we handle multi-site projects. The real-time dashboards saved us weeks every quarter.',
    avatar: 'AM',
  },
  {
    name: 'Priya Nair',
    role: 'Finance Head, SkyLine Constructions',
    quote:
      'Finance approvals that used to take 3 days now happen in hours. The budget tracking is incredibly accurate.',
    avatar: 'PN',
  },
  {
    name: 'Rajesh Kumar',
    role: 'Safety Officer, GreenBuild Ltd',
    quote:
      'Incident reporting is now seamless. Our compliance scores jumped 40% within six months of adopting BuildSmart.',
    avatar: 'RK',
  },
];

const HomePage = () => {
  const counterRefs = useRef([]);

  useEffect(() => {
    // Animate counters when in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.dataset.target, 10);
            let count = 0;
            const step = Math.ceil(target / 60);
            const timer = setInterval(() => {
              count = Math.min(count + step, target);
              el.textContent = count + el.dataset.suffix;
              if (count >= target) clearInterval(timer);
            }, 30);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );
    counterRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── HERO CAROUSEL ── */}
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to={i}
              className={i === 0 ? 'active' : ''}
            />
          ))}
        </div>

        <div className="carousel-inner">
          {/* Slide 1 */}
          <div
            className="carousel-item active"
            style={{
              background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%)',
              minHeight: '88vh',
            }}
          >
            <div className="container h-100 d-flex align-items-center" style={{ minHeight: '88vh' }}>
              <div className="row align-items-center w-100 gy-4">
                <div className="col-12 col-lg-6 text-white">
                  <span
                    className="badge mb-3 px-3 py-2 fw-semibold"
                    style={{ backgroundColor: '#f7a21e', color: '#1a1a2e', fontSize: '0.8rem' }}
                  >
                    <i className="bi bi-lightning-charge-fill me-1"></i> Digital Construction Platform
                  </span>
                  <h1 className="display-4 fw-bold lh-sm mb-4">
                    Build Smarter,<br />
                    <span style={{ color: '#f7a21e' }}>Deliver Faster</span>
                  </h1>
                  <p className="lead mb-4" style={{ color: '#b0b8cc' }}>
                    Unify your entire construction operation — from site to boardroom — on one
                    intelligent platform built for modern builders.
                  </p>
                  <div className="d-flex gap-3 flex-wrap">
                    <Link to="/contact" className="btn btn-warning btn-lg fw-semibold px-4 text-dark">
                      Get Started
                    </Link>
                    <Link to="/services" className="btn btn-outline-light btn-lg px-4">
                      Our Services
                    </Link>
                  </div>
                </div>
                <div className="col-12 col-lg-6 d-flex justify-content-center">
                  <div
                    className="rounded-4 d-flex align-items-center justify-content-center"
                    style={{
                      width: 380,
                      height: 300,
                      background: 'rgba(247,162,30,0.08)',
                      border: '2px solid rgba(247,162,30,0.2)',
                    }}
                  >
                    <i className="bi bi-buildings" style={{ fontSize: 120, color: '#f7a21e', opacity: 0.7 }}></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div
            className="carousel-item"
            style={{
              background: 'linear-gradient(135deg, #0d1f12 0%, #1a3a24 60%, #2d6a4f 100%)',
              minHeight: '88vh',
            }}
          >
            <div className="container h-100 d-flex align-items-center" style={{ minHeight: '88vh' }}>
              <div className="row align-items-center w-100 gy-4">
                <div className="col-12 col-lg-6 text-white">
                  <span
                    className="badge mb-3 px-3 py-2 fw-semibold"
                    style={{ backgroundColor: '#2ecc71', color: '#0d1f12', fontSize: '0.8rem' }}
                  >
                    <i className="bi bi-shield-check-fill me-1"></i> Zero Compromise on Safety
                  </span>
                  <h1 className="display-4 fw-bold lh-sm mb-4">
                    Safety First,<br />
                    <span style={{ color: '#2ecc71' }}>Always Compliant</span>
                  </h1>
                  <p className="lead mb-4" style={{ color: '#a8c5b5' }}>
                    Real-time incident reporting, digital safety audits, and compliance dashboards
                    to protect every worker on every site.
                  </p>
                  <div className="d-flex gap-3 flex-wrap">
                    <Link to="/services" className="btn btn-lg fw-semibold px-4 text-dark" style={{ backgroundColor: '#2ecc71' }}>
                      Explore Safety Module
                    </Link>
                    <Link to="/contact" className="btn btn-outline-light btn-lg px-4">
                      Talk to Us
                    </Link>
                  </div>
                </div>
                <div className="col-12 col-lg-6 d-flex justify-content-center">
                  <div
                    className="rounded-4 d-flex align-items-center justify-content-center"
                    style={{
                      width: 380,
                      height: 300,
                      background: 'rgba(46,204,113,0.08)',
                      border: '2px solid rgba(46,204,113,0.2)',
                    }}
                  >
                    <i className="bi bi-shield-fill-check" style={{ fontSize: 120, color: '#2ecc71', opacity: 0.7 }}></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div
            className="carousel-item"
            style={{
              background: 'linear-gradient(135deg, #1a0a2e 0%, #2d1b69 60%, #11998e 100%)',
              minHeight: '88vh',
            }}
          >
            <div className="container h-100 d-flex align-items-center" style={{ minHeight: '88vh' }}>
              <div className="row align-items-center w-100 gy-4">
                <div className="col-12 col-lg-6 text-white">
                  <span
                    className="badge mb-3 px-3 py-2 fw-semibold"
                    style={{ backgroundColor: '#a855f7', color: '#fff', fontSize: '0.8rem' }}
                  >
                    <i className="bi bi-graph-up-arrow me-1"></i> Data-Driven Decisions
                  </span>
                  <h1 className="display-4 fw-bold lh-sm mb-4">
                    Finance in Control,<br />
                    <span style={{ color: '#a855f7' }}>Projects on Track</span>
                  </h1>
                  <p className="lead mb-4" style={{ color: '#c4b5d4' }}>
                    Live budget tracking, vendor payments, and automated financial reports — so you
                    always know where every rupee goes.
                  </p>
                  <div className="d-flex gap-3 flex-wrap">
                    <Link to="/services" className="btn btn-lg fw-semibold px-4" style={{ backgroundColor: '#a855f7', color: '#fff' }}>
                      See Finance Module
                    </Link>
                    <Link to="/about" className="btn btn-outline-light btn-lg px-4">
                      About Us
                    </Link>
                  </div>
                </div>
                <div className="col-12 col-lg-6 d-flex justify-content-center">
                  <div
                    className="rounded-4 d-flex align-items-center justify-content-center"
                    style={{
                      width: 380,
                      height: 300,
                      background: 'rgba(168,85,247,0.08)',
                      border: '2px solid rgba(168,85,247,0.2)',
                    }}
                  >
                    <i className="bi bi-graph-up-arrow" style={{ fontSize: 120, color: '#a855f7', opacity: 0.7 }}></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" />
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" />
        </button>
      </div>

      {/* ── STATS BANNER ── */}
      <section style={{ backgroundColor: '#f7a21e' }}>
        <div className="container py-4">
          <div className="row g-3 text-center">
            {[
              { target: 350, suffix: '+', label: 'Projects Completed', icon: 'bi-buildings' },
              { target: 120, suffix: '+', label: 'Partner Companies', icon: 'bi-handshake' },
              { target: 5000, suffix: '+', label: 'Happy Clients', icon: 'bi-people-fill' },
              { target: 15, suffix: '+', label: 'Years Experience', icon: 'bi-calendar-check' },
            ].map((s, i) => (
              <div className="col-6 col-md-3" key={i}>
                <i className={`bi ${s.icon} fs-2 text-dark`}></i>
                <div
                  className="fw-bold fs-2 text-dark"
                  ref={(el) => (counterRefs.current[i] = el)}
                  data-target={s.target}
                  data-suffix={s.suffix}
                >
                  0{s.suffix}
                </div>
                <div className="small fw-semibold text-dark">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR SERVICES ── */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge px-3 py-2 mb-2" style={{ backgroundColor: '#fff3cd', color: '#856404' }}>
              What We Offer
            </span>
            <h2 className="fw-bold display-6">Our Services</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: 560 }}>
              A full suite of digital tools built exclusively for construction professionals.
            </p>
          </div>
          <div className="row g-4">
            {services.map((svc, i) => (
              <div className="col-12 col-sm-6 col-lg-4" key={i}>
                <div
                  className="card h-100 border-0 shadow-sm p-1 rounded-4"
                  style={{ transition: 'transform 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-6px)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  <div className="card-body p-4">
                    <div
                      className="d-inline-flex align-items-center justify-content-center rounded-3 mb-3"
                      style={{ width: 56, height: 56, backgroundColor: svc.color + '20' }}
                    >
                      <i className={`bi ${svc.icon} fs-4`} style={{ color: svc.color }}></i>
                    </div>
                    <h5 className="fw-bold mb-2">{svc.title}</h5>
                    <p className="text-muted small mb-0">{svc.desc}</p>
                  </div>
                  <div className="card-footer bg-transparent border-0 px-4 pb-4">
                    <Link to="/services" className="small fw-semibold text-decoration-none" style={{ color: svc.color }}>
                      Learn more <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY BUILDSMART ── */}
      <section className="py-5" style={{ backgroundColor: '#1a1a2e' }}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-5">
              <span className="badge px-3 py-2 mb-3" style={{ backgroundColor: '#f7a21e22', color: '#f7a21e' }}>
                Why BuildSmart?
              </span>
              <h2 className="fw-bold text-white mb-4">
                The Only Platform Built for Construction Teams
              </h2>
              <p style={{ color: '#9ca3af' }}>
                Unlike generic project tools, BuildSmart is engineered around the unique challenges
                of construction — multi-site coordination, vendor dependencies, safety compliance,
                and real-time financial oversight.
              </p>
            </div>
            <div className="col-12 col-lg-7">
              <div className="row g-3">
                {[
                  { icon: 'bi-lightning-charge', title: 'Real-Time Visibility', desc: 'Live dashboards across all sites, roles, and projects.' },
                  { icon: 'bi-lock', title: 'Role-Based Access', desc: 'Every stakeholder sees exactly what they need — nothing more.' },
                  { icon: 'bi-cloud-check', title: 'Cloud-Native', desc: 'Access from any device, anywhere, with zero infrastructure to manage.' },
                  { icon: 'bi-bar-chart-line', title: 'Smart Reports', desc: 'Auto-generated reports with actionable insights for leadership.' },
                  { icon: 'bi-bell', title: 'Smart Alerts', desc: 'Instant notifications for budget overruns, safety incidents, and delays.' },
                  { icon: 'bi-plug', title: 'Easy Integration', desc: 'Connect with your existing ERP, accounting, or HR tools seamlessly.' },
                ].map((f, i) => (
                  <div className="col-12 col-sm-6" key={i}>
                    <div
                      className="d-flex gap-3 p-3 rounded-3"
                      style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                    >
                      <div
                        className="d-flex align-items-center justify-content-center rounded-2 flex-shrink-0"
                        style={{ width: 44, height: 44, backgroundColor: '#f7a21e20' }}
                      >
                        <i className={`bi ${f.icon}`} style={{ color: '#f7a21e' }}></i>
                      </div>
                      <div>
                        <div className="text-white fw-semibold small">{f.title}</div>
                        <div className="small" style={{ color: '#9ca3af' }}>{f.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge px-3 py-2 mb-2" style={{ backgroundColor: '#fff3cd', color: '#856404' }}>
              Client Stories
            </span>
            <h2 className="fw-bold display-6">What Our Clients Say</h2>
          </div>
          <div className="row g-4">
            {testimonials.map((t, i) => (
              <div className="col-12 col-md-4" key={i}>
                <div className="card h-100 border-0 shadow-sm rounded-4 p-2">
                  <div className="card-body p-4">
                    <div className="mb-3">
                      {[...Array(5)].map((_, j) => (
                        <i key={j} className="bi bi-star-fill me-1" style={{ color: '#f7a21e', fontSize: 14 }}></i>
                      ))}
                    </div>
                    <p className="text-muted small mb-4">"{t.quote}"</p>
                    <div className="d-flex align-items-center gap-3">
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center fw-bold text-white"
                        style={{ width: 44, height: 44, backgroundColor: '#f7a21e', fontSize: 14 }}
                      >
                        {t.avatar}
                      </div>
                      <div>
                        <div className="fw-semibold small">{t.name}</div>
                        <div className="text-muted" style={{ fontSize: 12 }}>{t.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section
        className="py-5"
        style={{ background: 'linear-gradient(135deg, #f7a21e 0%, #e67e22 100%)' }}
      >
        <div className="container text-center">
          <h2 className="fw-bold text-dark mb-2">Ready to Digitalize Your Construction Projects?</h2>
          <p className="text-dark mb-4" style={{ opacity: 0.75 }}>
            Join 120+ companies that trust BuildSmart to manage their construction operations.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link to="/contact" className="btn btn-dark btn-lg px-5 fw-semibold">
              Get a Free Demo
            </Link>
            <Link to="/services" className="btn btn-outline-dark btn-lg px-5">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
