import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://abeltony.vercel.app/"),
  title: "Isabella James",
  description: "Realtor Portfolio By Isabella James",
  keywords: ["Realtor", "Portfolio", "Realtor Portflio", "Isabella James"],
  openGraph: {
    title: "Isabella James",
    description: "Realtor",
    images: "/OpenGraph.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{minHeight: "100vh"}}>
      <body
        className={`${inter.className} bg-[#111] h-100vh  overflow-y-auto md:overflow-y-hidden overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
