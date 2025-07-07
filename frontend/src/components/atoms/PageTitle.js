import React from "react";
import { motion } from "framer-motion";

function PageTitle({ title }) {
  return (
    <motion.h2
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className={`capitalize text-main flex items-center gap-1 w-full relative ssm:text-2xl md:text-3xl font-bold pb-2 after:content-[''] after:absolute after:w-24 after:h-1 after:bg-main after:bottom-0 after:left-0 mt-6`}>
      {title}
    </motion.h2>
  );
}

export default PageTitle;
