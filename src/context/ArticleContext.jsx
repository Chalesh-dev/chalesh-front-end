"use client";
import { createContext, useEffect, useRef, useState } from "react";

/** defaults */
const initialProvider = {
  articles: null,
  currentPage: null,
  lastPage: null,
  loading: false,
};

/**env */
const AppUrl = process.env.NEXT_PUBLIC_APP_URL;

const ArticleContext = createContext(initialProvider);

const ArticleProvider = ({ children }) => {
  const [articles, setArticles] = useState(initialProvider.articles);
  const [currentPage, setCurrentPage] = useState(initialProvider.currentPage);
  const [lastPage, setLastPage] = useState(initialProvider.lastPage);
  const [loading, setLoading] = useState(false);

  const handleSingleArticle = async (slug) => {
    setLoading(true);
    try {
      const response = await fetch(AppUrl + `article/${slug}`, {
        next: {
          revalidate: 10,
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not Ok");
      }
      const data = await response.json();
      console.log(data);
      // setArticles(data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  // const handleGetArticles = async (page = 1) => {
  //   setLoading(true);
  //   try {
  //     await new Promise((resolve) => setTimeout(resolve, 3000));
  //     const response = await fetch(AppUrl + `articles?page=${page}`, {
  //       next: {
  //         revalidate: 1800,
  //       },
  //     });
  //     if (!response.ok) {
  //       throw new Error("Network response was not Ok");
  //     }
  //     const data = await response.json();
  //     // setArticles((prev) => [
  //     //   ...(prev?.length ? prev : []),
  //     //   ...data.data,
  //     // ]);
  //     setArticles(data.data);
  //     setCurrentPage(data.current_page);
  //     setLastPage(data.last_page);
  //     setLoading(false);
  //   } catch (error) {
  //     setLoading(false);
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   handleGetArticles();
  // }, []);

  const values = {
    // handleGetArticles,
    articles,
    currentPage,
    lastPage,
    handleSingleArticle,
  };

  return (
    <ArticleContext.Provider value={values}>{children}</ArticleContext.Provider>
  );
};

export { ArticleContext, ArticleProvider };
