import { WithContext } from "schema-dts";

import PlanSwiper from "~/en/components/PlanSwiper";
import StageUnit from "~/en/components/StageUnit";
import TeamUnit from "~/en/components/TeamUnit";
import NewsListUnit from "~/en/components/NewsListUnit";

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
                  src={`/video/en/banner.mp4`}
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </article>

      <PlanSwiper />

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
