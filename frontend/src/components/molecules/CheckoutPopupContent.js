import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOrderSent } from "../../redux/actions/popups";
import { clearUserOrders } from "../../redux/actions/orders";
import { ReactComponent as Done } from "../../assets/icons/success-tick-svgrepo-com.svg";

function CheckoutPopupContent() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user_id);

  const closePopup = () => {
    dispatch(setOrderSent(false));
    dispatch(clearUserOrders(userId));
    window.location = "/";
  };

  useEffect(() => {
    setTimeout(() => {
      closePopup();
    }, 4000);
  }, []);

  return (
    <>
      <div class="absolute bg-white opacity-80 inset-0 z-0"></div>
      <div class="w-400 max-w-xl px-5 py-10 flex justify-center relative bg-white mx-auto my-auto rounded-xl shadow-lg animation-fadeIn">
        <div className="flex flex-col items-center gap-4 w-full">
          <div className="bg-[#F3F9F1] w-fit rounded-full p-4 flex justify-center items-center">
            <div className="bg-[#D0E8C5] rounded-full p-3 flex justify-center items-center">
              <Done />
            </div>
          </div>

          <div className="text-center gap-4 flex flex-col w-full">
            <h4 className="text-[#5F6165] font-medium md:text-18 ssm:text-14">
              Thank you!
            </h4>
            <h3 className="text-[#5F6165] font-normal md:text-16 w-full">
              Your order has been successfully sent! 🎉
            </h3>
            <p className="text-[#8B8C8F] text-14 w-full">
              We’re excited to prepare it for you. Meanwhile, feel free to
              continue browsing our latest products.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutPopupContent;
