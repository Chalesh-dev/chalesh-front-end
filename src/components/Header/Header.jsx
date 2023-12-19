import ImgComponent from "./ImgComponent";
import Tabs from "./Tabs";

const Header = () => {
  return (
    // from-[#3B0764] to-90% to-[#9333EA]
    <header className="w-full h-[150px] bg-slate-600 px-[8.5%] flex items-center bg-gradient-to-r from-[#1E1B4B] from-70% to-[#4338CA] ">
      <div className="flex gap-5 mt-10">
        <ImgComponent />
        <Tabs />
      </div>

      {/* Mobile navigation */}

    </header>
  );
};

export default Header;
