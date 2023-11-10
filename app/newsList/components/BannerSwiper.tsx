"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Pagination, Autoplay } from "swiper/modules";
import btnNextArrow from "~/images/icon/btn_nextArrow.svg";
import { format } from "date-fns";
import NewsResType from "../types";
import { newsListTypeMapping } from "~/utils/common";

const BannerSwiper = ({
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
      modules: [Pagination, Autoplay],

      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
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
              <Link href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/newsList/newsDetail/${e.id}`}></Link>
              <Image
                src={`${process.env.NEXT_PUBLIC_NEWS_IMG_URL}/${e.id}`}
                alt={e.title}
                width={500}
                height={500}
              />
              <div className="btn">
                <Image
                  src={btnNextArrow}
                  style={{ height: "auto" }}
                  alt="arrow"
                />
              </div>
            </div>
            <div className="infoCon">
              <h3>
                <Link href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/newsList/newsDetail/${e.id}`}>{e.title}</Link>
              </h3>
              {e.issueDate && (
                <div className="tagUnit date">
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

export default BannerSwiper;
