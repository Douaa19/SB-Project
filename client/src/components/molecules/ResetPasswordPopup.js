import React, { useState } from "react";
import { Input, Button } from "../atoms";
import { ReactComponent as NewPassword } from "../../assets/icons/new-password-svgrepo-com.svg";
import { ReactComponent as Close } from "../../assets/icons/close.svg";
import { useDispatch, useSelector } from "react-redux";
import { setResetPassword } from "../../redux/actions/popups";

function ResetPasswordPopup() {
  const dispatch = useDispatch();
  const resetPasswordPopup = useSelector((state) => state.resetPasswordPopup);
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});

  const validationForm = (data) => {
    const errors = {};

    if (!data.newPassword) {
      errors.email = "Ender your new password";
    }

    if (!data.repeatedPassword) {
      errors.repeatedPassword = "Repeat your password";
    }

    setErrors(errors);
    return errors;
  };

  const closePopup = () => {
    dispatch(setResetPassword(false));
  };

  return (
    <>
      <div class="absolute bg-white opacity-80 inset-0 z-0"></div>
      <div class="w-400 max-w-xl px-5 py-10 flex justify-center relative bg-white mx-auto my-auto rounded-xl shadow-lg animation-fadeIn">
        <div className="absolute top-2 right-2">
          <button
            className="border border-2 border-[#5F6165] rounded-full outline-none"
            onClick={closePopup}>
            <Close />
          </button>
        </div>
        <div className="flex flex-col items-center gap-4 w-[70%]">
          <div className="bg-[#FBF8EE] w-fit rounded-full p-4 flex justify-center items-center">
            <div className="bg-[#F3EACE] rounded-full p-3 flex justify-center items-center">
              <NewPassword />
            </div>
          </div>
          <div className="text-center">
            <div className="">
              <h4 className="capitalize text-[#5F6165] font-medium md:text-16 ssm:text-14">
                reset password
              </h4>
              <p className="text-[#A1A3A7] md:text-14 ssm:text-12">
                Recreate new password
              </p>
            </div>
          </div>
          <Input
            type="text"
            className={`border rounded-5 lg:text-14 lg:block px-4 py-3 outline-none md:text-12 w-full ssm:text-12 border-main`}
            placeHolder="new password"
            name="newPassword"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            // error={emailError}
          />
          <Input
            type="text"
            className={`border rounded-5 lg:text-14 lg:block px-4 py-3 outline-none md:text-12 w-full ssm:text-12 border-main`}
            placeHolder="repeat  password"
            name="repeatedPassword"
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
