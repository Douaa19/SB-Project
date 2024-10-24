import React from "react";
import { removeOrder } from "../../redux/actions/orders";
import { useDispatch, useSelector } from "react-redux";
import { BACK_URL } from "../../config";

function RowBasket(props) {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user_id);

  const handleDelete = () => {
    dispatch(removeOrder(userId, props.data.item._id, props.data.colors));
  };

  const handleEdit = () => {
    window.location = `/products/item/${props.data._id}`;
  };

  return (
    <>
      <div className="bg-white border-b border-gray-100 transition duration-300 ease-in-out flex justify-between">
        <div
          className={`flex gap-4 px-6 w-fit py-4 whitespace-nowrap md:text-sm ssm:text-12 text-start text-gray-900 font-normal`}>
          <div className={`w-[100px]`}>
            <img
              src={`${BACK_URL}/items/${props.data.item._id}/image`}
              alt="Item"
              className="w-full rounded-md"
            />
          </div>
          <div className="flex flex-col justify-between items-start py-2">
            <div className="title md:text-16 font-bold ssm:text-14">
              <span>{props.data.item.title}</span>
            </div>
            <div className="capitalize details md:text-14 ssm:text-12 flex flex-col">
              <span className="lowercase">{props.data.item.size}cm</span>
              <span>{props.data.item.color}</span>
              <span>
                {props.data.quantity}{" "}
                <span className="font-bold"> X ${props.data.item.price}</span>
              </span>
              <span className="text-14">{props.data.colors}</span>
            </div>
          </div>
        </div>
        <div className={`py-5 capitalize flex md:text-14 ssm:text-12 px-6`}>
          <div
            className="hover:cursor-pointer hover:text-main flex justify-between ml-3"
            onClick={handleEdit}>
            <img
              src={props.editIcon}
              alt="delete"
              className="md:w-5 md:h-5 ssm:w-4 ssm:h-4"
            />
            <span className="ml-1">edit</span>
          </div>
          <div
            className="hover:cursor-pointer hover:text-red flex justify-between ml-3"
            onClick={handleDelete}>
            <img
              src={props.deleteIcon}
              alt="delete"
              className="md:w-5 md:h-5 ssm:w-4 ssm:h-4"
            />
            <span className="ml-1">delete</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default RowBasket;
