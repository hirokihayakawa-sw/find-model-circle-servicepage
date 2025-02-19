import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Find Model Circle | インフルエンサーマッチングサービス",
  description: "インフルエンサーと企業をPRでつなげるマッチングサービス。フォロワー1000人から始められるので、PR初心者でも安心。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
