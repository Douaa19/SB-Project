import React from "react";

function AboutCard({ title, text, image, reverse }) {
  return (
    <div
      className={`md:mt-8 ssm:mt-4 flex justify-between items-center gap-8 w-full ${
        reverse ? "flex-row-reverse" : "flex-row"
      }`}>
      <div className="w-2/4">
        <h3 className="md:text-24 ssm:text-18 font-bold capitalize text-dark md:pb-4 ssm:pb-2">
          {title}
        </h3>
        <p className="md:pb-5 ssm:pb-3 md:text-18 ssm:text-14">{text}</p>
      </div>
      <div className="flex items-center justify-center w-2/4">
        <img src={image} alt="about-img" className="rounded-md w-full" />
      </div>
    </div>
  );
}

export default AboutCard;
