import React from "react";
import { motion } from "framer-motion";

function AboutCard({ index, title, text, jsx, image, reverse }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`md:mt-8 ssm:mt-4 flex justify-between items-center gap-8 w-full ${
        reverse ? "flex-row-reverse" : "flex-row"
      }`}>
      <div className={`${image ? "w-1/2" : "w-full mt-6"}`}>
        <h3
          className={`font-bold capitalize md:pb-4 ssm:pb-2 ${
            !image
              ? `font-extrabold flex flex-col items-center md:text-28 ssm:text-24 text-${
                  index === 0 ? "secondary" : "dark"
                }`
              : "md:text-24 ssm:text-18 text-dark"
          }`}>
          {title}
          {index === 0 && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "55%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="h-[2px] bg-secondary mt-2 text-center mb-2 relative"
            />
          )}
        </h3>

        <div
          className={`md:pb-5 ssm:pb-3 md:text-18 ssm:text-14 ${
            !image ? "text-center" : ""
          }`}>
          {jsx ? jsx : <p>{text}</p>}
        </div>
      </div>

      {image && (
        <div className="flex items-center justify-center w-1/2">
          <img src={image} alt="about-img" className="rounded-md w-full" />
        </div>
      )}
    </motion.div>
  );
}

export default AboutCard;
