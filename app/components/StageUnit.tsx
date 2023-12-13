"use client";
import Image from "next/image";
import Link from "next/link";
import btnNextArrow from "~/images/icon/btn_nextArrow.svg";
import { useEffect } from "react";

const StageUnit = () => {
  useEffect(() => {
    $(document).ready(function () {
      $("[id^=btnSstageFold_]").click(function () {
        const vm: {
          attr: Function;
          closest: Function;
        } = $(this);
        var scn = vm.attr("id").split("_")[1];
        $(".stageFoldUnit").removeClass("stageFoldUnit1");
        $(".stageFoldUnit").removeClass("stageFoldUnit2");
        $(".stageFoldUnit").removeClass("stageFoldUnit3");
        $(".stageFoldUnit").removeClass("stageFoldUnit4");
        vm.closest(".stageFoldUnit").addClass("stageFoldUnit" + scn);
      });
    });

    return () => {
      $(document).ready(function () {
        $("[id^=btnSstageFold_]").off("click");
      });
    };
  }, []);

  return (
    <article className="stageUnit">
      <div className="stageUnit__body">
        <h2>TAIDE階段性目標</h2>
        <div className="row">
          <div className="stageUnit__left">
            <div className="stageFoldUnit stageFoldUnit1">
              <div className="stageFoldUnit__wrap">
                <div className="stageFoldUnit__item item1">
                  <div className="step" id="btnSstageFold_1">
                    STEP 01
                  </div>
                  <div className="date">2023年6月</div>
                  <h3>
                    <span>階段ㄧ</span>
                    <span>展示中模型</span>
                  </h3>
                  <div className="text">
                    <span>
                      五大功能 : 自動摘要、寫信、寫文章、中翻英、英翻中等任務
                      <br />
                      系統測試 : 建置完成模型測試平台
                    </span>
                    <div className="btn">
                      <Link
                        href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/firstStage`}
                      >
                        <span>了解更多 </span>
                        <Image src={btnNextArrow} alt="arrow" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="stageFoldUnit__item item2">
                  <div className="step" id="btnSstageFold_2">
                    STEP 02
                  </div>
                  <div className="date">2023年9月</div>
                  <h3>
                    <h3>
                      <span>階段二</span>
                      <span>展示大模型</span>
                    </h3>
                  </h3>
                  <div className="text">
                    <span>
                      任務導向功能:
                      如「認識臺灣」、「臺灣考試」、「事實查核」等任務 系統測試
                      : <br />
                      委由外部單位進行驗證測試（如標註公司或研究機構）
                      釋出中模型給TAIDE合作夥伴 釋出第一批正體中文資料集
                      協助三家業者基於TAIDE開發應用
                    </span>
                    {/* <div className="btn">
                      <a style={{ cursor: "pointer" }}>
                        <span>了解更多 </span>
                        <Image src={btnNextArrow} alt="arrow" />
                      </a>
                    </div> */}
                  </div>
                </div>
                <div className="stageFoldUnit__item item3">
                  <div className="step" id="btnSstageFold_3">
                    STEP 03
                  </div>
                  <div className="date">2023年12月</div>
                  <h3>
                    <span>階段三</span>
                    <span>展示可信大模型</span>
                  </h3>
                  <div className="text">
                    <span>
                      任務導向功能 :
                      有考慮倫理因素的問答，備阻絕產生不適當回應能力
                      <br />
                      系統測試 :
                      委由外部單位進行驗證測試(如標註公司或研究機構)；
                      邀請應用發展合作夥伴(如公部門人員進行測試)
                      釋出大模型給TAIDE合作夥伴
                      協助國科會發展內部應用(如申請計畫Q/A)
                    </span>
                    {/* <div className="btn">
                      <a style={{ cursor: "pointer" }}>
                        <span>了解更多 </span>
                        <Image src={btnNextArrow} alt="arrow" />
                      </a>
                    </div> */}
                  </div>
                </div>
                <div className="stageFoldUnit__item item4">
                  <div className="step" id="btnSstageFold_4">
                    STEP 04
                  </div>
                  <div className="date">2024年3月</div>
                  <h3>
                    <span>階段四</span>
                    <span>展示多輪問答</span>
                  </h3>
                  <div className="text">
                    <span>
                      任務導向功能 :
                      前幾階段任務做到更好的水準，整理完成程式碼、資料集、文件、發展過程
                      <br />
                      系統測試 : 提供第二批正體中文資料集
                    </span>
                    {/* <div className="btn">
                      <a style={{ cursor: "pointer" }}>
                        <span>了解更多 </span>
                        <Image src={btnNextArrow} alt="arrow" />
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="stageUnit__right">
            <video width="320" height="240" autoPlay loop muted playsInline>
              <source
                src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/video/bg_stage.mp4`}
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </article>
  );
};

export default StageUnit;
