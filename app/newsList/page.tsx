import { WithContext } from "schema-dts";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import btnPrevArrow from "~/images/icon/btn_prevArrow.svg";
import btnNextArrow from "~/images/icon/btn_nextArrow.svg";
import iconExclamation from "~/images/icon/icon_exclamation.svg";
import NewsResType from "./types";

const SearchInput = dynamic(
  () => import(/* webpackChunkName: 'SearchInput' */ "./components/SearchInput")
);
import BannerSwiper from "./components/BannerSwiper";
import CardItem from "./components/CardItem";
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
  searchParams,
}: {
  searchParams: NewsResType.QueryType;
}) => {
  const newsTypeList: string[] = [
    "TAIDE",
    "Google Deepmind",
    "國科會",
    "LLM",
    "生成式AI",
    "人工智慧",
    "機器學習",
  ];
  const jsonLd: WithContext<any> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "獨家深度解析TAIDE的最新發展，帶您貼近台灣AI產業的脈動。掌握核心資訊，立即了解！",
    additionalName:
      "獨家深度解析TAIDE的最新發展，帶您貼近台灣AI產業的脈動。掌握核心資訊，立即了解！",
    url: process.env.WEBSITE_DOMAIN,
    datePublished: "2023-03-02",
  };
  const length = 9;
  const keyword = searchParams.keyword || "";

  const newsListRes = await fetch(
    `${
      process.env.API_URL
    }/latest-updates?accessToken=TAIDE_!@%23qweASDzxc456RTYfgjVBN&frontSearchAll=${keyword}&length=${length}&start=${
      searchParams.page ? (Number(searchParams.page) - 1) * length : 0
    }`,
    {
      method: "POST",
      cache: "no-store",
    }
  );

  let {
    issuePlanList,
    pageNo,
    totalPages,
    firstLink,
  }: NewsResType.NewsListType = await newsListRes.json();
  console.log(issuePlanList.length);
  console.log("------------------");

  const RenderPage = () => {
    if (issuePlanList.length > 0) {
      // 有資料才顯示
      if (pageNo > 1) {
        // 當前頁數大於1
        return (
          <div className="card">
            {issuePlanList.map((e) => (
              <CardItem
                title={e.title}
                issueDate={e.issueDate}
                id={e.id}
                type={e.type}
                key={e.id}
              />
            ))}
          </div>
        );
      } else {
        // 當前頁數等於1
        return (
          <div className="card">
            <div className="card__item max">
              <BannerSwiper bannerList={issuePlanList.slice(0, 2)} />
            </div>
            {issuePlanList.slice(2).map((e) => (
              <CardItem
                title={e.title}
                issueDate={e.issueDate}
                id={e.id}
                type={e.type}
                key={e.id}
              />
            ))}
          </div>
        );
      }
    } else {
      // 無資料
      return (
        <div className="searchNoResults">
          <h2>
            <Image src={iconExclamation} alt="exclamation" />
            無相關搜尋結果
          </h2>
          <div className="back">
            <Link href="/newsList?keyword=">返回最新動態列表</Link>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <article className="newsList">
        <div className="newsList__body">
          <h1>最新動態</h1>
          <div className="tagList tagClick">
            {newsTypeList.map((e) => (
              <div
                className={`tagUnit secondary ${
                  searchParams.keyword === e && "active"
                }`}
                key={e}
              >
                <Link href={`/newsList?keyword=${e}`}>{e}</Link>
              </div>
            ))}
          </div>
          <SearchInput keyword={searchParams.keyword} />
          <RenderPage />
          {pageNo > 1 && (
            <div className="pageUnit">
              <ol>
                <li className="prev">
                  {pageNo === 1 ? (
                    <span>
                      <Image src={btnPrevArrow} alt="prev" />
                    </span>
                  ) : (
                    <Link
                      href={`/newsList?page=${pageNo - 1}&keyword=${keyword}`}
                    >
                      <Image src={btnPrevArrow} alt="prev" />
                    </Link>
                  )}
                </li>
                <li className="pageUnit__bd">
                  {[...Array(totalPages)].map((e, i) => (
                    <Link
                      href={`/newsList?page=${i + 1}&keyword=${keyword}`}
                      className={i + 1 === pageNo ? "active" : ""}
                      key={i}
                    >
                      {i + 1}
                    </Link>
                  ))}
                </li>
                <li className="next">
                  {pageNo === totalPages ? (
                    <span>
                      <Image src={btnNextArrow} alt="next" />
                    </span>
                  ) : (
                    <Link
                      href={`/newsList?page=${pageNo + 1}&keyword=${keyword}`}
                    >
                      <Image src={btnNextArrow} alt="next" />
                    </Link>
                  )}
                </li>
              </ol>
            </div>
          )}
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

export default NewsList;
