import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "David Taylor - Full-Stack & Blockchain Developer",
  description:
    "Portfolio of David Taylor, a seasoned full-stack and blockchain developer specializing in modern web technologies, decentralized applications, and scalable enterprise solutions.",
  keywords:
    "David Taylor, Full-Stack Developer, Blockchain Developer, React, Node.js, Solidity, DeFi, Web3, Smart Contracts",
  authors: [{ name: "David Taylor" }],
  creator: "David Taylor",
  openGraph: {
    title: "David Taylor - Full-Stack & Blockchain Developer",
    description:
      "Experienced developer crafting innovative digital solutions with modern technologies and blockchain expertise.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
