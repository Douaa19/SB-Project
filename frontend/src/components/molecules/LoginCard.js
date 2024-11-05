import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Input, Button } from "../atoms";
import { Eye, EyeOff } from "lucide-react";
import {
  loginAction,
  setIdAction,
  setRoleAction,
} from "../../redux/actions/auth";
import { login } from "../../services/auth";
import { jwtDecode } from "jwt-decode";
import { setForgetPassword } from "../../redux/actions/popups";
import { motion } from "framer-motion";
import { setOrders } from "../../redux/actions/orders";

function LoginCard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});
  const [passwordType, setPasswordType] = useState("password");
  const [passwordIcon, setPasswordIcon] = useState(
    <EyeOff size={20} strokeWidth={1} s />
  );
  const [errorResponse, setErrorResponse] = useState({});
  const [userId, setUserId] = useState(null);

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

  const userOrders = useSelector((state) =>
    userId?.length > 0 ? state.orders.orders[userId] : []
  );

  const handleSubmit = async () => {
    let errors = validationForm(data);

    if (Object.keys(errors).length === 0) {
      login(data).then(async (response) => {
        if (!response.data.token) {
          setErrorResponse({
            email: response.data.messageError
              ? "Email is incorrect"
              : undefined,
            password: response.data.passwordError || "Password is incorrect",
          });

          return errors;
        } else {
          const decodedToken = jwtDecode(response.data.token);
          setUserId(decodedToken.id);
          await dispatch(loginAction());
          await dispatch(setRoleAction(decodedToken.role));
          await dispatch(setIdAction(userId));
          mergeGuestOrdersWithUserOrders(userId);

          setTimeout(() => {
            navigate("/");
          }, 3000);
          setErrors({});
        }
      });
    } else {
      console.log("Error!!");
      console.log(errors);
    }
  };

  const mergeGuestOrdersWithUserOrders = (userId) => {
    const guestOrders = JSON.parse(localStorage.getItem("guestOrders")) || [];

    guestOrders.forEach((guestOrder) => {
      const existingItemsIndex = userOrders.findIndex(
        (order) =>
          order.item._id === guestOrder.item._id &&
          JSON.stringify(order.colors) === JSON.stringify(guestOrder.colors)
      );

      if (existingItemsIndex === -1) {
        userOrders.push(guestOrder);
      }
    });

    userOrders.forEach((order) => {
      dispatch(setOrders(userId, order.item, order.quantity, order.colors));
    });

    localStorage.removeItem("guestOrders");
  };

  const validationForm = (data) => {
    const errors = {};

    if (!data.email) {
      errors.email = "Email is required";
    } else if (!isValidEmail(data.email)) {
      errors.email = "Invalid email address";
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

  return (
    <div className="login h-full flex flex-col justify-center items-start gap-2 px-4 w-full">
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
        className={`border rounded-5 lg:block px-4 py-3 outline-none text-12 w-full border-main`}
        placeHolder="password"
        name="password"
        value={data.password}
        onChange={(e) => handleChange("password", e.target.value)}
        error={errors.password || errorResponse.password}
        iconStyle="absolute right-2 top-[0.40rem] outline-none text-[#5F6165]"
      />
      <span
        className="mt-0 text-12 capitalize hover:text-main hover:underline hover:cursor-pointer text-end w-full"
        onClick={() => {
          dispatch(setForgetPassword(true));
          setErrorResponse({});
          setErrors({});
          setData({});
        }}>
        forget password
      </span>
      <div className="flex items-center justify-center w-full mt-2">
        <motion.button
          className="w-1/2 mt-4 ssm:m-0 md:mt-3
          border-1 border-main rounded-full md:px-10 ssm:px-6 md:py-3 ssm:py-[6px]  text-white md:text-14 ssm:text-12 outline-none hover:bg-white hover:text-main bg-main font-bold"
          whileHover={{ scale: 1.05, boxShadow: "0 4px 10px rgba(0,0, 0, 0.2" }}
          transition={{ duration: 0.3 }}>
          <Button
            className={`capitalize`}
            text="sign in"
            onClick={() => handleSubmit()}
          />
        </motion.button>
      </div>
    </div>
  );
}

export default LoginCard;
