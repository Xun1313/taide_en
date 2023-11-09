"use client";
import Image from "next/image";
import Link from "next/link";
import btnNextArrow from "~/images/icon/btn_nextArrow.svg";
import btnDownArrow from "~/images/icon/btn_downArrow.svg";
import photo_500500_1 from "~/images/resources/photo_500500_1.png";
import { useEffect, useRef, useState, useMemo } from "react";
const MainPage = () => {
  const [active, setActive] = useState("");
  const menuList = useMemo(
    () => ["生成式 AI", "Machine Learning", "Deep Learning"],
    []
  );
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
        setActive(menuList[0]);
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
        setActive(menuList[1]);
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
        setActive(menuList[2]);
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
            <div className="tagUnit secondary active">
              <Link href="/resourcesList">李宏毅</Link>
            </div>
            <div className="tagUnit secondary">
              <Link href="/resourcesList2">蔡宗翰</Link>
            </div>
          </div>
          <div className="card resources">
            <div className="card__item max">
              <div className="youtube-button" data-youtube_id="A-6c584jxX8">
                <div className="photo">
                  <Image
                    src="https://img.youtube.com/vi/A-6c584jxX8/maxresdefault.jpg"
                    width="500"
                    height="300"
                    alt="用 ChatGPT 和 Midjourney 來玩文字冒險遊戲"
                  />
                </div>
                <div className="infoCon">
                  <h3>用 ChatGPT 和 Midjourney 來玩文字冒險遊戲</h3>
                  <div className="tagUnit secondary">生成式 AI</div>
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
                  href="http://speech.ee.ntu.edu.tw/~tlkagk/index.html"
                  target="_blank"
                ></a>
                <Image src={photo_500500_1} alt="李宏毅 Lee, Hung-Yi" />
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
                      href={`${process.env.NEXT_PUBLIC_BASE_PATH}/resources/課程投影片.zip`}
                    >
                      <span>Download</span>
                      <Image
                        src={btnDownArrow}
                        style={{ height: "auto" }}
                        alt="arrow"
                      />
                    </a>
                  </div>
                </div>
                <div className="cardCourse__item">
                  <h4>課程模型.zip</h4>
                  <div className="btn">
                    <a
                      href={`${process.env.NEXT_PUBLIC_BASE_PATH}/resources/課程模型.zip`}
                    >
                      <span>Download</span>
                      <Image
                        src={btnDownArrow}
                        style={{ height: "auto" }}
                        alt="arrow"
                      />
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
          <div className="tagList">
            <div
              className={`tagUnit secondary jsToAI ${
                active === menuList[0] ? "active" : ""
              }`}
              id="tagUnit_1"
            >
              <a
                style={{ cursor: "pointer" }}
                onClick={() => setActive(menuList[0])}
              >
                {menuList[0]}
              </a>
            </div>
            <div
              className={`tagUnit secondary jsToMachine ${
                active === menuList[1] ? "active" : ""
              }`}
              id="tagUnit_2"
            >
              <a
                style={{ cursor: "pointer" }}
                onClick={() => setActive(menuList[1])}
              >
                {menuList[1]}
              </a>
            </div>
            <div
              className={`tagUnit secondary jsToDeep ${
                active === menuList[2] ? "active" : ""
              }`}
              id="tagUnit_3"
            >
              <a
                style={{ cursor: "pointer" }}
                onClick={() => setActive(menuList[2])}
              >
                {menuList[2]}
              </a>
            </div>
          </div>
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
                  <Image
                    src={btnNextArrow}
                    style={{ height: "auto" }}
                    alt="arrow"
                  />
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
                  <Image
                    src={btnNextArrow}
                    style={{ height: "auto" }}
                    alt="arrow"
                  />
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
                  <Image
                    src={btnNextArrow}
                    style={{ height: "auto" }}
                    alt="arrow"
                  />
                </div>
              </div>
              <div className="infoCon">
                <h3>用 ChatGPT 和 Midjourney 來玩文字冒險遊戲</h3>
              </div>
            </div>
          </div>
          <a
            className="resourcesUnit__more jsOpenResult"
            style={{ cursor: "pointer" }}
          >
            看更多生成式 AI
          </a>
          <div className="resultUnit">
            <div className="cardResources">
              <div
                className="cardResources__item youtube-button"
                data-youtube_id="phQK8xZpgoU"
              >
                <div className="photo">
                  <Image
                    src="https://img.youtube.com/vi/phQK8xZpgoU/hqdefault.jpg"
                    width="500"
                    height="300"
                    alt="快速了解機器學習基本原理 (1/2)"
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
                  <h3>快速了解機器學習基本原理 (1/2)</h3>
                </div>
              </div>
              <div
                className="cardResources__item youtube-button"
                data-youtube_id="XLyPFnephpY"
              >
                <div className="photo">
                  <Image
                    src="https://img.youtube.com/vi/XLyPFnephpY/hqdefault.jpg"
                    width="500"
                    height="300"
                    alt="快速了解機器學習基本原理 (2/2)"
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
                  <h3>快速了解機器學習基本原理 (2/2)</h3>
                </div>
              </div>
              <div
                className="cardResources__item youtube-button"
                data-youtube_id="AihBniegMKg"
              >
                <div className="photo">
                  <Image
                    src="https://img.youtube.com/vi/AihBniegMKg/hqdefault.jpg"
                    width="500"
                    height="300"
                    alt="生成式學習的兩種策略：要各個擊破，還是要一次到位"
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
                  <h3>生成式學習的兩種策略：要各個擊破，還是要一次到位</h3>
                </div>
              </div>

              <div
                className="cardResources__item youtube-button"
                data-youtube_id="ZID220t_MpI"
              >
                <div className="photo">
                  <Image
                    src="https://img.youtube.com/vi/ZID220t_MpI/hqdefault.jpg"
                    width="500"
                    height="300"
                    alt="能夠使用工具的AI：New Bing, WebGPT, Toolformer"
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
                  <h3>能夠使用工具的AI：New Bing, WebGPT, Toolformer</h3>
                </div>
              </div>
              <div
                className="cardResources__item youtube-button"
                data-youtube_id="F58vJcGgjt0"
              >
                <div className="photo">
                  <Image
                    src="https://img.youtube.com/vi/F58vJcGgjt0/hqdefault.jpg"
                    width="500"
                    height="300"
                    alt="Finetuning vs. Prompting：對於大型語言模型的不同期待所衍生的兩類使用方式 (1/3)"
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
                    Finetuning vs.
                    Prompting：對於大型語言模型的不同期待所衍生的兩類使用方式
                    (1/3)
                  </h3>
                </div>
              </div>
              <div
                className="cardResources__item youtube-button"
                data-youtube_id="aZ_jXZvxyVg"
              >
                <div className="photo">
                  <Image
                    src="https://img.youtube.com/vi/aZ_jXZvxyVg/hqdefault.jpg"
                    width="500"
                    height="300"
                    alt="FFinetuning vs. Prompting：對於大型語言模型的不同期待所衍生的兩類使用方式 (2/3)"
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
                    Finetuning vs.
                    Prompting：對於大型語言模型的不同期待所衍生的兩類使用方式
                    (2/3)
                  </h3>
                </div>
              </div>

              <div
                className="cardResources__item youtube-button"
                data-youtube_id="HnzDaEiN_eg"
              >
                <div className="photo">
                  <Image
                    src="https://img.youtube.com/vi/HnzDaEiN_eg/hqdefault.jpg"
                    width="500"
                    height="300"
                    alt="Finetuning vs. Prompting：對於大型語言模型的不同期待所衍生的兩類使用方式 (3/3)"
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
                    Finetuning vs.
                    Prompting：對於大型語言模型的不同期待所衍生的兩類使用方式
                    (3/3)
                  </h3>
                </div>
              </div>
              <div
                className="cardResources__item youtube-button"
                data-youtube_id="SaZTJJNOCOY"
              >
                <div className="photo">
                  <Image
                    src="https://img.youtube.com/vi/SaZTJJNOCOY/hqdefault.jpg"
                    width="500"
                    height="300"
                    alt="大模型 + 大資料 = 神奇結果？(1/3)：大模型的頓悟時刻"
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
                  <h3>大模型 + 大資料 = 神奇結果？(1/3)：大模型的頓悟時刻</h3>
                </div>
              </div>
              <div
                className="cardResources__item youtube-button"
                data-youtube_id="qycxA-xX_OY"
              >
                <div className="photo">
                  <Image
                    src="https://img.youtube.com/vi/qycxA-xX_OY/hqdefault.jpg"
                    width="500"
                    height="300"
                    alt="大模型 + 大資料 = 神奇結果？(2/3)：到底要多少資料才夠"
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
                  <h3>大模型 + 大資料 = 神奇結果？(2/3)：到底要多少資料才夠</h3>
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
                  <Image
                    src={btnNextArrow}
                    style={{ height: "auto" }}
                    alt="arrow"
                  />
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
                  <Image
                    src={btnNextArrow}
                    style={{ height: "auto" }}
                    alt="arrow"
                  />
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
                  alt="Lecture 3: Roadmap of Improving Model"
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
                <h3>Lecture 3: Roadmap of Improving Model</h3>
              </div>
            </div>
          </div>
          <a
            className="resourcesUnit__more jsOpenResult"
            style={{ cursor: "pointer" }}
          >
            看更多Machine Learning
          </a>
          <div className="resultUnit">
            <div className="cardResources">
              <div
                className="cardResources__item youtube-button"
                data-youtube_id="yz7QS1I6omw"
              >
                <div className="photo">
                  <Image
                    src="https://img.youtube.com/vi/yz7QS1I6omw/hqdefault.jpg"
                    width="500"
                    height="300"
                    alt="optimization fails? (1/4)"
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
                  <h3>Lecture 4: What to do when optimization fails? (1/4)</h3>
                </div>
              </div>
              <div
                className="cardResources__item youtube-button"
                data-youtube_id="MNoEQ9w-AbE"
              >
                <div className="photo">
                  <Image
                    src="https://img.youtube.com/vi/MNoEQ9w-AbE/hqdefault.jpg"
                    width="500"
                    height="300"
                    alt="optimization fails? (2/4)"
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
                  <h3>Lecture 5: What to do when optimization fails? (2/4)</h3>
                </div>
              </div>
              <div
                className="cardResources__item youtube-button"
                data-youtube_id="8yf-tU7zm7w"
              >
                <div className="photo">
                  <Image
                    src="https://img.youtube.com/vi/8yf-tU7zm7w/hqdefault.jpg"
                    width="500"
                    height="300"
                    alt="optimization fails? (3/4)"
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
                  <h3>Lecture 6: What to do when optimization fails? (3/4)</h3>
                </div>
              </div>
              <div
                className="cardResources__item youtube-button"
                data-youtube_id="t3u3WshJQV8"
              >
                <div className="photo">
                  <Image
                    src="https://img.youtube.com/vi/t3u3WshJQV8/hqdefault.jpg"
                    width="500"
                    height="300"
                    alt="optimization fails? (4/4)"
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
                  <h3>Lecture 7: What to do when optimization fails? (4/4)</h3>
                </div>
              </div>
              <div
                className="cardResources__item youtube-button"
                data-youtube_id="jqVONJ-Wn8w"
              >
                <div className="photo">
                  <Image
                    src="https://img.youtube.com/vi/jqVONJ-Wn8w/hqdefault.jpg"
                    width="500"
                    height="300"
                    alt="8: classNameification (Short Version)"
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
                  <h3>Lecture 8: classNameification (Short Version)</h3>
                </div>
              </div>
              <div
                className="cardResources__item youtube-button"
                data-youtube_id="I4eLIsPM9Yc"
              >
                <div className="photo">
                  <Image
                    src="https://img.youtube.com/vi/I4eLIsPM9Yc/hqdefault.jpg"
                    width="500"
                    height="300"
                    alt="Lecture 9: Convolutional Neural Networks"
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
                  <h3>Lecture 9: Convolutional Neural Networks</h3>
                </div>
              </div>
              <div
                className="cardResources__item youtube-button"
                data-youtube_id="0djMUi2-uV4"
              >
                <div className="photo">
                  <Image
                    src="https://img.youtube.com/vi/0djMUi2-uV4/hqdefault.jpg"
                    width="500"
                    height="300"
                    alt="10: Self-attention (1/2)"
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
                  <h3>Lecture 10: Self-attention (1/2)</h3>
                </div>
              </div>
              <div
                className="cardResources__item youtube-button"
                data-youtube_id="zeCDPYZli0k"
              >
                <div className="photo">
                  <Image
                    src="https://img.youtube.com/vi/zeCDPYZli0k/hqdefault.jpg"
                    width="500"
                    height="300"
                    alt="11: Self-attention (2/2)"
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
                  <h3>Lecture 11: Self-attention (2/2)</h3>
                </div>
              </div>
              <div
                className="cardResources__item youtube-button"
                data-youtube_id="zmOuJkH9l9M"
              >
                <div className="photo">
                  <Image
                    src="https://img.youtube.com/vi/zmOuJkH9l9M/hqdefault.jpg"
                    width="500"
                    height="300"
                    alt="12: Transformer (1/2)"
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
                  <h3>Lecture 12: Transformer (1/2)</h3>
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
                  alt="Language Processing (Course Overview)"
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
                  alt="Recognition (1/7) - Overview"
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
                  alt="2/7) - Listen, Attend, Spell"
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
                <h3>Speech Recognition (2/7) - Listen, Attend, Spell</h3>
              </div>
            </div>
          </div>
          <a
            className="resourcesUnit__more jsOpenResult"
            style={{ cursor: "pointer" }}
          >
            看更多Deep Learning
          </a>
          <div className="resultUnit">
            <div className="cardResources">
              <div
                className="cardResources__item youtube-button"
                data-youtube_id="CGuLuBaLIeI"
              >
                <div className="photo">
                  <Image
                    src="https://img.youtube.com/vi/CGuLuBaLIeI/hqdefault.jpg"
                    width="500"
                    height="300"
                    alt="7) - CTC, RNN-T and more"
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
                  <h3>Speech Recognition (3/7) - CTC, RNN-T and more</h3>
                </div>
              </div>
              <div
                className="cardResources__item youtube-button"
                data-youtube_id="XWTGY_PNABo"
              >
                <div className="photo">
                  <Image
                    src="https://img.youtube.com/vi/XWTGY_PNABo/hqdefault.jpg"
                    width="500"
                    height="300"
                    alt="7) - HMM (optional)"
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
                  <h3>Speech Recognition (4/7) - HMM (optional)</h3>
                </div>
              </div>
              <div
                className="cardResources__item youtube-button"
                data-youtube_id="5SSVra6IJY4"
              >
                <div className="photo">
                  <Image
                    src="https://img.youtube.com/vi/5SSVra6IJY4/hqdefault.jpg"
                    width="500"
                    height="300"
                    alt="CTC and RNN-T (optional)"
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
                    Speech Recognition (5/7) - Alignment of HMM, CTC and RNN-T
                    (optional)
                  </h3>
                </div>
              </div>
              <div
                className="cardResources__item youtube-button"
                data-youtube_id="L519dCHUCog"
              >
                <div className="photo">
                  <Image
                    src="https://img.youtube.com/vi/L519dCHUCog/hqdefault.jpg"
                    width="500"
                    height="300"
                    alt="- RNN-T Training (optional)"
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
                  <h3>Speech Recognition (6/7) - RNN-T Training (optional)</h3>
                </div>
              </div>
              <div
                className="cardResources__item youtube-button"
                data-youtube_id="dymfkWtVUdo"
              >
                <div className="photo">
                  <Image
                    src="https://img.youtube.com/vi/dymfkWtVUdo/hqdefault.jpg"
                    width="500"
                    height="300"
                    alt="(7/7) - Language Modeling"
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
                  <h3>Speech Recognition (7/7) - Language Modeling</h3>
                </div>
              </div>
              <div
                className="cardResources__item youtube-button"
                data-youtube_id="Jj6blc8UijY"
              >
                <div className="photo">
                  <Image
                    src="https://img.youtube.com/vi/Jj6blc8UijY/hqdefault.jpg"
                    width="500"
                    height="300"
                    alt="(1/2) - Feature Disentangle"
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
                  <h3>Voice Conversion (1/2) - Feature Disentangle</h3>
                </div>
              </div>
              <div
                className="cardResources__item youtube-button"
                data-youtube_id="JUWVuF2ucTk"
              >
                <div className="photo">
                  <Image
                    src="https://img.youtube.com/vi/JUWVuF2ucTk/hqdefault.jpg"
                    width="500"
                    height="300"
                    alt="2/2) - CycleGAN and StarGAN"
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
                  <h3>Voice Conversion (2/2) - CycleGAN and StarGAN</h3>
                </div>
              </div>
              <div
                className="cardResources__item youtube-button"
                data-youtube_id="tovg5ZxNgIo"
              >
                <div className="photo">
                  <Image
                    src="https://img.youtube.com/vi/tovg5ZxNgIo/hqdefault.jpg"
                    width="500"
                    height="300"
                    alt="1/2) - Deep Clustering, PIT"
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
                  <h3>Speech Separation (1/2) - Deep Clustering, PIT</h3>
                </div>
              </div>
              <div
                className="cardResources__item youtube-button"
                data-youtube_id="G0O1A7lONSY"
              >
                <div className="photo">
                  <Image
                    src="https://img.youtube.com/vi/G0O1A7lONSY/hqdefault.jpg"
                    width="500"
                    height="300"
                    alt="Separation (2/2) - TasNet"
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
                  <h3>Speech Separation (2/2) - TasNet</h3>
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
