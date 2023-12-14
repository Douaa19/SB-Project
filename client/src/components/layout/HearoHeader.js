import React from "react";
import Slider from "./Slider";
import Bg1 from "../../assets/images/cristina-gottardi-CSpjU6hYo_0-unsplash.jpg";
import Bg2 from "../../assets/images/kace-rodriguez-p3OzJuT_Dks-unsplash.jpg";
import Bg3 from "../../assets/images/tobias-rademacher-NuBvAE6VfSM-unsplash.jpg";
import Bg4 from "../../assets/images/image1.jpg";

const slides = [Bg1, Bg2, Bg3, Bg4];

function HearoHeader() {
  return (
    <div className="w-full mt-3 ssm:hidden sm:block">
      <Slider autoSlide={true} autoSlideInterval={5000}>
        {slides.map((s) => (
          <img src={s} alt="slide" />
        ))}
      </Slider>
    </div>
  );
}

export default HearoHeader;
