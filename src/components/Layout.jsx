import React, { useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import SectionOne from "./Main/SectionOne/Layout";

// bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#4338CA] from-0% to-[#06051a] to-30% conic-gradient(at left center, rgb(234, 179, 8), rgb(168, 85, 247), rgb(59, 130, 246))

const Layout = ({ children }) => {
  const gradientStyle = {
    background: `radial-gradient(circle at 100% 0%, #3b3668 0%, #06051a 20%),
    radial-gradient(circle at 0% 10%, #3b3668 0%, #06051a 20%),
    radial-gradient(circle at 100% 20%, #3b3668 0%, #06051a 20%)`,
    backgroundRepeat: "no-repeat",
  };
  return (
    <div
      style={{
        background: `radial-gradient(circle at 100% 0%, #3b3668 0%, #06051a 20%),
      radial-gradient(circle at 0% 10%, #3b3668 0%, #06051a 20%),
      radial-gradient(circle at 100% 20%, #3b3668 0%, #06051a 20%)`,
        backgroundRepeat: "no-repeat",
      }}
      className="from-[#3b3668] from-0% to-[#06051a] to-20%"
    >
      <div className="flex flex-col w-full min-h-screen">
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </div>
    </div>
  );
};
export default Layout;

// const Layout = ({ children }) => {
//   return (
//     <div className="relative min-h-screen">
//       <div className="flex flex-col w-full min-h-screen">
//         <Header />
//         <div className="gradient-container">
//           <div className="gradient" style={{ backgroundImage: 'radial-gradient(circle at 100% 0%, #3b3668 0%, #06051a 20%)' }} />
//           <div className="gradient" style={{ backgroundImage: 'radial-gradient(circle at 0% 10%, #3b3668 0%, #06051a 20%)' }} />
//           <div className="gradient" style={{ backgroundImage: 'radial-gradient(circle at 100% 20%, #3b3668 0%, #06051a 20%)' }} />
//         </div>
//         <main className="flex-1 w-full">{children}</main>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Layout;
