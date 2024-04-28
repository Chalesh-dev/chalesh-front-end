import "./globals.css";
import Footer from "@/components/Footer/Footer";
import { ArticleProvider } from "@/context/ArticleContext";
import clsx from "clsx";
import { Roboto, Noto_Sans_Arabic } from "next/font/google";
import Head from "next/head";
import Link from "next/link";

export const metadata = {
  title: "Chalesh Soft",
  description: "Chalesh Soft",
  icons: {
    icon: "/favicon.ico",
  },
};

const arabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-sans-arabic",
  weight: ["400", "700"],
  style: ["normal"],
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

<Head>
  <Link rel="icon" href="/favicon.ico" />
</Head>;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.icons.icon} />
      </Head>
      <body
        className={clsx(
          arabic.variable,
          roboto.variable,
          "min-h-screen flex flex-col w-full"
        )}
      >
        <ArticleProvider>{children}</ArticleProvider>
        <Footer />
      </body>
    </html>
  );
}
