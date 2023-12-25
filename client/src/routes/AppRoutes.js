import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Basket from "../pages/Basket";

function AppRoutes({ bestSellingItems, newestItems }) {
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
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </Router>
    </>
  );
}

export default AppRoutes;
