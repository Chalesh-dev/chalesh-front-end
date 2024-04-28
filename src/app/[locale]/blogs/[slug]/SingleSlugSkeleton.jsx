import React from "react";

const SingleSlugSkeleton = () => {
  return (
    <div className="flex flex-col gap-5 2xl:px-72 xl:px-52 lg:px-24 md:px-10 sm:px-5 px-4 animate-pulse mb-5">
      <div className="w-[70%] h-[35px] rounded-full bg-[#c0c0c0]"></div>

      <div className="flex sm:gap-5 gap-3 items-center">
        <div className="w-[30px] h-[30px] bg-[#c0c0c0] rounded-full"></div>
        <div className="flex flex-col justify-center gap-4">
          <span className="w-[40px] h-[15px] bg-[#c0c0c0] rounded-full"></span>
          <div className="w-[60px] h-[15px] bg-[#c0c0c0] rounded-full"></div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-[700px] h-[400px] bg-[#c0c0c0] rounded-2xl"></div>
      </div>

      <div className="w-full h-[120px] bg-[#c0c0c0] rounded-3xl"></div>

      <ul className="flex gap-3">
        {[...Array(4)].map((_, index) => (
          <li
            key={index}
            className="w-[90px] h-[30px] rounded-2xl bg-[#c0c0c0]"
          ></li>
        ))}
      </ul>

      <div className="flex gap-3">
        {[...Array(3)].map((_, index) => (
          <div className="flex flex-col gap-3 w-[320px] min-w-[320px] bg-[#6c6c6c] border border-slate-600 overflow-hidden rounded-lg">
            <div className="w-[324px] h-[162px] bg-[#c0c0c0]"></div>

            <div className="p-2 flex flex-col gap-3">
              <div className="flex gap-2 items-center">
                <div className="w-[20px] h-[20px] bg-[#c0c0c0] rounded-full"></div>
                <div className="w-[40px] h-[30px] bg-[#c0c0c0] rounded-full"></div>
              </div>
              <div className="w-[80%] h-[30px] rounded-full bg-[#c0c0c0]"></div>

              <div className="w-[80%] h-[70px] rounded-3xl bg-[#c0c0c0]"></div>
              <div className="w-[30%] h-[30px] rounded-3xl bg-[#c0c0c0]"></div>
              <div className="flex gap-6">
                <div className="w-[30px] h-[30px] rounded-full bg-[#c0c0c0]"></div>
                <div className="w-[30px] h-[30px] rounded-full bg-[#c0c0c0]"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleSlugSkeleton;

//   return (
//     <>
//       <div className="relative text-white flex flex-col gap-5 2xl:px-72 xl:px-52 lg:px-24 md:px-10 sm:px-5 px-4">
//         {/* title */}
//         <h1 className="lg:text-4xl md:text-2xl sm:text-xl text-lg lg:font-extrabold sm:font-medium">
//           {/* 2023: A Review of the Year in Neuroscience */}
//           {article?.title}
//         </h1>

// <NameProperty
//   img={article?.author?.image}
//   min_read={article?.min_read}
//   created_at={article?.created_at}
//   name={article?.author?.name}
// />

//         {article?.liked_count !== 0 ||
//           (article?.comments_count !== 0 && (
//             <BlogLikes
//               setOpenComments={setOpenComments}
//               likeNum={article?.liked_count}
//               commentNum={article?.comments_count}
//             />
//           ))}

//         <BlogImage img={article?.image_nine} />

//         {/* matn */}
//         <p className="leading-[2rem] text-sm">{article?.content}</p>

//         {article?.liked_count !== 0 ||
//           (article?.comments_count !== 0 && (
//             <BlogLikes
//               setOpenComments={setOpenComments}
//               likeNum={article?.liked_count}
//               commentNum={article?.comments_count}
//             />
//           ))}

//         <div className="flex flex-wrap gap-2 w-full">
//           {article?.tags?.map((item, index) => (
//             <CategoriesRelatedToThisBlog
//               key={index}
//               categoryName={item?.title}
//             />
//           ))}
//         </div>

//         {/* chats comes here */}
//         {article?.comments?.length !== 0 && (
//           <ChatBlog
//             comments={article?.comments}
//             setOpenComments={setOpenComments}
//             openComments={openComments}
//           />
//         )}

//         <h1 className="mb-4">You also might like these...</h1>
//       </div>

//       {/* this task is for tomorrow i should send category id and get all articles related to this category, this is not categories, we only have one category which i have to send categoy id in order to  get articles related to this category  */}
//       {article?.categories?.length !== 0 && (
//         <Slider data={article?.categories} />
//       )}
//     </>
//   );
