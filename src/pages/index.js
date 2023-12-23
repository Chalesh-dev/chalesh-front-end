import HtmlHead from "@/components/HtmlHead";
import LayoutSection1 from "@/components/Main/SectionOne/LayoutSection1";
import LayoutSection3 from "@/components/Main/SectionThree/LayoutSection3";
import LayoutSection2 from "@/components/Main/SectionTwo/LayoutSection2";

export default function Home() {
  return (
    <>
      <HtmlHead
        title="Welcome to chalesh dev"
        description="Explore wide variety of designs"
      />
      <LayoutSection1 />
      <LayoutSection2 />
      <LayoutSection3 />
    </>
  );
}
