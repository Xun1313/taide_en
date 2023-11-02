import { WithContext } from "schema-dts";

import Image from "next/image";
import btnNextArrow from "~/images/icon/btn_nextArrow.svg";

import FilterRender from "./components/FilterRender";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "團隊陣容 - TAIDE推動臺灣可信任生成式AI發展計畫",
  description:
    "深入了解TAIDE的菁英團隊，探索他們如何集結智慧，引領臺灣AI技術走在全球前沿。",
  openGraph: {
    description:
      "深入了解TAIDE的菁英團隊，探索他們如何集結智慧，引領臺灣AI技術走在全球前沿。",
  },
};

const TeamList = () => {
  const jsonLd: WithContext<any> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "深入了解TAIDE的菁英團隊，探索他們如何集結智慧，引領臺灣AI技術走在全球前沿。",
    additionalName:
      "深入了解TAIDE的菁英團隊，探索他們如何集結智慧，引領臺灣AI技術走在全球前沿。",
    url: process.env.WEBSITE_DOMAIN,
    datePublished: "2023-03-02",
  };

  return (
    <>
      <article className="teamList">
        <div className="teamList__body">
          <h1>團隊陣容</h1>
          <div className="subtitle">
            集合國家實驗研究院、數位發展部、中研院、各大學教授及各領域專家們
          </div>
          <FilterRender />
        </div>
      </article>
      <article className="contactUnit team">
        <article className="contactUnit__body">
          <h2>
            <span>有任何想法？</span>
            <span>歡迎與我們聯絡</span>
          </h2>
          <div className="btn">
            <a href="mailto:TAIDE@narlabs.org.tw">
              <span>Contact TAIDE</span>
              <Image src={btnNextArrow} style={{ height: "auto" }} alt="arrow" />
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

export default TeamList;
