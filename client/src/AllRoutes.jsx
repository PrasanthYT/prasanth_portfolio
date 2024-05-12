import React from "react";
import { Route, Routes } from "react-router-dom";
import Cookies from "js-cookie";

import Home from "./components/Home";
import AdminLoginPage from "./components/AdminLoginPage";
import Dashboard from "./components/Dashboard";

function AllRouter() {
  const isAuthenticated = Cookies.get("_QJGSTJ");

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/login/admin" element={<AdminLoginPage />} />
        <Route
          path="/portfolio/admin/dashboard"
          element={isAuthenticated ? <Home /> : <Dashboard />}
        />
      </Routes>
    </>
  );
}

export default AllRouter;
