"use client";
import Image from "next/image";
import btnNextArrow from "~/images/icon/btn_nextArrow.svg";
import btnDownArrow from "~/images/icon/btn_downArrow.svg";
import photo_500500_1 from "~/images/resources/photo_500500_1.png";
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

      $(".jsToAI").click(function () {
        var headerH = $(".header").height() as number;
        const target: {
          offset: Function;
        } = $(".resourcesUnit.ai");
        $("html, body").animate(
          {
            scrollTop: target.offset().top - headerH - 40,
          },
          600
        );
      });
      $(".jsToMachine").click(function () {
        var headerH = $(".header").height() as number;
        const target: {
          offset: Function;
        } = $(".resourcesUnit.machine");
        $("html, body").animate(
          {
            scrollTop: target.offset().top - headerH - 40,
          },
          600
        );
      });
      $(".jsToDeep").click(function () {
        var headerH = $(".header").height() as number;
        const target: {
          offset: Function;
        } = $(".resourcesUnit.deep");
        $("html, body").animate(
          {
            scrollTop: target.offset().top - headerH - 40,
          },
          600
        );
      });

      $(".jsOpenResult").click(function () {
        $(this).next().addClass("open");
        $(this).remove();
        // setTimeout(function () {
        // }, 2000);
      });
    });

    return () => {
      $(document).ready(function () {
        if (lbbCurrentCopy) {
          lbbCurrentCopy.removeEventListener("click", killLightBox);
        }
        $(".jsToAI").off("click");
        $(".jsToMachine").off("click");
        $(".jsToDeep").off("click");
        $(".jsOpenResult").off("click");
      });
    };
  }, []);

  return (
    <>
      <article className="resourcesTop">
        <div className="resourcesTop__body">
          <h1>學習資源</h1>
          <div className="tagList">
            <div className="tagUnit secondary jsToAI">
              <a
                style={{
                  cursor: "pointer",
                }}
              >
                生成式 AI
              </a>
            </div>
            <div className="tagUnit secondary jsToMachine">
              <a
                style={{
                  cursor: "pointer",
                }}
              >
                Machine Learning
              </a>
            </div>
            <div className="tagUnit secondary jsToDeep">
              <a
                style={{
                  cursor: "pointer",
                }}
              >
                Deep Learning
              </a>
            </div>
          </div>
          <div className="card resources">
            <div className="card__item max">
              <div className="youtube-button" data-youtube_id="A-6c584jxX8">
                <div className="photo">
                  <Image
                    src="https://img.youtube.com/vi/A-6c584jxX8/hqdefault.jpg"
                    width="500"
                    height="300"
                    alt="ChatGPT 原理剖析 (3/3) — ChatGPT 所帶來的研究問題"
                  />
                </div>
                <div className="infoCon">
                  <h3>用 ChatGPT 和 Midjourney來玩文字冒險遊戲</h3>
                  <div className="tagUnit secondary">生成式 AI</div>
                  <div className="btn">
                    <Image src={btnNextArrow} style={{ height: "auto" }} alt="arrow" />
                  </div>
                </div>
              </div>
            </div>
            <div className="card__item">
              <div className="photo">
                <a
                  href="http://speech.ee.ntu.edu.tw/~tlkagk/index.html"
                  target="_blank"
                ></a>
                <Image src={photo_500500_1} alt="李宏毅 Lee, Hung-Y" />
                <div className="btn">
                  <Image src={btnNextArrow} style={{ height: "auto" }} alt="arrow" />
                </div>
              </div>
              <div className="infoCon">
                <h4>
                  <span>李宏毅</span>
                  <span>Lee, Hung-Yi</span>
                </h4>
                <div className="text">
                  <span>國立臺灣大學電機工程學系 副教授</span>
                  <span>
                    主要研究領域: 機器學習、深度學習、語意理解、語音辨識。
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="courseUnit">
            <div className="row">
              <div className="cardCourse">
                <div className="cardCourse__item max">
                  <h3>
                    【台大電機系計算機訓練班】x【一日駕馭大型語言模型】課程
                  </h3>
                  <div className="text">
                    該次課程以「大型語言模型
                    (LLM)」為主題，讓你一天之內能掌握這項前沿技術的精髓！不論你是否有程式設計經驗，都將輕鬆入門，快速掌握實用技巧！
                  </div>
                </div>
                <div className="cardCourse__item">
                  <h4>課程投影片.zip</h4>
                  <div className="btn">
                    <a
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      <span>Download</span>
                      <Image src={btnDownArrow} style={{ height: "auto" }} alt="arrow" />
                    </a>
                  </div>
                </div>
                <div className="cardCourse__item">
                  <h4>課程模型.zip</h4>
                  <div className="btn">
                    <a
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      <span>Download</span>
                      <Image src={btnDownArrow} style={{ height: "auto" }} alt="arrow" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className="resourcesUnit ai">
        <div className="resourcesUnit__body">
          <div className="resourcesUnit__hd">
            <h2>機器學習 2023</h2>
            <div className="tagUnit secondary">生成式 AI</div>
          </div>
          <div className="cardResources">
            <div
              className="cardResources__item youtube-button"
              data-youtube_id="yiY4nPOzJEg"
            >
              <div className="photo">
                <Image
                  src="https://img.youtube.com/vi/yiY4nPOzJEg/hqdefault.jpg"
                  width="500"
                  height="300"
                  alt="ChatGPT 原理剖析 (1/3) — 對 ChatGPT 的常見誤解"
                />
                <div className="btn">
                  <Image src={btnNextArrow} style={{ height: "auto" }} alt="arrow" />
                </div>
              </div>
              <div className="infoCon">
                <h3>ChatGPT 原理剖析 (1/3) — 對 ChatGPT 的常見誤解</h3>
              </div>
            </div>
            <div
              className="cardResources__item youtube-button"
              data-youtube_id="UsaZhQ9bY2k"
            >
              <div className="photo">
                <Image
                  src="https://img.youtube.com/vi/UsaZhQ9bY2k/hqdefault.jpg"
                  width="500"
                  height="300"
                  alt="ChatGPT 原理剖析 (3/3) — ChatGPT 所帶來的研究問題"
                />
                <div className="btn">
                  <Image src={btnNextArrow} style={{ height: "auto" }} alt="arrow" />
                </div>
              </div>
              <div className="infoCon">
                <h3>ChatGPT 原理剖析 (3/3) — ChatGPT 所帶來的研究問題</h3>
              </div>
            </div>
            <div
              className="cardResources__item youtube-button"
              data-youtube_id="A-6c584jxX8"
            >
              <div className="photo">
                <Image
                  src="https://img.youtube.com/vi/A-6c584jxX8/hqdefault.jpg"
                  width="500"
                  height="300"
                  alt="用 ChatGPT 和 Midjourney 來玩文字冒險遊戲"
                />
                <div className="btn">
                  <Image src={btnNextArrow} style={{ height: "auto" }} alt="arrow" />
                </div>
              </div>
              <div className="infoCon">
                <h3>用 ChatGPT 和 Midjourney 來玩文字冒險遊戲</h3>
              </div>
            </div>
          </div>
          <a
            className="resourcesUnit__more jsOpenResult"
            style={{
              cursor: "pointer",
            }}
          >
            看更多生成式 AI
          </a>
          <div className="resultUnit">
            <div className="cardResources">
              <div
                className="cardResources__item youtube-button"
                data-youtube_id="yiY4nPOzJEg"
              >
                <div className="photo">
                  <Image
                    src="https://img.youtube.com/vi/yiY4nPOzJEg/hqdefault.jpg"
                    width="500"
                    height="300"
                    alt="ChatGPT 原理剖析 (1/3) — 對 ChatGPT 的常見誤解"
                  />
                  <div className="btn">
                    <Image src={btnNextArrow} style={{ height: "auto" }} alt="arrow" />
                  </div>
                </div>
                <div className="infoCon">
                  <h3>ChatGPT 原理剖析 (1/3) — 對 ChatGPT 的常見誤解</h3>
                </div>
              </div>
              <div
                className="cardResources__item youtube-button"
                data-youtube_id="UsaZhQ9bY2k"
              >
                <div className="photo">
                  <Image
                    src="https://img.youtube.com/vi/UsaZhQ9bY2k/hqdefault.jpg"
                    width="500"
                    height="300"
                    alt="ChatGPT 原理剖析 (3/3) — ChatGPT 所帶來的研究問題"
                  />

                  <div className="btn">
                    <Image src={btnNextArrow} style={{ height: "auto" }} alt="arrow" />
                  </div>
                </div>
                <div className="infoCon">
                  <h3>ChatGPT 原理剖析 (3/3) — ChatGPT 所帶來的研究問題</h3>
                </div>
              </div>
              <div
                className="cardResources__item youtube-button"
                data-youtube_id="A-6c584jxX8"
              >
                <div className="photo">
                  <Image
                    src="https://img.youtube.com/vi/A-6c584jxX8/hqdefault.jpg"
                    width="500"
                    height="300"
                    alt="用 ChatGPT 和 Midjourney 來玩文字冒險遊戲"
                  />
                  <div className="btn">
                    <Image src={btnNextArrow} style={{ height: "auto" }} alt="arrow" />
                  </div>
                </div>
                <div className="infoCon">
                  <h3>用 ChatGPT 和 Midjourney 來玩文字冒險遊戲</h3>
                </div>
              </div>
              <div
                className="cardResources__item youtube-button"
                data-youtube_id="yiY4nPOzJEg"
              >
                <div className="photo">
                  <Image
                    src="https://img.youtube.com/vi/yiY4nPOzJEg/hqdefault.jpg"
                    width="500"
                    height="300"
                    alt="ChatGPT 原理剖析 (1/3) — 對 ChatGPT 的常見誤解"
                  />
                  <div className="btn">
                    <Image src={btnNextArrow} style={{ height: "auto" }} alt="arrow" />
                  </div>
                </div>
                <div className="infoCon">
                  <h3>ChatGPT 原理剖析 (1/3) — 對 ChatGPT 的常見誤解</h3>
                </div>
              </div>
              <div
                className="cardResources__item youtube-button"
                data-youtube_id="UsaZhQ9bY2k"
              >
                <div className="photo">
                  <Image
                    src="https://img.youtube.com/vi/UsaZhQ9bY2k/hqdefault.jpg"
                    width="500"
                    height="300"
                    alt="ChatGPT 原理剖析 (3/3) — ChatGPT 所帶來的研究問題"
                  />

                  <div className="btn">
                    <Image src={btnNextArrow} style={{ height: "auto" }} alt="arrow" />
                  </div>
                </div>
                <div className="infoCon">
                  <h3>ChatGPT 原理剖析 (3/3) — ChatGPT 所帶來的研究問題</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className="resourcesUnit machine">
        <div className="resourcesUnit__body">
          <div className="resourcesUnit__hd">
            <h2>
              Machine Learning (2021) <br />
              English Version
            </h2>
            <div className="tagUnit secondary">Machine Learning</div>
          </div>
          <div className="cardResources">
            <div
              className="cardResources__item youtube-button"
              data-youtube_id="Y87Ct23H3Kw"
            >
              <div className="photo">
                <Image
                  src="https://img.youtube.com/vi/Y87Ct23H3Kw/hqdefault.jpg"
                  width="500"
                  height="300"
                  alt="Lecture 1: Predicting the views of this channel - ML Introduction (1/2)"
                />

                <div className="btn">
                  <Image src={btnNextArrow} style={{ height: "auto" }} alt="arrow" />
                </div>
              </div>
              <div className="infoCon">
                <h3>
                  Lecture 1: Predicting the views of this channel - ML
                  Introduction (1/2)
                </h3>
              </div>
            </div>
            <div
              className="cardResources__item youtube-button"
              data-youtube_id="O69EqgzUl9U"
            >
              <div className="photo">
                <Image
                  src="https://img.youtube.com/vi/O69EqgzUl9U/hqdefault.jpg"
                  width="500"
                  height="300"
                  alt="Lecture 2: Predicting the views of this channel - ML Introduction (2/2)"
                />

                <div className="btn">
                  <Image src={btnNextArrow} style={{ height: "auto" }} alt="arrow" />
                </div>
              </div>
              <div className="infoCon">
                <h3>
                  Lecture 2: Predicting the views of this channel - ML
                  Introduction (2/2)
                </h3>
              </div>
            </div>
            <div
              className="cardResources__item youtube-button"
              data-youtube_id="3qgKpBptyFY"
            >
              <div className="photo">
                <Image
                  src="https://img.youtube.com/vi/3qgKpBptyFY/hqdefault.jpg"
                  width="500"
                  height="300"
                  alt="Lecture 3: Roadmap of Improving Mode"
                />

                <div className="btn">
                  <Image src={btnNextArrow} style={{ height: "auto" }} alt="arrow" />
                </div>
              </div>
              <div className="infoCon">
                <h3>Lecture 3: Roadmap of Improving Mode</h3>
              </div>
            </div>
          </div>
          <a
            className="resourcesUnit__more jsOpenResult"
            style={{
              cursor: "pointer",
            }}
          >
            看更多Machine Learning
          </a>
          <div className="resultUnit">
            <div className="cardResources">
              <div
                className="cardResources__item youtube-button"
                data-youtube_id="Y87Ct23H3Kw"
              >
                <div className="photo">
                  <Image
                    src="https://img.youtube.com/vi/Y87Ct23H3Kw/hqdefault.jpg"
                    width="500"
                    height="300"
                    alt="Lecture 1: Predicting the views of this channel - ML Introduction (1/2)"
                  />

                  <div className="btn">
                    <Image src={btnNextArrow} style={{ height: "auto" }} alt="arrow" />
                  </div>
                </div>
                <div className="infoCon">
                  <h3>
                    Lecture 1: Predicting the views of this channel - ML
                    Introduction (1/2)
                  </h3>
                </div>
              </div>
              <div
                className="cardResources__item youtube-button"
                data-youtube_id="O69EqgzUl9U"
              >
                <div className="photo">
                  <Image
                    src="https://img.youtube.com/vi/O69EqgzUl9U/hqdefault.jpg"
                    width="500"
                    height="300"
                    alt="Lecture 2: Predicting the views of this channel - ML Introduction (2/2)"
                  />

                  <div className="btn">
                    <Image src={btnNextArrow} style={{ height: "auto" }} alt="arrow" />
                  </div>
                </div>
                <div className="infoCon">
                  <h3>
                    Lecture 2: Predicting the views of this channel - ML
                    Introduction (2/2)
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className="resourcesUnit deep">
        <div className="resourcesUnit__body">
          <div className="resourcesUnit__hd">
            <h2>
              Deep Learning for Human Language <br />
              Processing (2020,Spring)
            </h2>
            <div className="tagUnit secondary">Deep Learning</div>
          </div>
          <div className="cardResources">
            <div
              className="cardResources__item youtube-button"
              data-youtube_id="nER51ZyJaCQ"
            >
              <div className="photo">
                <Image
                  src="https://img.youtube.com/vi/nER51ZyJaCQ/hqdefault.jpg"
                  width="500"
                  height="300"
                  alt="Deep Learning for Human Language Processing (Course Overview)"
                />

                <div className="btn">
                  <Image src={btnNextArrow} style={{ height: "auto" }} alt="arrow" />
                </div>
              </div>
              <div className="infoCon">
                <h3>
                  Deep Learning for Human Language Processing (Course Overview)
                </h3>
              </div>
            </div>
            <div
              className="cardResources__item youtube-button"
              data-youtube_id="AIKu43goh-8"
            >
              <div className="photo">
                <Image
                  src="https://img.youtube.com/vi/AIKu43goh-8/hqdefault.jpg"
                  width="500"
                  height="300"
                  alt="Speech Recognition (1/7) - Overview"
                />
                <div className="btn">
                  <Image src={btnNextArrow} style={{ height: "auto" }} alt="arrow" />
                </div>
              </div>
              <div className="infoCon">
                <h3>Speech Recognition (1/7) - Overview</h3>
              </div>
            </div>
            <div
              className="cardResources__item youtube-button"
              data-youtube_id="BdUeBa6NbXA"
            >
              <div className="photo">
                <Image
                  src="https://img.youtube.com/vi/BdUeBa6NbXA/hqdefault.jpg"
                  width="500"
                  height="300"
                  alt="Speech Recognition (2/7) - Listen, Attend, Spell"
                />

                <div className="btn">
                  <Image src={btnNextArrow} style={{ height: "auto" }} alt="arrow" />
                </div>
              </div>
              <div className="infoCon">
                <h3>Speech Recognition (2/7) - Listen, Attend, Spell</h3>
              </div>
            </div>
          </div>
          <a
            className="resourcesUnit__more jsOpenResult"
            style={{
              cursor: "pointer",
            }}
          >
            看更多Deep Learning
          </a>
          <div className="resultUnit">
            <div className="cardResources">
              <div
                className="cardResources__item youtube-button"
                data-youtube_id="nER51ZyJaCQ"
              >
                <div className="photo">
                  <Image
                    src="https://img.youtube.com/vi/nER51ZyJaCQ/hqdefault.jpg"
                    width="500"
                    height="300"
                    alt="Deep Learning for Human Language Processing (Course Overview)"
                  />
                  <div className="btn">
                    <Image src={btnNextArrow} style={{ height: "auto" }} alt="arrow" />
                  </div>
                </div>
                <div className="infoCon">
                  <h3>
                    Deep Learning for Human Language Processing (Course
                    Overview)
                  </h3>
                </div>
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
