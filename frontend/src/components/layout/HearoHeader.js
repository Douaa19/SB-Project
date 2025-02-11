import React from "react";
import Bg1 from "../../assets/images/cristina-gottardi-CSpjU6hYo_0-unsplash.jpg";
import Bg2 from "../../assets/images/kace-rodriguez-p3OzJuT_Dks-unsplash.jpg";
import Bg3 from "../../assets/images/tobias-rademacher-NuBvAE6VfSM-unsplash.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HearoHeader() {
  const images = [Bg1, Bg2, Bg3];
  const settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 6000,
    speed: 3000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
    appendDots: (dots) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <ul
          style={{
            margin: "0px",
            potion: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}>
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className="hover:opacity-75 sm:w-2 sm:h-2 ssm:w-1 ssm:h-1"
        style={{
          border: "1px #192655 solid",
          borderRadius: "8px",
          position: "relative",
          top: "3rem",
          left: "0",
          margin: "0",
          backgroundColor: "#192655",
        }}></div>
    ),
  };

  return (
    <div className="w-[100%] md:h-[80vh] sm:h-[60vh] ssm:h-[40vh] block md:mt-20 ssm:mt-16">
      <div className="z-[1] md:h-[80vh] sm:h-[60vh] ssm:h-[40vh] absolute w-full left-0 top-0 flex justify-center items-center">
        <div className="flex flex-col items-center justify-center">
          <h2 className="frame-5 text-center text-white font-normale md:text-3xl ssm:text-2xl">
            <span>Stitching</span>
            <span> stories,</span>
            <span> creating</span>
            <span> memories</span>
          </h2>
          <h1 className="frame-5 md:mt-2 ssm:mt-2">
            <span className=" md:text-5xl ssm:text-3xl font-bold text-white">
              Saba Embroidery
            </span>
          </h1>
        </div>
      </div>
      <Slider {...settings} className="slider-image">
        {images.map((image, index) => (
          <div key={index}>
            <div className="z-10 h-[99%] absolute bg-dark opacity-5 w-full top-0 left-0 flex justify-center items-center"></div>
            <img
              src={image}
              alt="slide"
              className="object-cover md:h-[80vh] sm:h-[60vh] ssm:h-[40vh] w-full"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HearoHeader;
