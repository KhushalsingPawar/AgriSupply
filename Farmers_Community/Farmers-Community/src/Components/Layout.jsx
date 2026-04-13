import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout({ onLogin, onSignup }) {
  return (
    <>
      <Navbar onLogin={onLogin} onSignup={onSignup} />
      <Outlet /> {/* Child routes render here */}
    </>
  );
}

export default Layout;
