import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./views/header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Root ATL",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <div className="fixed h-[7.5rem] w-full z-50">
        <Header />
      </div>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
