"use client";

import Image from "next/image";
import btnNextArrow from "~/images/icon/btn_nextArrow.svg";
import bgStage from "~/images/home/bg_stage.gif";
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
                    <span>階段ㄧ 展示中模型</span>
                  </h3>
                  <div className="text">
                    <span>
                      此階段為開發第一期目的為生成對抗網絡的深度學習技術
                    </span>
                    <div className="btn">
                      <a href="#">
                        <span>了解更多</span>
                        <Image src={btnNextArrow} alt="arrow" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="stageFoldUnit__item item2">
                  <div className="step" id="btnSstageFold_2">
                    STEP 02
                  </div>
                  <div className="date">2023年9月</div>
                  <h3>
                    <span>階段二 展示大模型</span>
                  </h3>
                  <div className="text">
                    <span>
                      此階段透過反覆生成並調整參數鑑別器則不斷辨別真假數據提高辨識且進化
                    </span>
                    <div className="btn">
                      <a href="#">
                        <span>了解更多</span>
                        <Image src={btnNextArrow} alt="arrow" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="stageFoldUnit__item item3">
                  <div className="step" id="btnSstageFold_3">
                    STEP 03
                  </div>
                  <div className="date">2023年12月</div>
                  <h3>
                    <span>階段三 展示</span>
                    <span>可信大模型</span>
                  </h3>
                  <div className="text">
                    <span>
                      此階段為展示強大的神經網絡模型用於自然語言、圖像、音頻處理等生成式任務
                    </span>
                    <div className="btn">
                      <a href="#">
                        <span>了解更多</span>
                        <Image src={btnNextArrow} alt="arrow" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="stageFoldUnit__item item4">
                  <div className="step" id="btnSstageFold_4">
                    STEP 04
                  </div>
                  <div className="date">2024年3月</div>
                  <h3>
                    <span>階段四 展示</span>
                    <span>多輪問答</span>
                  </h3>
                  <div className="text">
                    <span>
                      此階段為開發第一期目的為生成對抗網絡的深度學習技術
                    </span>
                    <div className="btn">
                      <a href="#">
                        <span>了解更多</span>
                        <Image src={btnNextArrow} alt="arrow" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="stageUnit__right">
            <Image src={bgStage} alt="stage" style={{ height: "auto" }} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default StageUnit;
