import Image from "next/image";
import React from "react";
import AnimatedText from "../AnimatedText";

const CustomRight = ({ imgTitle, images }) => {
  return (
    <div className="flex flex-col items-center gap-4 lg:w-[50%] w-full overflow-hidden relative">
      <AnimatedText className="text-[#FFFFFF] lg:text-3xl sm:text-2xl text-xl mb-3 !font-medium" text={imgTitle} />
      <Image
        src={images}
        alt="img"
        quality={100}
        fill={true}
        objectPosition="center"
        objectFit="contain"
        className="!relative !w-[80%] left-0 right-0 m-auto !max-w-[600px]"
      />
    </div>
  );
};

export default CustomRight;
