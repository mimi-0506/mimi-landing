import type { Metadata } from "next";
import "./globals.css";
import { myeongjo } from "@/fonts";

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
      <body className={myeongjo.className}>{children}</body>
    </html>
  );
}
