import React, { useState } from "react";
import { ReactComponent as Next } from "../../assets/icons/arrow-next-small-svgrepo-com.svg";
import { ReactComponent as Prev } from "../../assets/icons/arrow-prev-small-svgrepo-com.svg";
import ItemCard from "../organismes/ItemCard";
import Slider from "react-slick";
import LoadingCard from "../organismes/LoadingCard";

function SectionCards({ items, title, buttonText, page, limit }) {
  console.log(limit)
  const myArr = [0, 1, 2, 3, 4, 5];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <Next />,
    prevArrow: <Prev />,
    useTransform: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div
      className={`sm:px-10 ssm:px-6 ssm:pb-4 sm:pb-7 flex flex-col justify-center items-center w-full`}>
      <div className="capitalize sm:text-32 ssm:text-24 font-extrabold text-main">
        {title}
      </div>
      <div className="w-[90%]">
        <div className="sm:mt-10 ssm:mt-5">
          {items.length > 0 ? (
            <Slider {...settings}>
              {items.slice(0, limit).map((i, index) => (
                <>
                  <ItemCard
                    key={index}
                    description={i.description}
                    price={i.price}
                    id={i._id}
                    url={page}
                  />
                </>
              ))}
            </Slider>
          ) : (
            <Slider {...settings}>
              {myArr.map((i, index) => (
                <LoadingCard />
              ))}
            </Slider>
          )}
        </div>
      </div>
      <div className="w-max mt-10">
        <button
          className="text-center capitalize sm:text-14 ssm:text-12 font-bold border border-main text-main px-6 py-3 rounded-5 hover:text-white hover:bg-main"
          onClick={() => (window.location = `/${page}`)}>
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default SectionCards;
