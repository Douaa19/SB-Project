import React from "react";
import { useSelector } from "react-redux";
import { Input, SelectComponent } from "../atoms";

function ShippingForm(props) {
  // cities
  const cities = useSelector((state) => state.cities);

  const handleChange = async (element, value) => {
    const newData = { ...props.data, [`${element}`]: value };
    props.setData(newData);
  };

  const handleSelect = (name, value) => {
    props.setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className={props.className}>
      <div className="">
        <form
          action=""
          method="post"
          className="flex flex-col items-center justify-center gap-4">
          <div className="flex justify-between items-center w-full gap-4">
            <label
              htmlFor="name"
              className="text-gray-700 w-full font-normal md:text-16 ssm:text-14">
              Full Name
              <Input
                type="text"
                className={`${
                  props.errors.name ? "border-red-400" : "border-gray-100"
                } border rounded-5 lg:block px-4 py-3 outline-none w-full text-14 mt-1`}
                name="name"
                id="name"
                value={props.data.name}
                onChange={(e) => handleChange("name", e.target.value)}
                error={props.errors.name}
              />
            </label>
            <label
              htmlFor="phone"
              className="text-gray-700 w-full font-normal md:text-16 ssm:text-14">
              Phone Number
              <Input
                type="phone"
                className={`${
                  props.errors.phone ? "border-red-400" : "border-gray-100"
                } border rounded-5 lg:block px-4 py-3 outline-none w-full text-14 mt-1`}
                name="phone"
                id="phone"
                value={props.data.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                error={props.errors.phone}
              />
            </label>
          </div>
          <div className="flex justify-between items-center w-full gap-4">
            <label
              htmlFor="email"
              className="text-gray-700 w-full font-normal md:text-16 ssm:text-14">
              Email
              <Input
                type="email"
                className={`${
                  props.errors.email ? "border-red-400" : "border-gray-100"
                } border rounded-5 lg:block px-4 py-3 outline-none w-full text-14 mt-1`}
                name="email"
                id="email"
                value={props.data.email}
                onChange={(e) => handleChange("email", e.target.value)}
                error={props.errors.email}
              />
            </label>
            <label
              htmlFor="city"
              className="text-gray-700 w-full font-normal md:text-16 ssm:text-14">
              City
              <SelectComponent
                data={cities}
                name="city"
                error={props.errors.city}
                city={props.data.city}
                onChange={(value) => {
                  handleSelect("city", value);
                }}
              />
            </label>
          </div>
          <div className="flex justify-between items-center w-full gap-4">
            <label
              htmlFor="address"
              className="text-gray-700 w-full font-normal md:text-16 ssm:text-14">
              Address
              <Input
                type="text"
                className={`${
                  props.errors.address ? "border-red-400" : "border-gray-100"
                } border rounded-5 lg:block px-4 py-3 outline-none w-full text-14 mt-1`}
                name="address"
                id="address"
                value={props.data.address}
                onChange={(e) => handleChange("address", e.target.value)}
                error={props.errors.address}
              />
            </label>
            <label
              htmlFor="postalCode"
              className="text-gray-700 w-full font-normal md:text-16 ssm:text-14">
              ZIP Code
              <Input
                type="text"
                className={`${
                  props.errors.postalCode ? "border-red-400" : "border-gray-100"
                } border rounded-5 lg:block px-4 py-3 outline-none w-full text-14 mt-1`}
                name="postalCode"
                id="postalCode"
                value={props.data.postalCode}
                onChange={(e) => handleChange("postalCode", e.target.value)}
                error={props.errors.postalCode}
              />
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ShippingForm;
