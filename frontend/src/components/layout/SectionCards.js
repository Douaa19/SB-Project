import React from "react";
import { ReactComponent as Next } from "../../assets/icons/arrow-next-small-svgrepo-com.svg";
import { ReactComponent as Prev } from "../../assets/icons/arrow-prev-small-svgrepo-com.svg";
import ItemCard from "../organismes/ItemCard";
import Slider from "react-slick";
import LoadingCard from "../organismes/LoadingCard";

function SectionCards({
  items,
  title,
  buttonText,
  page,
  limit,
  transition,
  icon,
  lineSize,
}) {
  const myArr = [0, 1, 2, 3, 4, 5];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
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
        },
      },
      {
        breakpoint: 900,
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
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div
      className={`sm:px-10 ssm:px-6 ssm:pb-4 sm:pb-7 flex flex-col justify-center items-center w-full mt-6`}>
      <h2
        className={`capitalize text-main flex items-center gap-1 relative ssm:text-2xl md:text-3xl font-bold pb-2 after:content-[''] after:absolute after:w-${lineSize} after:h-1 after:bg-main after:bottom-0 after:left-0`}>
        <span className="text-yellow-500">{icon}</span> {title}
      </h2>
      <div className="w-[90%]">
        <div className="sm:mt-10 ssm:mt-5">
          {items.length > 0 ? (
            <Slider {...settings}>
              {items.slice(0, limit).map((i, index) => (
                <div className="h-auto flex flex-col justify-between">
                  <ItemCard
                    title={i.title}
                    key={index}
                    description={i.description}
                    price={i.price}
                    colors={i.colors}
                    id={i._id}
                    url={page}
                    transition={false}
                  />
                </div>
              ))}
            </Slider>
          ) : (
            <Slider {...settings}>
              {myArr.map((i, index) => (
                <div className="h-96 flex items-center justify-center">
                  <LoadingCard key={index} />
                </div>
              ))}
            </Slider>
          )}
        </div>
      </div>
      <div className="w-max mt-10">
        <button
          className="relative flex px-6 py-3 items-center justify-center overflow-hidden bg-main md:text-16 ssm:text-14 font-medium rounded-md text-white shadow-md transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-main hover:shadow-main hover:before:border-[25px]"
          onClick={() => (window.location = `/${page}`)}>
          <span className="relative z-10">{buttonText}</span>
        </button>
      </div>
    </div>
  );
}

export default SectionCards;
