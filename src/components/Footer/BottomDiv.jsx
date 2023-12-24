import React from "react";
import ImgComponent from "../Header/ImgComponent";

const BottomDiv = () => {
  return (
    <div className="flex justify-between sm:flex-row flex-col md:px-16 px-2 gap-2 mt-5">
      <div className="flex justify-center items-center gap-3">
        <ImgComponent />
        <span className="text-[#FFFFFF]">2023 Blockchain </span>
      </div>
      <div className="flex justify-center items-center md:gap-10 gap-2">
        <span className="text-white">Privacy Policy</span>
        <span className="text-white">|</span>
        <span className="text-white">Terms of Service</span>
      </div>
    </div>
  );
};

export default BottomDiv;
