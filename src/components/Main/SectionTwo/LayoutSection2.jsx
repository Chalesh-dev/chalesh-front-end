import React from "react";
import Carousel from "@/components/Carousel";
import AnimatedText from "@/components/AnimatedText";
import SliderTwo from "./SliderTwo";

const LayoutSection2 = () => {
  const data = [
    {
      img: "/images/Main/ether.png",
      name: "Ethereum",
      href: "https://ethereum.org"
    },
    {
      img: "/images/Main/polygan.png",
      name: "Polygan",
      href: "https://polygan.org"
    },
    {
      img: "/images/Main/python.png",
      name: "Python",
      href: "https://amir"
    },
    {
      img: "/images/Main/solana.png",
      name: "Solana",
      href: "https://amir"
    },
    {
      img: "/images/Main/solidity.png",
      name: "Solidity",
      href: "https://amir"
    },
    {
      img: "/images/Main/ether.png",
      name: "Ethereum",
      href: "https://amir"
    },
    {
      img: "/images/Main/solidity.png",
      name: "Solidity",
      href: "https://amir"
    },
    {
      img: "/images/Main/ether.png",
      name: "Ethereum",
      href: "https://amir"
    },
    {
      img: "/images/Main/solana.png",
      name: "Solana",
      href: "https://amir"
    },
    {
      img: "/images/Main/ether.png",
      name: "Ethereum",
      href: "https://amir"
    },
    {
      img: "/images/Main/ether.png",
      name: "Ethereum",
      href: "https://amir"
    },
    {
      img: "/images/Main/solidity.png",
      name: "Solidity",
      href: "https://amir"
    },
    {
      img: "/images/Main/ether.png",
      name: "Ethereum",
      href: "https://amir"
    },
    {
      img: "/images/Main/solana.png",
      name: "Solana",
      href: "https://amir"
    },
    {
      img: "/images/Main/ether.png",
      name: "Ethereum",
      href: "https://amir"
    },
  ];
  return (
    <div className="w-full h-[250px] py-[30px] px-[8.5%] flex flex-col justify-center items-center gap-8 text-lg bg-[#5A4A4A] bg-opacity-20">
      <AnimatedText
        text="Leveraging Cutting-Edge Technologies"
        className="text-white text-center"
      />
      <SliderTwo data={data} />
      {/* <Carousel slides={data} slideWidth={150} /> */}
    </div>
  );
};

export default LayoutSection2;
