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
            <h2>產業創新與客製應用</h2>
            <div className="tagUnit grey">POINT 1</div>
            <h3>客製化應用發展</h3>
            <div className="text">
              高品質的訓練數據，滿足特定領域生成式AI需求，成為客製化AI的基礎。
            </div>
          </div>
          <div className="swiper-slide">
            <h2>產業創新與客製應用</h2>
            <div className="tagUnit grey">POINT 1</div>
            <h3>產業技術交流</h3>
            <div className="text">
              辦理產業與相關技術交流研討活動，提供本土企業於生成式AI之產業布局與領域整合參考，促進產業創新與發展。
            </div>
          </div>
          <div className="swiper-slide">
            <h2>產業創新與客製應用</h2>
            <div className="tagUnit grey">POINT 1</div>
            <h3>提升繁體中文表現</h3>
            <div className="text">
              利用可信數據提升繁體中文生成式AI，整合大量互聯網文本和本土資源，奠定臺灣自主生成式AI基礎，支持民間自行訓練。
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
