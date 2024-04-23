import CustomBlog from "./CustomBlog";
import moment from "moment";
import Skeleton from "@/app/blogs/Skeleton";
import { fetchArticle } from "@/app/blogs/actions";

const BlogsList = async () => {
  const { current_page, last_page, data } = await fetchArticle(1);
  console.log("articles", data);

  return (
    <div className="w-full flex flex-col gap-3">
      {data?.map((blog) => (
        <CustomBlog
          authorName={blog?.author?.name}
          authorImg={blog?.author?.image}
          key={blog?.id}
          articleImg={blog?.image_three}
          alt="image"
          articleTitle={blog?.title}
          articleSummary={blog?.summary}
          min_read={blog?.min_read}
          href={`blogs/${blog?.slug}`}
          article_created_at={moment(blog?.created_at).fromNow()}
        />
      ))}
      <Skeleton />
    </div>
  );
};

export default BlogsList;
