"use client";

import { useEffect } from "react";
import Image from "next/image";
import aboutExpected1 from "~/images/about/aboutExpected_1.png";
import aboutExpected2 from "~/images/about/aboutExpected_2.png";

const Accordion1 = () => {
  useEffect(() => {
    $(document).ready(function () {
      $(".accordion").accordion({
        header: "h3",
        collapsible: true,
        active: false,
      });
    });

    return () => {
      $(document).ready(function () {});
    };
  }, []);

  return (
    <>
      <div className="section section1">
        <h2>
          <span>使用者信任需求</span>
        </h2>
        <div className="row">
          <div className="infoCon">
            <div className="tagUnit grey">POINT 2</div>
            <div className="accordion">
              <div className="accordion__item">
                <h3>促進文化教育與產業發展</h3>
                <div className="accordion__con">
                  <p>
                    建立臺灣本土可信任的生成式AI對話引擎基礎模型，為政府和企業提供自主選擇的模型大小和衡量算力，自行訓練模型或建構內部應用之模型。
                  </p>
                </div>
              </div>
              <div className="accordion__item">
                <h3>滿足使用者信任</h3>
                <div className="accordion__con">
                  <p>
                    進行引擎安全性和可解釋性測試，降低潛在風險，提高用戶信任度，以推動人工智慧創新和競爭力。
                  </p>
                </div>
              </div>
              <div className="accordion__item">
                <h3>提升AI領域競爭力與創新</h3>
                <div className="accordion__con">
                  <p>
                    促進人機互動技術，產生更多不同尺寸的引擎，發展基於引擎尺寸的優化方法，建構未來更智慧、更便捷、更人性化的社會與生活。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="photo">
            <Image
              src={aboutExpected1}
              style={{ height: "auto" }}
              alt="about"
            />
          </div>
        </div>
      </div>
      <div className="section section2">
        <h2>優化運算環境效能</h2>
        <div className="tagUnit grey">POINT 3</div>
        <div className="row">
          <div className="infoCon">
            <div className="accordion">
              <div className="accordion__item">
                <h3>大型語言模型訓練架構</h3>
                <div className="accordion__con">
                  <p>
                    完成研析大型語言模型所需之計算環境、訓練模式、資料整備、性能調教與模型效能之技術，以應用於可信任生成式
                    Al模型建置。
                  </p>
                </div>
              </div>
              <div className="accordion__item">
                <h3>AI模型分散式訓練框架</h3>
                <div className="accordion__con">
                  <p>
                    完成基於跨節點、分散式架構之可信任生成式 AI
                    模型建置、預訓練、微調與性能調教。
                  </p>
                </div>
              </div>
              <div className="accordion__item">
                <h3>完備算力資源</h3>
                <div className="accordion__con">
                  <p>
                    完成分散式大型語言模型訓練架構，加速訓練排程、性能、更大尺度之模型容量與擴展性。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section section3">
        <h2>
          <span>雲端應用服務</span>
        </h2>
        <div className="tagUnit grey">POINT 4</div>
        <div className="row">
          <div className="photo">
            <Image
              src={aboutExpected2}
              style={{ height: "auto" }}
              alt="about"
            />
          </div>
          <div className="infoCon">
            <div className="accordion">
              <div className="accordion__item">
                <h3>優化服務能量</h3>
                <div className="accordion__con">
                  <p>
                    建構繁體中文版大型語言模型，提供模型測試及效能優化服務，穩定提升服務能力與能量，使服務模式多元化。
                  </p>
                </div>
              </div>
              <div className="accordion__item">
                <h3>建置雲端應用服務平台</h3>
                <div className="accordion__con">
                  <p>
                    利用雲端運算平台進行大規模的模型訓練和部署，以確保運算資源的充足和靈活性。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section section4">
        <h2>可信任的AI合作夥伴</h2>
        <div className="tagUnit grey">POINT 5</div>
        <div className="row">
          <div className="infoCon">
            <div className="accordion">
              <div className="accordion__item">
                <h3>AI法制化</h3>
                <div className="accordion__con">
                  <p>
                    瞭解人工智慧技術上的能與不能，以及可能帶來的正面用途及負面影響，並能實際參與規劃相關規範、技術開發、國際標準趨式等層面，掌握人工智慧發展全面向的角度，有助於末來開發
                    Al、使用 Al、應用 AI 之綜效。
                  </p>
                </div>
              </div>
              <div className="accordion__item">
                <h3>整備AI發展量能</h3>
                <div className="accordion__con">
                  <p>
                    借鏡各國 Al 規範與法制方向，並同步考量臺灣相關產業 LLM
                    發展現況與需求，研提
                    Al政策規範發展分析報告，並提出臺灣產業發展建議，以協助臺灣發展
                    Al相關技術、產品或服務之依據，作為臺灣發展可信任 Al
                    技術或產業發展之基礎。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion1;
