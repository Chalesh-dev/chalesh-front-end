"use client";
import { createContext, useEffect, useRef } from "react";

/** defaults */
const initialProvider = {
  articles: null,
};

/**env */
const AppUrl = process.env.NEXT_PUBLIC_APP_URL;

const ArticleContext = createContext(initialProvider);

const ArticleProvider = ({ children }) => {
  const articlesRef = useRef(initialProvider.articles);

  const handleGetArticles = async () => {
    await new Promise(resolve => setTimeout(resolve, 3000));
    const res = await fetch(AppUrl + "articles", {
      next: {
        revalidate: 3600,
      },
    });
    const data = await res.json();
    console.log(data);
    articlesRef.current = data;
  };

  useEffect(() => {
    handleGetArticles();
    console.log(articlesRef.current);
  }, []);

  const values = {
    articles: articlesRef.current,
  };

  return (
    <ArticleContext.Provider value={values}>{children}</ArticleContext.Provider>
  );
};

export { ArticleContext, ArticleProvider };
