import React from "react";
import { Form } from "../templates";

function LoginCard() {
  return (
    <div className="bg-white h-screen flex justify-center items-center">
      <div className="w-1/2 flex justify-between items-center bg-gray rounded-md shadow-md px-4 py-5">
        <div className="background-img w-full bg-main h-full">
          <img src="" alt="" />
        </div>
        <div className="">
          <Form type="login" className="" />
        </div>
      </div>
    </div>
  );
}

export default LoginCard;
