import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Button } from "../atoms";
import { setOrders } from "../../redux/actions/orders";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { BACK_URL } from "../../config";
import { ReactComponent as Next } from "../../assets/icons/arrow-next-small-svgrepo-com.svg";
import { ReactComponent as Prev } from "../../assets/icons/arrow-prev-small-svgrepo-com.svg";
import { Input } from "../atoms";

function BigItemCard({ url, item }) {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user_id);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [images, setImages] = useState([]);
  const [errors, setErrors] = useState({});
  const [order, setOrder] = useState({
    quantity: 1,
    item,
  });

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Next />,
    prevArrow: <Prev />,
    useTransform: true,
    customPaging: (i) => {
      return (
        <div className="w-3 h-3 flex justify-center items-center border border-gray-500 rounded-full hover:bg-gray-100 hover:border-gray-100 transition-all ease-in-out duration-300"></div>
      );
    },
    dotsClass: "slick-dots",
  };

  const handleError = (data) => {
    const errors = {};

    if (parseInt(data.quantity) === 0 || data.quantity < 0) {
      errors.quantity = "Minimum quantity is 1";
    }

    setErrors(errors);
    return errors;
  };

  const addToCard = () => {
    // validation
    let errors = handleError(order);

    if (Object.keys(errors).length === 0) {
      if (isLoggedIn) {
        dispatch(setOrders(userId, item, order.quantity, order.colors));
      } else {
        const guestOrders =
          JSON.parse(localStorage.getItem("guestOrders")) || [];
        const existingItemIndex = guestOrders.findIndex(
          (existingOrder) =>
            existingOrder.item._id === order.item._id &&
            JSON.stringify(existingOrder.colors) ===
              JSON.stringify(order.colors)
        );

        if (existingItemIndex !== -1) {
          guestOrders[existingItemIndex].quantity += order.quantity;
        } else {
          guestOrders.push({
            item: order.item,
            quantity: order.quantity,
            colors: order.colors,
          });
        }

        localStorage.setItem("guestOrders", JSON.stringify(guestOrders));
      }
    } else {
      console.log(errors);
    }
  };

  const handleQuantityChange = (e) => {
    setOrder({ order, quantity: e.target.value });
  };

  useEffect(() => {
    const fetchItemImages = async () => {
      try {
        const response = await fetch(`${BACK_URL}/items/${item._id}/images`);
        const data = await response.json();

        setImages(data.images);
      } catch (error) {
        console.error("Error fetching item images", error);
      }
    };

    fetchItemImages();
  }, [item._id]);

  return (
    <div className="lg:py-8 ssm:py-6 sm:px-24 ssm:px-6 mt-20 h-auto">
      <div className="flex flex-col gap-3 h-full">
        <div className="capitalize text-18 mb-4">
          <p>
            <a
              href="/"
              className="hover:underline hover:text-secondary hover:font-semibold lg:text-16 sm:text-14 ssm:text-12">
              home
            </a>{" "}
            /{" "}
            <a
              href={`/${url}`}
              className="hover:underline hover:text-secondary hover:font-semibold lg:text-16 sm:text-14 ssm:text-12">
              {url === "best-selling" ? "best selling" : "products"}
            </a>{" "}
            /{" "}
            <span className="text-secondary font-semibold lg:text-16 sm:text-14 ssm:text-12">
              {item.title}
            </span>
          </p>
        </div>
        <div className="h-auto flex md:flex-row md:justify-between items-between ssm:flex-col ssm:justify-start md:gap-16 ssm:gap-12">
          <div className="flex justify-start md:w-1/2 ssm:w-full h-full">
            <div className="w-full">
              {item.images.length > 0 ? (
                <>
                  <Slider {...settings}>
                    {images.map((imageData, index) => (
                      <div
                        key={index}
                        className="w-auto max-h-full flex items-center justify-center relative">
                        <img
                          className="object-contain w-full h-full px-1"
                          src={`data:image/png;base64,${imageData}`}
                          alt="item_img"
                        />
                      </div>
                    ))}
                  </Slider>
                </>
              ) : (
                <div className="w-[28rem] h-[28rem] animate-pulse bg-gray-100"></div>
              )}
            </div>
          </div>
          <div className="md:h-auto flex justify-start w-full ssm:mt-8 md:mt-0">
            <div className="w-full flex flex-col justify-start items-start">
              <div className="w-full">
                <h3 className="lg:text-32 ssm:text-24 text-dark-gray font-extrabold tracking-wider mb-4">
                  {item.title}
                </h3>
                <p className="md:text-16 ssm:text-14 mb-6">
                  {item.description.split(".").map((sentence, index) =>
                    sentence.trim() ? (
                      <span key={index}>
                        {sentence.trim()}.
                        <br />
                      </span>
                    ) : null
                  )}
                </p>
                <div className="md:text-16 ssm:text-14 flex gap-[2.8rem]">
                  Size:{" "}
                  <span className="font-semibold">{`${item.size} cm`}</span>
                </div>
                <div className="flex flex-col gap-4 w-full my-6">
                  <div className="flex justify-start items-center gap-4">
                    <span className="text-14">Quantity:</span>
                    <Input
                      type="number"
                      name="quantity"
                      value={order.quantity}
                      placeHolder="Quantity"
                      onChange={handleQuantityChange}
                      className="border border-gray-100 text-gray-500 rounded-md w-12 text-16 px-4 py-2 outline-none"
                      error={errors.quantity}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:justify-center ssm:justify-start ssm:items-center w-full">
                <div className="w-full flex flex-col justify-end items-end gap-0 my-6">
                  <span
                    className={`font-bold ${
                      item.promotionPrice
                        ? "line-through text-red md:text-18 ssm:text-16"
                        : "text-dark md:text-24 ssm:text-18"
                    }`}>{`${item.price}DH`}</span>
                  {/* If there is a solde price */}
                  {item.promotionPrice && (
                    <span className="md:text-24 ssm:text-18 font-bold">
                      {item.promotionPrice.price}DH
                    </span>
                  )}
                </div>
                <Button
                  className="ssm:mt-4 md:w-1/2 ssm:w-full md:mt-2
          border-1 border-main rounded-md md:px-10 ssm:px-6 py-3 capitalize text-white bg-main md:text-16 ssm:text-16 font-medium outline-none hover:bg-white hover:text-main transition-all ease-in-out duration-300 hover:shadwo:md hover:scale-105"
                  text="Add to card"
                  onClick={addToCard}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BigItemCard;
