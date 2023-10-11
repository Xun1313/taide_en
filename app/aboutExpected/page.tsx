import Image from "next/image";
import { WithContext } from "schema-dts";
import aboutExpectedBanner1 from "~/images/about/aboutExpected_banner_1.png";
import btnNextArrow from "~/images/icon/btn_nextArrow.svg";

import aboutExpectedBanner2 from "~/images/about/aboutExpected_banner_2.png";

import BannerSwiper from "./components/BannerSwiper";
import BannerSwiper2 from "./components/BannerSwiper2";
import Accordion1 from "./components/Accordion1";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "預期效益 - TAIDE推動台灣可信任生成式AI發展計畫",
  description:
    "探索TAIDE的核心價值和其帶來的預期效益，了解其如何助推台灣AI產業到達新的巔峰。",
  openGraph: {
    description:
      "探索TAIDE的核心價值和其帶來的預期效益，了解其如何助推台灣AI產業到達新的巔峰。",
  },
};

const AboutExpected = async () => {
  const jsonLd: WithContext<any> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "探索TAIDE的核心價值和其帶來的預期效益，了解其如何助推台灣AI產業到達新的巔峰。",
    additionalName:
      "探索TAIDE的核心價值和其帶來的預期效益，了解其如何助推台灣AI產業到達新的巔峰。",
    url: process.env.WEBSITE_DOMAIN,
    datePublished: "2023-03-02",
  };
  return (
    <>
      <article className="aboutUnit expected">
        <div className="aboutUnit__body">
          <div className="cardAbout">
            <div className="cardAbout__item max">
              <h1>預期效益</h1>
              <div className="photo">
                <Image src={aboutExpectedBanner1} alt="計畫背景" />
              </div>
            </div>
            <div className="cardAbout__item">
              <BannerSwiper />
            </div>
          </div>

          <Accordion1 />
          <div className="cardAbout" id="expected">
            <div className="cardAbout__item max">
              <div className="photo">
                <Image src={aboutExpectedBanner2} alt="計畫背景" />
              </div>
            </div>
            <div className="cardAbout__item">
              <BannerSwiper2 />
            </div>
          </div>
        </div>
      </article>
      <article className="contactUnit aboutExpected">
        <article className="contactUnit__body">
          <h2>
            <span>有任何想法？</span>
            <span>歡迎與我們聯絡</span>
          </h2>
          <div className="btn">
            <a href="mailto:TAIDE@narlabs.org.tw">
              <span>Contact TAIDE</span>
              <Image src={btnNextArrow} alt="about" />
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

export default AboutExpected;
