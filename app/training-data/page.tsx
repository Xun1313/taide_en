import { WithContext } from "schema-dts";

import Image from "next/image";
import Link from "next/link";
import btnNextArrow from "~/images/icon/btn_nextArrow.svg";

import MasonryBlock from "./components/MasonryBlock";
import CardItem from "./components/CardItem";
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

  const trainDataListHandle = async () => {
    const trainDataListRes = await fetch(
      `${
        process.env.API_URL
      }/trainData?accessToken=TAIDE_7ujm*IK9LP*UIOPJKL@wsx!qaz&type=${
        Number(searchParams.type) || ""
      }&length=${searchParams.length || "8"}&start=0`,
      {
        method: "POST",
        cache: "no-store",
      }
    );

    const { trainDataList }: TrainDataResType.TrainDataType =
      await trainDataListRes.json();

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
    // const wordCloudList = [
    //   {
    //     creationDate: "2023-11-23T10:21:31.499+00:00",
    //     modifyDate: null,
    //     modifyUser: null,
    //     creationUser: "4b11415d8b8f28a3018b8f548cfd002d",
    //     version: 1,
    //     id: "4b11415d8befece0018bfbb2f5eb0093",
    //     title: "台北市政府",
    //     fileName: "台北市政府.png",
    //     filePic: null,
    //     path: "D:\\taide\\file2023\\wordCloud\\4b11415d8befece0018bfbb2f5eb0093",
    //     proportion: "1",
    //   },
    //   {
    //     creationDate: "2023-11-23T10:14:15.777+00:00",
    //     modifyDate: null,
    //     modifyUser: null,
    //     creationUser: "4b11415d8b8f28a3018b8f548cfd002d",
    //     version: 1,
    //     id: "4b11415d8befece0018bfbac4fe1008d",
    //     title: "公共電視台",
    //     fileName: "公共電視台.png",
    //     filePic: null,
    //     path: "D:\\taide\\file2023\\wordCloud\\4b11415d8befece0018bfbac4fe1008d",
    //     proportion: "5",
    //   },
    //   {
    //     creationDate: "2023-11-23T10:09:29.159+00:00",
    //     modifyDate: null,
    //     modifyUser: null,
    //     creationUser: "4b11415d8b8f28a3018b8f548cfd002d",
    //     version: 1,
    //     id: "4b11415d8befece0018bfba7f0470088",
    //     title: "教育部",
    //     fileName: "教育部.jpg",
    //     filePic: null,
    //     path: "D:\\taide\\file2023\\wordCloud\\4b11415d8befece0018bfba7f0470088",
    //     proportion: "2",
    //   },
    //   {
    //     creationDate: "2023-11-23T10:03:03.429+00:00",
    //     modifyDate: null,
    //     modifyUser: null,
    //     creationUser: "4b11415d8b8f28a3018b8f548cfd002d",
    //     version: 1,
    //     id: "4b11415d8befece0018bfba20d850083",
    //     title: "國家教育研究院",
    //     fileName: "國家教育研究院.png",
    //     filePic: null,
    //     path: "D:\\taide\\file2023\\wordCloud\\4b11415d8befece0018bfba20d850083",
    //     proportion: "4",
    //   },
    //   {
    //     creationDate: "2023-11-23T10:02:28.456+00:00",
    //     modifyDate: null,
    //     modifyUser: null,
    //     creationUser: "4b11415d8b8f28a3018b8f548cfd002d",
    //     version: 1,
    //     id: "4b11415d8befece0018bfba184e8007e",
    //     title: "中央社",
    //     fileName: "中央社.jpg",
    //     filePic: null,
    //     path: "D:\\taide\\file2023\\wordCloud\\4b11415d8befece0018bfba184e8007e",
    //     proportion: "3",
    //   },
    //   {
    //     creationDate: "2023-11-23T10:02:03.738+00:00",
    //     modifyDate: null,
    //     modifyUser: null,
    //     creationUser: "4b11415d8b8f28a3018b8f548cfd002d",
    //     version: 1,
    //     id: "4b11415d8befece0018bfba1245a0079",
    //     title: "三采文化",
    //     fileName: "三采文化.png",
    //     filePic: null,
    //     path: "D:\\taide\\file2023\\wordCloud\\4b11415d8befece0018bfba1245a0079",
    //     proportion: "4",
    //   },
    //   {
    //     creationDate: "2023-11-23T10:01:48.250+00:00",
    //     modifyDate: null,
    //     modifyUser: null,
    //     creationUser: "4b11415d8b8f28a3018b8f548cfd002d",
    //     version: 1,
    //     id: "4b11415d8befece0018bfba0e7da0074",
    //     title: "ETtoady新聞雲",
    //     fileName: "ETtoady新聞雲.png",
    //     filePic: null,
    //     path: "D:\\taide\\file2023\\wordCloud\\4b11415d8befece0018bfba0e7da0074",
    //     proportion: "5",
    //   },
    // ];
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
          <MasonryBlock wordCloudList={wordCloudList} />

          <h1>訓練資料</h1>
          <div className="tagList tagClick">
            {Object.keys(trainDataTypeList).map((e) => (
              <div
                className={`tagUnit secondary ${
                  searchParams.type === e && "active"
                }`}
                key={trainDataTypeList[e]}
              >
                <Link
                  href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/training-data?type=${e}`}
                  scroll={false}
                >
                  {trainDataTypeList[e]}
                </Link>
              </div>
            ))}
          </div>
          <div className="cardTrainData">
            {trainDataList.map((e) => (
              <CardItem
                id={e.id}
                supplyUnit={e.supplyUnit}
                title={e.title}
                url={e.url}
                key={e.id}
              />
            ))}
          </div>

          <Link
            href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/training-data?type=${searchParams.type}&length=16`}
            scroll={false}
            className="resourcesUnit__more jsLoadMore"
          >
            載入更多 Load More
          </Link>
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
