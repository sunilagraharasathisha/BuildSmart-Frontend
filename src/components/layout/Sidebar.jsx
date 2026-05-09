// Sidebar — to be implemented during dashboard integration phase
// const Sidebar = () => null;
// export default Sidebar;
import { useState } from "react";

// ─── Nav Item Definition ──────────────────────────────────────────────────────
// Each item carries: icon (JSX), label, href, badge (optional), roles (array)
// roles: which roles can see this item. Empty array = visible to ALL roles.

const NAV_ITEMS = [
  {
    key: "dashboard",
    label: "Dashboard",
    href: "/dashboard",
    roles: [], // visible to everyone
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    key: "projects",
    label: "Projects",
    href: "/projects",
    roles: ["admin", "project_manager", "site", "safety"],
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="12" x2="15" y2="12" />
        <line x1="3" y1="18" x2="18" y2="18" />
      </svg>
    ),
  },
  {
    key: "messages",
    label: "Messages",
    href: "/messages",
    badge: 8,
    roles: [],
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    key: "services",
    label: "Services",
    href: "/services",
    roles: ["admin", "vendor"],
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
  },
  {
    key: "finance",
    label: "Finance",
    href: "/finance",
    roles: ["admin", "finance"],
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    key: "customers",
    label: "Customers",
    href: "/customers",
    roles: ["admin", "project_manager"],
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    key: "vendors",
    label: "Vendors",
    href: "/vendors",
    roles: ["admin", "vendor"],
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    key: "safety",
    label: "Safety",
    href: "/safety",
    roles: ["admin", "safety", "site"],
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    key: "notifications",
    label: "Notifications",
    href: "/notifications",
    roles: [],
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
  {
    key: "settings",
    label: "Settings",
    href: "/settings",
    roles: ["admin"],
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
];

const BOTTOM_ITEMS = [
  {
    key: "account",
    label: "Account",
    href: "/account",
    roles: [],
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    key: "logout",
    label: "Logout",
    href: "/logout",
    roles: [],
    danger: true,
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        <polyline points="16 17 21 12 16 7" />
        <line x1="21" y1="12" x2="9" y2="12" />
      </svg>
    ),
  },
];

// ─── Logo ─────────────────────────────────────────────────────────────────────
const AgencyLogo = ({ collapsed }) => (
  <div className="d-flex align-items-center gap-2 px-2 mb-4 mt-1">
    <div
      style={{
        width: 42,
        height: 42,
        background: "#000",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    </div>
    {!collapsed && (
      <span style={{ fontWeight: 800, fontSize: 18, letterSpacing: 2, color: "#000", fontFamily: "'DM Sans', sans-serif" }}>
        AGENCY
      </span>
    )}
  </div>
);

// ─── Nav Link Item ─────────────────────────────────────────────────────────────
const NavItem = ({ icon, label, href, badge, collapsed, active, danger }) => (
  <a
    href={href}
    className="d-flex align-items-center gap-3 text-decoration-none position-relative"
    style={{
      padding: collapsed ? "10px 0" : "10px 12px",
      borderRadius: 10,
      color: danger ? "#dc3545" : active ? "#000" : "#6c757d",
      background: active ? "#f0f0f0" : "transparent",
      fontWeight: active ? 600 : 400,
      fontSize: 14.5,
      transition: "all 0.18s ease",
      justifyContent: collapsed ? "center" : "flex-start",
      fontFamily: "'DM Sans', sans-serif",
    }}
    onMouseEnter={(e) => {
      if (!active) e.currentTarget.style.background = "#f8f8f8";
      if (!active) e.currentTarget.style.color = danger ? "#dc3545" : "#000";
    }}
    onMouseLeave={(e) => {
      if (!active) e.currentTarget.style.background = "transparent";
      if (!active) e.currentTarget.style.color = danger ? "#dc3545" : "#6c757d";
    }}
    title={collapsed ? label : ""}
  >
    <span style={{ flexShrink: 0, display: "flex" }}>{icon}</span>
    {!collapsed && <span>{label}</span>}
    {!collapsed && badge ? (
      <span
        className="ms-auto badge rounded-pill"
        style={{ background: "#000", color: "#fff", fontSize: 11, minWidth: 22 }}
      >
        {badge}
      </span>
    ) : null}
    {collapsed && badge ? (
      <span
        style={{
          position: "absolute",
          top: 4,
          right: 4,
          width: 8,
          height: 8,
          background: "#dc3545",
          borderRadius: "50%",
        }}
      />
    ) : null}
  </a>
);

// ─── Sidebar Component ─────────────────────────────────────────────────────────
/**
 * Props:
 *   role        — "admin" | "project_manager" | "finance" | "vendor" | "site" | "safety"
 *   activeKey   — key of currently active nav item
 *   navItems    — optional override; defaults to NAV_ITEMS above
 *   bottomItems — optional override; defaults to BOTTOM_ITEMS above
 */
const Sidebar = ({
  role = "admin",
  activeKey = "dashboard",
  navItems = NAV_ITEMS,
  bottomItems = BOTTOM_ITEMS,
}) => {
  const [collapsed, setCollapsed] = useState(false);   // desktop collapse
  const [mobileOpen, setMobileOpen] = useState(false); // mobile drawer

  // Filter items by role
  const filterByRole = (items) =>
    items.filter((item) => item.roles.length === 0 || item.roles.includes(role));

  const visibleNav = filterByRole(navItems);
  const visibleBottom = filterByRole(bottomItems);

  const sidebarWidth = collapsed ? 72 : 240;

  const sidebarContent = (isMobile = false) => (
    <div
      className="d-flex flex-column h-100 py-3 px-2"
      style={{ gap: 2 }}
    >
      {/* Header: Logo + Toggle */}
      <div className="d-flex align-items-center justify-content-between mb-2 px-1">
        <AgencyLogo collapsed={!isMobile && collapsed} />
        {isMobile ? (
          <button
            className="btn btn-sm btn-light ms-auto"
            onClick={() => setMobileOpen(false)}
            style={{ borderRadius: 8, border: "1px solid #e0e0e0" }}
            aria-label="Close sidebar"
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        ) : (
          <button
            className="btn btn-sm btn-light"
            onClick={() => setCollapsed(!collapsed)}
            style={{ borderRadius: 8, border: "1px solid #e0e0e0", flexShrink: 0 }}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? (
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            ) : (
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            )}
          </button>
        )}
      </div>

      {/* Role badge */}
      {(!collapsed || isMobile) && (
        <div className="px-2 mb-3">
          <span
            style={{
              display: "inline-block",
              background: "#f0f0f0",
              color: "#555",
              fontSize: 11,
              fontWeight: 600,
              padding: "3px 10px",
              borderRadius: 20,
              textTransform: "uppercase",
              letterSpacing: 1,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {role.replace("_", " ")}
          </span>
        </div>
      )}

      {/* Main Nav */}
      <nav className="d-flex flex-column flex-grow-1" style={{ gap: 2 }}>
        {visibleNav.map((item) => (
          <NavItem
            key={item.key}
            icon={item.icon}
            label={item.label}
            href={item.href}
            badge={item.badge}
            collapsed={!isMobile && collapsed}
            active={item.key === activeKey}
          />
        ))}
      </nav>

      {/* Divider */}
      <hr style={{ borderColor: "#e8e8e8", margin: "8px 0" }} />

      {/* Bottom Nav */}
      <div className="d-flex flex-column" style={{ gap: 2 }}>
        {visibleBottom.map((item) => (
          <NavItem
            key={item.key}
            icon={item.icon}
            label={item.label}
            href={item.href}
            collapsed={!isMobile && collapsed}
            active={item.key === activeKey}
            danger={item.danger}
          />
        ))}
      </div>
    </div>
  );

  return (
    <>
      {/* ── Google Font ── */}
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      {/* ── Desktop Sidebar (md and up) ── */}
      <div
        className="d-none d-md-flex flex-column bg-white"
        style={{
          width: sidebarWidth,
          minWidth: sidebarWidth,
          height: "100vh",
          borderRight: "1px solid #ebebeb",
          transition: "width 0.22s cubic-bezier(.4,0,.2,1), min-width 0.22s cubic-bezier(.4,0,.2,1)",
          overflow: "hidden",
          position: "sticky",
          top: 0,
          flexShrink: 0,
        }}
      >
        {sidebarContent(false)}
      </div>

      {/* ── Mobile: Hamburger Button (shown on small screens) ── */}
      <button
        className="d-md-none btn btn-light position-fixed"
        style={{
          top: 16,
          left: 16,
          zIndex: 1050,
          borderRadius: 10,
          border: "1px solid #e0e0e0",
          width: 42,
          height: 42,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        }}
        onClick={() => setMobileOpen(true)}
        aria-label="Open sidebar"
      >
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {/* ── Mobile: Backdrop ── */}
      {mobileOpen && (
        <div
          className="d-md-none position-fixed top-0 start-0 w-100 h-100"
          style={{ background: "rgba(0,0,0,0.35)", zIndex: 1055 }}
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* ── Mobile: Drawer ── */}
      <div
        className="d-md-none position-fixed top-0 start-0 h-100 bg-white"
        style={{
          width: 260,
          zIndex: 1060,
          transform: mobileOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.25s cubic-bezier(.4,0,.2,1)",
          borderRight: "1px solid #ebebeb",
          overflowY: "auto",
        }}
      >
        {sidebarContent(true)}
      </div>
    </>
  );
};

// ─── Demo App: shows Sidebar + content side-by-side ──────────────────────────
// This is the usage example. In your real app, wrap your routes/pages with
// this layout pattern and pass the `role` + `activeKey` from your auth context.

const ROLES = ["admin", "project_manager", "finance", "vendor", "site", "safety"];

export default function App() {
  const [demoRole, setDemoRole] = useState("admin");
  const [demoActive, setDemoActive] = useState("dashboard");

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#fafafa" }}>
      {/* Sidebar receives role and activeKey as props */}
      <Sidebar role={demoRole} activeKey={demoActive} />

      {/* Main content — adjusts automatically when sidebar opens/closes */}
      <main style={{ flex: 1, padding: "32px 28px", minWidth: 0 }}>

        {/* Demo controls */}
        <div className="mb-4">
          <h5 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, marginBottom: 16 }}>
            🎛 Demo Controls
          </h5>
          <div className="mb-3">
            <label className="form-label fw-semibold" style={{ fontSize: 13, color: "#555" }}>
              Switch Role
            </label>
            <div className="d-flex flex-wrap gap-2">
              {ROLES.map((r) => (
                <button
                  key={r}
                  className={`btn btn-sm ${demoRole === r ? "btn-dark" : "btn-outline-secondary"}`}
                  style={{ borderRadius: 20, fontSize: 12, textTransform: "capitalize" }}
                  onClick={() => setDemoRole(r)}
                >
                  {r.replace("_", " ")}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            background: "#fff",
            border: "1px solid #ebebeb",
            borderRadius: 16,
            padding: "28px 24px",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          <h4 style={{ fontWeight: 700 }}>Main Content Area</h4>
          <p style={{ color: "#888", marginBottom: 8 }}>
            Current role: <strong style={{ color: "#000" }}>{demoRole.replace("_", " ")}</strong>
          </p>
          <p style={{ color: "#888", fontSize: 14 }}>
            The sidebar automatically shows only the nav items permitted for this role.
            On mobile, the sidebar is hidden behind a hamburger menu and slides in as a drawer
            without overlapping this content area.
          </p>
        </div>

        <div className="mt-3 p-3 rounded-3" style={{ background: "#f6f6f6", fontSize: 13, color: "#666", fontFamily: "monospace" }}>
          {`<Sidebar role="${demoRole}" activeKey="${demoActive}" />`}
        </div>
      </main>
    </div>
  );
}

// ─── Export Sidebar standalone for use in your own layout ────────────────────
export { Sidebar, NAV_ITEMS, BOTTOM_ITEMS };
