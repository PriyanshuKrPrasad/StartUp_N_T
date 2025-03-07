import React from "react";
import type { Metadata } from "next";
import { Rethink_Sans} from "next/font/google";
import "./globals.css";
import ResponsiveNav from "../../components/Home/Navbar/ResponsiveNav";
import Footer from "../../components/Home/Footer/Footer";
import ScrollToTop from "../../components/Helper/ScrollToTop";

const font = Rethink_Sans({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-rethink-sans",
})

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "StartUp Project",
  description: "StartUp Project Usinf Next.Js & Typescript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}>
          <ResponsiveNav/>
           {children}
            <Footer/>
            <ScrollToTop/>
      </body>
    </html>
  );
}
