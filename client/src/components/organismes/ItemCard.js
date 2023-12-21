import React from "react";

function ItemCard({ image, description, price }) {
  return (
    <div className="bg-white h-max text-dark">
      <div className=" flex justify-center items-center">
        <img src={image} alt="" className="w-full rounded-lg" />
      </div>

      <div className="text-14 flex flex-col justify-center items-start gap-4 p-4">
        <p className="font-normale">{description}</p>
        <span>{price}</span>
      </div>
    </div>
  );
}

export default ItemCard;
