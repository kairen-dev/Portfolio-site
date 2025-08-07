import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kai Ren | Full-Stack Developer",
  description:
    "Modern portfolio built with Next.js, Tailwind CSS, and Framer Motion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased  bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]`}
      >
        <Navbar />
        <div className="pt-20">{children}</div>
      </body>
    </html>
  );
}