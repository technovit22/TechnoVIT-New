import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

export const animations = {
  bottomToTop: {
    initial: { y: 100, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
  },
  leftToRight: {
    initial: { x: -100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
  },
  rightToLeft: {
    initial: { x: 100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
  },
};

const Div = ({ className = "", children, animationStyle = "", ...rest }) => {
  const animation = animationStyle ? animationStyle : animations.bottomToTop;

  return (
    <motion.div
      className={clsx("w-full", className)}
      transition={{ type: "keyframes", delay: 0.2, duration: 0.5 }}
      viewport={{ once: false }}
      {...animation}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default Div;
