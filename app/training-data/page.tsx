import { WithContext } from "schema-dts";

import Image from "next/image";
import Link from "next/link";
import btnNextArrow from "~/images/icon/btn_nextArrow.svg";

import MasonryBlock from "./components/MasonryBlock";
import CardItem from "./components/CardItem";
import Navigation from "./components/Navigation";
import TrainDataResType from "./types";
import WorldCloudResType from "./worldCloudType";
import { trainDataTypeMapping } from "~/utils/common";

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

const TrainingData = async ({
  searchParams,
}: {
  searchParams: TrainDataResType.QueryType;
}) => {
  const trainDataTypeList: Record<string, string> = {
    "0": "全類別",
    ...trainDataTypeMapping,
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

  const pageDefaultLength = 8;
  const length: number = Number(searchParams.length) || pageDefaultLength;
  const type: number = Number(searchParams.type) || 0;
  let totalPages = 0;

  const trainDataListHandle = async () => {
    const trainDataListRes = await fetch(
      `${
        process.env.API_URL
      }/trainData?accessToken=TAIDE_7ujm*IK9LP*UIOPJKL@wsx!qaz&type=${
        type || ""
      }&length=${length}&start=0`,
      {
        method: "POST",
        cache: "no-store",
      }
    );

    const {
      trainDataList,
      totalPages: totalPagesRes,
    }: TrainDataResType.TrainDataType = await trainDataListRes.json();

    totalPages = totalPagesRes;

    return trainDataList;
  };

  const wordCloudListHandle = async () => {
    const wordCloudRes = await fetch(
      `${process.env.API_URL}/wordCloud?accessToken=TAIDE_!@%23456qwertyASDFGHzxcvbn&length=99999999&start=0`,
      {
        method: "POST",
        cache: "no-store",
      }
    );

    const { wordCloudList }: WorldCloudResType.WorldCloudType =
      await wordCloudRes.json();

    return wordCloudList;
  };

  const [trainDataList, wordCloudList] = await Promise.all([
    trainDataListHandle(),
    wordCloudListHandle(),
  ]);

  return (
    <>
      <article className="trainDataList">
        <div className="trainDataList__body">
          <h2>資料合作單位</h2>
          <MasonryBlock wordCloudList={wordCloudList} />

          <Navigation trainDataTypeList={trainDataTypeList} type={type} />
          <div className="cardTrainData">
            {trainDataList.map((e) => (
              <CardItem
                data={e}
                key={e.id}
              />
            ))}
          </div>

          {totalPages > 1 && (
            <Link
              href={`${
                process.env.NEXT_PUBLIC_ASSET_PREFIX
              }/training-data?type=${type}&length=${
                Number(length) + pageDefaultLength
              }`}
              scroll={false}
              className="resourcesUnit__more jsLoadMore"
            >
              載入更多 Load More
            </Link>
          )}
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
              <Image src={btnNextArrow} style={{ height: "auto" }} alt="next" />
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

export default TrainingData;
