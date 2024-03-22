import React, { useState } from "react";
import { Form } from "../templates";
import { ReactComponent as LoginImg } from "../../assets/images/Mobile-login-pana.svg";

function LoginCard() {
  const [signIn, setSignIn] = useState(true);

  const toggleSignIn = () => {
    setSignIn(!signIn);
  };

  const login = (data) => {
    console.log(data);
  };

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
              className={`w-full flex flex-col justify-center items-center`}
              onClick={toggleSignIn}>
              <span
                className={`${
                  signIn ? "text-gray" : "text-dark"
                } hover:cursor-pointer pb-2 md:text-16 ssm:text-14 transition-all`}>
                Sign in
              </span>
              <span
                className={`${
                  signIn ? "bg-gray" : "bg-dark"
                }  h-1 w-full rounded-md transition-all`}></span>
            </div>
            <div
              className={`w-full flex flex-col justify-center items-center`}
              onClick={toggleSignIn}>
              <span
                className={`${
                  signIn !== true ? "text-gray" : "text-dark"
                } hover:cursor-pointer pb-2 md:text-16 ssm:text-14 transition-all`}>
                Create account
              </span>
              <span
                className={`${
                  signIn !== true ? "bg-gray" : "bg-dark"
                }  h-1 w-full rounded-md transition-all`}></span>
            </div>
          </div>

          <div className="">
            <Form
              type="login"
              className="flex flex-col justify-center items-start gap-4 py-8 px-4 w-full"
              login={login}
              buttonClass="w-full mt-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginCard;
