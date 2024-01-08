import { Inter } from "next/font/google";
import "./globals.css";
import { NextRequest } from "next/server";
import { headers } from "next/headers";
import Footer from "@/components/Footer/Footer";
import { ArticleProvider } from "@/context/ArticleContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chalesh Soft",
  description: "Chalesh Soft",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col w-full`}>
        <ArticleProvider>{children}</ArticleProvider>
        <Footer />
      </body>
    </html>
  );
}
