import React from "react";
import { removeOrder } from "../../redux/actions/orders";
import { useDispatch, useSelector } from "react-redux";
import { BACK_URL } from "../../config";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Button from "./Button";

function RowBasket(props) {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user_id);

  console.log(props);

  const handleDelete = () => {
    dispatch(removeOrder(userId, props.data.item._id, props.data.colors));
  };

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="bg-white border border-gray-100 rounded-md my-3 transition-all duration-300 ease-in-out flex justify-between items-center hover:shadow-lg px-2">
        <div
          className={`h-full flex items-center justify-between w-full p-6 whitespace-nowrap md:text-sm ssm:text-12 text-start text-gray-900 font-normal`}>
          <div className={`w-28 h-28 overflow-hidden rounded-md`}>
            <img
              src={`${BACK_URL}/items/${props.data.item._id}/image`}
              alt="Item"
              className="w-full rounded-md object-cover"
            />
          </div>
          <div className="flex flex-col justify-center items-start gap-2">
            <span className="title md:text-16 font-bold ssm:text-14">
              {props.data.item.title}
            </span>
            <div className="flex flex-col">
              <span className="font-normal capitadivze text-gray-400 md:text-14 ssm:text-12">
                {props.data.item.category_id.name}
              </span>
              <span className="font-normal text-gray-400 md:text-14 ssm:text-12">
                {props.data.item.size} cm
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-14 font-medium">
              {props.data.item.price}0DH
            </span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <button className="text-16 font-semibold text-gray-500 hover:text-gray-700">
              -
            </button>
            <span className="text-14 font-medium">{props.data.quantity}</span>
            <button className="text-16 font-semibold text-gray-500 hover:text-gray-700">
              +
            </button>
          </div>
          <div className="">
            <span className="md:text-16 ssm:text-14 font-bold">
              {props.data.quantity * props.data.item.price}0DH
            </span>
          </div>
          {/* <div className="flex flex-col justify-between items-start py-2">
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
          </div> */}
        </div>
        <Button
          onClick={handleDelete}
          className="bg-transparent m-2"
          rightIcon={<X size={20} className="text-gray-500 hover:text-red" />}
        />
      </motion.div>
    </>
  );
}

export default RowBasket;
