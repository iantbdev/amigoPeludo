import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import NavbarLogin from './navbar/NavbarLogin';
import Footer from './footer/Footer';

const Layout = ({ children }) => {
  const location = useLocation();
  const noNavbarRoutes = ['/login', '/registro'];

  return (
    <>
      {noNavbarRoutes.includes(location.pathname) ? <NavbarLogin /> : <Navbar />}
      <main>{children}</main>
      {!noNavbarRoutes.includes(location.pathname) && <Footer />}
    </>
  );
};

export default Layout;
