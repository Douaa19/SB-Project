import React, { useState } from "react";
import { removeOrder } from "../../redux/actions/orders";
import { useDispatch } from "react-redux";

function RowBasket({ data, deleteIcon }) {
  const dispatch = useDispatch();

  const openProduct = (item_id) => {
    window.location = `/products/item/${item_id}`;
  };

  const handleDelete = () => {
    dispatch(removeOrder(data.item._id));
  };

  const style = {
    td: "px-6 w-fit py-4 whitespace-nowrap md:text-sm ssm:text-12 font-medium text-start text-gray-900 font-normal",
    deleteIcon: "md:w-5 ssm:w-4",
  };

  return (
    <>
      <tr className="bg-white border-b border-gray-100 transition duration-300 ease-in-out">
        <td className={`${style.td}`}>
          <div className={`w-[100px]`}>
            <img
              src={`http://localhost:8008/api/items/${data.item._id}/image`}
              alt="Item"
              className="w-full rounded-md"
            />
          </div>
        </td>
        <td>
          <div className="title">
            <span>{data.item.title}</span>
          </div>
          <div className="details">
            <span>{data.item.color}</span>
            <span>
              {data.quantity} X ${data.item.price}
            </span>
          </div>
        </td>
        <td className={`${style.td} capitalize`}>
          {data.item.price * data.quantity}DH
        </td>
        <td className={`${style.deleteIcon}`}>
          <div
            className="hover:border hover:rounded-full hover:cursor-pointer hover:border-gray-100 p-1"
            onClick={handleDelete}>
            <img src={deleteIcon} alt="delete" className="w-full" />
          </div>
        </td>
      </tr>
    </>
  );
}

export default RowBasket;
