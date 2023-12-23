import React from "react";
import Right from "./Sections/Right";
import Left from "./Sections/Left";

const LayoutSection3 = () => {
  return (
    // bg-[radial-gradient(circle_at_100px_800px,_var(--tw-gradient-stops))] from-[#3b3668] from-0% to-[#06051a] to-20%
    <div className="">
      <div className="flex flex-col px-[8.5%]">
        <p className="text-center text-white sm:text-4xl text-lg my-10">
          Observe and act on your transactions
        </p>
        <div className="flex w-full">
          <Left />
          <Right />
        </div>
      </div>
    </div>
  );
};

export default LayoutSection3;
