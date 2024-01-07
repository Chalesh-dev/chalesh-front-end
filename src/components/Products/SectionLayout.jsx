import CustomLeft from "./CustomLeft";
import CustomRight from "./CustomRight";

const SectionLayout = () => {
  const data = [
    "Be first to detect triggers.",
    "See trading signals from pending transactions.",
    "Identify new liquidation or arbitrage opportunities.",
    "Manage market-making more efficiently.",
    "Track transactions in real-time.",
    "Be among the first to spot fee congestion.",
  ];
  return (
    <div className="w-full p-4 flex lg:flex-row flex-col mb-9 lg:gap-1 gap-5">
      <CustomLeft title="Be first with bloXroute." data={data} btnText="Solana Trading API documentation" />
      <CustomRight
        imgTitle="Get blocks to your trading bot or node, faster than any other provider."
        images="/images/products/blox.webp"
      />
    </div>
  );
};

export default SectionLayout;
