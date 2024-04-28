import Header from "@/components/Header/Header";
import HtmlHead from "@/components/HtmlHead";
import LayoutSection8 from "@/components/Main/SectionEight/LayoutSection8";
import LayoutSection5 from "@/components/Main/SectionFive/LayoutSection5";
import LayoutSection4 from "@/components/Main/SectionFour/LayoutSection4";
import LayoutSection9 from "@/components/Main/SectionNine/LayoutSection9";
import LayoutSection1 from "@/components/Main/SectionOne/LayoutSection1";
import LayoutSection7 from "@/components/Main/SectionSeven/LayoutSection7";
import LayoutSection6 from "@/components/Main/SectionSix/LayoutSection6";
import LayoutSection3 from "@/components/Main/SectionThree/LayoutSection3";
import LayoutSection2 from "@/components/Main/SectionTwo/LayoutSection2";

export default function Home() {
  const gradientStyle = {
    backgroundImage: `
    radial-gradient(circle at 100% 0%, #6a2c95a6 0%, transparent 8% ),
    radial-gradient(circle at 0% 10%, #6a2c95a6 0%, transparent 5% ),
    radial-gradient(circle at 100% 20%, #6a2c95a6 0%, transparent 6% ),
    radial-gradient(circle at 0% 32%, #6a2c95a6 0%, transparent 7% ),
    radial-gradient(circle at 100% 45%, #6a2c95a6 0%, transparent 8% ),
    radial-gradient(circle at 0% 59%, #6a2c95a6 0%, transparent 8% ),
    radial-gradient(circle at 100% 80%, #6a2c95a6 0%, transparent 8% ),
    radial-gradient(circle at 0% 95%, #6a2c95a6 0%, transparent 3% ),
    radial-gradient(circle at 0% 100%, #6a2c95a6 0%, #06051a 8%)`,
  };
  return (
    <div style={gradientStyle}>
      <HtmlHead
        title="Welcome to chalesh dev"
        description="Explore wide variety of designs"
      />
      <Header />
      <main>
        <LayoutSection1 />
        <LayoutSection2 />
        <LayoutSection3 />
        <LayoutSection4 />
        <LayoutSection5 />
        <LayoutSection6 />
        <LayoutSection7 />
        <LayoutSection8 />
        <LayoutSection9 />
      </main>
    </div>
  );
}
