import BlogInfo from "@/components/Blogs/BlogInfo/BlogInfo";
import Head from "next/head";
import { headers } from "next/headers";
import { fetchSingleArticle } from "../actions";
import { Suspense } from "react";
import Skeleton from "../Skeleton";

const Page = async () => {
  const headersList = headers();
  const fullUrl = headersList.get("referer");
  const slug = fullUrl.split("blogs/")[1];
  // const singleArticle = await fetchSingleArticle(slug);
  // singleArticle();
  return (
    <>
      <Head>
        <title>َArticle info</title>
        <meta property="og:image" content="content of blog" />
      </Head>
      <Suspense fallback={<Skeleton />}>
        <BlogInfo />
      </Suspense>
    </>
  );
};

export default Page;
