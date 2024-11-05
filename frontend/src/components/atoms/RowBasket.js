import React from "react";
import { removeOrder, editOrder } from "../../redux/actions/orders";
import { useDispatch, useSelector } from "react-redux";
import { BACK_URL } from "../../config";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Button from "./Button";

function RowBasket(props) {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user_id);

  const itemImg = `${BACK_URL}/items/${props.data.item._id}/image`;

  const handleDeleteItem = () => {
    if (props.isLoggedIn) {
      dispatch(removeOrder(userId, props.data.item._id, props.data.colors));
    } else {
      const storedOrders = JSON.parse(localStorage.getItem("guestOrders"));
      const updatedOrders = storedOrders.filter(
        (order) =>
          !(
            order.item._id === props.data.item._id &&
            JSON.stringify(order.colors) === JSON.stringify(props.data.colors)
          )
      );
      localStorage.setItem("guestOrders", JSON.stringify(updatedOrders));
      props.onGuestOrdersUpdate(updatedOrders);
    }
  };

  const handleQuantityChange = (operation) => {
    if (props.isLoggedIn) {
      if (operation === "add") {
        const newQuantity = props.data.quantity + 1;
        dispatch(
          editOrder(userId, props.data.item._id, props.data.colors, newQuantity)
        );
      } else if (operation === "subtract") {
        if (props.data.quantity === 1) {
          handleDeleteItem();
        } else if (props.data.quantity > 1) {
          const newQuantity = props.data.quantity - 1;
          dispatch(
            editOrder(
              userId,
              props.data.item._id,
              props.data.colors,
              newQuantity
            )
          );
        }
      }
    } else {
      const storedOrders = JSON.parse(localStorage.getItem("guestOrders"));
      const updatedOrders = storedOrders.map((order) => {
        if (
          order.item._id === props.data.item._id &&
          JSON.stringify(order.colors) === JSON.stringify(props.data.colors)
        ) {
          return {
            ...order,
            quantity:
              operation === "add"
                ? order.quantity + 1
                : Math.max(order.quantity - 1, 1),
          };
        }
        return order;
      });
      localStorage.setItem("guestOredrs", JSON.stringify(updatedOrders));
      props.onGuestOrdersUpdate(updatedOrders);
    }
  };

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="bg-white rounded-md my-3 transition-all duration-300 ease-in-out flex justify-between items-center hover:shadow-lg px-4 overflow-x-auto">
        <div
          className={`h-full flex items-center justify-between w-full py-6 whitespace-nowrap md:text-sm ssm:text-12 text-start text-gray-900 font-normal`}>
          <div className="flex justify-between items-center gap-6">
            <div className={`w-28 h-28 overflow-hidden rounded-md mx-2`}>
              {!itemImg ? (
                <div className="w-full h-full rounded-md animate-pulse bg-gray-100"></div>
              ) : (
                <img
                  src={itemImg}
                  alt="Item"
                  className="w-full h-full rounded-md object-cover"
                />
              )}
            </div>
            <div className="flex flex-col justify-center items-start gap-2 mx-2">
              <span className="title md:text-16 font-bold ssm:text-14">
                {props.data.item.title}
              </span>
              <div className="flex flex-col">
                <span className="font-normal capitadivze text-gray-400 md:text-14 ssm:text-12">
                  {props.data.item.category_id?.name}
                </span>
                <span className="font-normal text-gray-400 md:text-14 ssm:text-12">
                  {props.data.item.size} cm
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center mx-2">
            <span className="text-14 font-medium capitalize">
              {props.data.colors}
            </span>
          </div>
          <div className="flex items-center justify-center mx-2">
            <span className="text-14 font-medium">
              {props.data.item.price}DH
            </span>
          </div>
          <div className="flex items-center justify-center gap-2 mx-2">
            <button
              onClick={() => handleQuantityChange("subtract")}
              className="text-16 font-semibold text-gray-500 hover:text-gray-700">
              -
            </button>
            <span className="text-14 font-medium">{props.data.quantity}</span>
            <button
              onClick={() => handleQuantityChange("add")}
              className="text-16 font-semibold text-gray-500 hover:text-gray-700">
              +
            </button>
          </div>
          <div className="">
            <span className="md:text-16 ssm:text-14 font-bold mx-2">
              {props.data.quantity * props.data.item.price}DH
            </span>
          </div>
          <Button
            onClick={handleDeleteItem}
            className="bg-transparent mx-2"
            rightIcon={<X size={20} className="text-gray-500 hover:text-red" />}
          />
        </div>
      </motion.div>
    </>
  );
}

export default RowBasket;
