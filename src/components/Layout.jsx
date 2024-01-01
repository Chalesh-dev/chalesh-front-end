import React, { useEffect, useRef, useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useRouter } from "next/router";

// bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#4338CA] from-0% to-[#06051a] to-30% conic-gradient(at left center, rgb(234, 179, 8), rgb(168, 85, 247), rgb(59, 130, 246))

const Layout = ({ children }) => {
  const containerRef = useRef();
  const router = useRouter();
  const [containerHeight, setContainerHeight] = useState(null);

  useEffect(() => {
    setContainerHeight(containerRef.current.offsetHeight);
  }, [router.asPath]);

  const gradientStyle = {
    backgroundImage: `
    radial-gradient(circle at 100% 0%, #6a2c95a6 0%, transparent 8% ),
    radial-gradient(circle at 0% 10%, #6a2c95a6 0%, transparent 5% ),
    radial-gradient(circle at 100% 20%, #6a2c95a6 0%, transparent 6% ),
    radial-gradient(circle at 0% 32%, #6a2c95a6 0%, transparent 7% ),
    radial-gradient(circle at 100% 45%, #6a2c95a6 0%, transparent 8% ),
    radial-gradient(circle at 0% 59%, #6a2c95a6 0%, transparent 8% ),
    radial-gradient(circle at 100% 80%, #6a2c95a6 0%, transparent 8% ),
    radial-gradient(circle at 0% 95%, #6a2c95a6 0%, transparent 3% ),
    radial-gradient(circle at 0% 100%, #6a2c95a6 0%, #06051a 8%)`,
  };

  const gradientStyle2 = {
    backgroundImage: `
    radial-gradient(circle at 100% 0%, #6a2c95a6 0%, transparent 25% ),
    radial-gradient(circle at 0% 70%, #6a2c95a6 -20%, #06051a 20%)`,
  };

  return (
    <div
      ref={containerRef}
      style={containerHeight > 945 ? gradientStyle : gradientStyle2}
      className="from-[#3b3668] from-0% to-[#06051a] to-20% flex flex-col w-full min-h-screen"
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
