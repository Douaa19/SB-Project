import React from "react";
import { Button } from "../atoms";

function CheckoutPopupContent(props) {
  return (
    <div className="w-full bg-[#07030a] h-[100vh] flex justify-center items-center">
      <div className=" bg-gray w-fit">
        <div className="flex justify-center items-center flex-col">
          <h1>Send my order</h1>
          <span>{props.subtotal}</span>
          <span>{props.shipping}</span>
          <span>{props.subtotal + props.shipping}</span>
          <span>{props.orders.length}</span>
          <Button
            text="send order"
            type="submit"
            className="border-1 border-main rounded-md md:px-10 ssm:px-6 md:py-3 ssm:py-[6px] capitalize text-white md:text-16 ssm:text-12 outline-none hover:bg-white hover:text-main bg-main font-bold"
          />
        </div>
      </div>
    </div>
  );
}

export default CheckoutPopupContent;
