// src/components/layout/DashboardLayout.jsx
import Sidebar from "./Sidebar";
import { useAuth } from "../../context/AuthContext";

const DashboardLayout = ({ children }) => {
  const { user, logout } = useAuth();

  return (
    <div style={{ display: "flex" }}>
      <Sidebar
        role={user?.role}
        user={{ name: user?.name, email: user?.email }}
        activePath={window.location.pathname}
        onSignOut={logout}
      />
      <main className="bs-main-content w-100 p-4">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;