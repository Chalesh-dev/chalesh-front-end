import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEye } from "react-icons/fa";

const Subjects = ({ title, text, href }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleFlipOver = () => {
    // if (!isAnimating) {
    //   setIsFlipped(!isFlipped);
    //   setIsAnimating(true);
    // }
    setIsFlipped(true);
    setIsAnimating(true);
  };

  const handleFlipOut = () => {
    setIsFlipped(false);
    setIsAnimating(false);
  };

  return (
    
    // <div
    //   className="flex flex-col h-[260px] overflow-hidden max-h-[260px] w-[257px] p-5 transition duration-500 ease-in-out shadow-[20px_20px_50px_rgba(0,0,0,0.5)] rounded-xl perspective-1000 cursor-pointer"
    //   onMouseOver={handleFlipOver}
    //   onMouseOut={handleFlipOut}
    // >
    //   <motion.div
    //     className="w-[100%] h-[100%] flip-card-inner"
    //     initial={false}
    //     animate={{ rotateY: isFlipped ? 180 : 360 }}
    //     transition={{ duration: 0.6, animationDirection: "normal" }}
    //     onAnimationComplete={() => setIsAnimating(false)}
    //   >
    //     <div className="flip-card-front w-[100%] h-[100%] text-white rounded-lg p-4 bg-[rgba(255,255,255,0.1)] justify-center items-center border-t border-l border-[rgba(255,255,255,0.5)] backdrop-blur-[5px]">
    //       <p className="text-[rgba(255,255,255,0.2)] text-left font-bold text-lg">
    //         {title}
    //       </p>
    //       <span className="text-white font-light mt-4">{text}</span>
    //     </div>

    //     <div className="flip-card-back w-[100%] h-[100%] text-white rounded-lg p-4 flex flex-col gap-4 bg-[rgba(255,255,255,0.1)] justify-center items-center border-t border-l border-[rgba(255,255,255,0.5)] backdrop-blur-[5px]">
    //       <p className="text-[rgba(255,255,255,0.2)] text-left font-bold text-lg">
    //         See details
    //       </p>
    //       <FaEye size={30} />
    //     </div>
    //   </motion.div>
    // </div>
  );
};

export default Subjects;
