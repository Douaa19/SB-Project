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
    speed: 100,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: false,
    prevArrow: false,
    appendDots: (dots) => (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ul
          style={{
            margin: "0px",
            potion: "absolute",
            display: "flex",
            justifyContent: "space-around",
            width: "10%",
          }}>
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "30px",
          color: "blue",
          border: "2px #DAB88A solid",
          borderRadius: "8px",
          position: "absolute",
          bottom: "2rem",
          margin: "0 1rem",
        }}></div>
    ),
  };

  return (
    <div className="w-[100%] max-h-full md:mt-3 ssm:mt-0 block">
      <Slider {...settings}>
        {images.map((image, index) => (
          <>
            <img
              key={index}
              src={image}
              alt="slide"
              className="h-[100vh] w-full"
            />
          </>
        ))}
      </Slider>
      {/* <Slider autoSlide={true} autoSlideInterval={5000}>
        {slides.map((s) => (
          <img src={s} alt="slide" />
        ))}
      </Slider> */}
    </div>
  );
}

export default HearoHeader;
