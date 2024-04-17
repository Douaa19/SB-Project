import React from "react";
import { Button } from "../atoms";
import { useSelector } from "react-redux";

function CheckOutCard({ subtotal, shipping, grandTotal, clearValues }) {
  // style
  const style = {
    group: "flex justify-between items-center",
    title: "text-dark md:text-16 ssm:text-14 capitalize",
    amount: "md:text-14 ssm:text-12",
  };

  return (
    <div className="md:w-full ssm:w-[80%] border  border-gray-100 p-8 rounded-md flex flex-col items-between gap-4">
      <div className={`${style.group}`}>
        <span className={`${style.title}`}>subtotal</span>
        <span className={`${style.amount}`}>{`${
          clearValues !== true ? subtotal : 0
        }DH`}</span>
      </div>
      <div className={`${style.group}`}>
        <span className={`${style.title}`}>shipping</span>
        <span className={`${style.amount}`}>{`${
          clearValues !== true ? shipping : 0
        }DH`}</span>
      </div>
      <div className={`${style.group} font-bold`}>
        <span className={`${style.title}`}>grand total</span>
        <span className={`${style.amount}`}>{`${
          clearValues !== true ? grandTotal : 0
        }DH`}</span>
      </div>
    </div>
  );
}

export default CheckOutCard;
