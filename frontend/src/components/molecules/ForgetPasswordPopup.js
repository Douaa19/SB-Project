import React, { useState, useEffect, useRef } from "react";
import { Input, Button } from "../atoms";
import { ReactComponent as Close } from "../../assets/icons/close.svg";
import { ReactComponent as Lock } from "../../assets/icons/lock-keyhole-minimalistic-svgrepo-com.svg";
import { ReactComponent as Email } from "../../assets/icons/email-8-svgrepo-com.svg";
import { useDispatch } from "react-redux";
import { setForgetPassword } from "../../redux/actions/popups";
import { forgetPassword } from "../../services/auth";

function ForgetPasswordPopup() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [done, setDone] = useState(false);

  const popupRef = useRef(null);

  const closePopup = () => {
    dispatch(setForgetPassword(false));
    setDone(false);
  };

  const handleSubmit = () => {
    let error = validationForm(email);

    if (error) {
      console.log(error);
    } else {
      forgetPassword(email).then((response) => {
        if (response.data) {
          setDone(true);
          setTimeout(() => {
            closePopup();
          }, 3000);
        } else {
          setEmailError("Please try again");
          console.log(response.data.errorMassage);
        }
      });
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

  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        closePopup();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popupRef, closePopup]);

  return (
    <>
      <div class="absolute bg-white opacity-80 inset-0 z-0"></div>
      <div
        ref={popupRef}
        class="w-400 max-w-xl px-5 py-10 flex justify-center relative bg-white mx-auto my-auto rounded-xl shadow-lg animation-fadeIn">
        {done !== true && (
          <div className="absolute top-2 right-2">
            <button
              className="border-2 border-[#5F6165] rounded-full outline-none"
              onClick={closePopup}>
              <Close />
            </button>
          </div>
        )}
        <div className="flex flex-col items-center gap-4 w-[70%]">
          {done !== true ? (
            <div className="bg-[#FEF2F6] w-fit rounded-full p-4 flex justify-center items-center">
              <div className="bg-[#FCDAE4] rounded-full p-3 flex justify-center items-center">
                <Lock />
              </div>
            </div>
          ) : (
            <div className="bg-[#F0F9F9] w-fit rounded-full p-4 flex justify-center items-center">
              <div className="bg-[#C5E8E6] rounded-full p-3 flex justify-center items-center">
                <Email />
              </div>
            </div>
          )}

          {done !== true ? (
            <>
              <div className="text-center">
                <div className="">
                  <h4 className="capitalize text-[#5F6165] font-medium md:text-16 ssm:text-14">
                    forgot password
                  </h4>
                  <p className="text-[#A1A3A7] md:text-14 ssm:text-12">
                    Provide your email in the form below to begin.
                  </p>
                </div>
              </div>
              <div className="w-full">
                <Input
                  type="email"
                  className={`border rounded-5 lg:text-14 lg:block px-4 py-3 outline-none md:text-12 w-full ssm:text-12 border-main`}
                  placeHolder="example@email.com"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={emailError}
                />
              </div>
              <div className="w-full">
                <Button
                  className={`w-full
        border-1 border-main rounded-md md:px-10 ssm:px-6 md:py-3 ssm:py-[6px] capitalize text-white md:text-14 ssm:text-12 outline-none hover:bg-white hover:text-main bg-main font-bold`}
                  text="send"
                  onClick={() => handleSubmit()}
                />
              </div>
              <div className="">
                <span
                  className="text-12 capitalize text-main underline hover:cursor-pointer"
                  onClick={closePopup}>
                  login
                </span>
              </div>
            </>
          ) : (
            <div>
              <h4 className="text-[#5F6165] font-medium md:text-16 ssm:text-14">
                Please check your email
              </h4>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ForgetPasswordPopup;
