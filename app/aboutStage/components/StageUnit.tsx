"use client";

import { useEffect } from "react";

const StageUnit = () => {
  useEffect(() => {
    $(document).ready(function () {
      $("[id^=btnFold_]").click(function () {
        const vm: {
          attr: Function;
          closest: Function;
        } = $(this);
        var scn = vm.attr("id").split("_")[1];
        const foldUnit = $(".foldUnit");
        foldUnit.removeClass("foldUnit1");
        foldUnit.removeClass("foldUnit2");
        foldUnit.removeClass("foldUnit3");
        foldUnit.removeClass("foldUnit4");
        vm.closest(".foldUnit").addClass("foldUnit" + scn);
      });
    });

    return () => {
      $(document).ready(function () {
        $("[id^=btnFold_]").off("click");
      });
    };
  }, []);

  return (
    <div className="foldUnit foldUnit1">
      <div className="foldUnit__wrap">
        <div className="foldUnit__item item1">
          <div className="step" id="btnFold_1">
            STEP 01
          </div>
          <h3>展示中模型</h3>
          <div className="text">
            <span>五大功能：自動摘要、寫信、寫文章、中翻英、英翻中</span>
            <span>系統測試：建置完成模型測試平台</span>
          </div>
          <div className="tagUnit grey">展示中模型</div>
          <div className="date">
            <div>預計完成日：</div>
            <b>2023</b>
            <span>年</span>
            <b>6</b>
            <span>月</span>
          </div>
        </div>
        <div className="foldUnit__item item2">
          <div className="step" id="btnFold_2">
            STEP 02
          </div>
          <h3>展示大模型</h3>
          <div className="text">
            <span>
              任務導向功能：如「認識臺灣」、「臺灣考試」、「事實查核」等任務。
            </span>
            <span>
              系統測試：委由外部單位進行驗證測試（如標註公司或研究機構）釋出中模型給TAIDE合作夥伴、釋出第一批正體中文資料集、協助三家業者基於TAIDE開發應用。
            </span>
          </div>
          <div className="tagUnit grey">展示大模型</div>
          <div className="date">
            <div>預計完成日：</div>
            <b>2023</b>
            <span>年</span>
            <b>9</b>
            <span>月</span>
          </div>
        </div>
        <div className="foldUnit__item item3">
          <div className="step" id="btnFold_3">
            STEP 03
          </div>
          <h3>展示可信大模型</h3>
          <div className="text">
            <span>任務導向功能:</span>
            <span>·有考慮倫理因素的問答·備阻絕產生不適當回應能力</span>
            <span>系統測試:</span>
            <span>·委由外部單位進行驗證測試（如標註公司或研究機構）</span>
            <span>·邀請應用發展合作夥伴(如公部門人員進行測試)</span>
            <span>
              ·釋出大模型給TAIDE合作夥伴·協助國科會發展內部應用(如申請計畫Q/A)
            </span>
          </div>
          <div className="tagUnit grey">展示可信大模型</div>
          <div className="date">
            <div>預計完成日：</div>
            <b>2023</b>
            <span>年</span>
            <b>12</b>
            <span>月</span>
          </div>
        </div>
        <div className="foldUnit__item item4">
          <div className="step" id="btnFold_4">
            STEP 04
          </div>
          <h3>展示多輪問答</h3>
          <div className="text">
            <span>
              任務導向功能：前幾階段任務做到更好的水準整理完成程式碼、資料集、文件、發展過程
            </span>
            <span>系統測試：提供第二批正體中文資料集</span>
          </div>
          <div className="tagUnit grey">展示多輪問答</div>
          <div className="date">
            <div>預計完成日：</div>
            <b>2024</b>
            <span>年</span>
            <b>3</b>
            <span>月</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StageUnit;
