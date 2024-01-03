import Image from "next/image";
import React from "react";
import { IoPerson } from "react-icons/io5";

const NameProperty = ({ img, name, min_read, created_at }) => {
  return (
    <div className="flex sm:gap-5 gap-3">
      <Image
        src={img ? img : <IoPerson />}
        width={44}
        height={44}
        alt="user"
        className="rounded-full"
      />
      <div className="flex flex-col justify-center">
        <span className="text-[#ccc] text-[0.7rem]">{name}</span>
        <div className="flex gap-2 items-end text-[#ccc] text-[0.7rem]">
          <span>{min_read} minutes</span>
          <span className="text-lg">.</span>
          <span>{created_at}</span>
        </div>
      </div>
    </div>
  );
};

export default NameProperty;
