import React from "react";
import { Form } from "../templates";
import { ReactComponent as LoginImg } from "../../assets/images/Mobile-login-pana.svg";

function LoginCard() {
  const login = () => {};

  return (
    <div className="bg-gray h-screen flex justify-center items-center">
      <div className="w-[60rem] flex justify-between items-center bg-white rounded-md shadow-md px-4 py-5">
        <div className="background-img h-full w-full">
          <LoginImg />
        </div>
        <div className="w-full p-12 flex flex-col justify-between border">
          <div className="">
            <h4 className="font-bold text-32 text-center py-2">Login</h4>
          </div>
          <Form
            type="login"
            className="flex flex-col justify-center items-start gap-4"
            login={login}
          />
        </div>
      </div>
    </div>
  );
}

export default LoginCard;
