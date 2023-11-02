import { WithContext } from "schema-dts";

import Image from "next/image";
import Link from "next/link";
import theFirstStage from "~/images/home/theFirstStage.png";
import btnNextArrow from "~/images/icon/btn_nextArrow.svg";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "最新動態 - TAIDE推動臺灣可信任生成式AI發展計畫",
  description:
    "獨家深度解析TAIDE的最新發展，帶您貼近臺灣AI產業的脈動。掌握核心資訊，立即了解！",
  openGraph: {
    description:
      "獨家深度解析TAIDE的最新發展，帶您貼近臺灣AI產業的脈動。掌握核心資訊，立即了解！",
  },
};

const FirstStage = () => {
  const jsonLd: WithContext<any> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "獨家深度解析TAIDE的最新發展，帶您貼近臺灣AI產業的脈動。掌握核心資訊，立即了解！",
    additionalName:
      "獨家深度解析TAIDE的最新發展，帶您貼近臺灣AI產業的脈動。掌握核心資訊，立即了解！",
    url: process.env.WEBSITE_DOMAIN,
    datePublished: "2023-03-02",
  };
  return (
    <>
      <article className="newsList">
        <div className="newsList__body">
          <h1>階段ㄧ 展示中模型</h1>
          <div className="newsDetail">
            <div className="back">
              <Link href="/newsList">回上頁</Link>
            </div>
            <hr />
            <br />
            <Image
              src={theFirstStage}
              style={{ height: "auto" }}
              alt="階段ㄧ 展示中模型"
            />
          </div>
        </div>
      </article>
      <article className="contactUnit news">
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

export default FirstStage;
