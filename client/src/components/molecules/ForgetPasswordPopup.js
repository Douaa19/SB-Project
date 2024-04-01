import React, { useState } from "react";
import { Input, Button } from "../atoms";

function ForgetPasswordPopup() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = () => {
    let error = validationForm(email);

    if (error) {
      console.log(error);
    } else {
      console.log("Continue");
    }
  };

  const validationForm = (email) => {
    let error = "";
    if (!email) {
      error = "Email is required";
    } else if (!isValidEmail(email)) {
      error = "Invalid email address";
    }

    setEmailError(error);
  };

  const isValidEmail = (email) => {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  };

  return (
    <>
      <div class="absolute bg-white opacity-80 inset-0 z-0"></div>
      <div class="w-500 max-w-xl p-5 relative bg-white mx-auto my-auto rounded-xl shadow-lg animation-fadeIn">
        <div class="">
          <div class="text-center p-5 flex-auto justify-center">
            <h4>Please write your email</h4>
            <div className="relative">
              <Input
                type="email"
                className={`border rounded-5 lg:text-14 lg:block px-4 py-3 outline-none md:text-12 w-full ssm:text-12 border-main`}
                placeHolder="example@email.com"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
              />
              <Button
                className={`w-1/2 mt-4 ssm:m-0 md:mt-3 
          border-1 border-main rounded-md md:px-10 ssm:px-6 md:py-3 ssm:py-[6px] capitalize text-white md:text-16 ssm:text-12 outline-none hover:bg-white hover:text-main bg-main font-bold`}
                text="send"
                //   onClick={() => handleSubmit()}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgetPasswordPopup;
