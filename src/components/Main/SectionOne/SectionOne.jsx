import ContentLeft from "./ContentLeft";
import ContentRight from "./ContentRight";

const SectionOne = () => {
  // bg-[url('/images/Main/ImgBackgroundSectionOne.svg')]
  // from-[#06051a] from-[90%] to-[#4338CA] bg-gradient-to-tr
  return (
    <div className="">
      <div
        className="px-[8.5%] min-h-[679px] h-auto w-full flex flex-col lg:flex-row lg:gap-0 gap-7 mb-5"
        style={{
          backgroundImage: "url('/images/Main/ImgBackgroundSectionOne.svg')",
          backgroundSize: "",
          zIndex: "100000",
          position: "relative",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <ContentLeft />
        <ContentRight />
      </div>
    </div>
  );
};

export default SectionOne;
