"use client";
import React, { Suspense, useEffect, useState } from "react";
import CustomBlog from "./CustomBlog";
import { useArticle } from "@/hooks/useArticle";
import moment from "moment";
import Skeleton from "@/app/blogs/Skeleton";

const BlogsList = () => {
  const { articles, handleGetArticles } = useArticle();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await handleGetArticles(3);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <Skeleton />;
  }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await handleGetArticles(3);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="w-full flex flex-col gap-5">
      {articles?.map((blog) => (
        <CustomBlog
          authorName={blog.author.name}
          authorImg={blog.author.image}
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
    </div>
  );
};

export default BlogsList;
