import React from "react";
import { BACK_URL } from "../../config";
import { useDispatch } from "react-redux";
import { editOrder, removeOrder } from "../../redux/actions/orders";

function OrderSummaryCard(props) {
  const dispatch = useDispatch();
  const itemImg = `${BACK_URL}/items/${props.order.item._id}/image`;
  const priceItem = props.order.item.promotionPrice
    ? props.order.item.promotionPrice.price
    : props.order.item.price;

  const handleQuantityChange = (operation) => {
    if (operation === "add") {
      const newQuantity = props.order.quantity + 1;
      dispatch(
        editOrder(
          props.userId,
          props.order.item._id,
          props.order.colors,
          newQuantity
        )
      );
    } else if (operation === "subtract") {
      if (props.order.quantity === 1) {
        dispatch(
          removeOrder(props.userId, props.order.item._id, props.order.colors)
        );
      } else if (props.order.quantity > 1) {
        const newQuantity = props.order.quantity - 1;
        dispatch(
          editOrder(
            props.userId,
            props.order.item._id,
            props.order.colors,
            newQuantity
          )
        );
      }
    }
  };

  return (
    <div className="w-full my-2 flex justify-between items-center">
      <div className="flex items-cenetr justify-start gap-4">
        <div className={`w-20 h-20 overflow-hidden rounded-md`}>
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
        <div className="flex flex-col items-start justify-center">
          <span className="text-14 font-semibold capitalize text-gray-700">
            {props.order.item.title}
          </span>
          <span className="text-14 font-normal text-gray-500 uppercase">
            {props.order.item.category_id?.name}
          </span>
          <span className="text-14 font-semibold capitalize text-gray-700">
            {priceItem * props.order.quantity}DH
          </span>
        </div>
      </div>
      <div className="border border-gray-100 p-2 rounded-md">
        <button
          onClick={() => handleQuantityChange("subtract")}
          className="text-16 font-semibold text-gray-500 hover:text-gray-700 px-4">
          -
        </button>
        <span className="text-14 font-bold px-2">{props.order.quantity}</span>
        <button
          onClick={() => handleQuantityChange("add")}
          className="text-16 font-semibold text-gray-500 hover:text-gray-700 px-4">
          +
        </button>
      </div>
    </div>
  );
}

export default OrderSummaryCard;
