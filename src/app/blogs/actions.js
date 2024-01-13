"use server";

import { revalidatePath } from "next/cache";

/**env */
const AppUrl = process.env.NEXT_PUBLIC_APP_URL;

export const fetchArticle = async (page) => {
  const response = await fetch(AppUrl + `articles?page=${page}`, {
    next: {
      revalidate: 10,
    },
  });

  const res = await response.json();

  const { current_page, last_page, data } = res;

  console.log(data);

  revalidatePath("/blogs");
  return { current_page, last_page, data };
};

export const fetchSingleArticle = async (slug) => {
  // console.log("slug", slug);
  try {
    const response = await fetch(AppUrl + `article/${slug}`, {
      revalidate: 10,
    });

    // console.log("Response status:", response.status);
    // console.log("Response headers:", response.headers);
    // const responseBody = await response.json();
    // console.log("Response body:", responseBody);

    if (!response.ok) {
      throw new Error("Network response was not Ok");
    }
    const res = await response.json();
    console.log("res", res);
    return res;
  } catch (error) {
    // console.log(error);
  }
};
