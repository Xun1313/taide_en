"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import btnNextArrow from "~/images/icon/btn_nextArrow.svg";
import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import NewsResType from "~/newsList/types";
import { format } from "date-fns";
import { newsListTypeMapping } from "~/utils/common";

const NewsListUnitSwiper = ({
  bannerList,
}: {
  bannerList: NewsResType.IssuePlanListType;
}) => {
  const swiperElement = useRef<HTMLDivElement>(null);
  const swiperPaginationElement = useRef<HTMLDivElement>(null);
  interface swiperInterface {
    destroy: Function;
  }
  const swiperObj = useRef<swiperInterface>({
    destroy: () => {},
  });
  useEffect(() => {
    swiperObj.current = new Swiper(swiperElement.current as HTMLDivElement, {
      modules: [Pagination],
      loop: true,
      pagination: {
        el: swiperPaginationElement.current,
        clickable: true,
      },
    });

    return () => swiperObj.current.destroy();
  }, []);

  return (
    <div className="swiper newsSwiper" ref={swiperElement}>
      <div className="swiper-wrapper">
        {bannerList.map((e) => (
          <div className="swiper-slide" key={e.id}>
            <div className="photo">
              <Link href={`/newsList/newsDetail/${e.id}`}></Link>
              <Image
                src={`${process.env.NEXT_PUBLIC_NEWS_IMG_URL}/${e.id}`}
                alt={e.title}
                width={500}
                height={500}
              />
              <div className="btn">
                <Image src={btnNextArrow} alt="arrow" />
              </div>
            </div>
            <div className="infoCon">
              <h3>
                <Link href={`/newsList/newsDetail/${e.id}`}>{e.title}</Link>
              </h3>
              {e.issueDate && (
                <div className="date">
                  {format(new Date(e.issueDate), "yyyy.MM.dd")}
                </div>
              )}
              {newsListTypeMapping[e.type] && (
                <div className="tagUnit secondary">{newsListTypeMapping[e.type]}</div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="newsSwiperPagination" ref={swiperPaginationElement}></div>
    </div>
  );
};

export default NewsListUnitSwiper;
