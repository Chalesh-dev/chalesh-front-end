"use client";
import React, { useEffect, useState } from "react";
import CustomBlog from "./CustomBlog";
import { useArticle } from "@/hooks/useArticle";
import moment from "moment";
import Skeleton from "@/app/blogs/Skeleton";
import { useInView } from "react-intersection-observer";
import Spinner from "../Spinner";

const BlogsList = () => {
  const { articles, handleGetArticles, currentPage, lastPage, loading } =
    useArticle();
  const [ref, inView] = useInView();

  const fetchArticles = async (page) => {
    await handleGetArticles(page);
  };

  useEffect(() => {
    fetchArticles(1);
  }, []);

  const loadMoreArticles = async () => {
    console.log("111");
    const next = currentPage + 1;
    await fetchArticles(next);
  };

  useEffect(() => {
    console.log("viewwww");
    // loadMoreArticles();
  }, [inView]);

  if (loading) {
    return <Skeleton />;
  }

  return (
    <div className="w-full flex flex-col gap-5">
      {articles?.map((blog, index) => (
        <>
          <CustomBlog
            authorName={blog.author.name}
            authorImg={blog.author.image}
            key={blog?.id}
            articleImg={blog?.image_three}
            alt="image"
            articleTitle={blog?.title}
            articleSummary={blog?.summary}
            min_read={blog?.min_read}
            href={`blogs/${blog?.slug}`}
            article_created_at={moment(blog?.created_at).fromNow()}
          />
          {index === articles?.length - 1 && (
            <div ref={ref} className="w-full flex justify-center">
              <Spinner />
            </div>
          )}
        </>
      ))}
      {/* {articles?.length > 0 && currentPage !== lastPage && (
        <div ref={ref} className="w-full flex justify-center">
          <Spinner />
        </div>
      )} */}
    </div>
  );
};

export default BlogsList;
