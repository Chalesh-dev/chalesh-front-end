import Image from "next/image";

const BlogImage = ({img}) => {
  return (
    <div className="w-full flex justify-center my-3">
      <Image
        src={img}
        width={700}
        height={467}
        alt="article"
        priority
        objectFit="cover"
        className="mb-5"
      />
    </div>
  );
};

export default BlogImage;
