"use client";

import { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Pagination, Autoplay } from "swiper/modules";
import ScrollArrow from "~/components/ScrollArrow";

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
      modules: [Pagination, Autoplay],
      loop: true,
      autoplay: {
        delay: 2500,
        // disableOnInteraction: false,
      },
      pagination: {
        el: swiperPaginationElement.current,
        clickable: true,
      },
    });

    return () => {
      swiperObj.current.destroy();
    };
  }, []);

  return (
    <>
      <h2>TAIDE計畫目的</h2>
      <div className="swiper bannerSwiper" ref={swiperElement}>
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <h3>
              本計畫將投入適合<b>我國語言、文化特性</b>之生成式 AI
              對話引擎模型之開發與可信任 AI 環境建構，整合多項技術服務。
            </h3>
          </div>
          <div className="swiper-slide">
            <h3>
              包括
              <br />
              <b>(1)資料取得與標註</b>
              <br />
              <b>(2)核心模型訓練與RLHF</b>
              <br />
              <b>(3)高速運算資源與技術支援</b>
              <br />
              <b>(4)應用服務平台與管理</b>
              <br />
              <b>(5)國際觀測與規範研擬</b>
              <br />
              <b>(6)評測系統與驗測環境</b>
              <br />
              並結合產學研能量，推動可信任生成式 AI 發展。
            </h3>
          </div>
          <div className="swiper-slide">
            <h3>
              以增進臺灣在<b>國際間的競爭力</b>
              、促進產業發展，並避免依賴外國技術。 此外，隨著 AI
              應用日益普及，企業與民眾期望與需求日漸增長，同時對於 AI
              的效能、安全性與穩健性、公平性與透明性等需求也越來越迫切。
            </h3>
          </div>
          <div className="swiper-slide">
            <h3>
              國際組織及歐美國家正積極研議建立可信任 AI
              之規範與標準，以及發展評測方法與建構 AI
              評測環境，我國產業極需接軌國際之標準規範與環境，
              <b>確保臺灣的 AI 科技可為全球夥伴信任</b>。
            </h3>
          </div>
          <div className="swiper-slide">
            <h3>
              除協助 AI 法制化規劃外，亦將成立 <b>AI 產品與系統評測中心</b>
              ，並評估生成式 AI 對話引擎模型發展之語言模型先期應用，逐步建立 AI
              應用之規範制度與驗測環境。
            </h3>
          </div>
        </div>
        <div
          className="bannerSwiperPagination"
          ref={swiperPaginationElement}
        ></div>
      </div>
      <ScrollArrow title="整體計畫目的" target="planList" />
    </>
  );
};

export default BannerSwiper;
