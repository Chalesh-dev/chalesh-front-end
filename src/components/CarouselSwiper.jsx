import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";

const Carousel = ({ slides, slideWidth }) => {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  const nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="text-white flex items-center justify-between w-full">
      <button onClick={previousSlide}>
        <IoIosArrowDropleft className="text-3xl" />
      </button>
      <div
        className="flex gap-28 overflow-hidden"
        style={{ width: `${slideWidth * slides.length}px` }}
      >
        {slides.map((item, index) => (
          <Link
            key={index}
            href="/"
            className={`flex items-center justify-center gap-3 cursor-pointer transition ease-out duration-300`}
            style={{ transform: `translateX(-${current * slideWidth}px)` }}
          >
            <Image src={item.img} alt={item.name} width={50} height={50} />
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
      <button onClick={nextSlide}>
        <IoIosArrowDropright className="text-3xl" />
      </button>
    </div>
  );
};

export default Carousel;
