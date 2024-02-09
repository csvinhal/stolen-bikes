import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { clsx } from "clsx";
import "./globals.css";
import Header from "./components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StolenBikes",
  description: "Search for stolen bikes through all Berlin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "p-10", "bg-white")}>
        <Header />
        {children}
      </body>
    </html>
  );
}
