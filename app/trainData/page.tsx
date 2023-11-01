import { WithContext } from "schema-dts";

import Image from "next/image";
import Link from "next/link";
import btnNextArrow from "~/images/icon/btn_nextArrow.svg";
import btnDownArrow from "~/images/icon/btn_downArrow.svg";
import iconData from "~/images/icon/icon_data.svg";
import TrainDataResType from "./types";
import { typeMapping } from "~/utils/common";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "訓練資料 - TAIDE推動臺灣可信任生成式AI發展計畫",
  description:
    "深入解析TAIDE的條款與許可協議，確保您在AI領域的安全應用。不可忽視的關鍵事項，立即掌握！",
  openGraph: {
    description:
      "深入解析TAIDE的條款與許可協議，確保您在AI領域的安全應用。不可忽視的關鍵事項，立即掌握！",
  },
};

const TrainData = async ({
  searchParams,
}: {
  searchParams: TrainDataResType.QueryType;
}) => {
  const trainDataTypeList: Record<string, string> = {
    "0": "全類別",
    ...typeMapping,
  };
  const jsonLd: WithContext<any> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "深入解析TAIDE的條款與許可協議，確保您在AI領域的安全應用。不可忽視的關鍵事項，立即掌握！",
    additionalName:
      "深入解析TAIDE的條款與許可協議，確保您在AI領域的安全應用。不可忽視的關鍵事項，立即掌握！",
    url: process.env.WEBSITE_DOMAIN,
    datePublished: "2023-03-02",
  };
  const trainDataListRes = await fetch(
    `${
      process.env.API_URL
    }/trainData?accessToken=TAIDE_7ujm*IK9LP*UIOPJKL@wsx!qaz&type=${
      Number(searchParams.type) || ""
    }&length=99999999&start=0`,
    {
      method: "POST",
      cache: "no-store",
    }
  );

  const { trainDataList }: TrainDataResType.TrainDataType =
    await trainDataListRes.json();

  return (
    <>
      <article className="trainDataList">
        <div className="trainDataList__body">
          <h1>訓練資料</h1>
          <div className="tagList tagClick">
            {Object.keys(trainDataTypeList).map((e) => (
              <div
                className={`tagUnit secondary ${
                  searchParams.type === e && "active"
                }`}
                key={trainDataTypeList[e]}
              >
                <Link href={`/trainData?type=${e}`}>
                  {trainDataTypeList[e]}
                </Link>
              </div>
            ))}
          </div>
          <div className="cardTrainData">
            {trainDataList.map((e) => (
              <div className="cardTrainData__item" key={e.id}>
                <div className="title">{e.supplyUnit}</div>
                <h3>{e.title}</h3>
                <div className="dataCard">
                  <Image src={iconData} alt="data" />
                </div>
                {e.url && (
                  <a
                    className="tagUnit secondary"
                    href={e.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    資料來源網站
                  </a>
                )}
                <div className="btn">
                  <Link href={`/trainData/trainDataDetail/${e.id}`}>
                    <span>更多資料</span>
                    <Image src={btnDownArrow} alt="arrow" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
      <article className="contactUnit trainData">
        <article className="contactUnit__body">
          <h2>
            <span>有任何想法？</span>
            <span>歡迎與我們聯絡</span>
          </h2>
          <div className="btn">
            <a href="mailto:TAIDE@narlabs.org.tw">
              <span>Contact TAIDE</span>
              <Image src={btnNextArrow} alt="next" />
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

export default TrainData;
