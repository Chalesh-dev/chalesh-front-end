import React from "react";
import Slider from "./Slider";

const LayoutSection7 = () => {
  //** data */
  const data = [
    {
      href: "saaa",
      text: "Reliable data and lightning-fast response times! highly recommended. -Sarah L.11",
      img: "/images/Main/Group.png",
    },
    {
      href: "saaa",
      text: "Reliable data and lightning-fast response times! highly recommended. -Sarah L.22",
      img: "/images/Main/Group.png",
    },
    {
      href: "saaa",
      text: "Reliable data and lightning-fast response times! highly recommended. -Sarah L.33",
      img: "/images/Main/Group.png",
    },
    {
      href: "saaa",
      text: "Reliable data and lightning-fast response times! highly recommended. -Sarah L.44",
      img: "/images/Main/Group.png",
    },
    {
      href: "saaa",
      text: "Reliable data and lightning-fast response times! highly recommended. -Sarah L.55",
      img: "/images/Main/Group.png",
    },
    {
      href: "saaa",
      text: "Reliable data and lightning-fast response times! highly recommended. -Sarah L.66",
      img: "/images/Main/Group.png",
    },
    {
      href: "saaa",
      text: "Reliable data and lightning-fast response times! highly recommended. -Sarah L.77",
      img: "/images/Main/Group.png",
    },
    {
      href: "saaa",
      text: "Reliable data and lightning-fast response times! highly recommended. -Sarah L.88",
      img: "/images/Main/Group.png",
    },
    {
      href: "saaa",
      text: "Reliable data and lightning-fast response times! highly recommended. -Sarah L.99",
      img: "/images/Main/Group.png",
    },
  ];

  return (
    <div className="w-full p-8 h-[580px] flex flex-col gap-5 justify-center items-center">
      <p className="text-[#818CF8] font-bold text-center sm:text-5xl text-3xl">
        Client Stories
      </p>
      <p className="text-white text-center lg:text-4xl md:text-3xl sm:text-2xl">
        Empowering Success Through ChaleshSoft{" "}
      </p>
      <Slider
        data={data}
      />
    </div>
  );
};

export default LayoutSection7;
