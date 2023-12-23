import React from "react";
import Carousel from "@/components/Carousel";

const LayoutSection2 = () => {
  const data = [
    {
      img: "/images/main/ether.png",
      name: "Ethereum",
    },
    {
      img: "/images/main/polygan.png",
      name: "Polygan",
    },
    {
      img: "/images/main/python.png",
      name: "Python",
    },
    {
      img: "/images/main/solana.png",
      name: "Solana",
    },
    {
      img: "/images/main/solidity.png",
      name: "Solidity",
    },
    {
      img: "/images/main/ether.png",
      name: "Ethereum",
    },
    {
      img: "/images/main/solidity.png",
      name: "Solidity",
    },
    {
      img: "/images/main/ether.png",
      name: "Ethereum",
    },
    {
      img: "/images/main/solana.png",
      name: "Solana",
    },
    {
      img: "/images/main/ether.png",
      name: "Ethereum",
    },
    {
      img: "/images/main/ether.png",
      name: "Ethereum",
    },
    {
      img: "/images/main/solidity.png",
      name: "Solidity",
    },
    {
      img: "/images/main/ether.png",
      name: "Ethereum",
    },
    {
      img: "/images/main/solana.png",
      name: "Solana",
    },
    {
      img: "/images/main/ether.png",
      name: "Ethereum",
    },
  ];
  return (
    <div className="w-full h-[250px] py-[30px] px-[8.5%] flex flex-col justify-center items-center gap-8 text-lg bg-[#5A4A4A] bg-opacity-20">
      <p className="text-white text-center">Leveraging Cutting-Edge Technologies</p>
      <Carousel slides={data} slideWidth={150} />
    </div>
  );
};

export default LayoutSection2;
