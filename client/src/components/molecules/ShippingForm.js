import React from "react";
import { Form } from "../templates";

function ShippingForm() {
  return (
    <div className="border border-gray-100 rounded-md w-[50%] p-8">
      <h4 className="font-bold text-18 pb-4">Shipping information</h4>
      <Form
        type="shipping"
        className="flex flex-col items-between w-full gap-4 justify-center px-10"
      />
    </div>
  );
}

// ${
//     errors.name
//       ? "border-red text-red placeholder:text-red"
//       : "border-main"
//   }

export default ShippingForm;
