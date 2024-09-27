import React from "react";
import { ReactComponent as Done } from "../../assets/icons/success-tick-svgrepo-com.svg";

function ContactDonePopup() {
  return (
    <>
      <div class="absolute bg-white opacity-80 inset-0 z-0"></div>
      <div class="w-400 max-w-xl px-5 py-10 flex justify-center relative bg-white mx-auto my-auto rounded-xl shadow-lg animation-fadeIn">
        <div className="flex flex-col items-center gap-4 w-[70%]">
          <div className="bg-[#F3F9F1] w-fit rounded-full p-4 flex justify-center items-center">
            <div className="bg-[#D0E8C5] rounded-full p-3 flex justify-center items-center">
              <Done />
            </div>
          </div>
          <div className="text-center">
            <div className="">
              <h4 className="capitalize text-[#5F6165] font-medium md:text-16 ssm:text-14">
                done
              </h4>
              <p className="text-[#A1A3A7] md:text-14 ssm:text-12">
                Thank you for your message
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactDonePopup;
