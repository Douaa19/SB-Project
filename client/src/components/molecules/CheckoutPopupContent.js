import React from "react";
import { Button } from "../atoms";

function CheckoutPopupContent() {
  return (
    <div>
      <h1>Checkout Done!</h1>
      <h4>Do you want to send your order?</h4>
      <Button text="send order" type="submit" />
    </div>
  );
}

export default CheckoutPopupContent;
