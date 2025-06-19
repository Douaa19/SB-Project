import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavBar, Footer, Loading } from "../components/layout";
import { ShippingForm, CheckoutPopupContent } from "../components/molecules";
import { Input, Button } from "../components/atoms";
import { OrderSummaryCard } from "../components/organismes";
import { sendOrder } from "../services/orders";
import { setOrderSent } from "../redux/actions/popups";
import { CircleCheck } from "lucide-react";
import { Popup } from "../components/organismes";

function Checkout() {
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});
  const [errorResponse, setErrorResponse] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [subtotal, setSubTotal] = useState(null);
  const [grandtotal, setGrandTotal] = useState(null);
  const shipping = 49;
  const userId = useSelector((state) => state.user_id);
  const userEmail = useSelector((state) => state.email);
  const orders = useSelector((state) => state.orders.orders);
  const [loading, setLoading] = useState(true);
  const orderSent = useSelector((state) => state.orderSentPopup);

  const userOrders = orders[userId];

  const handleSubmit = () => {
    const updatedData = { ...data, payment: selectedPayment, email: userEmail };
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

  const isPhoneNumber = (phone) => {
    return /^(\+212\d{9}|0\d{9})$/.test(phone);
  };

  const SubmitButton = (
    <Button
      type="submit"
      text="Confirm Order"
      textClass="relative z-10"
      className="ssm:m-0 md:mt-3 border-1 border-main rounded-md px-10 py-3 capitalize text-white bg-main md:text-md ssm:text-sm font-bold outline-none hover:bg-white hover:text-main transition-all ease-in-out duration-300 hover:shadwo:md hover:scale-105"
      onClick={handleSubmit}
    />
  );

  useEffect(() => {
    let total = 0;
    for (let index = 0; index < userOrders.length; index++) {
      if (
        typeof userOrders[index].item.price === "number" &&
        typeof userOrders[index].quantity === "number"
      ) {
        const priceItem = userOrders[index].item.promotionPrice
          ? userOrders[index].item.promotionPrice.price
          : userOrders[index].item.price;
        total += priceItem * userOrders[index].quantity;
      }
    }

    setSubTotal(Number(total.toFixed(2)));
  }, [orders, userOrders]);

  useEffect(() => {
    if (subtotal !== null) {
      const grandTotal = subtotal + shipping;
      setGrandTotal(Number(grandTotal.toFixed(2)));
    }

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [subtotal, shipping]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <NavBar />
          <div className="ssm:pt-4 md:px-20 ssm:px-16 w-full mt-24">
            <div className="grid md:grid-cols-2 md:grid-rows-1 ssm:grid-cols-1 ssm:grid-rows-2 gap-8 h-max w-full">
              <div className="md:col-span-1 ssm:order-last md:order-first w-full flex flex-col items-start justify-start gap-8">
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
                    email={userEmail}
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
                      className={`cursor-pointer py-4 px-4 flex w-full items-center bg-white shadow-sm rounded-md ${
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
                      className={`cursor-pointer py-4 px-4 flex w-full items-center bg-white shadow-sm rounded-md ${
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
                <div className="w-full text-center md:hidden ssm:block">
                  {SubmitButton}
                </div>
              </div>
              <div className="flex flex-col items-start gap-2 w-full">
                <h3 className="text-16 font-semibold capitalize tracking-wide text-gray-700">
                  order summary
                </h3>
                <div className="flex flex-col justify-between items-center bg-white p-6 rounded-md shadow-md w-full">
                  <div className="w-full pb-5">
                    <div className="flex flex-col items-center justify-center gap-2">
                      {userOrders.map((order, index) => (
                        <OrderSummaryCard
                          key={index}
                          order={order}
                          userId={userId}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex flex-col items-center justify-center gap-4 border-t-1 border-gray-100 w-full py-5">
                      <div className="flex justify-between items-center w-full">
                        <span className="text-14 w-max text-gray-500">
                          Subtotal
                        </span>
                        <span className="text-14 w-max text-gray-700 font-semibold">
                          {subtotal}DH
                        </span>
                      </div>
                      <div className="flex justify-between items-center w-full">
                        <span className="text-14 w-max text-gray-500">
                          Shipping
                        </span>
                        <span className="text-14 w-max text-gray-700 font-semibold">
                          {shipping}DH
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-between w-full border-t-1 border-gray-100 py-5 gap-6">
                      <div className="flex justify-between items-center w-full">
                        <span className="text-14 w-max text-gray-500">
                          Total {`(DH)`}
                        </span>
                        <span className="text-14 w-max text-gray-700 font-semibold">
                          {grandtotal}DH
                        </span>
                      </div>
                      <div className="w-full text-center ssm:hidden md:block">
                        {SubmitButton}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
          {orderSent !== false && (
            <div className="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
              <Popup>
                <CheckoutPopupContent />
              </Popup>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default Checkout;
