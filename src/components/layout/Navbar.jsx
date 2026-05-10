import { useState } from "react";
import { Link } from 'react-router-dom';

const navLinks = [
  { label: "Home",       href: "/" },
  { label: "Services",   href: "#services" },
  { label: "About us",   href: "#about" },
  { label: "Contact us", href: "/contact", isRoute: true },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white px-4 py-4">
        <div className="container-fluid">

        {/* Logo */}
        <a className="navbar-brand fw-bold bg-light rounded px-3 py-1" href="#">BuildSmart</a>

          {/* Hamburger */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav Links */}
          <div className="collapse navbar-collapse justify-content-center" id="mainNav">
            <div className="d-flex flex-column flex-lg-row bg-light rounded px-4 py-2 gap-4 gap-lg-5 w-auto">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`nav-link text-black ${active === link.label ? "fw-bold" : "fw-normal"}`}
                  onClick={() => setActive(link.label)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Login Button */}
<Link
  to="/login"
  className="btn bg-warning rounded-3 d-none d-lg-block"
>
  Login
</Link>

        </div>
      </nav>
    </>
  );
}