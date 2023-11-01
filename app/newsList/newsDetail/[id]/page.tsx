import { WithContext } from "schema-dts";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

import btnNextArrow from "~/images/icon/btn_nextArrow.svg";
import NewsResType from "../../types";
import { format } from "date-fns";
import { typeMapping } from "~/utils/common";

const SearchInput = dynamic(
  () =>
    import(/* webpackChunkName: 'SearchInput' */ "../../components/SearchInput")
);
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "最新動態 - TAIDE推動台灣可信任生成式AI發展計畫",
  description:
    "獨家深度解析TAIDE的最新發展，帶您貼近台灣AI產業的脈動。掌握核心資訊，立即了解！",
  openGraph: {
    description:
      "獨家深度解析TAIDE的最新發展，帶您貼近台灣AI產業的脈動。掌握核心資訊，立即了解！",
  },
};

const NewsList = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const jsonLd: WithContext<any> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "獨家深度解析TAIDE的最新發展，帶您貼近台灣AI產業的脈動。掌握核心資訊，立即了解！",
    additionalName:
      "獨家深度解析TAIDE的最新發展，帶您貼近台灣AI產業的脈動。掌握核心資訊，立即了解！",
    url: process.env.WEBSITE_DOMAIN,
    datePublished: "2023-03-02",
  };

  const newsDetailRes = await fetch(
    `${process.env.API_URL}/latest-updates_show?accessToken=TAIDE_!@%23qweASDzxc456RTYfgjVBN&id=${params.id}`,
    {
      method: "POST",
      cache: "no-store",
    }
  );

  const {
    title,
    issueDate,
    type,
    dataSource,
    id,
    relatedKeywordsArray = [],
    content = "",
  }: NewsResType.ItemType = await newsDetailRes.json();

  return (
    <>
      <article className="newsList">
        <div className="newsList__body">
          <h1>最新動態</h1>
          <SearchInput />
          <div className="newsDetail">
            {typeMapping[type] && (
              <div className="tagUnit secondary solid">{typeMapping[type]}</div>
            )}
            <h2>{title}</h2>
            <div className="date">
              {format(new Date(issueDate), "yyyy.MM.dd")}
            </div>
            <div className="back">
              <Link href="/newsList?keyword=">返回最新動態列表</Link>
            </div>
            {dataSource && (
              <div className="alertsUnit tertiary">
                <b>資料來源:</b>
                <br />
                {dataSource}
              </div>
            )}
            <div className="photo">
              <Image
                src={`${process.env.NEXT_PUBLIC_NEWS_IMG_URL}/${id}`}
                alt={title}
                width={500}
                height={500}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="tagRight">
              {relatedKeywordsArray.map((e) => (
                <div className="tagUnit secondary" key={e}>
                  {e}
                </div>
              ))}
            </div>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
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
              <Image src={btnNextArrow} alt="arrow" />
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

export default NewsList;
