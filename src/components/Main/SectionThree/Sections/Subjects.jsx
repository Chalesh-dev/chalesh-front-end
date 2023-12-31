import React, { useState } from "react";

const Subjects = ({ title, text, href }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleFlip = () => {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  };

  return (
    <div
      href={href}
      className="flex flex-col h-[260px] overflow-hidden max-h-[260px] w-[257px] p-5 text-center transition duration-500 ease-in-out shadow-[20px_20px_50px_rgba(0,0,0,0.5)] rounded-xl bg-[rgba(255,255,255,0.1)] justify-center items-center border-t border-l border-[rgba(255,255,255,0.5)] backdrop-blur-[5px] perspective-1000 cursor-pointer"
      onMouseEnter={handleFlip}
    >
      <p className="text-[rgba(255,255,255,0.2)] text-left font-bold text-lg">
        {title}
      </p>
      <span className="text-white font-light mt-4">{text}</span>
    </div>
  );
};

export default Subjects;
