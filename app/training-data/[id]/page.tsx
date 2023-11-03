import { WithContext } from "schema-dts";

import Image from "next/image";
import Link from "next/link";
import btnPrevArrow from "~/images/icon/btn_prevArrow.svg";
import btnDownArrow from "~/images/icon/btn_downArrow.svg";
import TrainDataResType from "../types";
import {
  trainDataTypeMapping,
  authorizeMethodMapping,
  formatMapping,
} from "~/utils/common";

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

const TrainingDataDetail = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const jsonLd: WithContext<any> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "深入解析TAIDE的條款與許可協議，確保您在AI領域的安全應用。不可忽視的關鍵事項，立即掌握！",
    additionalName:
      "深入解析TAIDE的條款與許可協議，確保您在AI領域的安全應用。不可忽視的關鍵事項，立即掌握！",
    url: process.env.WEBSITE_DOMAIN,
    datePublished: "2023-03-02",
  };
  const trainDataDetailRes = await fetch(
    `${process.env.API_URL}/trainData_show?accessToken=TAIDE_7ujm*IK9LP*UIOPJKL@wsx!qaz&id=${params.id}`,
    {
      method: "POST",
      cache: "no-store",
    }
  );
  const {
    id,
    title,
    type,
    supplyUnit,
    language,
    format,
    authorizeMethod,
    authorizeUrl,
    summary,
    dataDate,
    dataNum,
    dataSize,
    unitIntroduce,
    exampleData,
    fileItemList,
  }: TrainDataResType.ItemType = await trainDataDetailRes.json();

  return (
    <>
      <article className="trainDataDetail">
        <div className="trainDataDetail__body">
          <h1>訓練資料</h1>
          <div className="trainDataDetail__wrap">
            {trainDataTypeMapping[type] && (
              <div className="tagUnit secondary solid">{trainDataTypeMapping[type]}</div>
            )}
            <h2>
              <span>{title}</span>
            </h2>
            <div className="trainDataDetail__item">
              <div className="btn">
                <Link href="/training-data">
                  <Image src={btnPrevArrow} style={{ height: "auto" }} alt="arrow" />
                  <span>返回訓練資料列表</span>
                </Link>
              </div>
              <div className="row">
                <div className="item">
                  <p>
                    <b>原始資料：</b>
                    <br />
                    資料擁有單位：{supplyUnit}
                    <br />
                    語言：{language}
                    <br />
                    格式： {formatMapping[format]}
                    <br />
                    授權方式：{authorizeMethodMapping[authorizeMethod]}
                    <br />
                    授權條款連結：
                    <a
                      href={authorizeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {authorizeUrl}
                    </a>
                    <br />
                    資料時間：{dataDate}
                    <br />
                  </p>
                  <p>
                    <b>TAIDE訓練資料描述：</b>
                    <br />
                    資料筆數：{dataNum.toLocaleString()}筆
                    <br />
                    大小： {dataSize}MB
                    <br />
                    {fileItemList.length > 0 && "下載："}
                    {fileItemList.map((e) => (
                      <span key={e.id}>
                        <a
                          href={`${process.env.WEBSITE_DOMAIN}/fileItem/download?id=${e.id}`}
                          download
                        >
                          {e.fileName}
                        </a>
                        <br />
                      </span>
                    ))}
                  </p>
                  <p>{summary}</p>
                </div>
                <div className="item radius">
                  <Image
                    src={`${process.env.TRAIN_DATA_IMG_URL}/${id}`}
                    alt={title}
                    width={500}
                    height={500}
                    style={{ height: "auto" }}
                  />
                </div>
              </div>
            </div>
            <div className="trainDataDetail__msg">
              <h3>單位簡介：</h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: unitIntroduce,
                }}
              ></p>
            </div>
            <div className="trainDataDetail__con">
              <h3>範例資料</h3>
              <div
                className="row"
                dangerouslySetInnerHTML={{
                  __html: exampleData,
                }}
              ></div>
              {/* <div className="row">
                <div className="item">
                  <div>
                    <p>主類別：里仁為美</p>
                    <p>次類別：環境保護</p>
                    <p>標題：燒蠟燭</p>
                  </div>
                </div>
                <div className="item radius">
                  <h4>現象及其衍生問題</h4>
                  <p>
                    燒蠟燭是一種儀式活動，除了在人生的重要節慶如生日、婚禮點上蠟燭外，大多數是到廟裡，或是在家中的神桌前燒蠟燭。燒蠟燭在臺灣的宗教儀式中，不僅出現於佛道寺廟中，有些家庭也在特定日子如初一、十五或清明時節，在神桌、祖先牌位或是墳前點上蠟燭，既代表恭迎神靈降臨，也表達為自己或祖先祈求光明之意。許多廟宇也可發現歷史悠久的燭臺，供民眾燒蠟燭用。一般而言，燒蠟燭代表光明、求福、延壽，也具有破除迷惘、驅趕黑暗的意涵。
                  </p>
                </div>
              </div> */}
            </div>
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
              <Image src={btnDownArrow} style={{ height: "auto" }} alt="arrow" />
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

export default TrainingDataDetail;
