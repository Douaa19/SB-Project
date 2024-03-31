import React, { useEffect, useState } from "react";
import { Form } from "../components/templates";
import { LoginCard } from "../components/molecules";
import { ReactComponent as LoginImg } from "../assets/images/Mobile-login-pana.svg";

function Login() {
  const [signIn, setSignIn] = useState("login");
  const [resetInputs, setResetInputs] = useState(false);

  useEffect(() => {
    setResetInputs(true);
    setTimeout(() => {
      setResetInputs(false);
    }, 1000);
  }, [signIn]);
  return (
    <>
      <div className="bg-gray h-screen flex justify-center items-center">
        <div className="md:min-w-[50rem] sm:min-w-[40rem] ssm:min-w-[25rem] flex justify-between items-center bg-white rounded-md shadow-md px-4 py-5 m-2">
          <div className="background-img h-full w-full sm:block ssm:hidden">
            <LoginImg />
          </div>
          <div className="w-full flex flex-col justify-around p-8">
            <div className="pb-6">
              <h4 className="font-bold md:text-32 ssm:text-24 text-center py-2">
                Login
              </h4>
            </div>
            <div className="capitalize flex justify-around w-full items-center text-16 font-semibold pb-10">
              <div
                className={`w-full flex flex-col justify-center items-center`}
                onClick={() => setSignIn("login")}>
                <span
                  className={`${
                    signIn !== "login" ? "text-gray" : "text-dark"
                  } hover:cursor-pointer pb-2 md:text-16 ssm:text-12 transition-all`}>
                  Sign in
                </span>
                <span
                  className={`${
                    signIn !== "login" ? "bg-gray" : "bg-dark"
                  }  h-1 w-full rounded-md transition-all`}></span>
              </div>
              <div
                className={`w-full flex flex-col justify-center items-center`}
                onClick={() => setSignIn("createAccount")}>
                <span
                  className={`${
                    signIn !== "createAccount" ? "text-gray" : "text-dark"
                  } hover:cursor-pointer pb-2 md:text-16 ssm:text-12 transition-all`}>
                  Create account
                </span>
                <span
                  className={`${
                    signIn !== "createAccount" ? "bg-gray" : "bg-dark"
                  }  h-1 w-full rounded-md transition-all`}></span>
              </div>
            </div>

            <div className="login">
              <LoginCard />
              {/* <Form
                type={signIn}
                resetInputs={resetInputs}
                className="flex flex-col justify-center items-start gap-2 py-8 px-4 w-full"
                buttonClass="w-full mt-4"
              /> */}
            </div>
            <div className="signup"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
