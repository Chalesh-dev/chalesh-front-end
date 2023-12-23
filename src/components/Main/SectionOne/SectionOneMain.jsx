import React from "react";
import ContentLeft from "./Sections/ContentLeft";
import ContentRight from "./Sections/ContentRight";

const SectionOneMain = () => {
  return (
    <div
      className="px-[8.5%] min-h-[679px] h-auto w-full flex flex-col lg:flex-row lg:gap-0 gap-7 mb-5"
      style={{
        backgroundImage: "url('/images/Main/ImgBackgroundSectionOne.svg')",
        backgroundSize: "",
        zIndex: "100000",
        position: "relative",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <ContentLeft />
      <ContentRight />
    </div>
  );
};

export default SectionOneMain;
