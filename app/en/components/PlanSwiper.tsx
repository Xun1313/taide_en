"use client";
import { useEffect, useRef } from "react";

import Swiper from "swiper";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import icon_anything_1 from "~/images/en/icon_anything_1.svg";
import icon_anything_2 from "~/images/en/icon_anything_2.svg";
import icon_anything_3 from "~/images/en/icon_anything_3.svg";
import icon_anything_4 from "~/images/en/icon_anything_4.svg";
import icon_anything_5 from "~/images/en/icon_anything_5.svg";

const PlanSwiper = () => {
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
      slidesPerView: 1.5,
      spaceBetween: 15,
      autoplay: {
        delay: 2500,
        // disableOnInteraction: false,
      },
      breakpoints: {
        320: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
        960: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1366: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
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
      <article className="planList desktop">
        <h2>TAIDE CAN HELP</h2>
        <div className="swiper planSwiper planSwiper2" ref={swiperElement}>
          <div className="swiper-wrapper">
            <div className="swiper-slide slide1">
              <div className="infoCon">
                <h3>
                  <span>Automatic</span>
                  <span>Summarization</span>
                </h3>
                <div className="icon">
                  <Image
                    src={icon_anything_1}
                    style={{ height: "auto" }}
                    alt="arrow"
                  />
                </div>
              </div>
            </div>
            <div className="swiper-slide slide2">
              <div className="infoCon">
                <h3>
                  <span>Write a Letter</span>
                </h3>
                <div className="icon">
                  <Image
                    src={icon_anything_2}
                    style={{ height: "auto" }}
                    alt="arrow"
                  />
                </div>
              </div>
            </div>
            <div className="swiper-slide slide3">
              <div className="infoCon">
                <h3>
                  <span>Write an Article</span>
                </h3>
                <div className="icon">
                  <Image
                    src={icon_anything_3}
                    style={{ height: "auto" }}
                    alt="arrow"
                  />
                </div>
              </div>
            </div>
            <div className="swiper-slide slide4">
              <div className="infoCon">
                <h3>
                  <span>Chinese-to-English</span>
                  <span>Translation</span>
                </h3>
                <div className="icon">
                  <Image
                    src={icon_anything_4}
                    style={{ height: "auto" }}
                    alt="arrow"
                  />
                </div>
              </div>
            </div>
            <div className="swiper-slide slide5">
              <div className="infoCon">
                <h3>
                  <span>English-to-Chinese </span>
                  <span>Translation</span>
                </h3>
                <div className="icon">
                  <Image
                    src={icon_anything_5}
                    style={{ height: "auto" }}
                    alt="arrow"
                  />
                </div>
              </div>
            </div>
            <div className="swiper-slide slide1">
              <div className="infoCon">
                <h3>
                  <span>Automatic</span>
                  <span>Summarization</span>
                </h3>
                <div className="icon">
                  <Image
                    src={icon_anything_1}
                    style={{ height: "auto" }}
                    alt="arrow"
                  />
                </div>
              </div>
            </div>
            <div className="swiper-slide slide2">
              <div className="infoCon">
                <h3>
                  <span>Write a Letter</span>
                </h3>
                <div className="icon">
                  <Image
                    src={icon_anything_2}
                    style={{ height: "auto" }}
                    alt="arrow"
                  />
                </div>
              </div>
            </div>
            <div className="swiper-slide slide3">
              <div className="infoCon">
                <h3>
                  <span>Write an Article</span>
                </h3>
                <div className="icon">
                  <Image
                    src={icon_anything_3}
                    style={{ height: "auto" }}
                    alt="arrow"
                  />
                </div>
              </div>
            </div>
            <div className="swiper-slide slide4">
              <div className="infoCon">
                <h3>
                  <span>Chinese-to-English</span>
                  <span>Translation</span>
                </h3>
                <div className="icon">
                  <Image
                    src={icon_anything_4}
                    style={{ height: "auto" }}
                    alt="arrow"
                  />
                </div>
              </div>
            </div>
            <div className="swiper-slide slide5">
              <div className="infoCon">
                <h3>
                  <span>English-to-Chinese </span>
                  <span>Translation</span>
                </h3>
                <div className="icon">
                  <Image
                    src={icon_anything_5}
                    style={{ height: "auto" }}
                    alt="arrow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article className="planList mobile">
        <h2>TAIDE CAN HELP</h2>
        <div className="swiper planSwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide slide1">
              <div className="infoCon">
                <h3>
                  <span>Automatic</span>
                  <span>Summarization</span>
                </h3>
                <div className="icon">
                  <Image
                    src={icon_anything_1}
                    style={{ height: "auto" }}
                    alt="arrow"
                  />
                </div>
              </div>
            </div>
            <div className="swiper-slide slide2">
              <div className="infoCon">
                <h3>
                  <span>Write a Letter</span>
                </h3>
                <div className="icon">
                  <Image
                    src={icon_anything_1}
                    style={{ height: "auto" }}
                    alt="arrow"
                  />
                </div>
              </div>
            </div>
            <div className="swiper-slide slide3">
              <div className="infoCon">
                <h3>
                  <span>Write an Article</span>
                </h3>
                <div className="icon">
                  <Image
                    src={icon_anything_1}
                    style={{ height: "auto" }}
                    alt="arrow"
                  />
                </div>
              </div>
            </div>
            <div className="swiper-slide slide4">
              <div className="infoCon">
                <h3>
                  <span>Chinese-to-English</span>
                  <span>Translation</span>
                </h3>
                <div className="icon">
                  <Image
                    src={icon_anything_1}
                    style={{ height: "auto" }}
                    alt="arrow"
                  />
                </div>
              </div>
            </div>
            <div className="swiper-slide slide5">
              <div className="infoCon">
                <h3>
                  <span>English-to-Chinese </span>
                  <span>Translation</span>
                </h3>
                <div className="icon">
                  <Image
                    src={icon_anything_1}
                    style={{ height: "auto" }}
                    alt="arrow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default PlanSwiper;
