import React from "react";
import SuccessIcon from "../../assets/icons/success-tick-svgrepo-com.svg";

function ContactDonePopup() {
  return (
    <>
      <div class="absolute bg-white opacity-80 inset-0 z-0"></div>
      <div class="w-500 max-w-xl p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-dark animation-fadeIn">
        <div class="">
          <div class="text-center p-5 flex-auto justify-center">
            <div className="w-full flex justify-center items-center">
              <img
                src={SuccessIcon}
                alt="successIcon"
                className="text-center max-w-[64px] py-2"
              />
            </div>
            <h2 class="text-xl font-bold py-6 text-white">Success</h2>
            <p class="text-sm text-gray-500 px-8 text-white text-l">
              Thank you for your message. It has been sent
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactDonePopup;
