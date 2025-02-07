import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, TextArea } from "../atoms";
import { sendMessage } from "../../services/userServices";
import { setContactDone } from "../../redux/actions/popups";
import { sendOrder } from "../../services/orders";
import { setOrderSent } from "../../redux/actions/popups";

function Form(props) {
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});
  const [errorResponse, setErrorResponse] = useState("");
  const userId = useSelector((state) => state.user_id);
  const orders = useSelector((state) => state.orders.orders);

  const userOrders = orders[userId];

  const handleChange = async (element, value) => {
    const newData = { ...data, [`${element}`]: value };
    setData(newData);
  };

  const handleSubmit = async () => {
    let errors = validationForm(data);

    if (Object.keys(errors).length === 0) {
      if (props.type === "contact") {
        sendMessage(data).then((res) => {
          if (res.status === 200) {
            dispatch(setContactDone(true));
            setData({ name: "", email: "", phone: "", message: "" });
            setTimeout(() => {
              dispatch(setContactDone(false));
              window.location = "/";
            }, 3000);
          }
        });
      }
    } else {
      console.log("Error!!");
      console.log(errors);
    }
  };

  const validationForm = (data) => {
    const errors = {};

    if (props.type !== "login") {
      if (!data.name) {
        errors.name = "Name is required";
      } else if (data.name.length < 5 || data.name.length > 12) {
        errors.name = "Name must be between 5 and 12 characters";
      }

      if (!data.phone) {
        errors.phone = "Phone is required";
      } else if (!isPhoneNumber(data.phone)) {
        errors.phone = "Invalid phone number";
      }
    }

    if (!data.email) {
      errors.email = "Email is required";
    } else if (!isValidEmail(data.email)) {
      errors.email = "Invalid email address";
    }

    if (props.type === "contact") {
      if (!data.message) {
        errors.message = "Message is required";
      } else if (data.message.length < 10 || data.message.length > 200) {
        errors.message = "Message must be between 10 and 200 characters";
      }
    }

    if (props.type === "createAccount") {
      if (!data.address) {
        errors.address = "Address is required";
      }
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

  const isPhoneNumber = (phone) => {
    return /^\+\d{12}$/.test(phone);
  };

  return (
    <div className={props.className}>
      <div
        className={`flex flex-col gap-4 w-full md:justify-between ssm:justify-center items-center`}>
        <Input
          type="text"
          className={`border rounded-5 lg:block px-4 py-3 outline-none w-full text-14 border-main`}
          placeHolder={`${props.type === "contact" ? "name" : "full name"}`}
          name="name"
          value={data.name}
          onChange={(e) => handleChange("name", e.target.value)}
          error={errors.name}
        />

        <Input
          type="email"
          className={`border rounded-5 lg:block px-4 py-3 outline-none w-full text-14 border-main`}
          placeHolder="example@email.com"
          name="email"
          value={data.email}
          onChange={(e) => handleChange("email", e.target.value)}
          error={errors.email || errorResponse}
        />
      </div>
      <Input
        type="phone"
        className={`border rounded-5 lg:block px-4 py-3 outline-none w-full text-14 border-main`}
        placeHolder="+212600000000"
        name="phone"
        value={data.phone}
        onChange={(e) => handleChange("phone", e.target.value)}
        error={errors.phone}
      />
      <TextArea
        text="your message"
        id="message"
        rows="3"
        name="message"
        value={data.message}
        onChange={(e) => handleChange("message", e.target.value)}
        error={errors.message}
        className={`border rounded-5 lg:block px-4 py-3 outline-none w-full text-14 border-main`}
      />
      {props.button !== false && (
        <div className="flex items-center md:justify-start ssm:justify-center w-full">
          <Button
            className={`ssm:m-0 md:mt-3 border-1 border-main rounded-md md:px-10 ssm:px-6 md:py-3 ssm:py-[6px] capitalize text-white bg-main md:text-16 ssm:text-14 font-medium outline-none hover:bg-white hover:text-main transition-all ease-in-out duration-300 hover:shadwo:md hover:scale-105`}
            text={
              props.type === "contact"
                ? "send"
                : props.type === "login"
                ? "login"
                : props.type === "createAccount"
                ? "create account"
                : "checkout"
            }
            onClick={() => handleSubmit()}
          />
        </div>
      )}
    </div>
  );
}

export default Form;
