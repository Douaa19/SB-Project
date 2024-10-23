import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Button, Input } from "../atoms";
import { setOrders } from "../../redux/actions/orders";
import { useDispatch, useSelector } from "react-redux";
import { BACK_URL } from "../../config";

function BigItemCard({ url, item }) {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user_id);
  const [images, setImages] = useState([]);
  const [errors, setErrors] = useState({});
  const [order, setOrder] = useState({
    quantity: 1,
    item,
  });

  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <></>,
    prevArrow: <></>,
    useTransform: true,
    customPaging: (i) => {
      return (
        <div className="w-16 h-16 flex justify-center items-center">
          <img
            src={`data:image/png;base64,${images[i]}`}
            alt={`dot_image_${i}`}
            className="h-full w-full object-cover rounded-lg hover:cursor-pointer hover:opacity-90"
          />
        </div>
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

  const buyNow = () => {
    // validation
    let errors = handleError(order);

    if (Object.keys(errors).length === 0) {
      dispatch(setOrders(userId, order.item, order.quantity));
      window.location = `/basket`;
    } else {
      console.log("Error!!");
    }
  };

  const addToCard = () => {
    // validation
    let errors = handleError(order);

    if (Object.keys(errors).length === 0) {
      dispatch(setOrders(userId, order.item, order.quantity));
    } else {
      console.log("Error!!");
    }
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
  }, []);

  return (
    <div className="lg:py-8 ssm:py-6 sm:px-24 ssm:px-6 mt-16">
      <div className="flex flex-col gap-3">
        <div className="capitalize text-16">
          <p>
            <a
              href="/"
              className="hover:underline hover:text-main lg:text-16 sm:text-14 ssm:text-12">
              home
            </a>{" "}
            /{" "}
            <a
              href={`/${url}`}
              className="hover:underline hover:text-main lg:text-16 sm:text-14 ssm:text-12">
              {url === "best-selling" ? "best selling" : "products"}
            </a>{" "}
            /{" "}
            <span className="text-main lg:text-16 sm:text-14 ssm:text-12">
              {item.title}
            </span>
          </p>
        </div>
        <div className="flex md:flex-row md:justify-between items-center ssm:flex-col ssm:justify-start md:gap-16 ssm:gap-12">
          <div className="flex justify-start md:w-1/2 ssm:w-full">
            <div className="w-full">
              {item.images.length > 0 ? (
                <>
                  <Slider {...settings}>
                    {images.map((imageData, index) => (
                      <div
                        key={index}
                        className="w-auto max-h-[400px] flex items-center justify-center relative">
                        <img
                          className="object-contain w-full h-auto"
                          src={`data:image/png;base64,${imageData}`}
                          alt="item_img"
                        />
                      </div>
                    ))}
                  </Slider>
                </>
              ) : (
                <p>No images available</p>
              )}
            </div>
          </div>
          <div className="flex justify-start w-full ssm:mt-8 md:mt-0">
            <div className="text-start w-full">
              <div className="">
                <h3 className="lg:text-24 md:text-18 text-dark-gray font-bold">
                  {item.title}
                </h3>
                <p className="">{item.description}</p>
                <span>{`${item.size} cm`}</span>
                <div className="md:mt-10 ssm:mt-2 md:gap-3 ssm:gap-1 flex flex-col md:text-16 ssm:text-14">
                  <div
                    className={`border h-4 w-4 rounded-full ${
                      item.color === "black"
                        ? "bg-dark"
                        : item.color === "white"
                        ? "bg-white"
                        : "bg-main"
                    }`}></div>
                  {/* <div className="">
                  {item.colors.map((color, index) => (
                    <div>{color}</div>
                  ))}
                </div> */}
                </div>
                <div className="mt-2">
                  <Input
                    type="number"
                    className={`border rounded-5 lg:text-14 lg:block px-2 py-2 outline-none md:text-12 w-10 ssm:text-12 ${
                      errors.quantity
                        ? "border-red text-red placeholder:text-red"
                        : "border-main"
                    }`}
                    name="name"
                    value={order.quantity}
                    onChange={(e) =>
                      setOrder({ ...order, quantity: parseInt(e.target.value) })
                    }
                    error={errors.quantity}
                  />
                  <span className="lg:text-24 md:text-18">{`${item.price}DH`}</span>
                </div>
              </div>
              <div className="flex flex-col gap-4 md:mt-40 ssm:mt-10 ssm:items-center">
                <Button
                  className="ssm:min-w-[75%] md:w-1/2 outline-none border border-main font-bold md:text-16 ssm:text-14 hover:bg-main hover:text-white text-main rounded-md py-3 capitalize"
                  text="buy now"
                  onClick={buyNow}
                />
                <Button
                  className="ssm:min-w-[75%] md:w-1/2 outline-none border border-main font-bold md:text-16 ssm:text-14 hover:bg-white hover:text-main bg-main text-white rounded-md py-3 capitalize"
                  text="add to card"
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
