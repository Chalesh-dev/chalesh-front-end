import { useState } from "react";
import ButtonCustom from "../buttonCustom";
import { GrLanguage } from "react-icons/gr";
import { IoIosCheckmark } from "react-icons/io";

const LangButton = () => {
  const [isDropDown, setIsDropDown] = useState(false);
  const [faActive, setFaActive] = useState(false);
  const [enActive, setEnActive] = useState(false);

  const handleMouseEnter = () => {
    setIsDropDown(true);
  };

  const handleMouseLeave = () => {
    setIsDropDown(false);
  };

  const handleChangeEn = () => {
    setFaActive(false);
    setEnActive(true);
  };

  const handleChangeFa = () => {
    setFaActive(true);
    setEnActive(false);
  };

  const classes = `flex justify-center items-center mt-10 gap-2 duration-200`;

  return (
    <div
      className="relative h-[62%] mt-[6px] hidden md:block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ButtonCustom className={classes}>
        <GrLanguage />
        En
      </ButtonCustom>
      {isDropDown && (
        <div className="bg-[#E5E7EB] opacity-[0.9] absolute top-[90px] px-[15px] py-[20px] z-20 border border-slate-700 rounded-2xl w-[170px] h-auto shadow-sm shadow-slate-400 flex flex-col gap-4">
          <div
            className="flex gap-3 items-center cursor-pointer border border-transparent hover:border-slate-400 rounded-md px-[0.4rem] p-1"
            onClick={handleChangeEn}
          >
            <div className="border border-slate-500 rounded-md px-[8px] py-1">
              En
            </div>
            <span>English</span>
            {enActive && <IoIosCheckmark size={20} />}
          </div>
          <div
            className="flex gap-3 items-center cursor-pointer border border-transparent hover:border-slate-400 rounded-md px-[0.4rem] p-1"
            onClick={handleChangeFa}
          >
            <div className="border border-slate-500 rounded-md px-[8px] py-1">
              Fa
            </div>
            <span>Persian</span>
            {faActive && <IoIosCheckmark size={20} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default LangButton;
