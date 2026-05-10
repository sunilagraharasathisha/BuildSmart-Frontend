import { Link } from 'react-router-dom';

const services = ["New Builds", "Knockdown Rebuilds", "Custom Builds", "Project Management"];
const links = [
  { label: "Home",       href: "/",        isRoute: true },
  { label: "About us",   href: "#about",   isRoute: false },
  { label: "Services",   href: "#services",isRoute: false },
  { label: "Contact",    href: "/contact", isRoute: true },
];

export default function Footer() {
  return (
    <footer style={{ background: "#111", color: "#fff" }} className="pt-5">
      <div className="container">
        <div className="row g-4">

          {/* Brand */}
          <div className="col-12 col-md-6 col-lg-4">
            <span className="d-block fw-bold text-white mb-3" style={{ fontSize: "1.6rem" }}>BuildSmart</span>
            <p className="mb-4" style={{ color: "#888", fontSize: "0.88rem", lineHeight: 1.8, maxWidth: 280 }}>
              At BuildSmart, we bring together Construction, Commitment, Communication, Collaboration,
              and Customer Success to deliver high-quality projects across India.
            </p>
            <div className="d-flex gap-2">
              {["f", "in", "tw", "ig"].map((s) => (
                <button
                  key={s}
                  className="btn rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: 38, height: 38, border: "1px solid #333", color: "#888", background: "transparent", fontSize: "0.8rem" }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="fw-bold text-white mb-3 pb-2 position-relative" style={{ borderBottom: "2px solid #333" }}>
              Our Services
              <span className="position-absolute bottom-0 start-0" style={{ width: 28, height: 2, background: "#f5c518", display: "block", marginBottom: "-2px" }} />
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-4 mb-0">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-decoration-none d-flex align-items-center gap-1" style={{ color: "#888", fontSize: "0.85rem" }}>
                    <span style={{ color: "#f5c518" }}>›</span> {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="fw-bold text-white mb-3 pb-2 position-relative" style={{ borderBottom: "2px solid #333" }}>
              Quick Links
              <span className="position-absolute bottom-0 start-0" style={{ width: 28, height: 2, background: "#f5c518", display: "block", marginBottom: "-2px" }} />
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-4 mb-0">
              {links.map((l) => (
                <li key={l.label}>
                  {l.isRoute ? (
                    <Link to={l.href} className="text-decoration-none d-flex align-items-center gap-1" style={{ color: "#888", fontSize: "0.85rem" }}>
                      <span style={{ color: "#f5c518" }}>›</span> {l.label}
                    </Link>
                  ) : (
                    <a href={l.href} className="text-decoration-none d-flex align-items-center gap-1" style={{ color: "#888", fontSize: "0.85rem" }}>
                      <span style={{ color: "#f5c518" }}>›</span> {l.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-12 col-md-6 col-lg-4">
            <h6 className="fw-bold text-white mb-3 pb-2 position-relative" style={{ borderBottom: "2px solid #333" }}>
              Get In Touch
              <span className="position-absolute bottom-0 start-0" style={{ width: 28, height: 2, background: "#f5c518", display: "block", marginBottom: "-2px" }} />
            </h6>
            <div className="d-flex flex-column gap-3">
              {[
                { label: "Location", text: "Chennai, SIPCOT, India" },
                { label: "Phone",    text: "+91 1234567890" },
                { label: "Email",    text: "infobuildsmart@gmail.com" },
              ].map((item) => (
                <div key={item.label} className="d-flex align-items-start gap-3">
                  <div>
                    <div className="text-uppercase fw-semibold mb-1" style={{ color: "#555", fontSize: "0.7rem", letterSpacing: "0.5px" }}>
                      {item.label}
                    </div>
                    <div style={{ color: "#888", fontSize: "0.83rem", lineHeight: 1.6 }}>{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-5 border-top d-flex flex-wrap align-items-center justify-content-between gap-3 px-4 py-3" style={{ borderColor: "#222 !important" }}>
        <p className="mb-0" style={{ color: "#555", fontSize: "0.82rem" }}>
          © 2024 <span style={{ color: "#f5c518" }}>C5C</span> Construction. All rights reserved.
        </p>
        <div className="d-flex gap-4">
          <a href="#" className="text-decoration-none" style={{ color: "#555", fontSize: "0.82rem" }}>Privacy Policy</a>
          <a href="#" className="text-decoration-none" style={{ color: "#555", fontSize: "0.82rem" }}>Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}