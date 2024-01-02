import Image from "next/image";
import React from "react";

const Section1 = () => {
  return (
    <div className="xl:px-[8.5%] lg:px-[7.5%] px-[5.5%] py-7 flex lg:gap-1 gap-10 lg:flex-row flex-col sm:pb-56 pb-20">
      {/* left */}
      <div className="flex flex-col sm:text-left text-center xl:gap-2 gap-1 lg:w-[60%] w-full">
        <p className="mb-5 uppercase font-extrabold text-xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block  text-transparent bg-clip-text">
          Our focus
        </p>
        <h1 className="xl:text-8xl lg:text-7xl sm:text-8xl xs:text-6xl text-4xl text-bold">
          <span className="text-white capitalize">Real-time&nbsp;</span>
          <span className="bg-gradient-to-r from-blue-200 to-blue-500 inline-block text-transparent bg-clip-text">
            blockchain
          </span>
        </h1>
        <p className="bg-gradient-to-r from-blue-400 to-blue-900 inline-block text-transparent bg-clip-text xl:text-8xl lg:text-7xl sm:text-8xl xs:text-6xl text-4xl text-bold">
          applications.
        </p>
        <p className="text-[#b5ccf7] lg:text-lg sm:text-base text-sm leading-[1.3rem] mt-5">
          Blocknative builds infrastructure to monitor and manage the complexity
          of transacting on public blockchain networks. Learn more about how we
          are shaping the future of DeFi, NFTs, and more.
        </p>
      </div>

      {/* right */}
      <div className="lg:w-[40%] w-full flex justify-center items-center">
        <Image
          src="/images/About/Blockchain.jpg"
          alt="blockchain"
          width={664}
          height={373}
          className="rounded-xl bg-contain"
        />
      </div>
    </div>
  );
};

export default Section1;
