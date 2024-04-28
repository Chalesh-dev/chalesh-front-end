import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import styles from "./styles.module.css";
import clsx from "clsx";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chalesh Soft | login page",
  description: "Chalesh Soft",
};

const gradientStyle = {
  backgroundImage: `
    radial-gradient(circle at 100% 0%, #6a2c95a6 0%, transparent 25% ),
    radial-gradient(circle at 0% 40%, #6a2c95a6 -20%, #06051a 20%)`,
};

export default function AuthLayout({ children }) {
  return (
    <div style={gradientStyle} className={inter.className}>
      <Header />
      <div
        className={clsx(
          styles.container,
            "xl:px-[8.5%] lg:px-[7.5%] px-[5.5%] py-2 flex gap-2"
        )}
      >
        {children}
        <div className="lg:flex hidden justify-center items-center">
          <Image width={720} height={640} src={'/images/auth/sapiens.svg'} />
        </div>
      </div>
    </div>
  );
}
