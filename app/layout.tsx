import "./css/all.min.css";
// import "swiper/css";
// import "swiper/css/pagination";

import BackTop from "~/en/components/BackTop";
import Header from "~/en/components/Header";
import Footer from "~/en/components/Footer";
import Script from "next/script";

import type { Metadata } from "next";
export const metadata: Metadata = {
  metadataBase: new URL(process.env.WEBSITE_DOMAIN as string),
  title: "TAIDE - TAIDE Taiwanese Native Large Language Model",
  description:
    "Complete guide to unlock download and application secrets of TAIDE model version. Upgrade your AI skills and quickly get started and practice!",
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
      "Complete guide to unlock download and application secrets of TAIDE model version. Upgrade your AI skills and quickly get started and practice!",
    siteName: "TAIDE",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_ASSET_PREFIX}/ogimg.png`,
      },
    ],
    locale: "en",
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
    <html lang="en">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta httpEquiv="Content-Language" content="en-US" />
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

        <section className="wrapper enPage">
          <Header />
          <main className="main" itemType="https://schema.org/Organization">
            {children}
          </main>
          <Footer />
          <BackTop />
        </section>

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
