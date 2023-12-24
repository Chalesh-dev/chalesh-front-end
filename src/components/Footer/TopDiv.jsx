import React from "react";
import TopDivRight from "./TopDivRight";
import TopDivLeft from "./TopDivLeft";

const TopDiv = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between border-b-2 items-center md:items-end border-[#4E4E4E] md:px-16 pb-6 px-2 gap-6">
        <TopDivLeft />
        <TopDivRight />
    </div>
  );
};

export default TopDiv;
