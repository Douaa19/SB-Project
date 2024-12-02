import React from "react";

function CheckOutCard({ subtotal, shipping, grandTotal }) {
  // style
  const style = {
    group: "flex justify-between items-center",
    title: "text-dark md:text-16 ssm:text-14 capitalize",
    amount: "md:text-14 ssm:text-12",
  };

  return (
    <div className="w-full bg-white p-8 rounded-md flex flex-col items-between gap-4">
      <div className={`${style.group}`}>
        <span className={`${style.title}`}>subtotal</span>
        <span className={`${style.amount}`}>{`${subtotal}DH`}</span>
      </div>
      <div className={`${style.group}`}>
        <span className={`${style.title}`}>shipping</span>
        <span className={`${style.amount}`}>{`${shipping}DH`}</span>
      </div>
      <div className={`${style.group} font-bold`}>
        <span className={`${style.title}`}>grand total</span>
        <span className={`${style.amount}`}>{`${grandTotal}DH`}</span>
      </div>
    </div>
  );
}

export default CheckOutCard;
