import React, { useState } from "react";
import Img from "../../assets/images/blue_view.jpg";

function RowBasket({ data }) {
  const openProduct = (item_id) => {
    window.location = `/products/item/${item_id}`;
  };

  const style = {
    td: "px-6 py-4 whitespace-nowrap md:text-sm ssm:text-12 font-medium text-center text-gray-900 font-normal",
  };

  return (
    <>
      <tr
        className="bg-white border-b border-gray-100 transition duration-300 ease-in-out hover:cursor-pointer hover:bg-slate-50"
        onClick={() => openProduct(data._id)}>
        <td
          className={`${style.td} flex lg:flex-row ssm:flex-col lg:gap-3 ssm:gap-1 items-center justify-around capitalize`}>
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
      </tr>
    </>
  );
}

export default RowBasket;
