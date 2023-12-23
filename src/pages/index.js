import HtmlHead from "@/components/HtmlHead";
// import Layout from "@/components/Layout";
import Layout from "@/components/Main/SectionOne/Layout";
import LayoutSection3 from "@/components/Main/SectionThree/LayoutSection3";

export default function Home() {
  return (
    <>
      <HtmlHead
        title="Welcome to chalesh dev"
        description="Explore wide variety of designs"
      />
      {/* main */}
      {/* <Layout /> */}
      {/* <div className="bg-[radial-gradient(circle_at_100px_800px,_var(--tw-gradient-stops))] from-[#3b3668] from-0% to-[#06051a] to-20%"> */}
        <Layout />
        <LayoutSection3 />
      {/* </div> */}
    </>
  );
}
