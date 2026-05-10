const ContactSection = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container">

        <div className="row g-0 rounded-4 overflow-hidden shadow-sm border">

          {/* LEFT — Info Panel */}
          <div
            className="col-12 col-md-5 p-4 p-lg-5 d-flex flex-column justify-content-between"
            style={{ background: "#111" }}
          >
            <div>
              <span
                className="badge rounded-pill px-3 py-2 mb-4 d-inline-block"
                style={{ background: "#222", color: "#aaa", fontSize: "0.78rem" }}
              >
                Contact Us
              </span>
              <h2 className="fw-semibold text-white mb-3" style={{ lineHeight: 1.2 }}>
                Let's Build Something <span style={{ color: "#f5c518" }}>Together</span>
              </h2>
              <p className="mb-4" style={{ color: "#aaa", fontSize: "0.9rem", lineHeight: 1.7 }}>
                Have a project in mind? Reach out and our team will get back to you within 24 hours.
              </p>

              <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center gap-3">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{ width: 40, height: 40, background: "#222" }}
                  >
                    <span style={{ fontSize: "1rem" }}>📧</span>
                  </div>
                  <div>
                    <div style={{ color: "#666", fontSize: "0.75rem" }}>Email</div>
                    <div className="text-white" style={{ fontSize: "0.88rem" }}>hello@c5c.com.au</div>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{ width: 40, height: 40, background: "#222" }}
                  >
                    <span style={{ fontSize: "1rem" }}>📞</span>
                  </div>
                  <div>
                    <div style={{ color: "#666", fontSize: "0.75rem" }}>Phone</div>
                    <div className="text-white" style={{ fontSize: "0.88rem" }}>+61 400 000 000</div>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{ width: 40, height: 40, background: "#222" }}
                  >
                    <span style={{ fontSize: "1rem" }}>📍</span>
                  </div>
                  <div>
                    <div style={{ color: "#666", fontSize: "0.75rem" }}>Location</div>
                    <div className="text-white" style={{ fontSize: "0.88rem" }}>Sydney, Australia</div>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-5 mb-0" style={{ color: "#444", fontSize: "0.78rem" }}>
              © 2025 C5C Construction
            </p>
          </div>

          {/* RIGHT — Form Panel */}
          <div className="col-12 col-md-7 p-4 p-lg-5 bg-white">
            <h4 className="fw-semibold mb-1" style={{ fontSize: "1.2rem" }}>Send us a message</h4>
            <p className="text-muted mb-4" style={{ fontSize: "0.85rem" }}>
              Fill in the form and we'll be in touch shortly.
            </p>

            <div className="row g-3">

              <div className="col-12 col-sm-6">
                <label className="form-label fw-medium" style={{ fontSize: "0.85rem" }}>Full Name</label>
                <input
                  type="text"
                  className="form-control rounded-3"
                  placeholder="John Smith"
                  style={{ fontSize: "0.9rem", padding: "10px 14px" }}
                />
              </div>

              <div className="col-12 col-sm-6">
                <label className="form-label fw-medium" style={{ fontSize: "0.85rem" }}>Phone Number</label>
                <input
                  type="tel"
                  className="form-control rounded-3"
                  placeholder="+61 400 000 000"
                  style={{ fontSize: "0.9rem", padding: "10px 14px" }}
                />
              </div>

              <div className="col-12">
                <label className="form-label fw-medium" style={{ fontSize: "0.85rem" }}>Email Address</label>
                <input
                  type="email"
                  className="form-control rounded-3"
                  placeholder="john@example.com"
                  style={{ fontSize: "0.9rem", padding: "10px 14px" }}
                />
              </div>

              <div className="col-12">
                <label className="form-label fw-medium" style={{ fontSize: "0.85rem" }}>Service Interested In</label>
                <select
                  className="form-select rounded-3"
                  style={{ fontSize: "0.9rem", padding: "10px 14px" }}
                >
                  <option value="">Select a service...</option>
                  <option>New Builds</option>
                  <option>Knockdown Rebuilds</option>
                  <option>Custom Builds</option>
                  <option>Project Management</option>
                  <option>Design and Approvals</option>
                </select>
              </div>

              <div className="col-12">
                <label className="form-label fw-medium" style={{ fontSize: "0.85rem" }}>Message</label>
                <textarea
                  className="form-control rounded-3"
                  rows={4}
                  placeholder="Tell us about your project..."
                  style={{ fontSize: "0.9rem", padding: "10px 14px", resize: "none" }}
                />
              </div>

              <div className="col-12">
                <button
                  type="button"
                  className="btn w-100 fw-semibold rounded-3 py-2"
                  style={{ background: "#f5c518", fontSize: "0.95rem" }}
                >
                  Send Message →
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;