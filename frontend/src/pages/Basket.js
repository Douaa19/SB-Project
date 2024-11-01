import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavBar, Footer, Loading } from "../components/layout";
import { BasketTable } from "../components/organismes";
import { PageTitle } from "../components/atoms";
import { useSelector } from "react-redux";
import { ShoppingBag, MoveLeft, ArrowRight } from "lucide-react";

function Basket() {
  const navigate = useNavigate();
  const orders = useSelector((state) => state.orders.orders);
  const userId = useSelector((state) => state.user_id);
  const [loading, setLoading] = useState(true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const userOrders = orders[userId] || [];

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

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
            {userOrders.length > 0 && (
              <div className="hover:border-b hover:border-main w-fit">
                <a
                  href="/products"
                  className="md:text-16 ssm:text-14 text-gray-700 hover:text-main flex gap-0 items-end justify-start">
                  <MoveLeft size={20} strokeWidth={1.5} /> Back to shopping
                </a>
              </div>
            )}
            <BasketTable orders={userOrders} />
            {userOrders.length > 0 && (
              <div className="mt-6">
                <a
                  href={
                    userId.length > 0
                      ? navigate("/checkout")
                      : navigate("/login")
                  }
                  class="relative inline-flex items-center px-8 py-3 overflow-hidden md:text-16 ssm:text-14 font-medium text-main border-1 border-main rounded-md hover:text-white group hover:bg-gray-50 ssm:w-52 sm:w-auto">
                  <span class="absolute left-0 block w-full h-0 transition-all bg-main opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                  <span class="absolute -right-2 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                    <ArrowRight strokeWidth={1.5} size={24} />
                  </span>
                  <span class="relative w-full text-center">Check out</span>
                </a>
              </div>
            )}
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default Basket;
