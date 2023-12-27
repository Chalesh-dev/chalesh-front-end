import AnimatedText from "@/components/AnimatedText";
import React from "react";

const ContentText = () => {
  return (
    <>
      <AnimatedText
        text="Unveiling Blockchain"
        className="lg:text-5xl md:text-6xl mt-7 sm:text-5xl sm:font-bold text-2xl lg:!text-left"
      />
      <AnimatedText
        text="Potential boundaries"
        className="lg:text-5xl md:text-6xl mt-4 sm:text-5xl sm:font-bold text-2xl lg:!text-left"
      />
      <AnimatedText
        text="Empower Your Journey with Mempool Insights"
        className="!font-normal text-sm sm:text-xl mt-8 leading-7 lg:!text-left"
      />
      {/* <p className="text-white font-normal text-sm sm:text-xl mt-14 leading-7 lg:text-left text-center">
        Empower Your Journey with Mempool Insights
      </p> */}
      <AnimatedText
        text="Chaleshsoft is Your Gateway to Optimized Blockchain Transactions and MEV
        Solutions"
        className="!font-normal text-sm sm:text-xl mt-4 leading-7 lg:!text-left text-center"
      />
      {/* <p className="text-white font-normal text-sm sm:text-xl mt-4 leading-7 lg:text-left text-center">
        Chaleshsoft is Your Gateway to Optimized Blockchain Transactions and MEV
        Solutions
      </p> */}
    </>
  );
};

export default ContentText;
