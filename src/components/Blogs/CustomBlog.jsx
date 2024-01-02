import Image from "next/image";
import React from "react";
import userPhoto from "/images/articles/userImg.png";

const CustomBlog = ({
  articleImg,
  articleTitle,
  articleSummary,
  article_created_at,
  min_read,
  alt,
  userImg,
  authorName,
}) => {
  return (
    <div className="flex xl:gap-10 lg:gap-5 md:gap-3 sm:gap-1 gap-0 justify-between items-center xl:p-6 lg:p-4 sm:p-2 p-1">
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-5">
          <Image
            width={20}
            height={20}
            src={userImg ? userImg : userPhoto}
            alt={alt}
            className="rounded-full"
          />
          <span className="text-black text-sm font-semibold">{authorName}</span>
        </div>
        <h1 className="font-bold text-xl text-black">{articleTitle}</h1>
        <p>{articleSummary}</p>
        <div className="flex gap-3 items-center">
          <span>{article_created_at}</span>
          <span></span>
          <span>{min_read}</span>
        </div>
      </div>
      <Image src={articleImg} width={200} height={135} alt={alt} />
    </div>
  );
};

export default CustomBlog;
