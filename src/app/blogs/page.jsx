import BlogsCategories from "@/components/Blogs/BlogsCategories";
import BlogsList from "@/components/Blogs/BlogsList";
import { Suspense } from "react";
import Skeleton from "./Skeleton";

const page = () => {
  return (
    <div
      className="xl:px-[8.5%] lg:px-[5.5%] md:px-[3%] sm:px-[2%] px-[5px] flex lg:flex-row flex-col-reverse 2xl:gap-10 xl:gap-7 gap-5 py-5"
      key={Math.random()}
    >
      <div className="lg:w-[70%] w-full p-1">
        {/* <Suspense fallback={<Skeleton />}> */}
          <BlogsList />
        {/* </Suspense> */}
      </div>

      {/* <Suspense fallback={<Loading />}> */}
      <aside className="lg:w-[30%] w-full xl:p-4 lg:p-2 md:p-4 sm:p-2 p-1 text-white">
        <BlogsCategories />
      </aside>
      {/* </Suspense> */}
    </div>
  );
};

export default page;
