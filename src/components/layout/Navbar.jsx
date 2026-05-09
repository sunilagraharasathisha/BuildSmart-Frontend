import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top shadow-sm" style={{ backgroundColor: '#1a1a2e' }}>
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <i className="bi bi-building-fill fs-4" style={{ color: '#f7a21e' }}></i>
          <span className="fw-bold fs-4" style={{ color: '#f7a21e' }}>Build</span>
          <span className="fw-bold fs-4 text-white">Smart</span>
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list fs-3 text-white"></i>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav mx-auto gap-lg-2">
            {[
              { path: '/', label: 'Home' },
              { path: '/about', label: 'About' },
              { path: '/services', label: 'Services' },
              { path: '/contact', label: 'Contact' },
            ].map(({ path, label }) => (
              <li className="nav-item" key={path}>
                <NavLink
                  to={path}
                  end
                  className={({ isActive }) =>
                    `nav-link fw-medium px-3 py-2 rounded ${isActive ? 'text-warning' : 'text-white'}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Auth buttons */}
          <div className="d-flex gap-2 mt-3 mt-lg-0">
            <Link to="/auth/login" className="btn btn-outline-warning btn-sm px-3">
              Login
            </Link>
            <Link to="/auth/register" className="btn btn-warning btn-sm px-3 fw-semibold text-dark">
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
