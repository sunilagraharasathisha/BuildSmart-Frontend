// src/routes/AppRoutes.jsx

import { Routes, Route } from "react-router-dom";

// Layout
import Layout         from "../components/layout/Layout";

// Auth pages
import LoginPage      from "../pages/auth/LoginPage";
import RegisterPage   from "../pages/auth/RegisterPage";

// Landing pages
import HomePage       from "../pages/landing/HomePage";
import ContactPage    from "../pages/landing/ContactPage";

// Dashboard pages — real imports from your actual files
import AdminDashboard          from "../pages/dashboard/admin/AdminDashboard";
import FinanceDashboard        from "../pages/dashboard/finance/FinanceDashboard";
import ProjectManagerDashboard from "../pages/dashboard/projectmanager/ProjectManagerDashboard";
import SafetyDashboard         from "../pages/dashboard/safety/SafetyDashboard";
import SiteDashboard           from "../pages/dashboard/site/SiteDashboard";
import VendorDashboard         from "../pages/dashboard/vendor/VendorDashboard";

// Route guard
import ProtectedRoute from "./ProtectedRoute";

// Special pages
const UnauthorizedPage = () => (
  <div className="container text-center mt-5">
    <h2 className="text-danger">403</h2>
    <p className="text-muted">You are not allowed to access this page.</p>
  </div>
);

const NotFoundPage = () => (
  <div className="container text-center mt-5">
    <h2>404</h2>
    <p className="text-muted">Page not found.</p>
  </div>
);

// ── AppRoutes ─────────────────────────────────────────────────────────────────
const AppRoutes = () => {
  return (
    <Routes>

      {/* ── Public pages — WITH Navbar and Footer ─────────────────────────── */}
      <Route path="/"        element={<Layout><HomePage /></Layout>} />
      <Route path="/contact" element={<Layout><ContactPage /></Layout>} />

      {/* ── Auth pages — NO Navbar NO Footer ──────────────────────────────── */}
      <Route path="/login"    element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* ── Role based dashboards ─────────────────────────────────────────── */}
      {/* Each route checks: 1. is logged in 2. is correct role               */}

      <Route path="/admin/dashboard" element={
        <ProtectedRoute allowedRoles={["ADMIN"]}>
          <AdminDashboard />
        </ProtectedRoute>
      } />

      <Route path="/finance/dashboard" element={
        <ProtectedRoute allowedRoles={["FINANCE_OFFICER"]}>
          <FinanceDashboard />
        </ProtectedRoute>
      } />

      <Route path="/project-manager/dashboard" element={
        <ProtectedRoute allowedRoles={["PROJECT_MANAGER"]}>
          <ProjectManagerDashboard />
        </ProtectedRoute>
      } />

      <Route path="/safety/dashboard" element={
        <ProtectedRoute allowedRoles={["SAFETY_OFFICER"]}>
          <SafetyDashboard />
        </ProtectedRoute>
      } />

      <Route path="/site/dashboard" element={
        <ProtectedRoute allowedRoles={["SITE_ENGINEER"]}>
          <SiteDashboard />
        </ProtectedRoute>
      } />

      <Route path="/vendor/dashboard" element={
        <ProtectedRoute allowedRoles={["VENDOR"]}>
          <VendorDashboard />
        </ProtectedRoute>
      } />

      {/* ── Special ───────────────────────────────────────────────────────── */}
      <Route path="/unauthorized" element={<UnauthorizedPage />} />
      <Route path="*"             element={<NotFoundPage />} />

    </Routes>
  );
};

export default AppRoutes;
