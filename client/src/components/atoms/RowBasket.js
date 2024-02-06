import React, { useState } from "react";
import Img from "../../assets/images/blue_view.jpg";

function RowBasket({ data, deleteIcon }) {
  const openProduct = (item_id) => {
    window.location = `/products/item/${item_id}`;
  };

  const style = {
    td: "px-6 py-4 whitespace-nowrap md:text-sm ssm:text-12 font-medium text-center text-gray-900 font-normal",
    deleteIcon: "md:w-5 ssm:w-4",
  };

  return (
    <>
      <tr className="bg-white border-b border-gray-100 transition duration-300 ease-in-out">
        <td
          onClick={() => openProduct(data._id)}
          className={`${style.td} flex lg:flex-row ssm:flex-col lg:gap-3 ssm:gap-1 items-center justify-around capitalize hover:cursor-pointer hover:text-main hover:underline`}>
          <div className={`w-[100px]`}>
            <img src={Img} alt="Item" className="w-full rounded-md" />
          </div>
          <span>{data.title}</span>
        </td>
        <td className={`${style.td}`}>{`${data.size} cm`}</td>
        <td className={`${style.td} capitalize`}>{`${data.size} $`}</td>
        <td className={`${style.td} capitalize`}>{data.quantity}</td>
        <td className={`${style.td} capitalize`}>{data.color}</td>
        <td className={`${style.td} capitalize`}>{data.total}</td>
        <td className={`${style.deleteIcon}`}>
          <div
            className="hover:border hover:rounded-full hover:cursor-pointer hover:border-gray-100 p-1"
            onClick={() => console.log("delete")}>
            <img src={deleteIcon} alt="delete" className="w-full" />
          </div>
        </td>
      </tr>
    </>
  );
}

export default RowBasket;
