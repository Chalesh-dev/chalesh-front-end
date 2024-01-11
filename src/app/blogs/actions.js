"use server";

/**env */
const AppUrl = process.env.NEXT_PUBLIC_APP_URL;

export const fetchArticle = async (page) => {
  const response = await fetch(AppUrl + `articles?page=${page}`, {
    next: {
      revalidate: 30,
    },
  });

  const res = await response.json();

  const { current_page, last_page, data } = res;

  return { current_page, last_page, data };
};

// export const fetchSingleArticle = async (slug) => {
//   console.log("slug", slug);
//   const response = await fetch(AppUrl + `article/${slug}`, {
//     next: {
//       revalidate: 20,
//     },
//   });

//   if (!response.ok) {
//     console.log("error");
//   }

//   try {
//     const res = await response.json();
//     console.log(res.data);
//     return res;
//   } catch (error) {
//     console.error("Error parsing json:", error);
//     return error;
//   }
// };
