import React, { useState } from "react";
import { Input, Button } from "../atoms";
import { register } from "../../services/auth";
import { Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";

function SignupCard() {
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});
  const [passwordType, setPasswordType] = useState("password");
  const [passwordIcon, setPasswordIcon] = useState(<EyeOff strokeWidth={1} size={20} />);
  const [errorResponse, setErrorResponse] = useState({});

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      setPasswordIcon(<Eye size={20} strokeWidth={1} />);
      return;
    }
    setPasswordType("password");
    setPasswordIcon(<EyeOff size={20} strokeWidth={1} />);
  };

  const handleChange = async (element, value) => {
    const newData = { ...data, [`${element}`]: value };
    setData(newData);
  };

  const handleSubmit = async () => {
    let errors = validationForm(data);

    if (Object.keys(errors).length === 0) {
      await register(data).then(async (response) => {
        if (response.data.messageError) {
          setData({});
          setTimeout(() => {
            alert(response.data.messageError);
          });
        } else {
          setData({});
          setErrors({});
          window.location = "/login";
        }
      });
    } else {
      console.log("Error!!");
      console.log(errors);
    }
  };

  const validationForm = (data) => {
    const errors = {};
    if (!data.username) {
      errors.username = "Name is required";
    } else if (data.username.length < 5 || data.username.length > 12) {
      errors.username = "Name must be between 5 and 12 characters";
    }

    if (!data.phone) {
      errors.phone = "Phone is required";
    } else if (!isPhoneNumber(data.phone)) {
      errors.phone = "Invalid phone number";
    }

    if (!data.email) {
      errors.email = "Email is required";
    } else if (!isValidEmail(data.email)) {
      errors.email = "Invalid email address";
    }

    if (!data.address) {
      errors.address = "Address is required";
    }

    if (!data.password) {
      errors.password = "password is required";
    }

    setErrors(errors);
    return errors;
  };

  const isValidEmail = (email) => {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  };

  const isPhoneNumber = (phone) => {
    return /^\+\d{12}$/.test(phone);
  };

  return (
    <div className="login h-full flex flex-col justify-center items-start gap-2 px-4 w-full">
      <Input
        type="text"
        className={`border rounded-5 lg:block px-4 py-3 outline-none w-full text-12 border-main`}
        placeHolder="full name"
        name="username"
        value={data.username}
        onChange={(e) => handleChange("username", e.target.value)}
        error={errors.username || errorResponse.username}
      />
      <Input
        type="email"
        className={`border rounded-5 lg:block px-4 py-3 outline-none w-full text-12 border-main`}
        placeHolder="example@email.com"
        name="email"
        value={data.email}
        onChange={(e) => handleChange("email", e.target.value)}
        error={errors.email || errorResponse.email}
      />
      <Input
        type={passwordType}
        passwordIcon={passwordIcon}
        clickableIcon="clickable-icon"
        IconClickEvent={togglePassword}
        className={`border rounded-5 lg:block px-4 pr-2 py-3 outline-none w-full text-12 border-main`}
        placeHolder="password"
        name="password"
        value={data.password}
        onChange={(e) => handleChange("password", e.target.value)}
        error={errors.password || errorResponse.password}
        iconStyle="absolute right-2 top-[0.40rem] bg-white outline-none text-[#5F6165]"
      />
      <Input
        type="phone"
        className={`border rounded-5 lg:block px-4 py-3 outline-none w-full text-12 border-main`}
        placeHolder="+212600000000"
        name="phone"
        value={data.phone}
        onChange={(e) => handleChange("phone", e.target.value)}
        error={errors.phone || errorResponse.phone}
      />
      <Input
        type="text"
        className={`border rounded-5 lg:block px-4 py-3 outline-none w-full text-12 border-main`}
        placeHolder="address"
        name="address"
        value={data.address}
        onChange={(e) => handleChange("address", e.target.value)}
        error={errors.address || errorResponse.address}
      />
      <div className="flex items-center justify-center w-full mt-2">
        <motion.button
          className="w-1/2 mt-4 ssm:m-0 md:mt-3
          border-1 border-main rounded-full md:px-10 ssm:px-6 md:py-3 ssm:py-[6px]  text-white md:text-14 ssm:text-12 outline-none hover:bg-white hover:text-main bg-main font-bold"
          whileHover={{ scale: 1.05, boxShadow: "0 4px 10px rgba(0,0, 0, 0.2" }}
          transition={{ duration: 0.3 }}>
          <Button
            className={`capitalize`}
            text="sign up"
            onClick={() => handleSubmit()}
          />
        </motion.button>
      </div>
    </div>
  );
}

export default SignupCard;
