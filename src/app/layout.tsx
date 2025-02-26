import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Find Model Circle - SNSで話題をつくる、直接繋がるインフルエンサーマッチング",
  description: "Find Model Circleは、企業とインフルエンサーをつなぐマッチングプラットフォーム。月額5万円で案件出し放題・何人とつながっても定額、直接やり取りOK! 本人確認済みのインフルエンサーが商品を体験し、SNS投稿で口コミ拡散。シンプルな仕組みで、ブランド価値向上・認知拡大を目指します。",
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
