import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Products, About, Basket } from "../pages";

function AppRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/best-selling"
            element={<Products title="best selling" categories />}
          />
          <Route
            path="/products"
            element={<Products title="our products" categories />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </Router>
    </>
  );
}

export default AppRoutes;
