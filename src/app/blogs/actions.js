"use server";

import { revalidatePath } from "next/cache";

/**env */
const AppUrl = process.env.NEXT_PUBLIC_APP_URL;

export const fetchArticle = async (page) => {
  try {
    const res = await fetch(AppUrl + `articles?page=${page}`, {
      next: {
        revalidate: 10,
      },
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const response = await res.json();
    revalidatePath("/blogs");
    return response;
    // return { current_page, last_page, data } = response;
  } catch (error) {
    console.log(error);
  }
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
