import React from "react";
// import Slider from "./Slider";
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
          border: "1px #DAB88A solid",
          borderRadius: "8px",
          position: "relative",
          top: "0",
          left: "0",
          margin: "0",
          backgroundColor: "#DAB88A",
        }}></div>
    ),
  };

  return (
    <div className="w-[100%] md:h-[80vh] sm:h-[60vh] ssm:h-[40vh] ssm:mt-0 block">
      <div className="z-10 md:h-[80vh] sm:h-[60vh] ssm:h-[40vh] absolute w-full top-0 left-0 flex justify-center items-center">
        <div className="flex flex-col items-center justify-center">
          <h2 className="frame-5 text-center text-white font-normale md:text-24 sm:text-16 ssm:text-12">
            <span>Stitching</span>
            <span> stories,</span>
            <span> creating</span>
            <span> memories</span>
          </h2>
          <h1 className="frame-5 md:mt-2 ssm:mt-1">
            <span className=" md:text-36 sm:text-24 ssm:text-18 font-bold text-white">
              Saba Embroidery
            </span>
          </h1>
        </div>
      </div>

      <Slider {...settings} className="slider-image">
        {images.map((image, index) => (
          <>
            <div className="z-10 h-full absolute bg-dark opacity-5 w-full top-0 left-0 flex justify-center items-center"></div>
            <img
              key={index}
              src={image}
              alt="slide"
              className="object-cover md:h-[80vh] sm:h-[60vh] ssm:h-[40vh] w-full"
            />
          </>
        ))}
      </Slider>
    </div>
  );
}

export default HearoHeader;
