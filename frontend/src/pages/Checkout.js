import React from "react";
import { NavBar, Footer } from "../components/layout";

function Checkout() {
  return (
    <>
      <NavBar />
        <div className="mt-20">
            Check out
            <div className="">Delevery Form</div>
            <div className="">Items quantity</div>
        </div>
      <Footer />
    </>
  );
}

export default Checkout;
