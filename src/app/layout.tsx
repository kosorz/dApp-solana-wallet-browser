import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wallet Browser",
  description: "Check balance of Solana wallets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="cupcake">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="flex flex-col items-center align-top p-4 lg:p-8">
          <Link
            className="cursor-pointer bg-primary-content mask mask-parallelogram-3 p-10"
            href={"/"}
          >
            <Image src={"/logo.svg"} alt="Solana logo" width={70} height={70} />
          </Link>
          <section className="w-full max-w-2xl m-auto pt-10">
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
