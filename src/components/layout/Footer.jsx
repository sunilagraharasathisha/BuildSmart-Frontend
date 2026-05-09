import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#0f0f1a', color: '#ccc' }}>
      <div className="container py-5">
        <div className="row g-4">
          {/* Brand */}
          <div className="col-12 col-md-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <i className="bi bi-building-fill fs-4" style={{ color: '#f7a21e' }}></i>
              <span className="fw-bold fs-4" style={{ color: '#f7a21e' }}>Build</span>
              <span className="fw-bold fs-4 text-white">Smart</span>
            </div>
            <p className="small">
              Digitalizing construction project management — connecting teams, vendors, and sites
              on a single intelligent platform.
            </p>
            <div className="d-flex gap-3 mt-3">
              {['linkedin', 'twitter', 'facebook', 'instagram'].map((s) => (
                <a key={s} href="#" className="text-warning fs-5" aria-label={s}>
                  <i className={`bi bi-${s}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="col-6 col-md-2">
            <h6 className="text-white fw-semibold mb-3 text-uppercase small">Company</h6>
            <ul className="list-unstyled">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/services', label: 'Services' },
                { to: '/contact', label: 'Contact' },
              ].map(({ to, label }) => (
                <li key={to} className="mb-2">
                  <Link to={to} className="text-decoration-none" style={{ color: '#aaa' }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-6 col-md-3">
            <h6 className="text-white fw-semibold mb-3 text-uppercase small">Our Services</h6>
            <ul className="list-unstyled">
              {[
                'Project Management',
                'Vendor Management',
                'Finance Tracking',
                'Safety Monitoring',
                'Site Management',
                'Admin Control',
              ].map((s) => (
                <li key={s} className="mb-2 small" style={{ color: '#aaa' }}>
                  <i className="bi bi-chevron-right me-1" style={{ color: '#f7a21e' }}></i>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-12 col-md-3">
            <h6 className="text-white fw-semibold mb-3 text-uppercase small">Get In Touch</h6>
            <ul className="list-unstyled">
              <li className="mb-2 small">
                <i className="bi bi-geo-alt-fill me-2" style={{ color: '#f7a21e' }}></i>
                123 Builder's Lane, Chennai, India
              </li>
              <li className="mb-2 small">
                <i className="bi bi-telephone-fill me-2" style={{ color: '#f7a21e' }}></i>
                +91 98765 43210
              </li>
              <li className="mb-2 small">
                <i className="bi bi-envelope-fill me-2" style={{ color: '#f7a21e' }}></i>
                contact@buildsmart.in
              </li>
              <li className="mb-2 small">
                <i className="bi bi-clock-fill me-2" style={{ color: '#f7a21e' }}></i>
                Mon–Sat, 9 AM – 6 PM
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ backgroundColor: '#090912', borderTop: '1px solid #222' }}>
        <div className="container py-3 d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <p className="mb-0 small" style={{ color: '#666' }}>
            © 2025 BuildSmart. All rights reserved.
          </p>
          <p className="mb-0 small" style={{ color: '#666' }}>
            Privacy Policy &nbsp;|&nbsp; Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
