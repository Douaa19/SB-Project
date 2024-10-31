import React from "react";
import { BACK_URL } from "../../config";

function OrderSummaryCard(props) {
  const itemImg = `${BACK_URL}/items/${props.order.item._id}/image`;
  console.log(props);
  return (
    <div className="w-full py-2">
      <div className="">
        <div className={`w-16 h-16 overflow-hidden rounded-md`}>
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
      </div>
      <div className=""></div>
    </div>
  );
}

export default OrderSummaryCard;
