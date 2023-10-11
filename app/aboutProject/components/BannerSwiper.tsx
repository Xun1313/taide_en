"use client";

import { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Pagination } from "swiper/modules";
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

    return () => {
      swiperObj.current.destroy();
    };
  }, []);

  return (
    <>
      <div className="swiper newsSwiper" ref={swiperElement}>
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <h2>萬物皆資訊，TAIDE 不缺席</h2>
            <div className="text">
              生成式 AI
              除了演算法的不斷精進、高速運算資源的擴充，還仰賴了網路上大量可公開的資訊，包括各種新聞、社交媒體用戶發布的文章、百科全書、辭典、教材、政府機關的公告文件等等，凡能數位化並公開上網的大量文本都可作為訓練資料。
            </div>
          </div>
          <div className="swiper-slide">
            <h2>萬物皆資訊，TAIDE 不缺席</h2>
            <div className="text">
              因此，在建立可信任的生成式 AI
              對話引擎基礎模型時，必須考慮本土化的需求，並專注於正體中文，選擇適合本土語言的語料庫、進行本土文化的語義理解、定制本土化的應用服務，尋找適合建立臺灣可信任的生成式
              AI 之大型語料庫，確保語料庫的質量與適用性。
            </div>
          </div>
        </div>
        <div
          className="newsSwiperPagination"
          ref={swiperPaginationElement}
        ></div>
      </div>
      <ScrollArrow />
    </>
  );
};

export default BannerSwiper;
