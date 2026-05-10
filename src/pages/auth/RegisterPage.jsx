// src/pages/auth/RegisterPage.jsx

import { useState }          from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser }      from "../../api/authApi";

// ── Role options matching your Spring Boot enum ───────────────────────────────
const ROLES = [
  { value: "",                label: "Select your role"  },
  { value: "ADMIN",           label: "Admin"             },
  { value: "PROJECT_MANAGER", label: "Project Manager"   },
  { value: "FINANCE",         label: "Finance"           },
  { value: "VENDOR",          label: "Vendor"            },
  { value: "SITE",            label: "Site Engineer"     },
  { value: "SAFETY",          label: "Safety Officer"    },
];

// ── Validation ────────────────────────────────────────────────────────────────
const validate = (fields) => {
  const errors = {};

  if (!fields.name.trim()) {
    errors.name = "Name is required";
  } else if (!/^[a-zA-Z\s]{2,}$/.test(fields.name.trim())) {
    errors.name = "Letters only, minimum 2 characters";
  }

  if (!fields.email) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@gmail\.com$/.test(fields.email)) {
    errors.email = "Only @gmail.com email addresses are accepted";
  }

  if (!fields.phone) {
    errors.phone = "Phone number is required";
  } else if (!/^\d{10}$/.test(fields.phone)) {
    errors.phone = "Phone must be exactly 10 digits";
  }

  if (!fields.password) {
    errors.password = "Password is required";
  } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(fields.password)) {
    errors.password = "Min 6 chars with uppercase, lowercase and number";
  }

  if (!fields.role) {
    errors.role = "Please select your role";
  }

  return errors;
};

// ── Component ─────────────────────────────────────────────────────────────────
const RegisterPage = () => {
  const navigate = useNavigate();

  const [fields, setFields]             = useState({ name: "", email: "", phone: "", password: "", role: "" });
  const [errors, setErrors]             = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading]           = useState(false);
  const [apiError, setApiError]         = useState("");

  // ── Handle input change ───────────────────────────────────────────────────
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Phone → block non-digits while typing
    if (name === "phone" && value && !/^\d*$/.test(value)) return;

    setFields((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setApiError("");
  };

  // ── Handle submit ─────────────────────────────────────────────────────────
  // EXECUTION FLOW:
  // 1. validate all fields → stop if errors
  // 2. call registerUser({ name, email, phone, password, role }) → hits Spring Boot
  // 3. Spring Boot saves user to DB → returns success
  // 4. navigate("/login") → go to login page
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate(fields);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setApiError("");

    try {
      // Step 2 — calls authApi.js → axiosInstance → Spring Boot
      await registerUser({
        name    : fields.name.trim(),
        email   : fields.email,
        phone   : fields.phone,
        password: fields.password,
        role    : fields.role,
      });

      // Step 4 — success → go to login
      navigate("/login");

    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.response?.data ||
        "Registration failed. Please try again.";
      setApiError(message);
    } finally {
      setLoading(false);
    }
  };

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="container-fluid min-vh-100 p-0">
      <div className="row g-0 min-vh-100">

        {/* ── LEFT SIDE — visible only on md and above ── */}
        <div
          className="col-md-6 d-none d-md-flex flex-column justify-content-between p-5 text-white"
          style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)" }}
        >
          {/* Logo */}
          <div className="d-flex align-items-center gap-2">
            <div
              className="rounded-3 d-flex align-items-center justify-content-center"
              style={{ width: 44, height: 44, background: "#fff" }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2.2">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="fw-bold fs-5">BuildSmart</span>
          </div>

          {/* Center text */}
          <div>
            <span
              className="badge rounded-pill mb-3 px-3 py-2"
              style={{ background: "rgba(255,255,255,0.1)", fontSize: 11, letterSpacing: 2 }}
            >
              JOIN THE PLATFORM
            </span>
            <h1 className="display-5 fw-bold lh-sm mb-3">
              One platform,<br />
              <span style={{ color: "#facc15" }}>six roles</span>,<br />
              zero confusion
            </h1>
            <p className="text-white-50 fs-6 lh-lg mb-4">
              Register and get access to tools built specifically for your role —
              whether you manage projects, handle finances, or oversee site safety.
            </p>

            {/* Role chips */}
            <div className="d-flex flex-wrap gap-2">
              {["Admin", "Project Manager", "Finance", "Vendor", "Site", "Safety"].map((r) => (
                <span
                  key={r}
                  className="badge rounded-pill px-3 py-2"
                  style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", fontSize: 12 }}
                >
                  {r}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom note */}
          <p className="text-white-50 small mb-0">
            Already have an account?{" "}
            <Link to="/login" className="text-warning text-decoration-none fw-semibold">
              Sign in here →
            </Link>
          </p>
        </div>

        {/* ── RIGHT SIDE — Register Form ── */}
        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center bg-white p-4 p-md-5">
          <div className="w-100" style={{ maxWidth: 440 }}>

            <h2 className="fw-bold mb-1">Create your account</h2>
            <p className="text-muted mb-4">Fill in your details to get started</p>

            {/* API Error */}
            {apiError && (
              <div className="alert alert-danger d-flex align-items-center gap-2 py-2" role="alert">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <small>{apiError}</small>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>

              {/* Full Name */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold">Full Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Rashmi Sharma"
                  value={fields.name}
                  onChange={handleChange}
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>

              {/* Email */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="rashmi@gmail.com"
                  value={fields.email}
                  onChange={handleChange}
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>

              {/* Phone */}
              <div className="mb-3">
                <label htmlFor="phone" className="form-label fw-semibold">Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="9876543210"
                  value={fields.phone}
                  onChange={handleChange}
                  maxLength={10}
                  className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                />
                {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
              </div>

              {/* Password */}
              <div className="mb-3">
                <label htmlFor="password" className="form-label fw-semibold">Password</label>
                <div className="input-group">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={fields.password}
                    onChange={handleChange}
                    className={`form-control ${errors.password ? "is-invalid" : ""}`}
                  />
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => setShowPassword(!showPassword)}
                    tabIndex={-1}
                  >
                    {showPassword ? (
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                      </svg>
                    ) : (
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
              </div>

              {/* Role */}
              <div className="mb-4">
                <label htmlFor="role" className="form-label fw-semibold">Role</label>
                <select
                  id="role"
                  name="role"
                  value={fields.role}
                  onChange={handleChange}
                  className={`form-select ${errors.role ? "is-invalid" : ""}`}
                >
                  {ROLES.map((r) => (
                    <option key={r.value} value={r.value} disabled={r.value === ""}>
                      {r.label}
                    </option>
                  ))}
                </select>
                {errors.role && <div className="invalid-feedback">{errors.role}</div>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn btn-dark w-100 py-2 fw-semibold"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" />
                    Creating account...
                  </>
                ) : (
                  "Create Account"
                )}
              </button>

            </form>

            {/* Switch to login */}
            <p className="text-center text-muted mt-4 mb-0 small">
              Already have an account?{" "}
              <Link to="/login" className="fw-bold text-decoration-none">
                Sign in
              </Link>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
};

export default RegisterPage;
