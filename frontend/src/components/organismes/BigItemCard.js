import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Button, Input } from "../atoms";
import { setOrders } from "../../redux/actions/orders";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import chroma from "chroma-js";
import { BACK_URL } from "../../config";
import { ReactComponent as Next } from "../../assets/icons/arrow-next-small-svgrepo-com.svg";
import { ReactComponent as Prev } from "../../assets/icons/arrow-prev-small-svgrepo-com.svg";

function BigItemCard({ url, item }) {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user_id);
  const [images, setImages] = useState([]);
  const [errors, setErrors] = useState({});
  const [order, setOrder] = useState({
    quantity: 1,
    item,
  });
  const [selectedNumber, setSelectedNumber] = useState(null);

  const colorOptions = [
    { value: "beige", label: "Beige", color: "#ede8d0" },
    { value: "black", label: "Black", color: "#000000" },
  ];

  const numberOptions = Array.from({ length: 5 }, (_, i) => ({
    value: i + 1,
    label: `${i + 1}`,
  }));

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: false,
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

  const colorStyles = {
    control: (styles) => ({ ...styles, background: "white" }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isDisabled
          ? undefined
          : isSelected
          ? data.color
          : isFocused
          ? color.alpha(0.1).css()
          : undefined,
        color: isDisabled
          ? "#ccc"
          : isSelected
          ? chroma.contrast(color, "black") > 2
            ? "white"
            : "black"
          : data.color,
        cursor: isDisabled ? "not-allowed" : "default",
        ":active": {
          ...styles[":active"],
          backgroundColor: !isDisabled
            ? isSelected
              ? data.color
              : color.alpha(0.3).css()
            : undefined,
        },
      };
    },
    multiValue: (styles, { data }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: color.alpha(0.1).css(),
      };
    },
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: chroma.contrast(data.color, "white") > 2 ? data.color : "black", // Ensure black text for white option
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: data.color,
      ":hover": {
        backgroundColor: data.color,
        color: "white",
      },
    }),
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

  const handleNumberChange = (selectedOption) => {
    setSelectedNumber(selectedOption);
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
    <div className="lg:py-8 ssm:py-6 sm:px-24 ssm:px-6 mt-16 h-auto">
      <div className="flex flex-col gap-3 h-full">
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
        <div className="h-auto flex md:flex-row md:justify-between items-center ssm:flex-col ssm:justify-start md:gap-16 ssm:gap-12">
          <div className="flex justify-start md:w-1/2 ssm:w-full h-full">
            <div className="w-full">
              {item.images.length > 0 ? (
                <>
                  <Slider {...settings}>
                    {images.map((imageData, index) => (
                      <div
                        key={index}
                        className="w-auto max-h-[400px] flex items-center justify-center relative">
                        <img
                          className="object-contain w-full h-auto px-1"
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
          <div className="md:h-[60vh] ssm:h-auto flex justify-start w-full ssm:mt-8 md:mt-0">
            <div className="w-full flex flex-col justify-between items-start">
              <div className="">
                <h3 className="lg:text-24 md:text-18 text-dark-gray font-bold tracking-wider">
                  {item.title}
                </h3>
                <p className="md:text-16 ssm:text-14">{item.description}</p>
                <span className="md:text-16 ssm:text-14">{`${item.size} cm`}</span>
                <div className="flex justify-start items-center gap-2 w-full my-4">
                  <Select
                    closeMenuOnSelect={false}
                    defaultValue={[]}
                    isMulti
                    options={colorOptions}
                    styles={colorStyles}
                    placeholder="Color"
                    className="w-[12rem] text-14"
                  />
                  <Select
                    value={selectedNumber}
                    onChange={handleNumberChange}
                    options={numberOptions}
                    placeholder="Quantity"
                    isClearable
                    className="text-14"
                  />
                </div>
                <span className="md:text-18 ssm:text-16">{`${item.price}DH`}</span>
                {/* <div className="mt-2">
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
                </div> */}
              </div>
              <div className="flex justify-start ssm:items-center w-full">
                <Button
                  className="w-1/2 ssm:m-0 md:mt-3
          border-1 border-main rounded-md md:px-10 ssm:px-6 md:py-3 ssm:py-[6px] capitalize text-white bg-main md:text-16 ssm:text-14 font-medium outline-none hover:bg-white hover:text-main transition-all ease-in-out duration-300 hover:shadwo:md hover:scale-105"
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
