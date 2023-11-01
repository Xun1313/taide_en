"use client";

import { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Pagination } from "swiper/modules";

const BannerSwiper = () => {
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
        <div className="swiper-slide">
          <h2>健全臺灣驗測環境</h2>
          <div className="tagUnit grey">POINT 6</div>
          <h3>產品開發驗測環境</h3>
          <div className="text">
            試行AI驗測實驗室機制，產出具公信力之檢測結果報告，驗證AI產品或服務機制，增進
            AI 產品或服務之品質與安全性。
          </div>
        </div>
        <div className="swiper-slide">
          <h2>健全臺灣驗測環境</h2>
          <div className="tagUnit grey">POINT 6</div>
          <h3>建置評測中心</h3>
          <div className="text">
            成立AI產品、系統評測中心，研發AI評測工具與建立驗測資料庫，以跨領域經驗建立獨特測試驗證專業技能，以滿足新世代智慧產品市場管理需求。
          </div>
        </div>
      </div>
      <div className="newsSwiperPagination" ref={swiperPaginationElement}></div>
    </div>
  );
};

export default BannerSwiper;
