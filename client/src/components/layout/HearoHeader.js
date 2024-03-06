import React from "react";
// import Slider from "./Slider";
import Bg1 from "../../assets/images/cristina-gottardi-CSpjU6hYo_0-unsplash.jpg";
import Bg2 from "../../assets/images/kace-rodriguez-p3OzJuT_Dks-unsplash.jpg";
import Bg3 from "../../assets/images/tobias-rademacher-NuBvAE6VfSM-unsplash.jpg";
import Slider from "react-slick";

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
    appendDots: (dots) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <ul
          style={{
            margin: "1rem 0",
            potion: "absolute",
            display: "flex",
            justifyContent: "space-around",
            width: "12%",
          }}>
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className="hover:opacity-75"
        style={{
          width: "3rem",
          height: "0.2rem",
          color: "blue",
          border: "2px #DAB88A solid",
          borderRadius: "8px",
          position: "absolute",
          bottom: "2rem",
          margin: "0 1rem",
          backgroundColor: "#DAB88A",
        }}></div>
    ),
  };

  return (
    <div className="w-[100%] md:max-h-full ssm:max-h-[50vh] md:mt-3 ssm:mt-0 block">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div className="relative">
            <div className="shadow z-10 h-[100vh] w-full bg-dark opacity-10 fixed top-0 left-0 text-dark">
              HELLO
            </div>
            <img
              key={index}
              src={image}
              alt="slide"
              className="h-[100vh] w-full"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HearoHeader;
