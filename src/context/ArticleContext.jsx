"use client";
import { createContext, useEffect, useRef, useState } from "react";

/** defaults */
const initialProvider = {
  articles: null,
  currentPage: null,
  lastPage: null,
  // loading: false
};

/**env */
const AppUrl = process.env.NEXT_PUBLIC_APP_URL;

const ArticleContext = createContext(initialProvider);

const ArticleProvider = ({ children }) => {
  const [articles, setArticles] = useState(initialProvider.articles);
  const [currentPage, setCurrentPage] = useState(initialProvider.currentPage);
  const [lastPage, setLastPage] = useState(initialProvider.lastPage);
  // const [loading, setLoading] = useState(false);

  const handleGetArticles = async (page = 1) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const res = await fetch(AppUrl + `articles?page=${page}`, {
      next: {
        revalidate: 1800,
      },
    });
    const data = await res.json();
    setArticles(data.data);
    setCurrentPage(data.current_page);
    setLastPage(data.last_page);
  };

  useEffect(() => {
    handleGetArticles();
  }, []);

  const values = {
    handleGetArticles,
    articles,
    currentPage,
    lastPage,
  };

  return (
    <ArticleContext.Provider value={values}>{children}</ArticleContext.Provider>
  );
};

export { ArticleContext, ArticleProvider };
