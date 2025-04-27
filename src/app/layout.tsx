import type { Metadata } from "next";
import "./globals.css";
import { Nanum_Myeongjo, Song_Myung } from "next/font/google";

export const myeongjo = Nanum_Myeongjo({
  weight: "400",
  variable: "--font-myeongjo",
});

export const songMyung = Song_Myung({
  weight: "400",
  variable: "--font-songmyung",
});

export const metadata: Metadata = {
  title: "mimiLanding",
  description: "mimi's Landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${myeongjo.variable}`}>{children}</body>
    </html>
  );
}
