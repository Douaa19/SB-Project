import React, { useState, useEffect, useRef } from "react";
import { Input, Button } from "../atoms";
import { SquarePen, Eye, EyeOff, X, Check } from "lucide-react";
import { useDispatch } from "react-redux";
import { setResetPassword } from "../../redux/actions/popups";
import { recreatPassword } from "../../services/auth";
import { useParams } from "react-router";
import { motion } from "framer-motion";

function ResetPasswordPopup() {
  const dispatch = useDispatch();
  const params = useParams();
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});
  const [newPasswordType, setNewPasswordType] = useState("password");
  const [repeatedPasswordType, setRepeatedPasswordType] = useState("password");
  const [newPasswordIcon, setNewPasswordIcon] = useState(
    <EyeOff size={20} strokeWidth={1} />
  );
  const [repeatedPasswordIcon, setRepeatedPasswordIcon] = useState(
    <EyeOff size={20} strokeWidth={1} />
  );
  const [resetDone, setResetDone] = useState(false);

  const popupRef = useRef(null);

  const togglePassword = (param) => {
    if (param === "newPassword") {
      if (newPasswordType === "password") {
        setNewPasswordType("text");
        setNewPasswordIcon(<Eye size={20} strokeWidth={1} />);

        return;
      }
      setNewPasswordType("password");
      setNewPasswordIcon(<EyeOff size={20} strokeWidth={1} />);
    }
    if (param === "repeatedPassword") {
      if (repeatedPasswordType === "password") {
        setRepeatedPasswordType("text");
        setRepeatedPasswordIcon(<Eye size={20} strokeWidth={1} />);

        return;
      }
      setRepeatedPasswordType("password");
      setRepeatedPasswordIcon(<EyeOff size={20} strokeWidth={1} />);
    }
  };

  const handleChange = async (element, value) => {
    const newData = { ...data, [`${element}`]: value };
    setData(newData);
  };

  const handleSubmit = async () => {
    let errors = validationForm(data);

    if (Object.keys(errors).length === 0) {
      recreatPassword(data, params.user_id).then((response) => {
        if (response.data) {
          setResetDone(true);
          setTimeout(() => {
            closePopup();
            dispatch(setResetPassword(false));
            window.location = "/login";
          }, 3000);
        }
      });
    } else {
      console.log("Error!!");
      console.log(errors);
    }
  };

  const validationForm = (data) => {
    const errors = {};

    if (!data.newPassword) {
      errors.newPassword = "Enter your new password";
    }

    if (!data.repeatedPassword) {
      errors.repeatedPassword = "Repeat your new password";
    }

    if (data.newPassword !== data.repeatedPassword) {
      errors.repeatedPassword = "Your passwords are not the same";
      errors.newPassword = "Your passwords are not the same";
    }

    setErrors(errors);
    return errors;
  };

  const closePopup = () => {
    dispatch(setResetPassword(false));
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
        {resetDone !== true && (
          <div className="absolute top-2 right-2">
            <button
              className="border-2 border-gray-100 rounded-full outline-none text-gray-100 hover:border-gray-500 hover:text-gray-500 hover:shadow-md"
              onClick={closePopup}>
              <X size={20} strokeWidth={1} />
            </button>
          </div>
        )}
        <div className="flex flex-col items-center gap-4 w-[70%]">
          {resetDone !== true ? (
            <div className="bg-[#FBF8EE] w-fit rounded-full p-4 flex justify-center items-center">
              <div className="bg-[#F3EACE] text-[#DFC67C] rounded-full p-3 flex justify-center items-center">
                <SquarePen size={32} strokeWidth={2} />
              </div>
            </div>
          ) : (
            <div className="bg-[#F3F9F1] w-fit rounded-full p-4 flex justify-center items-center">
              <div className="bg-[#D0E8C5] text-[#82C05D] rounded-full p-3 flex justify-center items-center">
                <Check size={32} />
              </div>
            </div>
          )}
          <div className="text-center">
            <div className="">
              <h4 className="capitalize text-[#5F6165] font-medium md:text-16 ssm:text-14">
                {resetDone !== true ? <>reset password</> : <>done</>}
              </h4>
              <p className="text-[#A1A3A7] md:text-14 ssm:text-12">
                {resetDone !== true ? (
                  <>Recreate new password</>
                ) : (
                  <>password reseted successfully</>
                )}
              </p>
            </div>
          </div>
          {resetDone !== true && (
            <>
              <Input
                type={newPasswordType}
                className={`border rounded-5 lg:text-14 lg:block px-4 py-3 outline-none md:text-12 w-full ssm:text-12 border-main`}
                placeHolder="new password"
                name="newPassword"
                value={data.newPassword}
                onChange={(e) => handleChange("newPassword", e.target.value)}
                error={errors.newPassword}
                clickableIcon="clickable-icon"
                IconClickEvent={() => togglePassword("newPassword")}
                iconStyle="absolute right-2 top-[0.40rem] text-[#5F6165]"
                passwordIcon={newPasswordIcon}
              />
              <Input
                type={repeatedPasswordType}
                className={`border rounded-5 lg:text-14 lg:block px-4 py-3 outline-none md:text-12 w-full ssm:text-12 border-main`}
                placeHolder="repeat  password"
                name="repeatedPassword"
                value={data.repeatedPassword}
                onChange={(e) =>
                  handleChange("repeatedPassword", e.target.value)
                }
                error={errors.repeatedPassword}
                clickableIcon="clickable-icon"
                IconClickEvent={() => togglePassword("repeatedPassword")}
                iconStyle="absolute right-2 top-[0.40rem] text-[#5F6165]"
                passwordIcon={repeatedPasswordIcon}
              />
              <div className="flex items-center justify-center w-full">
                <motion.button
                  className="w-1/2 mt-4 ssm:m-0 md:mt-3 border-1 border-main rounded-full md:px-10 ssm:px-6 md:py-3 ssm:py-[6px]  text-white md:text-14 ssm:text-12 outline-none hover:bg-white hover:text-main bg-main font-bold"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 4px 10px rgba(0,0, 0, 0.2",
                  }}
                  transition={{ duration: 0.3 }}>
                  <Button
                    className={`capitalize`}
                    text="reset"
                    onClick={() => handleSubmit()}
                  />
                </motion.button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default ResetPasswordPopup;
