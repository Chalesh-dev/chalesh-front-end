import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import SectionOne from "./Main/SectionOne/SectionOne";

// bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#4338CA] from-0% to-[#06051a] to-30% conic-gradient(at left center, rgb(234, 179, 8), rgb(168, 85, 247), rgb(59, 130, 246))

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-[100dvh] w-full min-h-screen">

      <div className="bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#4338CA] from-0% to-[#06051a] to-30%">
        <Header />
        <SectionOne />
      </div>

      <main className="flex-1 w-full">{children}</main>


      <Footer />
    </div>
  );
};

export default Layout;
