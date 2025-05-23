import { Metadata } from "next";
import Header from "./_components/Header";

export const metadata: Metadata = {
  title: "mimimemo",
  description: "mimimemo's landing page",
  keywords: [
    "미미메모",
    "메모 앱",
    "메모 데스크탑 앱",
    "mimi memo",
    "메모앱 추천",
    "예쁜 메모앱",
    "예쁜 데스크탑 앱",
    "memo desktop app",
    "memo app",
    "aesthetic memo",
  ],
  openGraph: {
    title: "mimimemo",
    description: "언제 어디서나 사용할 수 있는 데스크탑 메모 앱, 미미메모",
    siteName: "mimimemo",
    type: "website",
  },
  robots: "index, follow",
  metadataBase: new URL("https://mimi-landing.vercel.app/mimimemo"),
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full relative px-[3vw] md:px-[15vw]">
      <Header />
      {children}
    </div>
  );
}
