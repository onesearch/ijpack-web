import type { Metadata } from "next";
import { IBM_Plex_Mono, Noto_Sans_KR } from "next/font/google";
import { LangProvider } from "@/components/LangProvider";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  // Korean glyphs are split into many unicode-range files; preloading them all would hurt.
  preload: false,
});

const plexMono = IBM_Plex_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const title = "대림 아이제이팩 | 친환경 비닐·연포장 전문 기업";
const description =
  "비닐 제품과 연포장 제품의 생산과 인쇄 전문 기업 (주)아이제이팩. 녹색기술인증(GT-23-01587) 저유해성 잉크 포장재, ISO 9001·14001 인증, 그라비어·플렉소 인쇄부터 합지·제대까지 일괄 생산.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: ["아이제이팩", "IJPAK", "대림", "연포장", "비닐 포장재", "파우치", "친환경 포장재", "그라비어 인쇄", "녹색기술인증"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "대림 아이제이팩",
    title,
    description,
    images: [{ url: "/assets/photos/og.jpg" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={`${notoSansKr.variable} ${plexMono.variable}`}>
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
