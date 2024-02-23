import "./css/all.min.css";
// import "swiper/css";
// import "swiper/css/pagination";

import MainLayout from "~/components/MainLayout";
import Script from "next/script";

import type { Metadata } from "next";
export const metadata: Metadata = {
  metadataBase: new URL(process.env.WEBSITE_DOMAIN as string),
  title: "TAIDE - 推動臺灣可信任生成式AI發展計畫",
  description:
    "深入了解TAIDE計畫的背後策略、目標和里程碑。臺灣如何透過生成式AI技術，開創新的科技未來。",
  icons: [
    { rel: "icon", url: `${process.env.NEXT_PUBLIC_ASSET_PREFIX}/favicon.ico` },
    {
      rel: "apple-touch-icon",
      url: `${process.env.NEXT_PUBLIC_ASSET_PREFIX}/apple-touch-icon-1.png`,
      sizes: "152x152",
    },
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
        url: `${process.env.NEXT_PUBLIC_ASSET_PREFIX}/ogimg.png`,
      },
    ],
    locale: "zh-TW",
  },
  themeColor: "#ffffff",
  manifest: `${process.env.NEXT_PUBLIC_ASSET_PREFIX}/favicon/site.webmanifest`,
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
          href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/favicon/favicon-32x32-1.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/favicon/favicon-16x16-1.png`}
        />
        <link
          rel="mask-icon"
          href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/favicon/safari-pinned-tab-1.svg`}
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#f5f1ec" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-PYNQDHHXCT"></Script>
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-PYNQDHHXCT');
          gtag('config', 'GTM-KTXM8L8T');`}
        </Script>
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KTXM8L8T"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <MainLayout>{children}</MainLayout>
        <script
          src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/js/jquery.min.js`}
          defer={false}
        ></script>
        <script
          src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/js/jquery.ui.min.js`}
          defer={false}
        ></script>
        <script
          src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/js/isotope-docs.min.js`}
          defer={false}
        ></script>
        <script
          src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/js/masonry.pkgd.min.js`}
          defer={false}
        ></script>
      </body>
    </html>
  );
}
