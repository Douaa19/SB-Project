import React, { useEffect, useState } from "react";
import { NavBar, Footer, Loading } from "../components/layout";
import { BasketTable, CheckOutCard } from "../components/organismes";
import { PageTitle } from "../components/atoms";
import { ShippingForm } from "../components/molecules";
import { useSelector } from "react-redux";
import { Popup } from "../components/organismes";
import { CheckoutPopupContent } from "../components/molecules";
import { ShoppingBag, MoveLeft, ArrowRight } from "lucide-react";

function Basket() {
  const orders = useSelector((state) => state.orders.orders);
  const [subtotal, setSubTotal] = useState(null);
  const [grandtotal, setGrandTotal] = useState(null);
  const shipping = 40;
  const userId = useSelector((state) => state.user_id);
  const orderSent = useSelector((state) => state.orderSentPopup);
  const [loading, setLoading] = useState(true);

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

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [orders, userOrders]);

  useEffect(() => {
    if (subtotal !== null) {
      const grandTotal = subtotal + shipping;
      setGrandTotal(grandTotal);
    }
  }, [subtotal, shipping]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <NavBar />
          <div className="ssm:pt-4 md:px-20 w-full mt-24">
            <PageTitle
              title="your shopping bag"
              className="capitalize md:text-28 ssm:text-24 font-extrabold text-main flex justify-center items-center mb-2 pb-2 px-4 w-full"
              icon={<ShoppingBag size={24} className="text-main mx-1" />}
            />
            <div className="flex items-center justify-center w-full h-[2px] mb-8">
              <span className="bg-gray-100 h-full w-80 rounded-full"></span>
            </div>
            <div className="hover:border-b hover:border-main w-fit">
              <a
                href="/products"
                className="md:text-16 ssm:text-14 text-gray-700 hover:text-main flex gap-0 items-end justify-start">
                <MoveLeft size={20} strokeWidth={1.5} /> Back to shoping
              </a>
            </div>
            <BasketTable orders={userOrders} />
            {userOrders.length > 0 && (
              <div className="mt-8 w-full flex justify-end items-center">
                <div className="flex flex-col items-end justify-between gap-4 sm:w-1/2 ssm:w-full">
                  <CheckOutCard
                    subtotal={subtotal}
                    grandTotal={grandtotal}
                    shipping={shipping}
                  />
                  <div className="flex sm:justify-between sm:flex-row ssm:flex-col ssm:justify-center items-center w-fit mx-1">
                    <a
                      href="/checkout"
                      class="relative inline-flex items-center px-8 py-3 overflow-hidden md:text-16 ssm:text-14 font-medium text-main border-1 border-main rounded-md hover:text-white group hover:bg-gray-50 ssm:w-52 sm:w-auto">
                      <span class="absolute left-0 block w-full h-0 transition-all bg-main opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                      <span class="absolute -right-2 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                        <ArrowRight strokeWidth={1.5} size={24} />
                      </span>
                      <span class="relative w-full text-center">Check out</span>
                    </a>
                  </div>
                </div>
                {/* <ShippingForm /> */}
              </div>
            )}
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
      )}
    </>
  );
}

export default Basket;
