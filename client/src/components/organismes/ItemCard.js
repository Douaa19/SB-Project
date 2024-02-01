import React from "react";

function ItemCard({ description, price, id, color, url }) {
  const openProduct = (item_id) => {
    window.location = `/${url}/item/${item_id}`;
  };

  return (
    <div
      className="card-item bg-white h-max text-dark hover:cursor-pointer hover:shadow-md rounded-b-md opacity-img"
      onClick={() => openProduct(id)}>
      <div className="flex justify-center items-center">
        <img
          src={`http://localhost:8008/api/items/${id}/image`}
          alt=""
          className="w-full h-[300px] rounded-lg"
        />
      </div>

      <div className="sm:text-14 ssm:text-10 flex flex-col justify-center items-start gap-4 p-4">
        <p className="font-normale">{description}</p>
        <span>{price}</span>
      </div>
    </div>
  );
}

export default ItemCard;
