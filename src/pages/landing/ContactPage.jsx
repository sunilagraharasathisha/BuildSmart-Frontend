import { useState } from 'react';

const contactInfo = [
  { icon: 'bi-geo-alt-fill', label: 'Address', value: '123 Builder\'s Lane, Anna Nagar, Chennai – 600 040, Tamil Nadu, India', color: '#f7a21e' },
  { icon: 'bi-telephone-fill', label: 'Phone', value: '+91 98765 43210', color: '#3498db' },
  { icon: 'bi-envelope-fill', label: 'Email', value: 'contact@buildsmart.in', color: '#2ecc71' },
  { icon: 'bi-clock-fill', label: 'Working Hours', value: 'Monday – Saturday, 9:00 AM – 6:00 PM IST', color: '#9b59b6' },
];

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required.';
    if (!form.email.trim()) {
      e.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Enter a valid email address.';
    }
    if (!form.subject.trim()) e.subject = 'Subject is required.';
    if (!form.message.trim()) e.message = 'Message is required.';
    return e;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="py-5"
        style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', minHeight: 300 }}
      >
        <div className="container d-flex flex-column align-items-center justify-content-center text-center py-4">
          <span className="badge mb-3 px-3 py-2" style={{ backgroundColor: '#f7a21e22', color: '#f7a21e' }}>
            Get In Touch
          </span>
          <h1 className="fw-bold text-white display-5 mb-3">Contact Us</h1>
          <p className="text-secondary mx-auto" style={{ maxWidth: 540 }}>
            Have a question, need a demo, or ready to start? We'd love to hear from you.
            Our team typically responds within one business day.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4 align-items-start">

            {/* Contact Info */}
            <div className="col-12 col-lg-4">
              <h5 className="fw-bold mb-4">Reach Us Directly</h5>
              <div className="d-flex flex-column gap-3">
                {contactInfo.map((c, i) => (
                  <div
                    key={i}
                    className="card border-0 shadow-sm rounded-4 p-3"
                  >
                    <div className="d-flex align-items-start gap-3">
                      <div
                        className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
                        style={{ width: 44, height: 44, backgroundColor: c.color + '18' }}
                      >
                        <i className={`bi ${c.icon}`} style={{ color: c.color }}></i>
                      </div>
                      <div>
                        <div className="small fw-semibold text-muted">{c.label}</div>
                        <div className="small">{c.value}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div className="mt-4">
                <h6 className="fw-semibold mb-3">Follow Us</h6>
                <div className="d-flex gap-3">
                  {[
                    { icon: 'bi-linkedin', color: '#0077b5' },
                    { icon: 'bi-twitter', color: '#1da1f2' },
                    { icon: 'bi-facebook', color: '#1877f2' },
                    { icon: 'bi-instagram', color: '#e4405f' },
                  ].map((s, i) => (
                    <a
                      key={i}
                      href="#"
                      className="btn btn-sm rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: 40, height: 40, backgroundColor: s.color + '15', color: s.color, border: `1px solid ${s.color}40` }}
                    >
                      <i className={`bi ${s.icon}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-12 col-lg-8">
              <div className="card border-0 shadow-sm rounded-4 p-2">
                <div className="card-body p-4">
                  {submitted ? (
                    <div className="text-center py-5">
                      <div
                        className="rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                        style={{ width: 80, height: 80, backgroundColor: '#d1fae5' }}
                      >
                        <i className="bi bi-check-circle-fill fs-2" style={{ color: '#2ecc71' }}></i>
                      </div>
                      <h4 className="fw-bold mb-2">Message Sent!</h4>
                      <p className="text-muted mb-4">
                        Thank you, <strong>{form.name}</strong>! We've received your message and
                        will get back to you at <strong>{form.email}</strong> within one business day.
                      </p>
                      <button
                        className="btn btn-warning px-4 fw-semibold text-dark"
                        onClick={() => { setForm({ name: '', email: '', phone: '', company: '', subject: '', message: '' }); setSubmitted(false); }}
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <>
                      <h5 className="fw-bold mb-1">Send Us a Message</h5>
                      <p className="text-muted small mb-4">
                        Fill in the form below and our team will reach out to you shortly.
                      </p>
                      <form onSubmit={handleSubmit} noValidate>
                        <div className="row g-3">
                          {/* Name */}
                          <div className="col-12 col-sm-6">
                            <label className="form-label small fw-semibold">
                              Full Name <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={form.name}
                              onChange={handleChange}
                              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                              placeholder="Your full name"
                            />
                            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                          </div>

                          {/* Email */}
                          <div className="col-12 col-sm-6">
                            <label className="form-label small fw-semibold">
                              Email Address <span className="text-danger">*</span>
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={form.email}
                              onChange={handleChange}
                              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                              placeholder="you@company.com"
                            />
                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                          </div>

                          {/* Phone */}
                          <div className="col-12 col-sm-6">
                            <label className="form-label small fw-semibold">Phone Number</label>
                            <input
                              type="tel"
                              name="phone"
                              value={form.phone}
                              onChange={handleChange}
                              className="form-control"
                              placeholder="+91 00000 00000"
                            />
                          </div>

                          {/* Company */}
                          <div className="col-12 col-sm-6">
                            <label className="form-label small fw-semibold">Company Name</label>
                            <input
                              type="text"
                              name="company"
                              value={form.company}
                              onChange={handleChange}
                              className="form-control"
                              placeholder="Your company"
                            />
                          </div>

                          {/* Subject */}
                          <div className="col-12">
                            <label className="form-label small fw-semibold">
                              Subject <span className="text-danger">*</span>
                            </label>
                            <select
                              name="subject"
                              value={form.subject}
                              onChange={handleChange}
                              className={`form-select ${errors.subject ? 'is-invalid' : ''}`}
                            >
                              <option value="">Select a subject...</option>
                              <option>Request a Demo</option>
                              <option>Pricing Enquiry</option>
                              <option>Technical Support</option>
                              <option>Partnership</option>
                              <option>General Enquiry</option>
                            </select>
                            {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                          </div>

                          {/* Message */}
                          <div className="col-12">
                            <label className="form-label small fw-semibold">
                              Message <span className="text-danger">*</span>
                            </label>
                            <textarea
                              name="message"
                              value={form.message}
                              onChange={handleChange}
                              rows={5}
                              className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                              placeholder="Tell us how we can help you..."
                            />
                            {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                          </div>

                          {/* Submit */}
                          <div className="col-12 d-flex justify-content-end">
                            <button
                              type="submit"
                              className="btn btn-warning px-5 fw-semibold text-dark"
                              disabled={loading}
                            >
                              {loading ? (
                                <>
                                  <span className="spinner-border spinner-border-sm me-2" role="status" />
                                  Sending...
                                </>
                              ) : (
                                <>
                                  <i className="bi bi-send-fill me-2"></i>
                                  Send Message
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ STRIP ── */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h4 className="fw-bold">Frequently Asked Questions</h4>
          </div>
          <div className="row g-3 justify-content-center">
            {[
              { q: 'How long does implementation take?', a: 'Most teams are fully onboarded within 2–4 weeks, including training and data migration.' },
              { q: 'Is BuildSmart cloud-based?', a: 'Yes — BuildSmart is fully cloud-native and accessible from any device with a browser.' },
              { q: 'Can I customize roles and access?', a: 'Absolutely. Role-based access control lets you configure exactly what each team member can see and do.' },
              { q: 'Do you offer a free trial?', a: 'We offer a 30-day free pilot for qualifying companies. Contact us to get started.' },
            ].map((faq, i) => (
              <div className="col-12 col-md-6" key={i}>
                <div className="card border-0 shadow-sm rounded-4 p-4">
                  <div className="d-flex gap-3">
                    <div
                      className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                      style={{ width: 36, height: 36, backgroundColor: '#fff3cd', color: '#f7a21e', fontWeight: 700 }}
                    >
                      Q
                    </div>
                    <div>
                      <div className="fw-semibold mb-1">{faq.q}</div>
                      <div className="small text-muted">{faq.a}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
