import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Basket from "../pages/Basket";
import Products from "../pages/Products";

function AppRoutes({ bestSellingItems, newestItems, categories }) {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                bestSellingItems={bestSellingItems}
                newestItems={newestItems}
              />
            }
          />
          <Route
            path="/best-selling"
            element={<Products title="best selling" categories />}
          />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </Router>
    </>
  );
}

export default AppRoutes;
