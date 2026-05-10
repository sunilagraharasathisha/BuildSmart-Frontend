import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// ... your existing page imports stay the same
import HomePage from '../pages/landing/HomePage';
import ContactPage from '../pages/landing/ContactPage';
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import ForgotPasswordPage from '../pages/auth/ForgotPasswordPage';
import ResetPasswordPage from '../pages/auth/ResetPasswordPage';


const LandingLayout = ({ children, onJoinClick }) => (  // 👈 accept prop
  <>
    <Navbar onJoinClick={onJoinClick} />   {/* 👈 pass down */}
    <main>{children}</main>
    <Footer />
  </>
);

const AppRoutes = () => {
  const [showLogin, setShowLogin] = useState(false);  // 👈 state lives here

  return (
    <>
      <Routes>
        {/* ── Landing ── */}
        <Route path="/" element={<LandingLayout onJoinClick={() => setShowLogin(true)}><HomePage /></LandingLayout>} />
        <Route path="/contact" element={<LandingLayout onJoinClick={() => setShowLogin(true)}><ContactPage /></LandingLayout>} />

        {/* ── Auth ── */}
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route path="/auth/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/auth/reset-password" element={<ResetPasswordPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;