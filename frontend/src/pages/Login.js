import React, { useEffect, useState } from "react";
import {
  LoginCard,
  ForgetPasswordPopup,
  ResetPasswordPopup,
  SignupCard,
} from "../components/molecules";
import { ReactComponent as LoginImg } from "../assets/images/Mobile-login-pana.svg";
import { Popup } from "../components/organismes";
import { setForgetPassword, setResetPassword } from "../redux/actions/popups";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { motion } from "framer-motion";

function Login() {
  const dispatch = useDispatch();
  const params = useParams();
  const forgetPasswordPopup = useSelector((state) => state.forgetPasswordPopup);
  const resetPasswordPopup = useSelector((state) => state.resetPasswordPopup);
  const [signIn, setSignIn] = useState("login");

  const variants = {
    login: {
      hidden: { x: "2vw", opacity: 0 },
      visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
      exit: { x: "-100vw", opacity: 0, transition: { duration: 0.5 } },
    },
    signup: {
      hidden: { x: "-2vw", opacity: 0 },
      visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
      exit: { x: "100vw", opacity: 0, transition: { duration: 0.5 } },
    },
  };

  useEffect(() => {
    dispatch(setForgetPassword(false));
    dispatch(setResetPassword(false));
    if (params.resetToken) {
      dispatch(setResetPassword(true));
    }
  }, []);

  return (
    <>
      <div className="bg-gray h-screen flex justify-center items-center">
        <div className="h-[70vh] md:min-w-[50rem] sm:min-w-[40rem] ssm:min-w-[25rem] flex justify-between items-center bg-white rounded-md shadow-md px-4 py-5 m-2">
          <div className="background-img h-full w-full sm:block ssm:hidden">
            {signIn === "login" ? <LoginImg /> : <LoginImg />}
          </div>
          <div className="w-full h-full p-8 flex flex-col justify-between items-center">
            <div className="w-full">
              <div className="capitalize flex justify-around w-full items-center text-16 font-semibold pb-10">
                <div
                  className={`w-full flex flex-col justify-center items-center`}
                  onClick={() => setSignIn("login")}>
                  <span
                    className={`${
                      signIn !== "login" ? "text-gray" : "text-main"
                    } hover:cursor-pointer pb-2 md:text-14 ssm:text-12 transition-all duration-300 ease-in-out`}>
                    Sign in
                  </span>
                  <span
                    className={`${
                      signIn !== "login" ? "bg-gray" : "bg-main"
                    }  h-1 w-full rounded-md transition-all`}></span>
                </div>
                <div
                  className={`w-full flex flex-col justify-center items-center`}
                  onClick={() => setSignIn("createAccount")}>
                  <span
                    className={`${
                      signIn !== "createAccount" ? "text-gray" : "text-main"
                    } hover:cursor-pointer pb-2 md:text-14 ssm:text-12 transition-all duration-300 ease-in-out`}>
                    Sign Up
                  </span>
                  <span
                    className={`${
                      signIn !== "createAccount" ? "bg-gray" : "bg-main"
                    }  h-1 w-full rounded-md transition-all`}></span>
                </div>
              </div>
            </div>

            <motion.div
              className="login w-full h-full"
              key={signIn}
              variants={signIn === "login" ? variants.login : variants.signup}
              initial="hidden"
              animate="visible"
              exit="exit">
              {signIn === "login" ? <LoginCard /> : <SignupCard />}
            </motion.div>

            {forgetPasswordPopup && (
              <div className="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
                <Popup>
                  <ForgetPasswordPopup />
                </Popup>
              </div>
            )}
            {resetPasswordPopup && (
              <div className="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
                <Popup>
                  <ResetPasswordPopup />
                </Popup>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
