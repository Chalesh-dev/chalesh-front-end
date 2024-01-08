"use client";
import { createContext } from "react";

/** defaults */
const initialProvider = {
  categories: null,
};

const CategoryContext = createContext(initialProvider);
const AppUrl = process.env.APP_URL;

const CategoryProvider = ({ children }) => {

  const handleGetCategories = async () => {
    const res = await fetch(AppUrl + 'categories');
    const data = await res.json();
    console.log(data);
    return data;
  };

  const values = {
    categories: handleGetCategories,
  };

  return (
    <CategoryProvider.Provider value={values}>{children}</CategoryProvider.Provider>
  );
};

export { CategoryContext, CategoryProvider };
