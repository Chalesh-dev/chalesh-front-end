"use server";

/**env */
const AppUrl = process.env.NEXT_PUBLIC_APP_URL;

export const fetchArticle = async (page) => {
  const response = await fetch(AppUrl + `articles?page=${page}`, {
    next: {
      revalidate: 1800,
    },
  });

  const res = await response.json();

  const {current_page, last_page, data} = res;

  return {current_page, last_page, data};
};
