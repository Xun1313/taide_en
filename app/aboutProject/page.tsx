import {  WithContext } from "schema-dts";

import Image from "next/image";
import aboutProjectBanner from "~/images/about/aboutProject_banner.png";
import btnNextArrow from "~/images/icon/btn_nextArrow.svg";
import aboutProject1 from "~/images/about/aboutProject_1.png";

import BannerSwiper from "./components/BannerSwiper";
import Accordion1 from "./components/Accordion1";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "認識TAIDE - 推動臺灣可信任生成式AI發展計畫",
  description:
    "深入了解TAIDE計畫的背後故事。探討其起源，並見證臺灣AI技術如何藉此邁向新的高峰。",
  openGraph: {
    description:
      "深入了解TAIDE計畫的背後故事。探討其起源，並見證臺灣AI技術如何藉此邁向新的高峰。",
  },
};

const AboutProject = async () => {
  const jsonLd: WithContext<any> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "深入了解TAIDE計畫的背後故事。探討其起源，並見證臺灣AI技術如何藉此邁向新的高峰。",
    additionalName:
      "深入了解TAIDE計畫的背後故事。探討其起源，並見證臺灣AI技術如何藉此邁向新的高峰。",
    url: process.env.WEBSITE_DOMAIN,
    datePublished: "2023-03-02",
  };
  return (
    <>
      <article className="aboutUnit project">
        <div className="aboutUnit__body">
          <div className="cardAbout">
            <div className="cardAbout__item max">
              <h1>計畫背景</h1>
              <div className="photo">
                <Image src={aboutProjectBanner} alt="計畫背景" />
              </div>
            </div>
            <div className="cardAbout__item">
              <BannerSwiper />
            </div>
          </div>
          <div className="section section1">
            <h2>
              <span>自主開發可信任的生成式AI</span>
              <span>提升臺灣科技實力</span>
            </h2>
            <div className="row">
              <div className="infoCon">
                <div className="text">
                  自主開發自然語言處理技術和大型語言模型的發展。生成式AI可以幫助人們
                </div>
                <div className="tagUnit grey">生成式AI可以幫助</div>
                <ul>
                  <li>快速處理資訊</li>
                  <li>提高工作效率</li>
                  <li>節省工時</li>
                </ul>
              </div>
              <div className="photo">
                <Image
                  style={{ height: "auto" }}
                  src={aboutProject1}
                  alt="about"
                />
              </div>
            </div>
          </div>

          <Accordion1 />

          <div className="section section3">
            <h2>
              <span>確保AI技術</span>
              <span>對臺灣和全球的正面影響</span>
            </h2>
            <div className="text">
              建立可信任的生成式AI對話引擎基礎模型是當前的重要任務，需要考慮本土化需求並確保訓練資料的品質和適用性。此外，全球各國也紛紛制定相關規範和準則，以確保AI技術的可信任性和安全性。臺灣應加強在生成式AI技術和應用方面的投入，提高臺灣的科技實力和競爭力，並確保AI技術對臺灣和全球的正面影響。
            </div>
            <ol>
              <li>
                <h3>
                  <span>避免依賴</span>
                  <span>外國技術</span>
                </h3>
                <p>
                  培育臺灣自有人才與技術，孕育下個世代的競爭力，也不用依賴外國技術，更能保障臺灣安全。
                </p>
                <div className="tagList2">
                  <div className="tagUnit about1">生成式AI人才扎根</div>
                  <div className="tagUnit about3">高品質語料收集與標註</div>
                </div>
              </li>
              <li>
                <h3>
                  <span>促進</span>
                  <span>產業發展</span>
                </h3>
                <p>
                  發展自有AI技術能夠促進臺灣相關產業的發展，並有助完善整個AI產業鏈。
                </p>
                <div className="tagList2">
                  <div className="tagUnit about1">生成式AI人才扎根</div>
                  <div className="tagUnit about2">高速運算環境整備</div>
                </div>
              </li>
              <li>
                <h3>
                  <span>強化</span>
                  <span>國家安全</span>
                </h3>
                <p>
                  自有AI技術能強化國家安全，因有自己的資料庫更能保衛資訊安全。
                </p>
                <div className="tagList2">
                  <div className="tagUnit about2">高速運算環境整備</div>
                  <div className="tagUnit about3">高品質語料收集與標註</div>
                </div>
              </li>
              <li>
                <h3>
                  <span>增進</span>
                  <span>國際競爭力</span>
                </h3>
                <p>
                  有了自有AI技術，才能與國外競爭，在國際間能夠有相關的競爭力。
                </p>
                <div className="tagList2">
                  <div className="tagUnit about2">高速運算環境整備</div>
                  <div className="tagUnit about3">高品質語料收集與標註</div>
                </div>
              </li>
              <li>
                <h3>
                  <span>提升</span>
                  <span>社會福祉</span>
                </h3>
                <p>
                  有了生程式AI，能夠幫助我們輕鬆且快速完成更多的事務與工作，有效率的提升生活的品質。
                </p>
                <div className="tagList2">
                  <div className="tagUnit about2">高速運算環境整備</div>
                  <div className="tagUnit about3">高品質語料收集與標註</div>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </article>
      <article className="contactUnit aboutProject">
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

export default AboutProject;
