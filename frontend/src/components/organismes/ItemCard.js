import React from "react";
import { BACK_URL } from "../../config";

function ItemCard({ description, price, id, color, url, transition }) {
  const openProduct = (item_id) => {
    window.location = `/${url}/item/${item_id}`;
  };
  console.log(id);

  return (
    <div
      className={`${
        transition === true ? "card-item" : ""
      } bg-white h-max text-dark hover:cursor-pointer rounded-md opacity-img`}
      onClick={() => openProduct(id)}>
      <div className="flex justify-center items-center">
        <img
          src={`${BACK_URL}/items/${id}/image`}
          alt=""
          className="w-full h-[300px] item-img"
        />
      </div>

      <div className="sm:text-14 ssm:text-10 flex flex-col justify-center items-start gap-4 p-4">
        <p className="font-normale">{description}</p>
        <span>{price}DH</span>
      </div>
    </div>
  );
}

export default ItemCard;
