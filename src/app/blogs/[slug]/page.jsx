import BlogInfo from "@/components/Blogs/BlogInfo/BlogInfo";
import Head from "next/head";
import { Suspense } from "react";
import SingleSlugSkeleton from "./SingleSlugSkeleton";

const Page = async () => {
  // const headersList = headers();
  // const fullUrl = headersList.get("referer");
  // const slug = fullUrl.split("blogs/")[1];
  // await fetchSingleArticle(slug);

  return (
    <>
      <Head>
        <title>َArticle info</title>
        <meta property="og:image" content="content of blog" />
      </Head>
      <Suspense fallback={<SingleSlugSkeleton />}>
        <BlogInfo />
      </Suspense>
    </>
  );
};

export default Page;
