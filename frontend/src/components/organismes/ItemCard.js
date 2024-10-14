import React, { useState } from "react";
import { BACK_URL } from "../../config";

function ItemCard({ description, price, id, color, url }) {
  const [hover, setHover] = useState(false);

  const openProduct = (item_id) => {
    window.location = `/${url}/item/${item_id}`;
  };

  return (
    <div
      className={`bg-white h-[26rem] text-dark hover:cursor-pointer rounded-md overflow-hidden border border-gray-100 order-gray flex flex-col justify-between gap-4 hover:shadow-lg transition-all duration-300 ease-in-out`}
      onClick={() => openProduct(id)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <div className="w-full relative mx-auto h-auto overflow-hidden">
        <img
          src={`${BACK_URL}/items/${id}/image`}
          alt=""
          className={`object-cover w-full h-full relative z-0 transition-all duration-300 ${
            hover ? "scale-110" : ""
          }`}
        />
      </div>
      <div className="p-4 md:text-16 ssm:text-14 flex flex-col justify-center items-start gap-6">
        <p className="font-normale">{description}</p>
        <span className="">{price}DH</span>
      </div>
    </div>
  );
}

export default ItemCard;
