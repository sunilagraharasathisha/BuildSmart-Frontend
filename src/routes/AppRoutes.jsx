import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// Landing pages
import HomePage from '../pages/landing/HomePage';
import AboutPage from '../pages/landing/AboutPage';
import ServicePage from '../pages/landing/ServicePage';
import ContactPage from '../pages/landing/ContactPage';

// Auth pages (stubs — to be implemented)
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import ForgotPasswordPage from '../pages/auth/ForgotPasswordPage';
import ResetPasswordPage from '../pages/auth/ResetPasswordPage';

const LandingLayout = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
);

const AppRoutes = () => (
  <Routes>
    {/* ── Landing ── */}
    <Route path="/" element={<LandingLayout><HomePage /></LandingLayout>} />
    <Route path="/about" element={<LandingLayout><AboutPage /></LandingLayout>} />
    <Route path="/services" element={<LandingLayout><ServicePage /></LandingLayout>} />
    <Route path="/contact" element={<LandingLayout><ContactPage /></LandingLayout>} />

    {/* ── Auth (stubs) ── */}
    <Route path="/auth/login" element={<LoginPage />} />
    <Route path="/auth/register" element={<RegisterPage />} />
    <Route path="/auth/forgot-password" element={<ForgotPasswordPage />} />
    <Route path="/auth/reset-password" element={<ResetPasswordPage />} />
  </Routes>
);

export default AppRoutes;
