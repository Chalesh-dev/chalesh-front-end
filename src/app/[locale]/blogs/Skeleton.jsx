"use client";
// import React, { useEffect, useState } from "react";
// import { useInView } from "react-intersection-observer";
// import { fetchArticle } from "./actions";
// import CustomBlog from "@/components/Blogs/CustomBlog";
// import moment from "moment";

// let page = 2;

// const Skeleton = () => {
//   const { ref, inView } = useInView();
//   const [data, setData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(null);
//   const [lastPage, setLastPage] = useState(null);

//   const fetchData = async (pageNum) => {
//     await fetchArticle(pageNum).then((res) => {
//       console.log("res", res.data);
//       setData((prevData) => [...prevData, ...res.data]);
//       setCurrentPage(res.current_page);
//       setLastPage(res.last_page);
//     });
//   };

//   useEffect(() => {
//     if (inView) {
//       fetchData(page);
//       page++;
//       console.log("salam");
//     }
//   }, [inView]);
//   console.log("data", data);
//   console.log("currentPage", currentPage);
//   return (
//     <>
//       <div className="w-full flex flex-col gap-3">
//         {data?.map((blog) => (
//           <CustomBlog
//             authorName={blog?.author?.name}
//             authorImg={blog?.author?.image}
//             key={blog?.id}
//             articleImg={blog?.image_three}
//             alt="image"
//             articleTitle={blog?.title}
//             articleSummary={blog?.summary}
//             min_read={blog?.min_read}
//             href={`blogs/${blog?.slug}`}
//             article_created_at={moment(blog?.created_at).fromNow()}
//           />
//         ))}
//       </div>
//       <section>
//         <ul ref={ref} className="w-full flex flex-col gap-3">
//           {data?.length > 0 &&
//             [...Array(5)].map((_, index) => (
//               <li
//                 key={index}
//                 className="flex sm:flex-row flex-col-reverse xl:gap-10 lg:gap-5 md:gap-3 sm:gap-1 gap-2 justify-between items-center xl:p-6 p-4 rounded-3xl border border-slate-500 border-opacity-50 bg-[#eee] animate-pulse min-h-[235px]"
//               >
//                 <div className="flex flex-col md:gap-5 sm:gap-3 gap-2 sm:w-[80%] w-[100%]">
//                   <div className="flex items-center gap-3">
//                     <div className="w-[25px] h-[25px] rounded-full bg-[#c0c0c0]"></div>
//                     <span className="w-[40%] h-4 rounded-lg bg-[#c0c0c0]"></span>
//                   </div>
//                   <div className="w-[80%] h-4 rounded-lg bg-[#c0c0c0]"></div>
//                   <div className="w-[80%] h-4 rounded-lg bg-[#c0c0c0]"></div>
//                   <div className="w-[30%] h-4 rounded-lg bg-[#c0c0c0]"></div>
//                 </div>
//                 <div className="sm:w-[20%] w-[100%] h-[180px] rounded-lg bg-[#c0c0c0]"></div>
//               </li>
//             ))}
//         </ul>
//       </section>
//     </>
//   );
// };

// export default Skeleton;

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { fetchArticle } from "./actions";
import CustomBlog from "@/components/Blogs/CustomBlog";

const Skeleton = () => {
  const { ref, inView } = useInView();
  const [data, setData] = useState([]);

  let page = 1;
  async function loadMoreArticles(){
    const next = page + 1;
    const articles = await fetchArticle(next);
    
    if (articles?.data?.length || articles?.data?.length > 0) {
      setData((prev) => [
        ...(prev?.length ? prev : []),
        ...articles?.data
      ])
    }
    console.log('ddd',articles?.data);
  }

  useEffect(() => {
    if (inView) {
      loadMoreArticles();
    }
  }, [inView]);

  console.log('dataa',data);

  return (
    <>
      <section>
        {data?.length > 0 && (data?.map((blog) => (
          <CustomBlog
            authorName={blog?.author?.name}
            authorImg={blog?.author?.image}
            key={blog?.id}
            articleImg={blog?.image_three}
            alt="image"
            articleTitle={blog?.title}
            articleSummary={blog?.summary}
            min_read={blog?.min_read}
            href={`blogs/${blog?.slug}`}
            article_created_at={moment(blog?.created_at).fromNow()}
          />
        )))}
      </section>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            src="./images/svgs/spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
};

export default Skeleton;
