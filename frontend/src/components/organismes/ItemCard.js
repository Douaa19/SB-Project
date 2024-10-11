import React from "react";
import { BACK_URL } from "../../config";

function ItemCard({ description, price, id, color, url, transition }) {
  const openProduct = (item_id) => {
    window.location = `/${url}/item/${item_id}`;
  };
  console.log(id);

  return (
    <div
      className={`bg-white h-max text-dark hover:cursor-pointer rounded-md border border-gray-100 order-gray p-4 flex flex-col gap-4`}
      onClick={() => openProduct(id)}>
      <div className="flex justify-center items-center rounded-sm">
        <img
          src={`${BACK_URL}/items/${id}/image`}
          alt=""
          className="w-[250px] md:h-[250px] rounded"
        />
      </div>
      <div className="sm:text-14 ssm:text-10 flex flex-col justify-center items-start gap-6">
        <p className="font-normale">{description}</p>
        <span className="">{price}DH</span>
      </div>
    </div>
  );
}

export default ItemCard;
