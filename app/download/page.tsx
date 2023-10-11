import Image from "next/image";
import btnNextArrow from "~/images/icon/btn_nextArrow.svg";
import btnDownArrow from "~/images/icon/btn_downArrow.svg";
import bg_download from "~/images/download/bg_download.png";
import photo_860570_1 from "~/images/news/photo_860570_1.png";
import Navigation from "./components/Navigation";

const Download = () => {
  return (
    <>
      <article className="downloadUnit">
        <div className="downloadUnit__body">
          <div className="cardDownload">
            <div className="cardDownload__item max">
              <h1>TAIDE模型</h1>
              <div className="photo">
                <Image src={bg_download} alt="TAIDE模型" />
              </div>
            </div>
            <div className="cardDownload__item">
              <Navigation />
            </div>
          </div>
          <div className="downloadDetail">
            <div className="downloadDetail__left">
              <div className="article__item terms">
                <h2>·使用政策與許可協議</h2>
                <div className="article__con">
                  使用政策
                  <p>
                    We want everyone to use Llama 2 safely and responsibly. You
                    agree you will not use, or allow others to use, Llama 2
                    to:1. Violate the law or {"others'"} rights, including to:a.
                    Engage in, promote, generate, contribute to, encourage,
                    plan, incite, or further illegal or unlawful activity or
                    content, such as:i. Violence or terrorism
                  </p>
                  <p>
                    We want everyone to use Llama 2 safely and responsibly. You
                    agree you will not use, or allow others to use, Llama 2
                    to:1. Violate the law or {"others'"} rights, including to:a.
                    Engage in, promote, generate, contribute to, encourage,
                    plan, incite, or further illegal or unlawful activity or
                    content, such as:i. Violence or terrorism
                  </p>
                  <p>
                    We want everyone to use Llama 2 safely and responsibly. You
                    agree you will not use, or allow others to use, Llama 2
                    to:1. Violate the law or {"others'"} rights, including to:a.
                    Engage in, promote, generate, contribute to, encourage,
                    plan, incite, or further illegal or unlawful activity or
                    content, such as:i. Violence or terrorism
                  </p>
                </div>
              </div>
              <div className="downloadDetail__right download mobile">
                <h2>·模型版本下載</h2>
                <div className="downloadDetail__table">
                  <table>
                    <tbody>
                      <tr>
                        <th>模型版本</th>
                        <th>釋出日期</th>
                        <th>Tokens</th>
                      </tr>
                      <tr>
                        <td>b.1.0.0</td>
                        <td>2023.09.08</td>
                        <td>1.7B</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="btn">
                    <a style={{ cursor: "pointer" }}>
                      <span>Huggingface 連結</span>
                      <Image src={btnDownArrow} alt="arrow" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="article__item even">
                <h2>·TAIDE合作模式</h2>
                <div className="article__con">
                  <p>
                    具臺灣特色、以正體中文為主的「可信賴AI對話引擎」（Trustworthy
                    AI Dialog
                    Engine，TAIDE）將在近日亮相，並公布計畫相關藍圖與算力規劃。人工智慧（AI）狂潮席捲，盤點國科會正如火如荼推動的
                    3
                    大政策，人工智慧基本法草案將盡速提報行政院審查，公務機關使用生成式
                    AI 參考指引將考量機敏性等 6
                    大面向通盤規劃；至於備受關注的「可信賴 AI
                    對話引擎」，據了解，將於近日推出初代模型。
                  </p>
                  <p>
                    AI
                    浪潮來勢洶洶，相關應用發展迅速，國科會主委吳政忠曾坦言，當
                    ChatGPT
                    等生成式AI走入民眾日常，將對人文社會產生相當大影響，確實需布局相關法規、指引。國科會回覆中央社記者提問指出，目前歐、德、日、韓等國，多在訂定人工智慧上位共通原則後，進而形成具體化的人工智慧標準，協助相關產業進行認證。
                  </p>
                  <p>
                    臺灣目前沒有人工智慧專法及產業評測標準，因此有訂定人工智慧基本法的必要，國科會表示，參酌國外相關法制及徵集產學界專家意見後，已在擬定人工智慧基本法草案，後續將盡速提報行政院審查，以因應國內人工智慧發展的立法需求。
                  </p>
                  <p>
                    吳政忠先前指出，人工智慧基本法牽涉層面甚廣，不會是單一部會處理，將綜合盤點研議，希望下個會期、9
                    月開始的時候有初步草案。
                  </p>
                  <Image
                    src={photo_860570_1}
                    style={{ height: "auto" }}
                    alt="TAIDE模型下載"
                  />

                  <p>
                    具臺灣特色、以正體中文為主的「可信賴AI對話引擎」（Trustworthy
                    AI Dialog
                    Engine，TAIDE）將在近日亮相，並公布計畫相關藍圖與算力規劃。人工智慧（AI）狂潮席捲，盤點國科會正如火如荼推動的
                    3
                    大政策，人工智慧基本法草案將盡速提報行政院審查，公務機關使用生成式
                    AI 參考指引將考量機敏性等 6
                    大面向通盤規劃；至於備受關注的「可信賴 AI
                    對話引擎」，據了解，將於近日推出初代模型。
                  </p>
                  <p>
                    AI
                    浪潮來勢洶洶，相關應用發展迅速，國科會主委吳政忠曾坦言，當
                    ChatGPT
                    等生成式AI走入民眾日常，將對人文社會產生相當大影響，確實需布局相關法規、指引。國科會回覆中央社記者提問指出，目前歐、德、日、韓等國，多在訂定人工智慧上位共通原則後，進而形成具體化的人工智慧標準，協助相關產業進行認證。
                  </p>
                  <p>
                    臺灣目前沒有人工智慧專法及產業評測標準，因此有訂定人工智慧基本法的必要，國科會表示，參酌國外相關法制及徵集產學界專家意見後，已在擬定人工智慧基本法草案，後續將盡速提報行政院審查，以因應國內人工智慧發展的立法需求。
                  </p>
                  <p>
                    吳政忠先前指出，人工智慧基本法牽涉層面甚廣，不會是單一部會處理，將綜合盤點研議，希望下個會期、9
                    月開始的時候有初步草案。
                  </p>
                </div>
              </div>
            </div>
            <div className="downloadDetail__right download desktop">
              <h2>·模型版本下載</h2>
              <div className="downloadDetail__table">
                <table>
                  <tbody>
                    <tr>
                      <th>模型版本</th>
                      <td>b-1-0-0</td>
                    </tr>
                    <tr>
                      <th>釋出日期</th>
                      <td>2023-09-08</td>
                    </tr>
                    <tr>
                      <th>Tokens</th>
                      <td>1.7B</td>
                    </tr>
                  </tbody>
                </table>
                <div className="btn">
                  <a style={{ cursor: "pointer" }}>
                    <span>Huggingface 連結</span>
                    <Image src={btnDownArrow} alt="arrow" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className="contactUnit download">
        <article className="contactUnit__body">
          <h2>
            <span>有任何想法？</span>
            <span>歡迎與我們聯絡</span>
          </h2>
          <div className="btn">
            <a href="mailto:TAIDE@narlabs.org.tw">
              <span>Contact TAIDE</span>
              <Image src={btnNextArrow} alt="about" />
            </a>
          </div>
        </article>
      </article>
    </>
  );
};

export default Download;
