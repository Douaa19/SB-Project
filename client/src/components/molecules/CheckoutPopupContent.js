import React from "react";
import { Button } from "../atoms";

function CheckoutPopupContent(props) {
  return (
    <div className="w-full bg-[#07030a] h-[100vh] flex justify-center items-center">
      <div className=" bg-gray w-fit">
        <div className="flex justify-center items-center flex-col">
          <h1>Send my order</h1>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPopupContent;
