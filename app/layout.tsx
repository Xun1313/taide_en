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
    { rel: "icon", url: `/favicon.ico` },
    {
      rel: "apple-touch-icon",
      url: `/apple-touch-icon-1.png`,
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
        url: `/ogimg.png`,
      },
    ],
    locale: "en",
  },
  themeColor: "#ffffff",
  manifest: `/favicon/site.webmanifest`,
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
          href={`/favicon/favicon-32x32-1.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`/favicon/favicon-16x16-1.png`}
        />
        <link
          rel="mask-icon"
          href={`/favicon/safari-pinned-tab-1.svg`}
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#f5f1ec" />
        <Script id="google-analytics">
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NQTZMVPL');`}
        </Script>
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NQTZMVPL"
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

        <script src={`/js/jquery.min.js`} defer={false}></script>
        <script src={`/js/jquery.ui.min.js`} defer={false}></script>
        <script src={`/js/isotope-docs.min.js`} defer={false}></script>
        <script src={`/js/masonry.pkgd.min.js`} defer={false}></script>
      </body>
    </html>
  );
}
