import React, { useEffect, useState } from "react";
import { Form } from "../templates";
import { Input, Button } from "../atoms";
import { ReactComponent as LoginImg } from "../../assets/images/Mobile-login-pana.svg";

function LoginCard(props) {
  const [signIn, setSignIn] = useState("login");
  const [resetInputs, setResetInputs] = useState(false);

  useEffect(() => {
    setResetInputs(true);
    setTimeout(() => {
      setResetInputs(false);
    }, 1000);
  }, [signIn]);

  return (
    <div className="login flex flex-col justify-center items-start gap-2 py-8 px-4 w-full">
      <Input
        type="text"
        className={`border rounded-5 lg:text-14 lg:block px-4 py-3 outline-none md:text-12 w-full ssm:text-12 border-main`}
        placeHolder="name"
        name="name"
        // value={data.name}
        // onChange={(e) => handleChange("name", e.target.value)}
        // error={errors.name}
      />
      <Input
        // passwordIcon={passwordIcon}
        clickableIcon="clickable-icon"
        // IconClickEvent={togglePassword}
        className={`border rounded-5 lg:text-14 lg:block px-4 py-3 outline-none md:text-12 w-full ssm:text-12 border-main`}
        placeHolder="password"
        name="password"
        // value={data.password}
        // onChange={(e) => handleChange("password", e.target.value)}
        // error={errors.password || errorResponse}
        iconStyle="absolute right-2 top-[0.40rem]"
      />
      <span
        className="mt-2 text-12 capitalize hover:text-main hover:underline hover:cursor-pointer"
        // onClick={forgetPasswordPopup}
      >
        forget password
      </span>
      <div className="flex items-center justify-start w-full">
        <Button
          className={`
          ${props.buttonClass ? `${props.buttonClass} ssm:m-0 md:mt-3` : ""} 
          border-1 border-main rounded-md md:px-10 ssm:px-6 md:py-3 ssm:py-[6px] capitalize text-white md:text-16 ssm:text-12 outline-none hover:bg-white hover:text-main bg-main font-bold`}
          text={
            props.type === "contact"
              ? "submit"
              : props.type === "login"
              ? "login"
              : props.type === "createAccount"
              ? "create account"
              : "checkout"
          }
          // onClick={() => handleSubmit()}
        />
      </div>
      {/* <Form
        type={signIn}
        resetInputs={resetInputs}
        className="flex flex-col justify-center items-start gap-2 py-8 px-4 w-full"
        buttonClass="w-full mt-4"
      /> */}
    </div>
  );
}

export default LoginCard;
