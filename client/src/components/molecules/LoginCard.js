import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Form } from "../templates";
import { Input, Button } from "../atoms";
import { ReactComponent as OpenEye } from "../../assets/icons/eye-open-svgrepo-com (1).svg";
import { ReactComponent as CloseEye } from "../../assets/icons/eye-closed-svgrepo-com.svg";
import { ReactComponent as LoginImg } from "../../assets/images/Mobile-login-pana.svg";
import {
  loginAction,
  setIdAction,
  setRoleAction,
} from "../../redux/actions/auth";
import { login } from "../../services/auth";
import { jwtDecode } from "jwt-decode";

function LoginCard(props) {
  const dispatch = useDispatch();
  const [signIn, setSignIn] = useState("login");
  const [resetInputs, setResetInputs] = useState(false);

  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});
  const [passwordType, setPasswordType] = useState("password");
  const [passwordIcon, setPasswordIcon] = useState(<CloseEye />);
  const [forgetPassword, setForgetPassword] = useState(false);
  const [errorResponse, setErrorResponse] = useState("");
  const forgetPasswordPopup = () => {
    setForgetPassword(true);
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      setPasswordIcon(<OpenEye />);
      return;
    }
    setPasswordType("password");
    setPasswordIcon(<CloseEye />);
  };
  const handleChange = async (element, value) => {
    const newData = { ...data, [`${element}`]: value };
    setData(newData);
  };
  const handleSubmit = async () => {
    let errors = validationForm(data);

    if (Object.keys(errors).length === 0) {
      login(data).then(async (response) => {
        if (!response.data.token) {
          alert("Credentials are invalid");
          setErrorResponse("Credentials are invalid");
          return errors;
        } else {
          await dispatch(loginAction());
          await dispatch(setRoleAction(jwtDecode(response.data.token).role));
          await dispatch(setIdAction(jwtDecode(response.data.token).id));
          setTimeout(() => {
            window.location = "/";
          });
        }
      });
    } else {
      console.log("Error!!");
      console.log(errors);
    }
  };
  const validationForm = (data) => {
    const errors = {};

    if (!data.email) {
      errors.email = "Email is required";
    } else if (!isValidEmail(data.email)) {
      errors.email = "Invalid email address";
    }

    if (props.type === "login") {
      if (!data.password) {
        errors.password = "password is required";
      }
    }

    setErrors(errors);
    return errors;
  };

  const isValidEmail = (email) => {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  };

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
          className={`w-full mt-4 ssm:m-0 md:mt-3
          border-1 border-main rounded-md md:px-10 ssm:px-6 md:py-3 ssm:py-[6px] capitalize text-white md:text-16 ssm:text-12 outline-none hover:bg-white hover:text-main bg-main font-bold`}
          text="sign in"
          onClick={() => handleSubmit()}
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
