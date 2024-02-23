import { WithContext } from "schema-dts";

import Image from "next/image";
import icon_anything_1 from "~/images/en/icon_anything_1.svg";
import icon_anything_2 from "~/images/en/icon_anything_2.svg";
import icon_anything_3 from "~/images/en/icon_anything_3.svg";


import StageUnit from "~/en/components/StageUnit";
import TeamUnit from "~/en/components/TeamUnit";
import NewsListUnit from "~/en/components/NewsListUnit";
// import Link from "next/link";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "TAIDE - TAIDE Taiwanese Native Large Language Model",
  description:
    "Complete guide to unlock download and application secrets of TAIDE model version. Upgrade your AI skills and quickly get started and practice!",
};

const Home = async () => {
  const jsonLd: WithContext<any> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Complete guide to unlock download and application secrets of TAIDE model version. Upgrade your AI skills and quickly get started and practice!",
    additionalName:
      "Complete guide to unlock download and application secrets of TAIDE model version. Upgrade your AI skills and quickly get started and practice!",
    url: process.env.WEBSITE_DOMAIN,
    datePublished: "2023-03-02",
  };

  return (
    <>
      <article className="bannerUnit">
        <a id="toAbout"></a>
        <div className="bannerUnit__body">
          <div className="bannerUnit__wrap">
            <div className="bannerUnit__left">
              <video width="320" height="240" autoPlay loop muted>
                <source
                  src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/video/en/banner.mp4`}
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </article>

      <article className="planList">
        <h2>TAIDE CAN HELP ANYTHING</h2>
        <div className="planSwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide slide1">
              <div className="infoCon">
                <h3>
                  <span>Write a content</span>
                </h3>
                <div className="icon">
                  <Image
                    src={icon_anything_1}
                    style={{ height: "auto" }}
                    alt="arrow"
                  />
                </div>
              </div>
            </div>
            <div className="swiper-slide slide2">
              <div className="infoCon">
                <h3>
                  <span>Translate inbetween</span>
                  <span>Chinese and English</span>
                </h3>
                <div className="icon">
                  <Image
                    src={icon_anything_2}
                    style={{ height: "auto" }}
                    alt="arrow"
                  />
                </div>
              </div>
            </div>
            <div className="swiper-slide slide3">
              <div className="infoCon">
                <h3>
                  <span>Summarize some</span>
                  <span>keypoints</span>
                </h3>
                <div className="icon">
                  <Image
                    src={icon_anything_3}
                    style={{ height: "auto" }}
                    alt="arrow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      
      <StageUnit />

      <TeamUnit />
      
      <NewsListUnit />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      ></script>
    </>
  );
};

export default Home;
