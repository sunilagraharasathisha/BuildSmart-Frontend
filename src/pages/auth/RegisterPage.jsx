import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../../api/authApi';

const RegisterPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: '',
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = 'Full name is required.';
    } else if (form.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!form.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Enter a valid email address.';
    }

    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^\d{10}$/.test(form.phone)) {
      newErrors.phone = 'Enter a valid 10-digit phone number.';
    }

    if (!form.role) {
      newErrors.role = 'Please select a role.';
    }

    if (!form.password) {
      newErrors.password = 'Password is required.';
    } else if (form.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters.';
    } else if (!/[A-Z]/.test(form.password)) {
      newErrors.password = 'Password must contain at least one uppercase letter.';
    } else if (!/[0-9]/.test(form.password)) {
      newErrors.password = 'Password must contain at least one number.';
    }

    if (!form.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password.';
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError('');

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      await registerUser({
        name: form.name,
        email: form.email,
        phone: form.phone,
        password: form.password,
        role: form.role,
      });
      navigate('/auth/login');
    } catch (err) {
      setServerError(err.response?.data?.message || 'Registration failed. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center py-5"
      style={{ backgroundColor: '#f5f5f5' }}
    >
      <div className="card border-0 shadow" style={{ width: '100%', maxWidth: '460px' }}>

        {/* Header */}
        <div className="card-header text-center py-4 border-0" style={{ backgroundColor: '#1a1a2e' }}>
          <i className="bi bi-building-fill fs-3" style={{ color: '#f7a21e' }}></i>
          <h4 className="text-white mb-0 mt-1">
            <span style={{ color: '#f7a21e' }}>Build</span>Smart
          </h4>
          <p className="text-white-50 small mb-0">Create your account</p>
        </div>

        {/* Body */}
        <div className="card-body p-4">

          {serverError && (
            <div className="alert alert-danger py-2 small">{serverError}</div>
          )}

          <form onSubmit={handleSubmit} noValidate>

            {/* Name */}
            <div className="mb-3">
              <label className="form-label fw-medium">Full Name</label>
              <input
                type="text"
                name="name"
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label fw-medium">Email</label>
              <input
                type="email"
                name="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            {/* Phone */}
            <div className="mb-3">
              <label className="form-label fw-medium">Phone Number</label>
              <input
                type="tel"
                name="phone"
                className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                placeholder="10-digit mobile number"
                value={form.phone}
                onChange={handleChange}
              />
              {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
            </div>

            {/* Role */}
            <div className="mb-3">
              <label className="form-label fw-medium">Register As</label>
              <select
                name="role"
                className={`form-select ${errors.role ? 'is-invalid' : ''}`}
                value={form.role}
                onChange={handleChange}
              >
                <option value="">-- Select your role --</option>
                <option value="PROJECT_MANAGER">Project Manager</option>
                <option value="SITE_ENGINEER">Site Engineer</option>
                <option value="SAFETY_OFFICER">Safety Officer</option>
                <option value="VENDOR">Vendor</option>
                <option value="FINANCE_OFFICER">Finance Officer</option>
              </select>
              {errors.role && <div className="invalid-feedback">{errors.role}</div>}
            </div>

            {/* Password */}
            <div className="mb-3">
              <label className="form-label fw-medium">Password</label>
              <input
                type="password"
                name="password"
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                placeholder="Min 8 chars, 1 uppercase, 1 number"
                value={form.password}
                onChange={handleChange}
              />
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>

            {/* Confirm Password */}
            <div className="mb-4">
              <label className="form-label fw-medium">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                placeholder="Repeat your password"
                value={form.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
            </div>

            <button
              type="submit"
              className="btn btn-warning w-100 fw-bold"
              disabled={loading}
            >
              {loading ? (
                <><span className="spinner-border spinner-border-sm me-2" />Creating account...</>
              ) : 'Create Account'}
            </button>

          </form>

          <p className="text-center mt-3 mb-0 small text-muted">
            Already have an account?{' '}
            <Link to="/auth/login" className="text-warning fw-medium">Login here</Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default RegisterPage;