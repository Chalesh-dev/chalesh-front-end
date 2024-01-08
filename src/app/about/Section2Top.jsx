import React from "react";
import Section2TopLeft from "./Section2TopLeft";
import Image from "next/image";

const Section2Top = () => {
  return (
    <div className="flex lg:flex-row flex-col 2xl:gap-30 xl:gap-10 gap-5">
      <Section2TopLeft />
      <div className="flex justify-center items-center w-full">
        <Image
          src="/images/About/defi.png"
          width={570}
          height={345}
          alt="defi"
          quality={100}
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

export default Section2Top;
