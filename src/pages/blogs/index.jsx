import BlogsList from "@/components/Blogs/BlogsList";
import React from "react";

const Blogs = () => {
  return (
    <div className="xl:px-[8.5%] lg:px-[5.5%] md:px-[3%] sm:px-[2%] px-[5px] flex lg:flex-row flex-col-reverse 2xl:gap-10 xl:gap-7 gap-5 mb-10">
      <div className="lg:w-[70%] w-full xl:p-4 lg:p-2 md:p-4 sm:p-2 p-1 bg-red-400">
        <BlogsList />
      </div>
      <div className="lg:w-[30%] w-full xl:p-4 lg:p-2 md:p-4 sm:p-2 p-1 bg-blue-400">
        categories
      </div>
    </div>
  );
};

export default Blogs;
