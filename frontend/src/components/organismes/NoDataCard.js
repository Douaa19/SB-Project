import React from "react";
import { motion } from "framer-motion";

function NoDataCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1, duration: 300 }}>
      <div className="h-[60vh] w-full flex justify-center items-center mb-6 text-gray-700">
        <div className="max-w-[35rem] border border-gray-100 bg-gray-50 p-10 rounded-lg shadow-lg">
          <div className="">{/* <img src="" alt="" /> */}</div>
          <div class="text-5xl font-dark font-bold text-center mb-6">404</div>
          <div className="flex flex-col justify-center items-center">
            <span className="ssm:text-xl md:text-2xl font-light leading-normal pb-2">
              Sorry we couldn't find this category.
            </span>
            <p className="font-normal">
              Please try again later or explore other categories.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default NoDataCard;
