// src/pages/auth/LoginPage.jsx

import { useState }          from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser }         from "../../api/authApi";
import { useAuth }           from "../../context/AuthContext";

// ── Validation ────────────────────────────────────────────────────────────────
const validate = (fields) => {
  const errors = {};

  if (!fields.email) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = "Enter a valid email address";
  }

  if (!fields.password) {
    errors.password = "Password is required";
  }

  return errors;
};

// ── Component ─────────────────────────────────────────────────────────────────
const LoginPage = () => {
  const navigate  = useNavigate();
  const { login } = useAuth();

  const [fields, setFields]             = useState({ email: "", password: "" });
  const [errors, setErrors]             = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe]     = useState(false);
  const [loading, setLoading]           = useState(false);
  const [apiError, setApiError]         = useState("");

  // ── Handle input change ───────────────────────────────────────────────────
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setApiError("");
  };

  // ── Handle submit ─────────────────────────────────────────────────────────
  // EXECUTION FLOW:
  // 1. validate fields → stop if errors
  // 2. call loginUser({ email, password }) → hits Spring Boot
  // 3. Spring Boot returns { token, role, name, email, phone... }
  // 4. login(response.data) → saves to AuthContext + localStorage
  // 5. read role → redirect to correct dashboard
  // 6. unknown role or error → show message, STAY on login page
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Step 1 — frontend validation
    const validationErrors = validate(fields);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setApiError("");

    try {
      // Step 2 — hit Spring Boot via authApi.js → axiosInstance
      const response = await loginUser({
        email:    fields.email,
        password: fields.password,
      });

      // Step 3 — axios wraps response inside response.data
      const data = response.data;

      if (!data || !data.role) {
        setApiError("Something went wrong. Please try again.");
        return;
      }

      // Step 4 — save token + user to AuthContext + localStorage
      login(data);

      // Step 5 — redirect based on role from backend
      const role = data.role;

      if      (role === "ADMIN")           navigate("/admin/dashboard");
      else if (role === "PROJECT_MANAGER") navigate("/project-manager/dashboard");
      else if (role === "FINANCE_OFFICER") navigate("/finance/dashboard");
      else if (role === "VENDOR")          navigate("/vendor/dashboard");
      else if (role === "SITE_ENGINEER")   navigate("/site/dashboard");
      else if (role === "SAFETY_OFFICER")  navigate("/safety/dashboard");
      else {
        // Step 6 — unknown role → stay on page, show error
        setApiError(`Access denied. Unknown role: ${role}. Contact admin.`);
      }

    } catch (error) {
      // Step 6 — wrong password, user not found, server error
      // Extract message from backend response
      const data = error.response?.data;

      console.log("Login error:", error.response?.status, data);

      const messageStr = typeof data?.message === "string" ? data.message.toLowerCase() : "";
      const responseStr = typeof data === "string" ? data.toLowerCase() : "";

      if (messageStr.includes("pending") || messageStr.includes("verified") || responseStr.includes("pending") || responseStr.includes("verified")) {
        setApiError("Access denied. Your account is still not verified.");
        setLoading(false);
        return;
      }

      let message = "Invalid email or password. Please try again.";

      if (data) {
        if (typeof data === "string") {
          message = data;
        } else if (typeof data === "object" && data.message) {
          message = data.message;
        }
      }

      // Show error on login page — NO navigate() here
      setApiError(message);

    } finally {
      // Always runs — re-enable the button
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
              PROJECT MANAGEMENT PLATFORM
            </span>
            <h1 className="display-5 fw-bold lh-sm mb-3">
              Manage every project<br />
              with <span style={{ color: "#facc15" }}>precision</span>
            </h1>
            <p className="text-white-50 fs-6 lh-lg">
              One platform for admins, project managers, finance teams,
              vendors, site engineers and safety officers.
            </p>
          </div>

          {/* Stats */}
          <div className="d-flex gap-4">
            {[["6", "ROLES"], ["∞", "PROJECTS"], ["24/7", "ACCESS"]].map(([num, label]) => (
              <div key={label}>
                <div className="fw-bold fs-3">{num}</div>
                <div className="text-white-50" style={{ fontSize: 11, letterSpacing: 1 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT SIDE — Login Form ── */}
        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center bg-white p-4 p-md-5">
          <div className="w-100" style={{ maxWidth: 420 }}>

            <h2 className="fw-bold mb-1">Welcome back</h2>
            <p className="text-muted mb-4">Sign in to your account to continue</p>

            {/* API Error — shows when backend returns error */}
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

              {/* Email */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="sunil@gmail.com"
                  value={fields.email}
                  onChange={handleChange}
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>

              {/* Password */}
              <div className="mb-3">
                <label htmlFor="password" className="form-label fw-semibold">
                  Password
                </label>
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

              {/* Remember me + Forgot password */}
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="form-check">
                  <input
                    id="rememberMe"
                    type="checkbox"
                    className="form-check-input"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label htmlFor="rememberMe" className="form-check-label text-muted">
                    Remember me
                  </label>
                </div>
                <Link to="/forgot-password" className="text-decoration-none small fw-semibold">
                  Forgot password?
                </Link>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="btn btn-dark w-100 py-2 fw-semibold"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" />
                    Signing in...
                  </>
                ) : (
                  "Sign In"
                )}
              </button>

            </form>

            {/* Switch to register */}
            <p className="text-center text-muted mt-4 mb-0 small">
              Don't have an account?{" "}
              <Link to="/auth/register" className="fw-bold text-decoration-none">
                Create one
              </Link>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;