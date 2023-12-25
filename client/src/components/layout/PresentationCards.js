import React from "react";
import Icon from "../../assets/icons/box-svgrepo-com.svg";
import Embroidery from "../../assets/icons/craft-embroidery-crafts-svgrepo-com.svg";

import PresentationCard from "../organismes/PresentationCard";

function PresentationCards() {
  const items = [
    {
      icon: Icon,
      title: "Production process",
      desc: "Each piece is meticulously handcrafted by skilled artisans, from the design to the final stitches.",
    },
    {
      icon: Icon,
      title: "Ico Friendly",
      desc: "Each piece is meticulously handcrafted by skilled artisans, from the design to the final stitches.",
    },
    {
      icon: Embroidery,
      title: "Care instructions",
      desc: "Hand wash in cold water and lay flat to dry for long-lasting beauty. Avoid harsh detergents or tumble drying.",
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
