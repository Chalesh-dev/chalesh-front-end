import Image from "next/image";
import React from "react";

const Section2BottomRight = () => {
  const CustomLi = ({ src, title, text }) => {
    return (
      <li className="px-[1.8rem] py-[1.5rem] border-l-[2px] rounded-ee-3xl rounded-se-3xl rounded-r-b-lg hover:border-l-[#6610f2] hover:shadow-[0_4px_32px_rgba(98,119,231,0.23)] transition duration-300 cursor-pointer flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <Image width={40} height={41} alt="img" src={src} />
          <h1 className="text-sm font-bold">{title}</h1>
        </div>
        <p className="text-[0.8rem] leading-[1.25rem]">{text}</p>
      </li>
    );
  };

  return (
    <div className="lg:w-[50%] w-full flex flex-col">
      <ul className="flex flex-col gap-5">
        <CustomLi
          src="/images/About/woman.webp"
          title="Technical excellence"
          text="We boldly and enthusiastically pursue ambitious innovation, set high
          standards, and build great products."
        />
        <CustomLi
          src="/images/About/smile.webp"
          title="Transparent communication"
          text="Our culture is based on authenticity, mutual respect, and trust. We communicate accurately, credibly, and professionally."
        />
        <CustomLi
          src="/images/About/Chat.webp"
          title="Where you can do the best work of your career"
          text="We strive to provide our team with the conditions to do their best work."
        />
      </ul>
    </div>
  );
};

export default Section2BottomRight;
