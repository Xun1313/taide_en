import "./scss/all.scss";
import "swiper/css";
import "swiper/css/pagination";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import BackTop from "~/components/BackTop";
import Script from "next/script";

import type { Metadata } from "next";
export const metadata: Metadata = {
  metadataBase: new URL(process.env.WEBSITE_DOMAIN as string),
  title: "TAIDE - 推動臺灣可信任生成式AI發展計畫",
  description:
    "深入了解TAIDE計畫的背後策略、目標和里程碑。臺灣如何透過生成式AI技術，開創新的科技未來。",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/favicon/apple-touch-icon.png" },
  ],
  openGraph: {
    type: "website",
    url: process.env.WEBSITE_DOMAIN,
    title: "TAIDE",
    description:
      "深入了解TAIDE計畫的背後策略、目標和里程碑。臺灣如何透過生成式AI技術，開創新的科技未來。",
    siteName: "TAIDE",
    images: [
      {
        url: "ogimg.png",
      },
    ],
    locale: "zh-TW",
  },
  themeColor: "#ffffff",
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta httpEquiv="Content-Language" content="zh-tw" />
        <meta name="format-detection" content="telephone=no" />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000"
        />
        <meta name="msapplication-TileColor" content="#000000" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PYNQDHHXCT"
          async
        ></Script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-PYNQDHHXCT');`,
          }}
        ></script>
      </head>
      <body>
        <section className="wrapper">
          <Header />
          <main className="main" itemType="https://schema.org/Organization">
            {children}
          </main>
          <Footer />
          <BackTop />
        </section>
        <script src="/js/jquery.min.js" defer={false}></script>
        <script src="/js/jquery.ui.min.js" defer={false}></script>
        <script src="/js/isotope-docs.min.js" defer={false}></script>
      </body>
    </html>
  );
}
