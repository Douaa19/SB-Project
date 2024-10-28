import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  Products,
  About,
  Basket,
  Contact,
  Product,
  Login,
  Checkout,
} from "../pages";
import { useSelector } from "react-redux";

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
          <Route path="/best-selling/item/:itemId" element={<Product />} />
          <Route path="/products/item/:itemId" element={<Product />} />
          <Route
            path="/products"
            element={<Products title="our products" categories />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/login" element={<Login />} />
          <Route
            path={`/reset-password/:resetToken/:user_id`}
            element={<Login />}
          />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </>
  );
}

export default AppRoutes;
