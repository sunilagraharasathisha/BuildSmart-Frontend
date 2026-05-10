// src/routes/ProtectedRoute.jsx

import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children, allowedRoles }) => {

  const { isLoggedIn, user } = useAuth();

  if (!isLoggedIn) {
    // Not logged in → redirect to login page
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    // Logged in but role not allowed → redirect to unauthorized page
    return <Navigate to="/unauthorized" replace />;
  }

  // Logged in → show the actual page
  return children;
};

export default ProtectedRoute;