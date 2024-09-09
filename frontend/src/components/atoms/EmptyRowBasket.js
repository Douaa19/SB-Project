import React from "react";

function EmptyRowBasket() {
  return (
    <>
      <div className="bg-white border-b border-gray-100 divansition duration-300 ease-in-out">
        <div colspan="7" className="py-4 text-center">
          No items in you basket
        </div>
      </div>
    </>
  );
}

export default EmptyRowBasket;
