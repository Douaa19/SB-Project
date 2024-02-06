import React, { useEffect, useState } from "react";
import { NavBar, Footer } from "../components/layout";
import { BasketTable, CheckOutCard } from "../components/organismes";
import { PageTitle } from "../components/atoms";
import { ShippingForm } from "../components/molecules";
import { useSelector } from "react-redux";

function Basket() {
  const orders = useSelector((state) => state.orders);
  const [subtotal, setSubTotal] = useState(null);
  const [grandtotal, setGrandTotal] = useState(null);
  const [shipping, setShipping] = useState(10);

  useEffect(() => {
    let total = 0;
    for (let index = 0; index < orders.orders.length; index++) {
      console.log(orders.orders[1]);

      if (
        typeof orders.orders[index].item.price === "number" &&
        typeof orders.orders[index].quantity === "number"
      ) {
        total +=
          orders.orders[index].item.price * orders.orders[index].quantity;
      }
    }

    setSubTotal(total);
  }, [orders.orders]);

  useEffect(() => {
    if (subtotal !== null) {
      const grandTotal = subtotal + shipping;
      setGrandTotal(grandTotal);
    }
  }, [subtotal]);

  return (
    <>
      <NavBar />
      <div className="md:px-[4.5rem] lg:px-32 ssm:px-8 ssm:pt-4 w-full">
        <PageTitle
          title="my basket"
          className="capitalize md:text-32 ssm:text-24 font-extrabold text-main text-start"
        />
        <BasketTable orders={orders} />
        {orders.orders.length > 0 && (
          <div className="mt-6 w-[100%] flex md:flex-row ssm:flex-col items-start justify-between gap-4">
            <ShippingForm />
            <CheckOutCard
              subtotal={subtotal}
              grandTotal={grandtotal}
              shipping={shipping}
            />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Basket;
