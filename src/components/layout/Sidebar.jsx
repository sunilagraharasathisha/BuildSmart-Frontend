import { useState } from "react";

// ── Role-based nav config ──────────────────────────────────────────────────
// Add more items per role when ready — just extend the array.
const NAV_CONFIG = {
  ADMIN: [
    { icon: "bi-speedometer2", label: "Dashboard", href: "/admin/dashboard" },
    { icon: "bi-people-fill",  label: "Users",     href: "/admin/users" },
  ],
  PROJECT_MANAGER: [
    { icon: "bi-speedometer2",  label: "Dashboard", href: "/pm/dashboard" },
    { icon: "bi-kanban-fill",   label: "Projects",  href: "/pm/projects" },
  ],
  SITE_ENGINEER: [
    { icon: "bi-speedometer2",    label: "Dashboard",   href: "/engineer/dashboard" },
    { icon: "bi-clipboard-data",  label: "Site Logs",   href: "/engineer/logs" },
  ],
  SAFETY_OFFICER: [
    { icon: "bi-speedometer2",         label: "Dashboard", href: "/safety/dashboard" },
    { icon: "bi-shield-exclamation",   label: "Incidents", href: "/safety/incidents" },
  ],
  VENDOR: [
    { icon: "bi-speedometer2", label: "Dashboard", href: "/vendor/dashboard" },
    { icon: "bi-receipt",      label: "Orders",    href: "/vendor/orders" },
  ],
  FINANCE_OFFICER: [
    { icon: "bi-speedometer2",      label: "Dashboard", href: "/finance/dashboard" },
    { icon: "bi-cash-coin",         label: "Budget",    href: "/finance/budget" },
  ],
};

const ROLE_BADGE = {
  ADMIN:           { label: "Admin",           color: "#e74c3c" },
  PROJECT_MANAGER: { label: "Project Manager", color: "#f39c12" },
  SITE_ENGINEER:   { label: "Site Engineer",   color: "#3498db" },
  SAFETY_OFFICER:  { label: "Safety Officer",  color: "#e67e22" },
  VENDOR:          { label: "Vendor",          color: "#2ecc71" },
  FINANCE_OFFICER: { label: "Finance Officer", color: "#9b59b6" },
};

// ── Sidebar Component ──────────────────────────────────────────────────────
export default function Sidebar({
  role = "ADMIN",
  user = { name: "Alex Johnson", email: "alex@buildsmart.com", avatar: null },
  activePath = "",
  onSignOut = () => {},
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = NAV_CONFIG[role] || NAV_CONFIG.ADMIN;
  const badge    = ROLE_BADGE[role]  || ROLE_BADGE.ADMIN;
  const initials = user.name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);

  const sidebarClasses = [
    "bs-sidebar",
    collapsed  ? "bs-sidebar--collapsed" : "",
    mobileOpen ? "bs-sidebar--mobile-open" : "",
  ].filter(Boolean).join(" ");

  return (
    <>
      {/* ── Mobile overlay ── */}
      {mobileOpen && (
        <div
          className="bs-overlay d-lg-none"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* ── Mobile hamburger ── */}
      <button
        className="bs-mobile-toggle d-lg-none btn"
        onClick={() => setMobileOpen(true)}
        aria-label="Open sidebar"
      >
        <i className="bi bi-list" />
      </button>

      {/* ── Sidebar ── */}
      <aside className={sidebarClasses}>

        {/* Logo row */}
        <div className="bs-logo-row">
          <div className="bs-logo">
            <div className="bs-logo-icon">
              <i className="bi bi-buildings-fill" />
            </div>
            {!collapsed && (
              <span className="bs-logo-text">
                Build<strong>Smart</strong>
              </span>
            )}
          </div>

          {/* Desktop collapse toggle */}
          <button
            className="bs-collapse-btn d-none d-lg-flex"
            onClick={() => setCollapsed(c => !c)}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            title={collapsed ? "Expand" : "Collapse"}
          >
            <i className={`bi ${collapsed ? "bi-chevron-double-right" : "bi-chevron-double-left"}`} />
          </button>

          {/* Mobile close */}
          <button
            className="bs-collapse-btn d-lg-none"
            onClick={() => setMobileOpen(false)}
            aria-label="Close sidebar"
          >
            <i className="bi bi-x-lg" />
          </button>
        </div>

        {/* Role badge */}
        {!collapsed && (
          <div className="bs-role-badge" style={{ "--badge-color": badge.color }}>
            <i className="bi bi-shield-check-fill me-1" />
            {badge.label}
          </div>
        )}

        {/* Divider */}
        <div className="bs-divider" />

        {/* Nav items */}
        <nav className="bs-nav">
          {navItems.map(item => {
            const isActive = activePath === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`bs-nav-item ${isActive ? "bs-nav-item--active" : ""}`}
                title={collapsed ? item.label : ""}
              >
                <span className="bs-nav-icon">
                  <i className={`bi ${item.icon}`} />
                </span>
                {!collapsed && (
                  <span className="bs-nav-label">{item.label}</span>
                )}
                {isActive && <span className="bs-active-pip" />}
              </a>
            );
          })}
        </nav>

        {/* Spacer */}
        <div className="bs-spacer" />

        {/* Divider */}
        <div className="bs-divider" />

        {/* Profile */}
        <div className="bs-profile">
          <div className="bs-avatar">
            {user.avatar
              ? <img src={user.avatar} alt={user.name} />
              : <span>{initials}</span>
            }
          </div>
          {!collapsed && (
            <div className="bs-profile-info">
              <p className="bs-profile-name">{user.name}</p>
              <p className="bs-profile-email">{user.email}</p>
            </div>
          )}
        </div>

        {/* Sign out */}
        <button
          className="bs-signout-btn"
          onClick={onSignOut}
          title={collapsed ? "Sign out" : ""}
        >
          <span className="bs-nav-icon">
            <i className="bi bi-box-arrow-left" />
          </span>
          {!collapsed && <span className="bs-nav-label">Sign Out</span>}
        </button>

      </aside>

      {/* ── Styles ── */}
      <style>{`
        /* ═══ CSS Variables ═══════════════════════════════════════════════ */
        :root {
          --sb-width:          260px;
          --sb-width-collapsed: 72px;
          --sb-bg:             #0f1923;
          --sb-bg2:            #162030;
          --sb-accent:         #f5a623;
          --sb-accent-dim:     rgba(245,166,35,0.12);
          --sb-text:           #c8d6e5;
          --sb-text-muted:     #5d7a96;
          --sb-border:         rgba(255,255,255,0.06);
          --sb-radius:         14px;
          --sb-transition:     0.28s cubic-bezier(.4,0,.2,1);
          --sb-logo-font:      'Syne', sans-serif;
          --sb-body-font:      'DM Sans', sans-serif;
        }

        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

        /* ═══ Overlay ════════════════════════════════════════════════════ */
        .bs-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.55);
          backdrop-filter: blur(3px);
          z-index: 1039;
        }

        /* ═══ Mobile toggle ══════════════════════════════════════════════ */
        .bs-mobile-toggle {
          position: fixed;
          top: 14px;
          left: 14px;
          z-index: 1040;
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: var(--sb-bg);
          color: var(--sb-accent);
          border: 1px solid var(--sb-border);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          box-shadow: 0 4px 18px rgba(0,0,0,0.4);
          transition: all 0.2s;
        }
        .bs-mobile-toggle:hover {
          background: var(--sb-bg2);
          transform: scale(1.05);
        }

        /* ═══ Sidebar shell ══════════════════════════════════════════════ */
        .bs-sidebar {
          font-family: var(--sb-body-font);
          position: fixed;
          top: 0;
          left: 0;
          height: 100vh;
          width: var(--sb-width);
          background: var(--sb-bg);
          display: flex;
          flex-direction: column;
          padding: 20px 12px 16px;
          gap: 0;
          z-index: 1040;
          transition: width var(--sb-transition), transform var(--sb-transition);
          overflow: hidden;
          border-right: 1px solid var(--sb-border);
          box-shadow: 4px 0 32px rgba(0,0,0,0.35);
        }

        /* Collapsed */
        .bs-sidebar--collapsed {
          width: var(--sb-width-collapsed);
        }

        /* Mobile: off-canvas */
        @media (max-width: 991.98px) {
          .bs-sidebar {
            transform: translateX(-100%);
            width: var(--sb-width) !important;
          }
          .bs-sidebar--mobile-open {
            transform: translateX(0);
          }
        }

        /* ═══ Logo row ═══════════════════════════════════════════════════ */
        .bs-logo-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 48px;
          margin-bottom: 14px;
          padding: 0 4px;
        }
        .bs-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          overflow: hidden;
          flex: 1;
        }
        .bs-logo-icon {
          flex-shrink: 0;
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, var(--sb-accent) 0%, #e08b10 100%);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.15rem;
          color: #0f1923;
          box-shadow: 0 3px 12px rgba(245,166,35,0.35);
        }
        .bs-logo-text {
          font-family: var(--sb-logo-font);
          font-size: 1.15rem;
          color: #fff;
          white-space: nowrap;
          letter-spacing: -0.3px;
        }
        .bs-logo-text strong {
          color: var(--sb-accent);
        }

        /* ═══ Collapse button ════════════════════════════════════════════ */
        .bs-collapse-btn {
          flex-shrink: 0;
          width: 30px;
          height: 30px;
          border-radius: 8px;
          background: transparent;
          border: 1px solid var(--sb-border);
          color: var(--sb-text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          cursor: pointer;
          transition: all 0.2s;
          padding: 0;
        }
        .bs-collapse-btn:hover {
          background: var(--sb-bg2);
          border-color: var(--sb-accent);
          color: var(--sb-accent);
        }

        /* ═══ Role badge ═════════════════════════════════════════════════ */
        .bs-role-badge {
          display: inline-flex;
          align-items: center;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          color: var(--badge-color, var(--sb-accent));
          background: color-mix(in srgb, var(--badge-color, var(--sb-accent)) 12%, transparent);
          border: 1px solid color-mix(in srgb, var(--badge-color, var(--sb-accent)) 25%, transparent);
          border-radius: 20px;
          padding: 3px 10px;
          margin: 0 4px 12px;
          width: fit-content;
        }

        /* ═══ Divider ════════════════════════════════════════════════════ */
        .bs-divider {
          height: 1px;
          background: var(--sb-border);
          margin: 4px 4px 10px;
          flex-shrink: 0;
        }

        /* ═══ Nav ════════════════════════════════════════════════════════ */
        .bs-nav {
          display: flex;
          flex-direction: column;
          gap: 3px;
          overflow-y: auto;
          overflow-x: hidden;
          scrollbar-width: none;
          flex: 0 0 auto;
        }
        .bs-nav::-webkit-scrollbar { display: none; }

        .bs-nav-item {
          position: relative;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 12px;
          border-radius: 10px;
          color: var(--sb-text);
          text-decoration: none;
          transition: all 0.18s;
          white-space: nowrap;
          overflow: hidden;
          min-height: 44px;
        }
        .bs-nav-item:hover {
          background: var(--sb-bg2);
          color: #fff;
          text-decoration: none;
        }
        .bs-nav-item--active {
          background: var(--sb-accent-dim);
          color: var(--sb-accent);
          font-weight: 600;
        }
        .bs-nav-item--active:hover {
          background: rgba(245,166,35,0.18);
          color: var(--sb-accent);
        }

        .bs-nav-icon {
          flex-shrink: 0;
          width: 20px;
          text-align: center;
          font-size: 1.05rem;
          line-height: 1;
        }
        .bs-nav-label {
          font-size: 0.875rem;
          font-weight: 500;
          transition: opacity var(--sb-transition);
        }
        .bs-active-pip {
          position: absolute;
          right: 10px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--sb-accent);
          box-shadow: 0 0 8px var(--sb-accent);
        }

        /* Collapsed icon centering */
        .bs-sidebar--collapsed .bs-nav-item {
          justify-content: center;
          padding: 10px;
          gap: 0;
        }
        .bs-sidebar--collapsed .bs-nav-item:hover::after {
          content: attr(title);
          position: absolute;
          left: calc(var(--sb-width-collapsed) + 8px);
          background: #1e2d3d;
          color: #fff;
          font-size: 0.8rem;
          padding: 5px 10px;
          border-radius: 7px;
          white-space: nowrap;
          pointer-events: none;
          z-index: 9999;
          box-shadow: 0 4px 14px rgba(0,0,0,0.4);
          border: 1px solid var(--sb-border);
        }
        .bs-sidebar--collapsed .bs-active-pip {
          right: 6px;
          top: 6px;
          width: 5px;
          height: 5px;
        }

        /* ═══ Spacer ═════════════════════════════════════════════════════ */
        .bs-spacer { flex: 1; }

        /* ═══ Profile ════════════════════════════════════════════════════ */
        .bs-profile {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 8px;
          border-radius: 10px;
          background: var(--sb-bg2);
          margin-bottom: 6px;
          overflow: hidden;
          transition: all 0.2s;
          min-height: 56px;
        }
        .bs-profile:hover {
          background: #1d2e40;
        }
        .bs-sidebar--collapsed .bs-profile {
          justify-content: center;
          padding: 10px;
        }

        .bs-avatar {
          flex-shrink: 0;
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: linear-gradient(135deg, #2980b9, #1abc9c);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          font-size: 0.8rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.5px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        }
        .bs-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .bs-profile-info {
          overflow: hidden;
          flex: 1;
        }
        .bs-profile-name {
          font-size: 0.82rem;
          font-weight: 600;
          color: #fff;
          margin: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .bs-profile-email {
          font-size: 0.7rem;
          color: var(--sb-text-muted);
          margin: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* ═══ Sign out ═══════════════════════════════════════════════════ */
        .bs-signout-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 12px;
          border-radius: 10px;
          background: transparent;
          border: 1px solid rgba(231,76,60,0.2);
          color: #e74c3c;
          cursor: pointer;
          font-family: var(--sb-body-font);
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.18s;
          width: 100%;
          text-align: left;
          white-space: nowrap;
          overflow: hidden;
          min-height: 44px;
        }
        .bs-signout-btn:hover {
          background: rgba(231,76,60,0.12);
          border-color: rgba(231,76,60,0.5);
          color: #ff6b6b;
        }
        .bs-sidebar--collapsed .bs-signout-btn {
          justify-content: center;
          padding: 10px;
          gap: 0;
        }

        /* ═══ Content offset helper ══════════════════════════════════════ */
        .bs-main-content {
          margin-left: var(--sb-width);
          transition: margin-left var(--sb-transition);
        }
        .bs-sidebar--collapsed ~ .bs-main-content {
          margin-left: var(--sb-width-collapsed);
        }
        @media (max-width: 991.98px) {
          .bs-main-content {
            margin-left: 0 !important;
          }
        }
      `}</style>
    </>
  );
}
