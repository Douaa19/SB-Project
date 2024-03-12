import React from "react";
import { Form } from "../templates";

function ShippingForm(props) {
  return (
    <div className="border border-gray-100 rounded-md w-[100%] p-8">
      <h4 className="font-bold md:text-18 ssm:text-16 pb-4">
        Shipping information
      </h4>
      <Form
        setShowPopup={props.setShowPopup}
        type="shipping"
        className="flex flex-col items-between w-full gap-2 justify-center px-10"
      />
    </div>
  );
}

export default ShippingForm;
