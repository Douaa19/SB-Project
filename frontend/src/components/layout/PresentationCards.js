import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Box from "../../assets/icons/cube.png";
import Embroidery from "../../assets/icons/craft-embroidery-crafts-svgrepo-com.svg";
import EcoFriendly from "../../assets/icons/ecofriendly.png";

import PresentationCard from "../organismes/PresentationCard";

function PresentationCards() {
  const items = [
    {
      icon: Box,
      title: "Production process",
      desc: "Skilled artisans meticulously craft each piece from start to finish, using high-quality fabrics and threads. Attention to detail is our priority, ensuring exquisite designs with every stitch.",
    },
    {
      icon: EcoFriendly,
      title: "Ico Friendly",
      desc: "Saba Embroidery is committed to sustainability. We use organic materials and eco-friendly practices, supporting a greener future with every embroidered creation.",
    },
    {
      icon: Embroidery,
      title: "Care instructions",
      desc: "To preserve the beauty of your embroidered treasures from Saba Embroidery, hand wash gently in cold water, air dry flat, and store away from direct sunlight.",
    },
  ];

  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="max-w-6xl mx-auto px-8 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative group block p-2 h-full w-full "
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}>
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-slate-800/[0.1] block rounded-lg"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <PresentationCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PresentationCards;
