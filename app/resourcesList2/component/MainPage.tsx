"use client";
import Image from "next/image";
import Link from "next/link";
import btnNextArrow from "~/images/icon/btn_nextArrow.svg";
import photo_500500_2 from "~/images/resources/photo_500500_2.png";
import { useEffect, useRef } from "react";
const MainPage = () => {
  const lbb = useRef<HTMLDivElement>(null);
  const lbYtEmbed = useRef<HTMLDivElement>(null);

  const killLightBox = () => {
    if (lbYtEmbed.current) {
      lbYtEmbed.current.innerHTML = "";
    }
    if (lbb.current) {
      lbb.current.style.opacity = "0";
    }
    setTimeout(function () {
      if (lbb.current) {
        lbb.current.style.top = "100%";
      }
    }, 200);
  };

  useEffect(() => {
    const lbbCurrentCopy = lbb.current;
    $(document).ready(function () {
      const youtubeEmbedUrl = "https://www.youtube.com/embed/";
      var video_buttons = Array.from(
        document.getElementsByClassName("youtube-button")
      );
      video_buttons.forEach(function (video_button) {
        const button = video_button as HTMLButtonElement;
        button.onclick = function () {
          if (lbYtEmbed.current) {
            lbYtEmbed.current.innerHTML = createYtEmbed(
              button.dataset.youtube_id || ""
            );
          }
          if (lbb.current) {
            lbb.current.style.top = "0";
            lbb.current.style.opacity = "1";
          }
        };
      });

      function createYtEmbed(youtube_id: string) {
        return (
          `<iframe style="display:block;border-radius:2px;" width="100%" height="` +
          Math.round(
            lbYtEmbed.current ? lbYtEmbed.current.offsetWidth * 0.5625 : 0
          ) +
          `" src="` +
          youtubeEmbedUrl +
          youtube_id +
          `?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        );
      }

      if (lbb.current) {
        lbb.current.addEventListener("click", killLightBox);
      }
    });

    return () => {
      $(document).ready(function () {
        if (lbbCurrentCopy) {
          lbbCurrentCopy.removeEventListener("click", killLightBox);
        }
      });
    };
  }, []);

  return (
    <>
      <article className="resourcesTop">
        <div className="resourcesTop__body">
          <h1>學習資源</h1>
          <div className="tagList">
            <div className="tagUnit secondary">
              <Link
                href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/resourcesList`}
              >
                李宏毅
              </Link>
            </div>
            <div className="tagUnit secondary active">
              <Link
                href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/resourcesList2`}
              >
                蔡宗翰
              </Link>
            </div>
          </div>
          <div className="card resources">
            <div className="card__item max">
              <div className="youtube-button" data-youtube_id="Rfjfg5vSWzs">
                <div className="photo">
                  <Image
                    src="https://img.youtube.com/vi/Rfjfg5vSWzs/maxresdefault.jpg"
                    width="500"
                    height="300"
                    alt="AI科技的快速發展，如何培養文理兼具的未來人才！"
                  />
                </div>
                <div className="infoCon">
                  <h3>AI科技的快速發展，如何培養文理兼具的未來人才！</h3>
                  <div className="tagUnit secondary">人工智慧</div>
                  <div className="btn">
                    <Image
                      src={btnNextArrow}
                      style={{ height: "auto" }}
                      alt="arrow"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="card__item">
              <div className="photo">
                <a
                  href="https://www.iisr.csie.ncu.edu.tw/faculty"
                  target="_blank"
                ></a>
                <Image src={photo_500500_2} alt="蔡宗翰 Tsai, Tzong-Han" />
                <div className="btn">
                  <Image
                    src={btnNextArrow}
                    style={{ height: "auto" }}
                    alt="arrow"
                  />
                </div>
              </div>
              <div className="infoCon">
                <h4>
                  <span>蔡宗翰</span>
                  <span>Tsai, Tzong-Han</span>
                </h4>
                <div className="text">
                  <span>國立台灣大學資訊工程所 博士</span>
                  <span>
                    主要研究領域:
                    自然語言處理、對話系統、深度學習、生醫文本探勘、文本情緒分析、跨語言處理、數位人文。
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className="resourcesUnit ai">
        <div className="resourcesUnit__body">
          <div className="resourcesUnit__hd">
            <h2>AI 人工智慧</h2>
            <div className="tagUnit secondary">人工智慧</div>
          </div>
          <div className="cardResources">
            <div
              className="cardResources__item youtube-button"
              data-youtube_id="Rfjfg5vSWzs"
            >
              <div className="photo">
                <Image
                  src="https://img.youtube.com/vi/Rfjfg5vSWzs/hqdefault.jpg"
                  width="500"
                  height="300"
                  alt="AI科技的快速發展，如何培養文理兼具的未來人才！"
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
                <h3>AI科技的快速發展，如何培養文理兼具的未來人才！</h3>
              </div>
            </div>
            <div
              className="cardResources__item youtube-button"
              data-youtube_id="CRQMnpXroKY"
            >
              <div className="photo">
                <Image
                  src="https://img.youtube.com/vi/CRQMnpXroKY/hqdefault.jpg"
                  width="500"
                  height="300"
                  alt="AI時代需要怎麼樣的人才？AI如何學習？三大學習模式報你知"
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
                <h3>AI時代需要怎麼樣的人才？AI如何學習？三大學習模式報你知</h3>
              </div>
            </div>
            <div
              className="cardResources__item youtube-button"
              data-youtube_id="yQRUS-RxMdE"
            >
              <div className="photo">
                <Image
                  src="https://img.youtube.com/vi/yQRUS-RxMdE/hqdefault.jpg"
                  width="500"
                  height="300"
                  alt="給高中生的第一堂 AI 課"
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
                <h3>給高中生的第一堂 AI 課</h3>
              </div>
            </div>
          </div>
        </div>
      </article>

      <div
        id="lbb"
        className="lbb"
        style={{
          top: "100%",
        }}
        ref={lbb}
      >
        <div className="lb-ext">
          <div className="lb-int">
            <div className="lb-info">
              <div className="lb-info-block">
                <div
                  id="lb-info-yt-embed"
                  className="lb-info-yt-embed"
                  ref={lbYtEmbed}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
