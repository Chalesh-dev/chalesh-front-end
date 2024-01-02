import React from "react";

const Section2TopLeft = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="uppercase bg-gradient-to-r from-blue-300 to-blue-900 inline-block text-transparent bg-clip-text font-bold text-lg">
        About ChaleshSoft
      </h1>
      <h1 className="sm:text-4xl xs:text-2xl text-xl my-3 font-bold">Shaping the future of Defi.</h1>
      <p className="font-bold md:text-md mt-4 text-[1rem] text-[#4d5f7f]">
        Blocknative builds infrastructure to monitor and manage the complexity
        of the mempool — making it available to every builder and trader. Our
        goal is to make working with mempool data as easy and accessible as
        working with every other aspect of Web3.
      </p>
    </div>
  );
};

export default Section2TopLeft;
