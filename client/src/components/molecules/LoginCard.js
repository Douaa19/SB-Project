import React, { useState } from "react";
import { Form } from "../templates";
import { ReactComponent as LoginImg } from "../../assets/images/Mobile-login-pana.svg";

function LoginCard() {
  const [hover, setHover] = useState(false);

  const login = () => {};

  return (
    <div className="bg-gray h-screen flex justify-center items-center">
      <div className="w-[60rem] flex justify-between items-center bg-white rounded-md shadow-md px-4 py-5">
        <div className="background-img h-full w-full">
          <LoginImg />
        </div>
        <div className="w-full flex flex-col justify-around p-8">
          <div className="pb-6">
            <h4 className="font-bold text-32 text-center py-2">Login</h4>
          </div>
          <div className="capitalize flex justify-around w-full items-center text-16 font-semibold pb-10">
            <div
              className={`w-full mx-1 flex flex-col justify-center items-center`}>
              <span className="hover:cursor-pointer pb-2">Sign in</span>
              <span className="bg-dark h-1 w-full rounded-md"></span>
            </div>
            <div
              className={`w-full mx-1 flex flex-col justify-center items-center`}>
              <span className="hover:cursor-pointer pb-2">Create account</span>
              <span className="bg-dark h-1 w-full rounded-md"></span>
            </div>
          </div>

          <div className="">
            <Form
              type="login"
              className="flex flex-col justify-center items-start gap-4 py-8 px-4 w-full"
              login={login}
              buttonClass="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginCard;
