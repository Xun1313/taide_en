"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import photo10755001 from "~/images/news/photo_1075500_1.png";
import btnNextArrow from "~/images/icon/btn_nextArrow.svg";
import Swiper from "swiper";
import { Pagination } from "swiper/modules";

const NewsListUnitSwiper = () => {
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
        <div className="swiper-slide">
          <div className="photo">
            <a href="newsDetail.html"></a>
            <Image
              src={photo10755001}
              alt="臺版AI對話引擎年底釋大模型，奠定商業版發展基礎"
            />
            <div className="btn">
              <Image src={btnNextArrow} alt="arrow" />
            </div>
          </div>
          <div className="infoCon">
            <h3>
              <a href="newsDetail.html">
                臺版AI對話引擎年底釋大模型，奠定商業版發展基礎
              </a>
            </h3>
            <div className="date">2023.06.14</div>
            <div className="tagUnit secondary">TAIDE新聞</div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="photo">
            <a href="newsDetail.html"></a>
            <Image
              src={photo10755001}
              alt="臺版AI對話引擎年底釋大模型，奠定商業版發展基礎"
            />
            <div className="btn">
              <Image src={btnNextArrow} alt="arrow" />
            </div>
          </div>
          <div className="infoCon">
            <h3>
              <a href="newsDetail.html">
                臺版AI對話引擎年底釋大模型，奠定商業版發展基礎
              </a>
            </h3>
            <div className="date">2023.06.14</div>
            <div className="tagUnit secondary">TAIDE新聞</div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="photo">
            <a href="newsDetail.html"></a>
            <Image
              src={photo10755001}
              alt="臺版AI對話引擎年底釋大模型，奠定商業版發展基礎"
            />
            <div className="btn">
              <Image src={btnNextArrow} alt="arrow" />
            </div>
          </div>
          <div className="infoCon">
            <h3>
              <a href="newsDetail.html">
                臺版AI對話引擎年底釋大模型，奠定商業版發展基礎
              </a>
            </h3>
            <div className="date">2023.06.14</div>
            <div className="tagUnit secondary">TAIDE新聞</div>
          </div>
        </div>
      </div>
      <div className="newsSwiperPagination" ref={swiperPaginationElement}></div>
    </div>
  );
};

export default NewsListUnitSwiper;
