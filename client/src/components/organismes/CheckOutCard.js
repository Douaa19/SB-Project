import React from "react";
import { Button } from "../atoms";

function CheckOutCard({ subtotal, shipping, grandTotal }) {
  // style
  const style = {
    group: "flex justify-between items-center",
    title: "text-dark md:text-16 ssm:text-14 capitalize",
    amount: "md:text-14 ssm:text-12 font-bold",
  };

  return (
    <div className="md:w-full ssm:w-[80%] border  border-gray-100 p-8 rounded-md flex flex-col items-between gap-4">
      <div className={`${style.group}`}>
        <span className={`${style.title}`}>subtotal</span>
        <span className={`${style.amount}`}>{`${subtotal}$`}</span>
      </div>
      <div className={`${style.group}`}>
        <span className={`${style.title}`}>shipping</span>
        <span className={`${style.amount}`}>{`${shipping}$`}</span>
      </div>
      <div className={`${style.group}`}>
        <span className={`${style.title}`}>grand total</span>
        <span className={`${style.amount}`}>{`${grandTotal}$`}</span>
      </div>
      <Button
        className="border-1 border-main rounded-md md:px-10 ssm:px-6 md:py-3 ssm:py-[6px] capitalize text-white md:text-16 ssm:text-12 outline-none hover:bg-white hover:text-main bg-main font-bold"
        text="checkout"
        // onClick={() => handleSubmit()}
      />
    </div>
  );
}

export default CheckOutCard;
