import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, TextArea } from "../atoms";
import { sendMessage } from "../../services/userServices";
import { setContactDone } from "../../redux/actions/popups";
import Select from "react-select";
import { cities } from "morocco-cities";

function Form({ className, type }) {
  const dispatch = useDispatch();
  const done = useSelector((state) => state.contactDonePopup);
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});

  // cities
  const cities = useSelector((state) => state.cities);

  const handleChange = async (element, value) => {
    const newData = { ...data, [`${element}`]: value };
    setData(newData);
  };

  const handleSubmit = () => {
    let errors = validationForm(data);

    if (Object.keys(errors).length === 0) {
      sendMessage(data).then((res) => {
        if (res.status === 200) {
          dispatch(setContactDone(true));
          setData({ name: "", email: "", phone: "", message: "" });
        }
      });
    } else {
      console.log("Error!!");
    }
  };

  const validationForm = (data) => {
    const errors = {};

    if (!data.name) {
      errors.name = "Name is required";
    } else if (data.name.length < 5 || data.name.length > 12) {
      errors.name = "Name must be between 5 and 12 characters";
    }

    if (!data.email) {
      errors.email = "Email is required";
    } else if (!isValidEmail(data.email)) {
      errors.email = "Invalid email address";
    }

    if (!data.phone) {
      errors.phone = "Phone is required";
    } else if (!isPhoneNumber(data.phone)) {
      errors.phone = "Invalid phone number";
    }

    if (!data.message) {
      errors.message = "Message is required";
    } else if (data.message.length < 10 || data.message.length > 100) {
      errors.message = "Message must be between 10 and 50 characters";
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
    <div className={className}>
      <div
        className={`flex ${
          type !== "contact" ? "flex-col" : "md:flex-row ssm:flex-col"
        }  w-full md:justify-between ssm:justify-center items-center md:gap-4 ssm:gap-6`}>
        <Input
          type="text"
          className={`border rounded-5 lg:text-14 lg:block px-4 py-3 outline-none md:text-12 w-full ssm:text-12 ${
            errors.name
              ? "border-red text-red placeholder:text-red"
              : "border-main"
          }`}
          placeHolder={`${type === "contact" ? "name" : "full name"}`}
          name="name"
          value={data.name}
          onChange={(e) => handleChange("name", e.target.value)}
          error={errors.name}
        />
        <Input
          type="email"
          className={`border rounded-5 lg:text-14 lg:block px-4 py-3 outline-none md:text-12 w-full ssm:text-12 ${
            errors.email
              ? "border-red text-red placeholder:text-red"
              : "border-main"
          }`}
          placeHolder="example@email.com"
          name="email"
          value={data.email}
          onChange={(e) => handleChange("email", e.target.value)}
          error={errors.email}
        />
      </div>
      <Input
        type="phone"
        className={`border rounded-5 lg:text-14 lg:block px-4 py-3 outline-none md:text-12 w-full ssm:text-12 ${
          errors.phone
            ? "border-red text-red placeholder:text-red"
            : "border-main"
        }`}
        placeHolder="phone number"
        name="phone"
        value={data.phone}
        onChange={(e) => handleChange("phone", e.target.value)}
        error={errors.phone}
      />
      {type !== "contact" && (
        <>
          <Select
            options={cities}
            classNamePrefix="dropdown-select"
            className={`${
              errors.phone ? "input-error dropdown-select" : "dropdown-select"
            }`}
            placeholder="city"
            // name="city"
            // value={data.phone}
            onChange={(e) => handleChange("city", e.target.value)}
            error={errors.city}
          />
          <Input
            type="text"
            className={`border rounded-5 lg:text-14 lg:block px-4 py-3 outline-none md:text-12 w-full ssm:text-12 ${
              errors.address
                ? "border-red text-red placeholder:text-red"
                : "border-main"
            }`}
            placeHolder="address"
            name="address"
            value={data.address}
            onChange={(e) => handleChange("address", e.target.value)}
            error={errors.address}
          />
          <Input
            type="text"
            className={`border rounded-5 lg:text-14 lg:block px-4 py-3 outline-none md:text-12 w-full ssm:text-12 ${
              errors.code
                ? "border-red text-red placeholder:text-red"
                : "border-main"
            }`}
            placeHolder="postal code"
            name="postalCode"
            value={data.postalCode}
            onChange={(e) => handleChange("postalCode", e.target.value)}
            error={errors.postalCode}
          />
        </>
      )}
      {type === "contact" && (
        <>
          <TextArea
            text="write your message here"
            id="message"
            rows="5"
            name="message"
            value={data.message}
            onChange={(e) => handleChange("message", e.target.value)}
            error={errors.message}
            className={`border rounded-5 lg:text-14 lg:block px-4 py-3 outline-none md:text-12 w-full ssm:text-12 ${
              errors.message
                ? "border-red text-red placeholder:text-red"
                : "border-main"
            }`}
          />
          <div className="flex items-center justify-start w-full">
            <Button
              className="border-1 border-main rounded-md md:px-10 ssm:px-6 md:py-3 ssm:py-[6px] capitalize text-main md:text-16 ssm:text-12 outline-none hover:bg-main hover:text-white font-bold"
              text="submit"
              onClick={() => handleSubmit()}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Form;
