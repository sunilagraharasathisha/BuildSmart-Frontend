// src/context/AuthContext.jsx

import { createContext, useContext, useState } from "react";
import { logoutUser } from "../api/authApi";

// ── Part 1: Create the empty global box ───────────────────────────────────────
const AuthContext = createContext(null);

// ── Part 2: AuthProvider — fills and manages the box ─────────────────────────
export const AuthProvider = ({ children }) => {

  // On page refresh, read from localStorage so user stays logged in
  const [user, setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );

  const [token, setToken] = useState(
    localStorage.getItem("token") || null
  );

  // ── login() ────────────────────────────────────────────────────────────────
  // Called from LoginPage after successful API response
  // response = everything your Spring Boot returns
  const login = (response) => {

    // Pull out what we need from backend response
    const userData = {
      name     : response.name,
      email    : response.email,
      phone    : response.phone,
      role     : response.role,       // "ADMIN", "PROJECT_MANAGER" etc
      type     : response.type,       // "Bearer"
      expiresIn: response.expiresIn,  // 3600 seconds
    };

    // Save token and user separately in state
    setToken(response.token);
    setUser(userData);

    // Save to localStorage → survives page refresh
    localStorage.setItem("token", response.token);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // ── logout() ───────────────────────────────────────────────────────────────
  const logout = async () => {
    try {
      await logoutUser(); // tell Spring Boot to invalidate token
    } catch (error) {
      console.error("Logout error:", error);
      // Even if backend fails, we still clear frontend
    } finally {
      setToken(null);
      setUser(null);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
  };

  // ── What every component can access via useAuth() ──────────────────────────
  return (
    <AuthContext.Provider
      value={{
        user,       // { name, email, phone, role, type, expiresIn }
        token,      // "eyJ..."
        isLoggedIn: !!token,  // true or false
        login,      // function → call after successful login API
        logout,     // function → call on logout button click
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// ── Part 3: useAuth() — the key to open the box ───────────────────────────────
// Usage in any component:
// const { user, token, isLoggedIn, login, logout } = useAuth();
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside <AuthProvider>");
  }
  return context;
};