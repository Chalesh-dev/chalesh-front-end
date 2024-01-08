'use client'
import React from "react";
import { motion } from "framer-motion";
import AnimatedTitle from "./AnimatedTitle";

const box = {
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

const CustomLeft = ({ title, data, btnText }) => {
  return (
    <div className="flex flex-col lg:w-[50%] w-full">
      <AnimatedTitle
        text="Mempool Data"
        text1="50-200 ms faster than any mempool service"
        className2="mb-16 "
      />
      <motion.div initial="initial" whileInView="animate" variants={box}>
        <h1 className="text-[#9868FF] lg:text-xl md:text-lg text-base mb-10">
          {title}
        </h1>
        <ul className="text-white flex flex-col gap-3 pl-2">
          {data?.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-4 lg:text-lg sm:text-base text-[0.8rem]"
            >
              <span className="w-3 h-3 bg-white rounded-full inline-block"></span>{" "}
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
      <div>
        <motion.button
          className="px-10 py-3 mt-40 bg-gradient-to-tr from-[#7636FF] to-[#009BFF] rounded-3xl text-white/95"
          whileHover={{ y: -8 }}
        >
          {btnText}
        </motion.button>
      </div>
    </div>
  );
};

export default CustomLeft;
