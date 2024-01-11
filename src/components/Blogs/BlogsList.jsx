// "use client";
// import React, { Suspense, useEffect, useState } from "react";
import CustomBlog from "./CustomBlog";
import moment from "moment";
// import { useArticle } from "@/hooks/useArticle";
import Skeleton from "@/app/blogs/Skeleton";
import { fetchArticle } from "@/app/blogs/actions";

const BlogsList = async () => {
  const articles = await fetchArticle(1);
  const {current_page, last_page, data} = articles;

  // const { articles, handleGetArticles, currentPage, lastPage, loading } = useArticle();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await handleGetArticles(1);
  //   };
  //   fetchData();
  // }, []);

  // if (loading) {
  //   return <Skeleton />;
  // }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await handleGetArticles(3);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="w-full flex flex-col gap-5">
      {data?.map((blog) => (
        <CustomBlog
          authorName={blog?.author?.name}
          authorImg={blog?.author?.image}
          key={blog?.id}
          articleImg={blog?.image}
          alt="image"
          articleTitle={blog?.title}
          articleSummary={blog?.summary}
          min_read={blog?.min_read}
          href={`blogs/${blog?.slug}`}
          article_created_at={moment(blog?.created_at).fromNow()}
        />
      ))}
      <Skeleton />
    </div>
  );
};

export default BlogsList;
