import React from "react";
import { Input, Button } from "../atoms";

function ResetPasswordPopup() {
  return (
    <>
      <div class="absolute bg-white opacity-80 inset-0 z-0"></div>
      <div class="w-400 max-w-xl px-5 py-10 flex justify-center relative bg-white mx-auto my-auto rounded-xl shadow-lg animation-fadeIn">
        <div className="flex flex-col items-center gap-4 w-[70%]">
          <Input
            type="text"
            className={`border rounded-5 lg:text-14 lg:block px-4 py-3 outline-none md:text-12 w-full ssm:text-12 border-main`}
            placeHolder="example@email.com"
            name="password"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            // error={emailError}
          />
          <Input
            type="text"
            className={`border rounded-5 lg:text-14 lg:block px-4 py-3 outline-none md:text-12 w-full ssm:text-12 border-main`}
            placeHolder="example@email.com"
            name="repeated-password"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            // error={emailError}
          />
          <Button
            className={`w-full
        border-1 border-main rounded-md md:px-10 ssm:px-6 md:py-3 ssm:py-[6px] capitalize text-white md:text-14 ssm:text-12 outline-none hover:bg-white hover:text-main bg-main font-bold`}
            text="send"
            // onClick={() => handleSubmit()}
          />
        </div>
      </div>
    </>
  );
}

export default ResetPasswordPopup;
