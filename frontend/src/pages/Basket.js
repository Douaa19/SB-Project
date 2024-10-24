import React, { useEffect, useState } from "react";
import { NavBar, Footer } from "../components/layout";
import { BasketTable, CheckOutCard } from "../components/organismes";
import { PageTitle } from "../components/atoms";
import { ShippingForm } from "../components/molecules";
import { useSelector } from "react-redux";
import { Popup } from "../components/organismes";
import { CheckoutPopupContent } from "../components/molecules";
import { ShoppingBag } from "lucide-react";

function Basket() {
  const orders = useSelector((state) => state.orders.orders);
  const [subtotal, setSubTotal] = useState(null);
  const [grandtotal, setGrandTotal] = useState(null);
  const shipping = 40;
  const userId = useSelector((state) => state.user_id);
  const orderSent = useSelector((state) => state.orderSentPopup);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const userOrders = orders[userId] || [];

  useEffect(() => {
    let total = 0;
    for (let index = 0; index < userOrders.length; index++) {
      if (
        typeof userOrders[index].item.price === "number" &&
        typeof userOrders[index].quantity === "number"
      ) {
        total += userOrders[index].item.price * userOrders[index].quantity;
      }
    }

    setSubTotal(total);
  }, [orders, userOrders]);

  useEffect(() => {
    if (subtotal !== null) {
      const grandTotal = subtotal + shipping;
      setGrandTotal(grandTotal);
    }
  }, [subtotal, shipping]);

  return (
    <>
      <NavBar />
      <div className="ssm:pt-4 md:px-20 w-full mt-20">
        <PageTitle
          title="your shopping bag"
          className="capitalize md:text-28 ssm:text-24 font-extrabold text-main flex justify-center items-center mb-2 pb-2 px-4 w-full"
          icon={<ShoppingBag size={24} className="text-main mx-1" />}
        />
        <div className="flex items-center justify-center w-full h-[2px] mb-8">
          <span className="bg-gray-100 h-full w-80 rounded-full"></span>
        </div>
        <BasketTable orders={userOrders} />
        {/* {userOrders.length > 0 && (
          <div className="mt-6 w-[100%] flex md:flex-row ssm:flex-col items-start justify-between gap-4">
            <CheckOutCard
              subtotal={subtotal}
              grandTotal={grandtotal}
              shipping={shipping}
            />
            <ShippingForm />
          </div>
        )} */}
      </div>
      <Footer />
      {orderSent !== false && (
        <div className="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
          <Popup>
            <CheckoutPopupContent />
          </Popup>
        </div>
      )}
    </>
  );
}

export default Basket;
