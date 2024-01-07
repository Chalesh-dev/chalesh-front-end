import React from "react";
import SectionLayout from "./SectionLayout";

const ProductLayout = () => {
  return (
    <div className="w-full xl:px-[8.5%] lg:px-[5.5%] md:px-[3%] sm:px-[2%] px-[5px] flex flex-col gap-5">
      <SectionLayout />
      <div className="w-full h-[0.1rem] bg-gradient-to-r from-[#505186] to-[#5e1275]"></div>
      <SectionLayout />
      <div className="w-full h-[0.1rem] bg-gradient-to-r from-[#505186] to-[#5e1275]"></div>
      <SectionLayout />
      <div className="w-full h-[0.1rem] bg-gradient-to-r from-[#505186] to-[#5e1275]"></div>
      <SectionLayout />
      <div className="w-full h-[0.1rem] bg-gradient-to-r from-[#505186] to-[#5e1275]"></div>
      <SectionLayout />
    </div>
  );
};

export default ProductLayout;
