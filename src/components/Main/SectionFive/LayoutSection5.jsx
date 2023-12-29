import ButtonCustom from "@/components/buttonCustom";
import React from "react";
import Slider from "./Slider";

const LayoutSection5 = () => {
  return (
    <div className="flex flex-col w-full h-auto text-white py-8 items-center justify-center gap-6">
      <p className="text-white font-bold sm:text-5xl text-3xl text-center">
        Balance clarity with intrigue
      </p>
      <div className="w-full flex justify-center px-6 my-5">
        <Slider />
      </div>
      <ButtonCustom className="bg-[#FAFAFA] text-[#637381] font-bold shadow-md shadow-slate-500">
        Build with Us
      </ButtonCustom>
    </div>
  );
};

export default LayoutSection5;
