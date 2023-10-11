"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import btnNextArrow from "~/images/icon/btn_nextArrow.svg";
import Swiper from "swiper";

const PlanList = () => {
  // (async function () {
  //   const res = await fetch(
  //     `${process.env.NEXT_PUBLIC_API_URL}/public/api/latest-updates?accessToken=TAIDE_!@%23qweASDzxc456RTYfgjVBN`,
  //     {
  //       method: "POST",
  //       body: JSON.stringify({
  //         accessToken: "TAIDE_!@#qweASDzxc456RTYfgjVBN",
  //         frontSearchAll: "搜尋的關鍵字",
  //         length: 1,
  //         start: 1,
  //       }),
  //       cache: "no-store",
  //     }
  //   );
  //   console.log(res);
  // })()
  const swiperElement = useRef<HTMLDivElement>(null);
  interface swiperInterface {
    destroy: Function;
  }
  const swiperObj = useRef<swiperInterface>({
    destroy: () => {},
  });
  useEffect(() => {
    swiperObj.current = new Swiper(swiperElement.current as HTMLDivElement, {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 15,
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        960: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1366: {
          slidesPerView: 3.2,
          spaceBetween: 15,
        },
      },
    });

    return () => swiperObj.current.destroy();
  }, []);

  return (
    <article className="planList">
      <h2>TAIDE整體計畫目的如下</h2>
      <div className="swiper planSwiper" ref={swiperElement}>
        <div className="swiper-wrapper">
          <div className="swiper-slide slide1">
            <div className="infoCon">
              <h3>
                <span>打造臺灣本土可信任</span>
                <span>生成式AI對話引擎基礎模型</span>
              </h3>
              <div className="text">
                讓政府或業者後續可依照需求選擇適用的模型大小及衡量算力，自行訓練模型或建構內部應用之模型。
              </div>
              <div className="btn">
                <a href="trainData.html">
                  <span>創新應用</span>
                  <Image src={btnNextArrow} alt="arrow" />
                </a>
              </div>
            </div>
          </div>
          <div className="swiper-slide slide2">
            <div className="infoCon">
              <h3>
                <span>導入不同主題領域</span>
                <span>可用文本與訓練素材</span>
              </h3>
              <div className="text">
                提高模型在正體中文回應的能力及特定任務的表現。
              </div>
              <div className="btn">
                <a href="aboutStage.html#stage">
                  <span>創新應用</span>
                  <Image src={btnNextArrow} alt="arrow" />
                </a>
              </div>
            </div>
          </div>
          <div className="swiper-slide slide3">
            <div className="infoCon">
              <h3>
                <span>建構運算環境</span>
                <span>及應用服務平台</span>
              </h3>
              <div className="text">
                提供模型發展所需算力，並奠定後續推廣應用基礎。
              </div>
              <div className="btn">
                <a href="resourcesList.html">
                  <span>創新應用</span>
                  <Image src={btnNextArrow} alt="arrow" />
                </a>
              </div>
            </div>
          </div>
          <div className="swiper-slide slide4">
            <div className="infoCon">
              <h3>
                <span>透過法制研析、驗測規範及</span>
                <span>評測工具之發展</span>
              </h3>
              <div className="text">健全AI的發展環境與提升民眾的信任度。</div>
              <div className="btn">
                <a href="aboutExpected.html#expected">
                  <span>創新應用</span>
                  <Image src={btnNextArrow} alt="arrow" />
                </a>
              </div>
            </div>
          </div>
          <div className="swiper-slide slide1">
            <div className="infoCon">
              <h3>
                <span>打造臺灣本土可信任</span>
                <span>生成式AI對話引擎基礎模型</span>
              </h3>
              <div className="text">
                讓政府或業者後續可依照需求選擇適用的模型大小及衡量算力，自行訓練模型或建構內部應用之模型。
              </div>
              <div className="btn">
                <a href="trainData.html">
                  <span>創新應用</span>
                  <Image src={btnNextArrow} alt="arrow" />
                </a>
              </div>
            </div>
          </div>
          <div className="swiper-slide slide2">
            <div className="infoCon">
              <h3>
                <span>導入不同主題領域</span>
                <span>可用文本與訓練素材</span>
              </h3>
              <div className="text">
                提高模型在正體中文回應的能力及特定任務的表現。
              </div>
              <div className="btn">
                <a href="aboutStage.html#stage">
                  <span>創新應用</span>
                  <Image src={btnNextArrow} alt="arrow" />
                </a>
              </div>
            </div>
          </div>
          <div className="swiper-slide slide3">
            <div className="infoCon">
              <h3>
                <span>建構運算環境</span>
                <span>及應用服務平台</span>
              </h3>
              <div className="text">
                提供模型發展所需算力，並奠定後續推廣應用基礎。
              </div>
              <div className="btn">
                <a href="resourcesList.html">
                  <span>創新應用</span>
                  <Image src={btnNextArrow} alt="arrow" />
                </a>
              </div>
            </div>
          </div>
          <div className="swiper-slide slide4">
            <div className="infoCon">
              <h3>
                <span>透過法制研析、驗測規範及</span>
                <span>評測工具之發展</span>
              </h3>
              <div className="text">健全AI的發展環境與提升民眾的信任度。</div>
              <div className="btn">
                <a href="aboutExpected.html#expected">
                  <span>創新應用</span>
                  <Image src={btnNextArrow} alt="arrow" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PlanList;
