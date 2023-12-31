import Image from "next/image";
import React from "react";

const ContentRight = () => {
  return (
    <div className="lg:w-[50vw] w-full text-white flex justify-center mb-4">
      <Image
        width={680}
        height={550}
        src="/images/Main/blockchain 1.png"
        alt="blockchain 1"
        className="max-w-[100%] h-[auto] object-contain"
        quality={100}
        objectFit="contain"
        // fill={true}
      />
      {/* <Image alt='blockchain 1' width={683} height={551} src='/images/Main/blockchain 1.png' /> */}
    </div>
  );
};

export default ContentRight;
