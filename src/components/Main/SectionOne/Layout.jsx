import Header from "@/components/Header/Header";
import LayoutSection2 from "../SectionTwo/LayoutSection2";
import SectionOneMain from "./SectionOneMain";
import { useEffect } from "react";

const Layout = () => {
  // useEffect(() => {
  //   updateGradientPosition(0,20)
  // },[])
  // bg-[url('/images/Main/ImgBackgroundSectionOne.svg')]
  // from-[#06051a] from-[90%] to-[#4338CA] bg-gradient-to-tr
  return (
    // bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#4338CA] from-0% to-[#06051a] to-30%
    <div className="">
      {/* <Header /> */}
      {/* bg-[radial-gradient(circle_at_left,_var(--tw-gradient-stops))] from-[#313058] from-0% via-[#06051a] to-40% */}
      <div className="">
        <SectionOneMain />
        <LayoutSection2 />
      </div>
    </div>
  );
};

export default Layout;
