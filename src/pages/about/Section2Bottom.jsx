import React from "react";
import BottomLeft from "./Section2BottomLeft";
import BottomRight from "./Section2BottomRight";

const Section2Bottom = () => {
  return (
    <div className="flex lg:flex-row flex-col lg:gap-1 gap-4">
      <BottomLeft />
      <BottomRight />
    </div>
  );
};

export default Section2Bottom;
