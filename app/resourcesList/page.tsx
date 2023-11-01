import { WithContext } from "schema-dts";

import Image from "next/image";
import btnNextArrow from "~/images/icon/btn_nextArrow.svg";
import MainPage from "./component/MainPage";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "學習資源 - TAIDE推動臺灣可信任生成式AI發展計畫",
  description:
    "探索TAIDE的專屬學習資源，從基礎到專家級，助您在AI領域取得突破。踏上學習的新旅程！",
  openGraph: {
    description:
      "探索TAIDE的專屬學習資源，從基礎到專家級，助您在AI領域取得突破。踏上學習的新旅程！",
  },
};

const ResourcesList = () => {
  const jsonLd: WithContext<any> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "探索TAIDE的專屬學習資源，從基礎到專家級，助您在AI領域取得突破。踏上學習的新旅程！",
    additionalName:
      "探索TAIDE的專屬學習資源，從基礎到專家級，助您在AI領域取得突破。踏上學習的新旅程！",
    url: process.env.WEBSITE_DOMAIN,
    datePublished: "2023-03-02",
  };

  return (
    <>
      <MainPage />
      <article className="contactUnit resources">
        <article className="contactUnit__body">
          <h2>
            <span>有任何想法？</span>
            <span>歡迎與我們聯絡</span>
          </h2>
          <div className="btn">
            <a href="mailto:TAIDE@narlabs.org.tw">
              <span>Contact TAIDE</span>
              <Image src={btnNextArrow} alt="arrow" />
            </a>
          </div>
        </article>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      ></script>
    </>
  );
};

export default ResourcesList;
