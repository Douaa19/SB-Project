import React from "react";
import { motion } from "framer-motion";

function Loading() {
  const LoadingDot = {
    display: "block",
    width: "0.5rem",
    height: "0.5rem",
    backgroundColor: "#192655",
    borderRadius: "50%",
  };

  const LoadingContainer = {
    width: "5rem",
    height: "5rem",
    display: "flex",
    justifyContent: "space-around",
  };

  const DotVariants = {
    animate: {
      y: ["0%", "100%", "0%"],
    },
  };

  const DotTransition = (delay) => ({
    duration: 0.5,
    repeat: Infinity,
    ease: "easeInOut",
    delay,
  });

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}>
      <motion.div style={LoadingContainer}>
        <motion.span
          style={LoadingDot}
          variants={DotVariants}
          animate="animate"
          transition={DotTransition(0)}
        />
        <motion.span
          style={LoadingDot}
          variants={DotVariants}
          animate="animate"
          transition={DotTransition(0.2)}
        />
        <motion.span
          style={LoadingDot}
          variants={DotVariants}
          animate="animate"
          transition={DotTransition(0.4)}
        />
      </motion.div>
    </div>
  );
}

export default Loading;
