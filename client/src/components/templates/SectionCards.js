import React, { useState } from "react";
import { ReactComponent as Next } from "../../assets/icons/arrow-next-small-svgrepo-com.svg";
import { ReactComponent as Prev } from "../../assets/icons/arrow-prev-small-svgrepo-com.svg";
import ItemCard from "../organismes/ItemCard";
import Slider from "react-slick";

function SectionCards({ items, title, buttonText, page }) {
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
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className={`sm:px-10 ssm:px-6 ssm:pb-6 sm:pb-7 flex flex-col justify-center items-center w-full`}>
      <div className="title capitalize text-32 font-extrabold text-main">
        {title}
      </div>
      <div className="w-[90%]">
        <div className="mt-10">
          <Slider {...settings}>
            {items.map((i) => (
              <ItemCard
                key={i}
                image={i.image}
                description={i.description}
                price={i.price}
              />
            ))}
          </Slider>
        </div>
      </div>
      <div className="w-max mt-10">
        <button
          className="text-center text-14 font-bold border border-main text-main px-6 py-3 rounded-5 hover:text-white hover:bg-main"
          onClick={() => (window.location = `/${page}`)}>
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default SectionCards;
