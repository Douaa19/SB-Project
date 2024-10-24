import React from "react";
import { removeOrder } from "../../redux/actions/orders";
import { useDispatch, useSelector } from "react-redux";
import { BACK_URL } from "../../config";
import { X } from "lucide-react";
import Button from "./Button";

function RowBasket(props) {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user_id);

  const handleDelete = () => {
    dispatch(removeOrder(userId, props.data.item._id, props.data.colors));
  };

  return (
    <>
      <div className="bg-white border border-gray-100 rounded-md my-3 transition-all duration-300 ease-in-out flex justify-between items-center hover:scale-105 hover:shadow-lg px-2">
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
        <Button
          onClick={handleDelete}
          className="bg-transparent m-2"
          rightIcon={<X size={20} className="text-gray-500 hover:text-red" />}
        />
      </div>
    </>
  );
}

export default RowBasket;
