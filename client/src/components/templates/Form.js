import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, TextArea } from "../atoms";
import { sendMessage } from "../../services/userServices";
import { setContactDone } from "../../redux/actions/popups";
import { SelectComponent } from "../atoms";
import { sendOrder } from "../../services/orders";
import { setOrders } from "../../redux/actions/orders";

function Form(props) {
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});
  const [errorResponse, setErrorResponse] = useState("");
  const userId = useSelector((state) => state.user_id);
  const orders = useSelector((state) => state.orders.orders);

  const userOrders = orders[userId];

  // cities
  const cities = useSelector((state) => state.cities);

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
          }
        });
      } else if (props.type === "shipping") {
        sendOrder(data, userOrders).then((response) => {
          if (!response.data.messageSuccess) {
            alert("Your order doesn't sent");
          } else {
            props.setShowPopup(true);
            // dispatch(setOrders({}));
            // props.setClearValues(true)
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
      } else if (data.message.length < 10 || data.message.length > 100) {
        errors.message = "Message must be between 10 and 50 characters";
      }
    }

    if (props.type === "shipping" || props.type === "createAccount") {
      if (!data.address) {
        errors.address = "Address is required";
      }
    }

    if (props.type === "shipping") {
      if (!data.city) {
        errors.city = "City is required";
      }

      if (!data.postalCode) {
        errors.postalCode = "Postal code is required";
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

  const hadleSelect = (name, value) => {
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className={props.className}>
      <div
        className={`flex ${
          props.type !== "contact"
            ? "flex-col ssm:gap-2"
            : "md:flex-row ssm:flex-col ssm:gap-6"
        }  w-full md:justify-between ssm:justify-center items-center md:gap-2`}>
        {props.type !== "login" && (
          <Input
            type="text"
            className={`border rounded-5 lg:block px-4 py-3 outline-none w-full text-12 border-main`}
            placeHolder={`${props.type === "contact" ? "name" : "full name"}`}
            name="name"
            value={data.name}
            onChange={(e) => handleChange("name", e.target.value)}
            error={errors.name}
          />
        )}
        <Input
          type="email"
          className={`border rounded-5 lg:block px-4 py-3 outline-none w-full text-12 border-main`}
          placeHolder="example@email.com"
          name="email"
          value={data.email}
          onChange={(e) => handleChange("email", e.target.value)}
          error={errors.email || errorResponse}
        />
      </div>
      <Input
        type="phone"
        className={`border rounded-5 lg:block px-4 py-3 outline-none w-full text-12 border-main`}
        placeHolder="phone number"
        name="phone"
        value={data.phone}
        onChange={(e) => handleChange("phone", e.target.value)}
        error={errors.phone}
      />
      {props.type === "shipping" && (
        <>
          <SelectComponent
            data={cities}
            name="city"
            error={errors.city}
            className=""
            city={data.city}
            onChange={(value) => {
              hadleSelect("city", value);
            }}
          />
        </>
      )}
      {props.type === "shipping" ? (
        <Input
          type="text"
          className={`border rounded-5 lg:block px-4 py-3 outline-none w-full text-12 border-main`}
          placeHolder="address"
          name="address"
          value={data.address}
          onChange={(e) => handleChange("address", e.target.value)}
          error={errors.address}
        />
      ) : null}
      {props.type === "shipping" && (
        <Input
          type="text"
          className={`border rounded-5 lg:block px-4 py-3 outline-none w-full text-12 border-main`}
          placeHolder="postal code"
          name="postalCode"
          value={data.postalCode}
          onChange={(e) => handleChange("postalCode", e.target.value)}
          error={errors.postalCode}
        />
      )}
      {props.type === "contact" && (
        <>
          <TextArea
            text="write your message here"
            id="message"
            rows="5"
            name="message"
            value={data.message}
            onChange={(e) => handleChange("message", e.target.value)}
            error={errors.message}
            className={`border rounded-5 lg:block px-4 py-3 outline-none w-full text-12 border-main`}
          />
        </>
      )}
      <div className="flex items-center justify-start w-full">
        <Button
          className={`w-full mt-4 ssm:m-0 md:mt-3
          border-1 border-main rounded-md md:px-10 ssm:px-6 md:py-3 ssm:py-[6px] capitalize text-white md:text-14 ssm:text-12 outline-none hover:bg-white hover:text-main bg-main font-bold`}
          text={
            props.type === "contact"
              ? "submit"
              : props.type === "login"
              ? "login"
              : props.type === "createAccount"
              ? "create account"
              : "checkout"
          }
          onClick={() => handleSubmit()}
        />
      </div>
    </div>
  );
}

export default Form;
