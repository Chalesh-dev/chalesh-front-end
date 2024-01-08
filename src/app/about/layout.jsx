import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chalesh Soft",
  description: "Chalesh Soft",
};

const gradientStyle = {
  backgroundImage: `
    radial-gradient(circle at 100% 0%, #6a2c95a6 0%, transparent 25% ),
    radial-gradient(circle at 0% 40%, #6a2c95a6 -20%, #06051a 20%)`,
};

export default function AboutLayout({ children }) {
  return (
    <div style={gradientStyle} className={inter.className}>
      <Header />
      {children}
      {/* <Suspense fallback={<Loading />}>{children}</Suspense> */}
    </div>
  );
}
