import Link from "next/link";
import ButtonCustom from "../buttonCustom";
import ImgComponent from "./ImgComponent";
import Tabs from "./Tabs";
import { BiChevronRight } from "react-icons/bi";
import LangButton from "./LangButton";
import MobileNavigation from "./MobileNavigation";


const Header = () => {
  return (
    // from-[#3B0764] to-90% to-[#9333EA]
    <header className="w-full h-[150px] bg-slate-600 px-[8.5%] flex items-center justify-between bg-gradient-to-r from-[#1E1B4B] from-70% to-[#4338CA]">
      <div className="flex gap-5 mt-10">
        <ImgComponent />
        <Tabs />
      </div>

      <div className="flex gap-2 h-[100%] items-center">
        <LangButton />
        <ButtonCustom className="flex items-center gap-1">
          <Link href="/">Go to Dashboard</Link>
          <BiChevronRight size={20} />
        </ButtonCustom>
        {/* Mobile navigation */}
        <MobileNavigation />
      </div>
    </header>
  );
};

export default Header;
