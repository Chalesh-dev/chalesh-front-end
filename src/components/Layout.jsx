import React, { useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";




// bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#4338CA] from-0% to-[#06051a] to-30% conic-gradient(at left center, rgb(234, 179, 8), rgb(168, 85, 247), rgb(59, 130, 246))

const Layout = ({ children }) => {
  const gradientStyle = {
    backgroundImage: `
    radial-gradient(circle at 100% 0%, #3b3668 0%, transparent 20% ),
    radial-gradient(circle at 0% 20%, #3b3668 0%, transparent 20% ),
    radial-gradient(circle at 100% 40%, #3b3668 0%, transparent 20% ),
    radial-gradient(circle at 0% 60%, #3b3668 0%, transparent 20% ),
    radial-gradient(circle at 100% 80%, #3b3668 0%, transparent 20% ),
    radial-gradient(circle at 0% 100%, #3b3668 0%, #06051a 20%)`,
  };
  return (
    <div
      style={gradientStyle}
      className='from-[#3b3668] from-0% to-[#06051a] to-20% flex flex-col w-full min-h-screen'
    >
      {/* <div className="flex flex-col w-full min-h-screen"> */}
        <Header />
        <main>{children}</main>
        <Footer />
      {/* </div> */}
    </div>
  );
};
export default Layout;
