import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Basket from "../pages/Basket";

function AppRoutes({ bestSellingProducts }) {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home bestSellingProducts={bestSellingProducts} />}
          />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </Router>
    </>
  );
}

export default AppRoutes;