import Link from "next/link";

const Tabs = () => {
  return (
    <div className="gap-7 items-center text-white text-[15px] md:flex hidden">
      <Link href="/">Solution</Link>
      <Link href="/services">Product</Link>
      <Link href="/">Blog</Link>
      <Link href="/">Docs</Link>
      <Link href="/">About us</Link>
    </div>
  );
};

export default Tabs;
