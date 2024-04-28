import ButtonCustom from "@/components/buttonCustom";
import React from "react";

const Section2BottomLeft = () => {
  return (
    <div className="lg:w-[50%] w-full flex flex-col justify-start">
      <h1 className="uppercase bg-gradient-to-r from-blue-300 to-blue-950 inline-block text-transparent bg-clip-text font-bold text-lg">
        Build your ideas with chaleshsoft
      </h1>
      <h4 className="text-5xl text-black my-6 font-bold">Our values</h4>
      <p className="text-[#4d5f7f] font-bold mb-7">
        Blocknative is an active participant in the blockchain ecosystem
        supporting leading projects and engaging with customers to assure smooth
        and reliable blockchain transaction processing.
      </p>
      <div>
        <ButtonCustom className="px-[15px] py-[12px] !text-[1rem] text-white bg-[#414cd3] flex justify-center items-center">
          Explore our Roles
        </ButtonCustom>
      </div>
    </div>
  );
};

export default Section2BottomLeft;
