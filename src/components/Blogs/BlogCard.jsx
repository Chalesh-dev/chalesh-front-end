import Image from "next/image";
import React from "react";

const BlogCard = ({
  articleImg,
  userImg,
  userName,
  title,
  summary,
  min_read,
  created_at,
  likeNum,
  commentNum,
}) => {
  const words = summary.split(" ");
  /** take the five words */
  const firstFiveWords = words.slice(0, 7);
  /** join five words into a string */
  const truncatedSummary = firstFiveWords.join(' ');

  return (
    <div className="flex flex-col gap-4 w-[324px]">
      <Image
        src={articleImg}
        width={324}
        height={162}
        alt="img"
        objectFit="contain"
        className="w-[324px] h-[162px]"
      />
      <div className="flex gap-2 items-center">
        <Image
          src={userImg}
          width={20}
          height={20}
          alt="userImg"
          className="rounded-full"
        />
        <p className="text-[0.7rem]">{userName}</p>
      </div>
      <h1 className="font">{title}</h1>
      <span className="text-[0.8rem]">{truncatedSummary}...</span>
    </div>
  );
};

export default BlogCard;
