import { Link } from 'react-router-dom';

const clients = [
  { name: 'InfraBuild Corp', icon: 'bi-buildings' },
  { name: 'SkyLine Constructions', icon: 'bi-building' },
  { name: 'GreenBuild Ltd', icon: 'bi-tree' },
  { name: 'MetroWorks', icon: 'bi-train-front' },
  { name: 'UrbanEdge Developers', icon: 'bi-city' },
  { name: 'PrimeCon Industries', icon: 'bi-gear-fill' },
];

const team = [
  {
    name: 'Karthik Subramanian',
    role: 'Chief Executive Officer',
    exp: '20 years in construction technology',
    initials: 'KS',
    color: '#f7a21e',
  },
  {
    name: 'Meera Krishnan',
    role: 'Chief Technology Officer',
    exp: '15 years in enterprise software',
    initials: 'MK',
    color: '#3498db',
  },
  {
    name: 'Arjun Balasubramaniam',
    role: 'Head of Project Delivery',
    exp: '12 years managing large-scale builds',
    initials: 'AB',
    color: '#2ecc71',
  },
  {
    name: 'Divya Ramesh',
    role: 'Head of Client Success',
    exp: '10 years in construction advisory',
    initials: 'DR',
    color: '#e74c3c',
  },
  {
    name: 'Suresh Patel',
    role: 'Safety & Compliance Director',
    exp: '18 years in site safety management',
    initials: 'SP',
    color: '#9b59b6',
  },
  {
    name: 'Nithya Srinivasan',
    role: 'Finance & Operations Lead',
    exp: '14 years in construction finance',
    initials: 'NS',
    color: '#1abc9c',
  },
];

const approach = [
  {
    step: '01',
    title: 'Discover & Plan',
    desc: 'We understand your current processes, challenges, and goals through deep discovery workshops with your team.',
    icon: 'bi-search',
  },
  {
    step: '02',
    title: 'Configure & Customize',
    desc: 'BuildSmart is tailored to your organizational structure, roles, and workflows — no generic one-size-fits-all.',
    icon: 'bi-sliders',
  },
  {
    step: '03',
    title: 'Train & Onboard',
    desc: 'Role-specific training ensures every team member — from site engineer to CFO — is confident on day one.',
    icon: 'bi-mortarboard',
  },
  {
    step: '04',
    title: 'Go Live & Support',
    desc: 'Dedicated customer success managers provide ongoing support, updates, and optimization as you scale.',
    icon: 'bi-rocket-takeoff',
  },
];

const AboutPage = () => {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="py-5"
        style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', minHeight: 340 }}
      >
        <div className="container d-flex flex-column align-items-center justify-content-center text-center py-4">
          <span className="badge mb-3 px-3 py-2" style={{ backgroundColor: '#f7a21e22', color: '#f7a21e' }}>
            About BuildSmart
          </span>
          <h1 className="fw-bold text-white display-5 mb-3">
            We're Rebuilding How Construction Gets Done
          </h1>
          <p className="text-secondary mx-auto" style={{ maxWidth: 620 }}>
            Founded by industry veterans and technology experts, BuildSmart bridges the gap between
            on-site execution and digital management — so your projects finish on time, within budget,
            and without surprises.
          </p>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-md-6">
              <div
                className="card h-100 border-0 rounded-4 p-4"
                style={{ borderLeft: '4px solid #f7a21e !important', boxShadow: '0 2px 16px #f7a21e22' }}
              >
                <div className="card-body">
                  <div
                    className="d-inline-flex align-items-center justify-content-center rounded-3 mb-3"
                    style={{ width: 56, height: 56, backgroundColor: '#fff3cd' }}
                  >
                    <i className="bi bi-bullseye fs-4" style={{ color: '#f7a21e' }}></i>
                  </div>
                  <h4 className="fw-bold mb-3">Our Mission</h4>
                  <p className="text-muted">
                    To empower every construction company — from local contractors to large
                    enterprises — with the digital tools they need to deliver projects efficiently,
                    safely, and profitably. We believe technology should remove friction, not add it.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div
                className="card h-100 border-0 rounded-4 p-4"
                style={{ boxShadow: '0 2px 16px #3498db22' }}
              >
                <div className="card-body">
                  <div
                    className="d-inline-flex align-items-center justify-content-center rounded-3 mb-3"
                    style={{ width: 56, height: 56, backgroundColor: '#dbeafe' }}
                  >
                    <i className="bi bi-eye fs-4" style={{ color: '#3498db' }}></i>
                  </div>
                  <h4 className="fw-bold mb-3">Our Vision</h4>
                  <p className="text-muted">
                    To become the go-to construction management platform across South Asia by 2030 —
                    with every project site connected, every stakeholder informed, and every rupee
                    accounted for in real time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR APPROACH ── */}
      <section className="py-5" style={{ backgroundColor: '#1a1a2e' }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge px-3 py-2 mb-2" style={{ backgroundColor: '#f7a21e22', color: '#f7a21e' }}>
              How We Work
            </span>
            <h2 className="fw-bold text-white display-6">Our Approach</h2>
            <p className="text-secondary mx-auto" style={{ maxWidth: 540 }}>
              A proven 4-step process to get your team fully digital — with minimal disruption
              and maximum adoption.
            </p>
          </div>
          <div className="row g-4">
            {approach.map((a, i) => (
              <div className="col-12 col-sm-6 col-lg-3" key={i}>
                <div
                  className="card h-100 border-0 rounded-4 p-4 text-center"
                  style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                >
                  <div
                    className="fw-bold mb-3 mx-auto d-flex align-items-center justify-content-center rounded-circle"
                    style={{
                      width: 48,
                      height: 48,
                      backgroundColor: '#f7a21e',
                      color: '#1a1a2e',
                      fontSize: 18,
                    }}
                  >
                    {a.step}
                  </div>
                  <i className={`bi ${a.icon} fs-3 mb-2`} style={{ color: '#f7a21e' }}></i>
                  <h6 className="fw-bold text-white mb-2">{a.title}</h6>
                  <p className="small text-secondary mb-0">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR CLIENTS ── */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge px-3 py-2 mb-2" style={{ backgroundColor: '#fff3cd', color: '#856404' }}>
              Trusted By
            </span>
            <h2 className="fw-bold display-6">Our Clients</h2>
            <p className="text-muted">Companies that trust BuildSmart for their daily operations</p>
          </div>
          <div className="row g-3">
            {clients.map((c, i) => (
              <div className="col-6 col-md-4 col-lg-2" key={i}>
                <div className="card border-0 shadow-sm rounded-4 p-3 text-center h-100">
                  <i className={`bi ${c.icon} fs-2 mb-2`} style={{ color: '#f7a21e' }}></i>
                  <div className="small fw-semibold">{c.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge px-3 py-2 mb-2" style={{ backgroundColor: '#fff3cd', color: '#856404' }}>
              The People
            </span>
            <h2 className="fw-bold display-6">Meet Our Team</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: 500 }}>
              Industry veterans and technology innovators working together to transform construction.
            </p>
          </div>
          <div className="row g-4">
            {team.map((m, i) => (
              <div className="col-12 col-sm-6 col-lg-4" key={i}>
                <div className="card border-0 shadow-sm rounded-4 p-2 h-100">
                  <div className="card-body text-center p-4">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center fw-bold text-white mx-auto mb-3"
                      style={{ width: 72, height: 72, backgroundColor: m.color, fontSize: 22 }}
                    >
                      {m.initials}
                    </div>
                    <h6 className="fw-bold mb-1">{m.name}</h6>
                    <div className="small fw-semibold mb-1" style={{ color: m.color }}>{m.role}</div>
                    <div className="small text-muted">{m.exp}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-5" style={{ background: 'linear-gradient(135deg, #f7a21e, #e67e22)' }}>
        <div className="container text-center">
          <h2 className="fw-bold text-dark mb-2">Ready to Work With Us?</h2>
          <p className="text-dark mb-4" style={{ opacity: 0.75 }}>
            Start your digital transformation journey with BuildSmart today.
          </p>
          <Link to="/contact" className="btn btn-dark btn-lg px-5 fw-semibold">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
