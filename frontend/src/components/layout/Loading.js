import React from "react";
import { motion } from "framer-motion";

function Loading() {
  return (
    <div className="flex items-center justify-center">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="w-24 h-24">
        <motion.path
          d="M50 15 A35 35 0 0 1 85 50"
          fill="none"
          stroke="#4FD1C5"
          strokeWidth="10"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.path
          d="M50 85 A35 35 0 0 1 15 50"
          fill="none"
          stroke="#9F7AEA"
          strokeWidth="10"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.1,
          }}
        />
        <text
          x="50"
          y="50"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#4FD1C5"
          fontSize="14"
          fontWeight="bold">
          Loading...
        </text>
      </motion.svg>
    </div>
  );
}

export default Loading;
