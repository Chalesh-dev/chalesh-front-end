import React from "react";
import { motion } from "framer-motion";

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const sentence = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedTitle = ({
  text,
  text1,
  className = "",
  className1 = "",
  className2 = "",
}) => {
  return (
    <div className={`${className2} flex flex-col gap-3`}>
      <motion.h1
        className={`${className} inline-block w-full text-white font-bold capitalize sm:text-4xl text-3xl`}
        variants={quote}
        initial="initial"
        whileInView="animate"
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            variants={singleWord}
            key={word + "_" + index}
            className="inline-block"
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
      <motion.p
        className={`sm:text-lg text-base capitalize bg-gradient-to-r from-[#7b85dd] via-[#3fb345] to-[#fff] font-semibold inline-block text-transparent bg-clip-text ${className1}`}
        variants={sentence}
        initial="initial"
        whileInView="animate"
      >
        {text1}
      </motion.p>
    </div>
  );
};

export default AnimatedTitle;
