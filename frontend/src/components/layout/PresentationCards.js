import React from "react";
import Icon from "../../assets/icons/box-svgrepo-com.svg";
import Embroidery from "../../assets/icons/craft-embroidery-crafts-svgrepo-com.svg";

import PresentationCard from "../organismes/PresentationCard";

function PresentationCards() {
  const items = [
    {
      icon: Icon,
      title: "Production process",
      desc: "Skilled artisans meticulously craft each piece from start to finish, using high-quality fabrics and threads. Attention to detail is our priority, ensuring exquisite designs with every stitch.",
    },
    {
      icon: Icon,
      title: "Ico Friendly",
      desc: "Saba Embroidery is committed to sustainability. We use organic materials and eco-friendly practices, supporting a greener future with every embroidered creation.",
    },
    {
      icon: Embroidery,
      title: "Care instructions",
      desc: "To preserve the beauty of your embroidered treasures from Saba Embroidery, hand wash gently in cold water, air dry flat, and store away from direct sunlight.",
    },
  ];
  return (
    <div className="w-full ssm:py-6 sm:py-14 px-10 flex justify-center items-center">
      <div className="w-full max-h-max h-max flex flex-wrap justify-center items-center gap-6 transition-all duration-300 ease">
        {items.map((item, index) => (
          <PresentationCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default PresentationCards;
