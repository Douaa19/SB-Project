import React, { useState } from "react";
import { BACK_URL } from "../../config";

function ItemCard({ description, price, id, color, url, title }) {
  const [hover, setHover] = useState(false);

  const openProduct = (item_id) => {
    window.location = `/${url}/item/${item_id}`;
  };

  const itemImg = `${BACK_URL}/items/${id}/image`;

  return (
    <div
      className={`bg-white sm:h-[24rem] ssm:h-[20rem] text-dark hover:cursor-pointer rounded-md overflow-hidden border border-gray-100 order-gray flex flex-col justify-between gap-4 hover:shadow-lg transition-all duration-300 ease-in-out mx-2`}
      onClick={() => openProduct(id)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <div className="w-full h-60 relative mx-auto overflow-hidden">
        {!itemImg ? (
          <div className="w-full h-full rounded-md animate-pulse bg-gray-100"></div>
        ) : (
          <img
            src={itemImg}
            alt=""
            className={`object-cover w-full h-full relative z-0 transition-all duration-300 ${
              hover ? "scale-110" : ""
            }`}
          />
        )}
      </div>
      <span className="px-4 font-medium ">{title}</span>
      <div className="px-4 pt-2 pb-4 md:text-16 ssm:text-14 flex flex-col justify-center items-start gap-4">
        <p className="font-normale">{description}</p>
        <div className="flex flex-row justify-between items-start">
          <span className="">{price}DH</span>
          {/* {color.map((color, index) => ( */}
          <span classNma="text-gray-100 font-normal text-14">{color}</span>
          {/* ))} */}
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
