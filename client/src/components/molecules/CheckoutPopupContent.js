import React from "react";
import { useDispatch } from "react-redux";
import { setOrderSent } from "../../redux/actions/popups";
import { setOrders } from "../../redux/actions/orders";
import { ReactComponent as Close } from "../../assets/icons/close.svg";
import { ReactComponent as Done } from "../../assets/icons/success-tick-svgrepo-com.svg";

function CheckoutPopupContent(props) {
  const dispatch = useDispatch();

  const closePopup = () => {
    dispatch(setOrderSent(false));
    dispatch(setOrders({}));
    props.clearValues(true);
  };

  return (
    <>
      <div class="absolute bg-white opacity-80 inset-0 z-0"></div>
      <div class="w-400 max-w-xl px-5 py-10 flex justify-center relative bg-white mx-auto my-auto rounded-xl shadow-lg animation-fadeIn">
        <div className="absolute top-2 right-2">
          <button
            className="border border-2 border-[#5F6165] rounded-full outline-none"
            onClick={closePopup}>
            <Close />
          </button>
        </div>
        <div className="flex flex-col items-center gap-4 w-[70%]">
          <div className="bg-[#F3F9F1] w-fit rounded-full p-4 flex justify-center items-center">
            <div className="bg-[#D0E8C5] rounded-full p-3 flex justify-center items-center">
              <Done />
            </div>
          </div>

          <div className="text-center gap-4 flex flex-col">
            <h4 className="text-[#5F6165] font-medium md:text-16 ssm:text-14">
              Done
            </h4>
            <h3 className="text-[#5F6165] font-normal md:text-16 ssm:text-14">
              Your order sent
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutPopupContent;
