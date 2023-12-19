import Link from "next/link";

const Tabs = () => {
  return (
    <div className="flex gap-8 items-center text-white text-[15px]">
      <Link href="/">Solution</Link>
      <Link href="/">Product</Link>
      <Link href="/">Blog</Link>
      <Link href="/">Docs</Link>
      <Link href="/">About us</Link>
    </div>
  );
};

export default Tabs;
