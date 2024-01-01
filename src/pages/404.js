const Error404 = () => {
  const styles = {
    decorationWavy: {
      position: "relative",
      display: "inline-block",
    },

    decorationWavyBefore: {
      content: "",
      position: "absolute",
      width: "100%",
      height: "100%",
      background:
        "linear-gradient(90deg, transparent, transparent 10%, #5fc387 10%, #5fc387 20%, transparent 20%, transparent 30%, #5fc387 30%, #5fc387 40%, transparent 40%, transparent 50%, #5fc387 50%, #5fc387 60%, transparent 60%, transparent 70%, #5fc387 70%, #5fc387 80%, transparent 80%, transparent 90%, #5fc387 90%, #5fc387 100%)",
      backgroundSize: "8px 100%",
      animation: "wave-animation 1s infinite linear",
    },

    "@keyframes wave-animation": {
      "0%": {
        backgroundPosition: "0 0",
      },
      "100%": {
        backgroundPosition: "8px 0",
      },
    },
  };
  return (
    // <p
    //   style={styles.decorationWavy}
    //   className="relative text-white xl:text-9xl lg:text-8xl md:text-7xl sm:text-6xl xs:text-4xl text-3xl xl:p-8 lg:p-6 md:p-4 sm:p-2 p-1 rounded-[25%] sm:border-b-[0.5rem] border-b-[0.20rem] border-[#5fc387] pb-3"
    // >
    //   <span style={styles.decorationWavyBefore}>404 Not Found!</span>
    // </p>
    // rounded-[25%] sm:border-b-[0.5rem] border-b-[0.20rem] border-[#5fc387]

    <div className="w-full flex justify-center sm:p-20 p-10">
      <p className="relative text-white xl:text-9xl lg:text-8xl md:text-7xl sm:text-6xl xs:text-4xl text-3xl xl:p-8 lg:p-6 md:p-4 sm:p-2 p-1 pb-3 decoration-wavy">
        404 <span className="underline decoration-wavy decoration-amber-500">Not Found!</span>
      </p>
    </div>
  );
};

export default Error404;
