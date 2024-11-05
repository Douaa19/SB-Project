import React from "react";
import { useSelector } from "react-redux";
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

function AppRoutes() {
  const userId = useSelector((state) => state.user_id);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

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
          <Route
            path="/login"
            element={userId.length > 0 && isLoggedIn ? <Home /> : <Login />}
          />
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
