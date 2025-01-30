import React from "react";
import { motion } from "framer-motion";

function AboutCard({ title, text, image, reverse }) {
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
          className={`font-bold capitalize text-dark md:pb-4 ssm:pb-2 ${
            !image
              ? "font-extrabold text-center md:text-28 ssm:text-24"
              : "md:text-24 ssm:text-18"
          }`}>
          {title}
        </h3>
        <p
          className={`md:pb-5 ssm:pb-3 md:text-18 ssm:text-14 ${
            !image ? "text-center" : ""
          }`}>
          {text}
        </p>
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
