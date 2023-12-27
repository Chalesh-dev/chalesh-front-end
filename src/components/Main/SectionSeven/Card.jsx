import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ href, text, img }) => {
  return (
    <Link
      href={href}
      className="w-full lg:h-[327px] h-auto max-h-[400px] flex lg:flex-row flex-col-reverse bg-[#7E22CE] bg-opacity-20"
    >
      <p className="lg:w-[70%] w-full lg:p-5 p-2 flex items-center text-white text-lg">{text}</p>
      <div className="lg:w-[30%] w-full flex justify-center items-center p-5">
        <Image
          src={img}
          width={180}
          height={180}
          alt="text"
          className="w-[180px] h-[180px] rounded-full"
        />
      </div>
    </Link>
  );
};

export default Card;
