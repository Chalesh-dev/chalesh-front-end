import React from "react";
import Section2Bottom from "./Section2Bottom";
import Section2Top from "./Section2Top";

const Section2 = () => {
  return (
    <div className="py-24 bg-white xl:px-[8.5%] lg:px-[7.5%] px-[5.5%] flex flex-col gap-8">
      <Section2Top />
      <Section2Bottom />
    </div>
  );
};

export default Section2;
