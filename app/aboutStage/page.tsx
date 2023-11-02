import { WithContext } from "schema-dts";

import Image from "next/image";
import aboutStageBanner from "~/images/about/aboutStage_banner.png";
import btnNextArrow from "~/images/icon/btn_nextArrow.svg";

import BannerSwiper from "./components/BannerSwiper";
import StageUnit from "./components/StageUnit";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "階段進展與關鍵成果 - TAIDE推動臺灣可信任生成式AI發展計畫",
  description:
    "深入探索TAIDE的各階段進展，揭示其如何策略性地驅使臺灣AI技術邁向新的高度。",
  openGraph: {
    description:
      "深入探索TAIDE的各階段進展，揭示其如何策略性地驅使臺灣AI技術邁向新的高度。",
  },
};

const AboutStage = async () => {
  const jsonLd: WithContext<any> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "深入探索TAIDE的各階段進展，揭示其如何策略性地驅使臺灣AI技術邁向新的高度。",
    additionalName:
      "深入探索TAIDE的各階段進展，揭示其如何策略性地驅使臺灣AI技術邁向新的高度。",
    url: process.env.WEBSITE_DOMAIN,
    datePublished: "2023-03-02",
  };
  return (
    <>
      <article className="aboutUnit stage">
        <div className="aboutUnit__body">
          <div className="cardAbout">
            <div className="cardAbout__item max">
              <h1>階段進展</h1>
              <div className="photo">
                <Image src={aboutStageBanner} alt="計畫背景" />
              </div>
            </div>
            <div className="cardAbout__item">
              <h2>產業創新與客製應用</h2>
              <div className="text">
                高品質的訓練數據，滿足特定領域生成式AI需求，成為客製化AI的基礎。
              </div>
              <BannerSwiper />
            </div>
          </div>
          <div className="section section1">
            <h2>
              <span>各階段皆有相對應的假設及成果</span>
              <span>目的在於提高效率與精準度</span>
            </h2>
            <div className="text" id="stage">
              下面將較詳細的介紹各階段的進程目標與採用的研究方法，階段性的任務達成時間，是TAIDE的使命與責任，希望藉此能帶給國人一個引以為傲並有本土語言、文化的生程式AI。
            </div>
            <StageUnit />
          </div>
        </div>
      </article>
      <article className="contactUnit aboutStage">
        <article className="contactUnit__body">
          <h2>
            <span>有任何想法？</span>
            <span>歡迎與我們聯絡</span>
          </h2>
          <div className="btn">
            <a href="mailto:TAIDE@narlabs.org.tw">
              <span>Contact TAIDE</span>
              <Image src={btnNextArrow} alt="arrow" style={{ height: "auto" }} />
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

export default AboutStage;
