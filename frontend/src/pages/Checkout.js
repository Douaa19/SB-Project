import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavBar, Footer } from "../components/layout";
import { ShippingForm } from "../components/molecules";
import { Input, Button } from "../components/atoms";
import { sendOrder } from "../services/orders";
import { setOrderSent } from "../redux/actions/popups";
import { CircleCheck } from "lucide-react";

function Checkout() {
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});
  const [errorResponse, setErrorResponse] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const userId = useSelector((state) => state.user_id);
  const orders = useSelector((state) => state.orders.orders);

  const userOrders = orders[userId];

  const handleSubmit = () => {
    const updatedData = { ...data, payment: selectedPayment };
    const validationErrors = validationForm(updatedData);

    if (Object.keys(validationErrors).length === 0) {
      sendOrder(updatedData, userOrders).then((res) => {
        if (!res.data.messageSuccess) {
          setErrorResponse(res.data.messageError);
          alert(errorResponse);
        } else {
          dispatch(setOrderSent(true));
        }
      });
    } else {
      setErrors(validationErrors);
    }
  };

  const validationForm = (data) => {
    const errors = {};

    if (!data.name) {
      errors.name = "The field name is required to proceed.";
    } else if (data.name.length < 5) {
      errors.name = "The name entered is too short.";
    } else if (data.name.length > 15) {
      errors.name = "The name entered exceeds the character limit.";
    }

    if (!data.phone) {
      errors.phone = "The field phone is required to proceed.";
    } else if (!isPhoneNumber(data.phone)) {
      errors.phone = "Please enter a valid phone number.";
    }

    if (!data.email) {
      errors.email = "The field email is required to proceed.";
    } else if (!isValidEmail(data.email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!data.city) {
      errors.city = "The field city is required to proceed.";
    }

    if (!data.address) {
      errors.address = "The field address is required to proceed.";
    }

    if (!data.postalCode) {
      errors.postalCode = "The field zip code is required to proceed.";
    }

    if (!selectedPayment) {
      errors.payment = "You have to choose a payment method to proceed.";
    }

    return errors;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const isPhoneNumber = (phone) => {
    return /^(\+212\d{9}|0\d{9})$/.test(phone);
  };

  return (
    <>
      <NavBar />
      <div className="ssm:pt-4 md:px-20 ssm:px-16 w-full mt-24">
        <div className="grid md:grid-cols-2 md:grid-rows-1 ssm:grid-cols-1 ssm:grid-rows-2 gap-8 h-max w-full">
          <div className="md:col-span-1 ssm:order-last md:order-first w-full flex flex-col items-start justify-between gap-8">
            <div className="flex flex-col items-start gap-2 w-full">
              <h3 className="text-16 font-semibold capitalize tracking-wide text-gray-700">
                delivery information
              </h3>
              <ShippingForm
                className="bg-white p-6 rounded-md shadow-md w-full"
                button={false}
                data={data}
                setData={setData}
                errors={errors}
              />
            </div>
            <div className="flex flex-col items-start gap-2 w-full">
              <h3 className="text-16 font-semibold capitalize tracking-wide text-gray-700">
                payment method
              </h3>
              {errors.payment && (
                <h4 className="text-red font-medium text-14">
                  {errors.payment}
                </h4>
              )}
              <div className="w-full flex sm:flex-row ssm:flex-col gap-4 items-center justify-between">
                <div
                  className={`py-4 px-4 flex w-full items-center bg-white shadow-sm rounded-md ${
                    selectedPayment === "cash-on-delivery"
                      ? "border-main border-2"
                      : "border-gray-100"
                  }`}
                  onClick={() => setSelectedPayment("cash-on-delivery")}>
                  <label className="text-14 font-medium text-gray-700 flex gap-1 items-center">
                    <Input
                      type="radio"
                      value="cash-on-delivery"
                      checked={selectedPayment === "cash-on-delivery"}
                      readOnly
                      className="peer sr-only"
                    />
                    <CircleCheck
                      strokeWidth={1.5}
                      className={`rounded-full ${
                        selectedPayment === "cash-on-delivery"
                          ? "bg-main text-light"
                          : "bg-light text-gray-700"
                      }`}
                    />
                    Cash on Delivery
                  </label>
                </div>
                <div
                  className={`py-4 px-4 flex w-full items-center bg-white shadow-sm rounded-md ${
                    selectedPayment === "online-payment"
                      ? "border-main border-2"
                      : "border-light border-2"
                  }`}
                  onClick={() => setSelectedPayment("online-payment")}>
                  <label className="text-14 font-medium text-gray-700 flex gap-1 items-center">
                    <Input
                      type="radio"
                      value="online-payment"
                      checked={selectedPayment === "online-payment"}
                      readOnly
                      className="appearance-none"
                    />
                    <CircleCheck
                      strokeWidth={1.5}
                      className={`rounded-full ${
                        selectedPayment === "online-payment"
                          ? "bg-main text-light"
                          : "bg-light text-gray-700"
                      }`}
                    />
                    Online Payment
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 w-full">
            <h3 className="text-16 font-semibold capitalize tracking-wide text-gray-700">
              order summary
            </h3>
            <div className="checkout w-full text-center">
              <Button
                type="submit"
                text="Confirm Order"
                className="border-main py-2 px-3 bg-main text-light rounded-md"
                onClick={handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Checkout;
