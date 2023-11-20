import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Navbar1 from "@/components/Navbar1";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Project SBF",
  description: "Kursus Kuliah online",
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
