// src/components/layout/Layout.jsx
// Wraps public pages (Home, Contact) with Navbar and Footer only

import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;