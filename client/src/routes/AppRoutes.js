import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Basket from "../pages/Basket";
import Products from "../pages/Products";

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
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </Router>
    </>
  );
}

export default AppRoutes;
