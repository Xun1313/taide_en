"use client";

import Image from "next/image";
import btnNextArrow from "~/images/icon/btn_nextArrow.svg";
import group_1 from "~/images/team/group_1.png";
import group_2 from "~/images/team/group_2.png";
import group_3 from "~/images/team/group_3.png";
import group_4 from "~/images/team/group_4.png";
import group_5 from "~/images/team/group_5.png";
import group_6 from "~/images/team/group_6.png";
import group_7 from "~/images/team/group_7.png";
import group_8 from "~/images/team/group_8.png";
import team_1 from "~/images/team/team_1.png";
import team_2 from "~/images/team/team_2.png";
import team_3 from "~/images/team/team_3.png";
import team_4 from "~/images/team/team_4.png";
import team_5 from "~/images/team/team_5.png";
import team_6 from "~/images/team/team_6.png";
import team_7 from "~/images/team/team_7.png";
import team_8 from "~/images/team/team_8.png";
import team_9 from "~/images/team/team_9.png";
import team_10 from "~/images/team/team_10.png";
import team_11 from "~/images/team/team_11.png";
import team_12 from "~/images/team/team_12.png";
import team_13 from "~/images/team/team_13.png";
import team_14 from "~/images/team/team_14.png";
import team_15 from "~/images/team/team_15.png";
import team_16 from "~/images/team/team_16.png";
import { useState, useEffect, useMemo } from "react";
const FilterRender = () => {
  const [active, setActive] = useState("全部");
  const menuList = useMemo(
    () => [
      "全部",
      "模型組",
      "資料組",
      "算力組",
      "應用組",
      "觀測組",
      "評測組",
      "督導管理",
      "執行管理",
    ],
    []
  );

  useEffect(() => {
    $(document).ready(function () {
      var $grid = $(".grid").isotope({
        itemSelector: ".element-item",
        layoutMode: "fitRows",
      });
      $(".filter-button-group").on("click", "button", function () {
        var filterValue = $(this).attr("data-filter");
        $grid.isotope({ filter: filterValue });
      });

      const path = window.location.hash.split("/").pop();
      if (path == "#tag1") {
        setActive(menuList[1]);
        $grid.isotope({ filter: ".tag1" });
      } else if (path == "#tag2") {
        setActive(menuList[2]);
        $grid.isotope({ filter: ".tag2" });
      } else if (path == "#tag3") {
        setActive(menuList[3]);
        $grid.isotope({ filter: ".tag3" });
      } else if (path == "#tag4") {
        setActive(menuList[4]);
        $grid.isotope({ filter: ".tag4" });
      } else if (path == "#tag5") {
        setActive(menuList[5]);
        $grid.isotope({ filter: ".tag5" });
        $(".element-item.tag5").hide();
      } else if (path == "#tag6") {
        setActive(menuList[6]);
        $grid.isotope({ filter: ".tag6" });
        $(".element-item.tag6").hide();
      } else if (path == "#tag7") {
        setActive(menuList[7]);
        $grid.isotope({ filter: ".tag7" });
      } else if (path == "#tag8") {
        setActive(menuList[8]);
        $grid.isotope({ filter: ".tag8" });
      }
    });

    return () => {
      $(document).ready(function () {
        $(".filter-button-group").off("click");
      });
    };
  }, [menuList]);

  useEffect(() => {
    if (active === menuList[5] || active === menuList[6]) {
      $(document).ready(function () {
        $(".grid").isotope({
          itemSelector: ".element-item",
          layoutMode: "fitRows",
        });
      });
    }
  }, [active]);

  return (
    <>
      <div data-js="filtering-demo">
        <div className="tagList tagClick filter-button-group button-group js-radio-button-group">
          {menuList.map((e, i) => (
            <button
              className={`tagUnit secondary ${i > 0 ? `tagUnit${i}` : ""} ${
                active === e ? "active" : ""
              }`}
              id={`tagUnit_${i}`}
              data-filter={i === 0 ? "*" : `.tag${i}`}
              onClick={() => setActive(e)}
              key={e}
            >
              {e}
            </button>
          ))}
        </div>
        <div className="cardGroupTeam">
          <div
            className={`cardGroup cardGroup1 ${
              active === menuList[1] && "open"
            }`}
            id="cardGroup_1"
          >
            <div className="cardGroup__item max">
              <div className="photo">
                <Image src={group_4} alt="計畫督導管理" />
              </div>
            </div>
            <div className="cardGroup__item">
              <h2>
                採用市面上以英文資料為主訓練出的現有模型作為基礎模型，並在臺灣本土語料上進行持續訓練和優化
              </h2>
              <ul>
                <li>
                  利用現有生成式人工智慧模型為基礎，增加本土可信任資訊，調整及訓練成為符合本團隊可運用之生成式人工智慧模型。
                </li>
                <li>
                  蒐集政府機關QA與去個資化客服對答等對話語料、微調優化模型。
                </li>
                <li>
                  建立RLHF(Reinforcement Learning with Human
                  Feedback)流程，提升模型訓練能力。
                </li>
                <li>建立紅隊測試機制，持續關注 AI 倫理問題與政策規範。</li>
              </ul>
            </div>
          </div>
          <div
            className={`cardGroup cardGroup2 ${
              active === menuList[2] && "open"
            }`}
            id="cardGroup_2"
          >
            <div className="cardGroup__item max">
              <div className="photo">
                <Image src={group_3} alt="計畫督導管理" />
              </div>
            </div>
            <div className="cardGroup__item">
              <h2>
                蒐集及篩選語料清單
                <br />
                資料取得洽商
                <br />
                資料前處理
              </h2>
              <ul>
                <li>
                  蒐集及篩選語料清單：包括常用的自然語言資料集，以及具臺灣主體性之文本資料。
                </li>
                <li>資料取得洽商：資料使用授權處理。</li>
                <li>資料處理：包括清洗、標註及分類編碼等。</li>
              </ul>
            </div>
          </div>
          <div
            className={`cardGroup cardGroup3 ${
              active === menuList[3] && "open"
            }`}
            id="cardGroup_3"
          >
            <div className="cardGroup__item max">
              <div className="photo">
                <Image src={group_5} alt="TAIDE模型" />
              </div>
            </div>
            <div className="cardGroup__item">
              <h2>建置運算環境與效能優化服務</h2>
              <ul>
                <li>提供語言資料整備，整合並清理的計算資源。</li>
                <li>提供模型訓練、應用服務、資料儲存資源。</li>
                <li>提供跨節點運算技術開發與調校服務。</li>
              </ul>
            </div>
          </div>
          <div
            className={`cardGroup cardGroup4 ${
              active === menuList[4] && "open"
            }`}
            id="cardGroup_4"
          >
            <div className="cardGroup__item max">
              <div className="photo">
                <Image src={group_6} alt="TAIDE模型" />
              </div>
            </div>
            <div className="cardGroup__item">
              <h2>
                建構繁體中文版大型語言模型之雲端應用服務平台，提供模型測試，並與計畫合作優化效能
              </h2>
              <ul>
                <li>大型語言模型性能測試調教。</li>
                <li>設計雲端應用服務平台架構。</li>
                <li>開發可信任生成式 AI 模型的 APIs。</li>
                <li>雲端應用服務平台上線服務。</li>
              </ul>
            </div>
          </div>
          <div
            className={`cardGroup cardGroup5 ${
              active === menuList[5] && "open"
            }`}
            id="cardGroup_5"
          >
            <div className="cardGroup__item max">
              <div className="photo">
                <Image src={group_7} alt="TAIDE模型" />
              </div>
            </div>
            <div className="cardGroup__item">
              <h2>協助AI法制化規劃</h2>
              <h2>研究臺灣產業大型語言模型之現況與策略</h2>
              <h2>評估國際組織AI資料標準、推動作法及規範</h2>
            </div>
          </div>
          <div
            className={`cardGroup cardGroup6 ${
              active === menuList[6] && "open"
            }`}
            id="cardGroup_6"
          >
            <div className="cardGroup__item max">
              <div className="photo">
                <Image src={group_7} alt="TAIDE模型" />
              </div>
            </div>
            <div className="cardGroup__item">
              <h2>研發AI評測工具與建立驗測資料庫</h2>
              <h2>規劃並建立AI產品與系統評測中心/實驗室機制</h2>
              <h2>成立AI產品、系統評測中心與進行AI評測服務驗證試行</h2>
            </div>
          </div>
          <div
            className={`cardGroup cardGroup7 ${
              active === menuList[7] && "open"
            }`}
            id="cardGroup_7"
          >
            <div className="cardGroup__item max">
              <div className="photo">
                <Image src={group_1} alt="計畫督導管理" />
              </div>
            </div>
            <div className="cardGroup__item">
              <h2>計畫督導管理</h2>
              <ul>
                <li>負責計畫團隊進度監督及與外部團隊進行溝通。</li>
                <li>負責計畫團隊成果發表及計畫團隊外部合作事宜溝通。</li>
                <li>協助計畫團隊內部成員溝通及統整計畫團隊相關成果事宜。</li>
                <li>統整計畫團隊相關成果並對外發表。</li>
              </ul>
            </div>
          </div>
          <div
            className={`cardGroup cardGroup8 ${
              active === menuList[8] && "open"
            }`}
            id="cardGroup_8"
          >
            <div className="cardGroup__item max">
              <div className="photo">
                <Image src={group_2} alt="計畫督導管理" />
              </div>
            </div>
            <div className="cardGroup__item">
              <h2>計畫執行管理</h2>
              <ul>
                <li>針對計畫總體進行方向進行溝通並管理各團隊工作能量。</li>
                <li>
                  針對計畫團隊處理資料、模型擴散、合作廠商相關法律問題進行了解與溝通。
                </li>
                <li>針對國內外各生成式人工智慧法律條文進行關注與了解。</li>
                <li>解決計畫相關重點問題及資料標註相關問題。</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="cardTeam grid">
          <div className="cardTeam__item element-item tag7">
            <div className="photo">
              <Image src={team_4} alt="李育杰 Lee, Yuh-Jye" />
            </div>
            <div className="infoCon">
              <h4>
                <span>李育杰</span>
                <span>Lee, Yuh-Jye</span>
              </h4>
              <div className="text">
                <span>TWNIC財團法人臺灣網路資訊中心 董事</span>
                <span>科技政策諮詢專家室-資通訊群組 召集人</span>
                <span>中央研究院資訊科技創新研究中心 研究員</span>
              </div>
              <div className="tagList">
                <div className="tagUnit secondary">督導管理</div>
                <div className="tagUnit secondary">顧問</div>
              </div>
            </div>
          </div>
          <div className="cardTeam__item element-item tag1">
            <div className="photo">
              <a
                href="https://www.iisr.csie.ncu.edu.tw/faculty"
                target="_blank"
              ></a>
              <Image src={team_8} alt="蔡宗翰 Tsai, Tzong-Han" />

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
                <span>國立中央大學資訊工程學系 教授</span>
              </div>
              <div className="tagList">
                <div className="tagUnit secondary">模型組</div>
                <div className="tagUnit secondary">顧問</div>
                <div className="tagUnit secondary">召集人</div>
              </div>
            </div>
          </div>
          <div className="cardTeam__item element-item tag1">
            <div className="photo">
              <a
                href="https://iagentntu.github.io/professor/Jane.html"
                target="_blank"
              ></a>
              <Image src={team_9} alt="許永真 Hsu, Yung-Jen" />

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
                <span>許永真</span>
                <span>Hsu, Yung-Jen</span>
              </h4>
              <div className="text">
                <span>國立臺灣大學資訊工程學系 教授</span>
              </div>
              <div className="tagList">
                <div className="tagUnit secondary">模型組</div>
                <div className="tagUnit secondary">顧問</div>
              </div>
            </div>
          </div>
          <div className="cardTeam__item element-item tag1">
            <div className="photo">
              <a href="https://cgilab.nctu.edu.tw/~icwu/" target="_blank"></a>
              <Image src={team_10} alt="吳毅成 Wu, I-Chen" />

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
                <span>吳毅成</span>
                <span>Wu, I-Chen</span>
              </h4>
              <div className="text">
                <span>國立陽明交通大學資訊學院 特聘教授、副院長</span>
              </div>
              <div className="tagList">
                <div className="tagUnit secondary">模型組</div>
                <div className="tagUnit secondary">顧問</div>
              </div>
            </div>
          </div>
          <div className="cardTeam__item element-item tag1">
            <div className="photo">
              <a
                href="http://speech.ee.ntu.edu.tw/~tlkagk/index.html"
                target="_blank"
              ></a>
              <Image src={team_11} alt="李宏毅 Lee, Hung-Yi" />

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
              </div>
              <div className="tagList">
                <div className="tagUnit secondary">模型組</div>
                <div className="tagUnit secondary">計畫內專家</div>
              </div>
            </div>
          </div>
          <div className="cardTeam__item element-item tag1">
            <div className="photo">
              <a
                href="https://sites.google.com/nycu.edu.tw/speechlabx/prof-yuan-fu-liao?authuser=0"
                target="_blank"
              ></a>
              <Image src={team_12} alt="廖元甫 Liao, Yuan-Fu" />

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
                <span>廖元甫</span>
                <span>Liao, Yuan-Fu</span>
              </h4>
              <div className="text">
                <span>國立陽明交通大學產業創新研究學院智能系統研究所 教授</span>
              </div>
              <div className="tagList">
                <div className="tagUnit secondary">模型組</div>
                <div className="tagUnit secondary">顧問</div>
              </div>
            </div>
          </div>
          <div className="cardTeam__item element-item tag2">
            <div className="photo">
              <a href="https://lab.depositar.io/" target="_blank"></a>
              <Image src={team_7} alt="莊庭瑞 Chuang, Tyng-Ruey" />

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
                <span>莊庭瑞</span>
                <span>Chuang, Tyng-Ruey</span>
              </h4>
              <div className="text">
                <span>中央研究院資訊科學研究所 副研究員</span>
              </div>
              <div className="tagList">
                <div className="tagUnit secondary">資料組</div>
                <div className="tagUnit secondary">顧問</div>
              </div>
            </div>
          </div>
          <div className="cardTeam__item element-item tag3">
            <div className="photo">
              <Image src={team_13} alt="張朝亮 Chang, Chau-Lyan" />
            </div>
            <div className="infoCon">
              <h4>
                <span>張朝亮</span>
                <span>Chang, Chau-Lyan</span>
              </h4>
              <div className="text">
                <span>國家高速網路與計算中心 主任</span>
              </div>
              <div className="tagList">
                <div className="tagUnit secondary">算力組</div>
                <div className="tagUnit secondary">計畫共同主持人</div>
              </div>
            </div>
          </div>
          <div className="cardTeam__item element-item tag4">
            <div className="photo">
              <a href="https://www.csie.nuk.edu.tw/~wuch/" target="_blank"></a>
              <Image src={team_14} alt="吳俊興 Wu, Chun-Hsin" />

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
                <span>吳俊興</span>
                <span>Wu, Chun-Hsin</span>
              </h4>
              <div className="text">
                <span>國立高雄大學 資訊工程學系 副教授</span>
              </div>
              <div className="tagList">
                <div className="tagUnit secondary">應用組</div>
                <div className="tagUnit secondary">顧問</div>
              </div>
            </div>
          </div>
          <div className="cardTeam__item element-item tag7">
            <div className="photo">
              <Image src={team_1} alt="林博文 Lin, Bou-Wen" />
            </div>
            <div className="infoCon">
              <h4>
                <span>林博文</span>
                <span>Lin, Bou-Wen</span>
              </h4>
              <div className="text">
                <span>國家實驗研究院 副院長</span>
              </div>
              <div className="tagList">
                <div className="tagUnit secondary">督導管理</div>
                <div className="tagUnit secondary">計畫主持人</div>
              </div>
            </div>
          </div>
          <div className="cardTeam__item element-item tag7">
            <div className="photo">
              <Image src={team_2} alt="許福添 Hsu, Fu-Tien" />
            </div>
            <div className="infoCon">
              <h4>
                <span>許福添</span>
                <span>Hsu, Fu-Tien</span>
              </h4>
              <div className="text">
                <span>數位發展部數位產業署平臺經濟組組長</span>
              </div>
              <div className="tagList">
                <div className="tagUnit secondary">督導管理</div>
                <div className="tagUnit secondary">計畫共同主持人</div>
              </div>
            </div>
          </div>
          <div className="cardTeam__item element-item tag7">
            <div className="photo">
              <Image src={team_3} alt="蕭景燈 Hsiao, Ching-Ten" />
            </div>
            <div className="infoCon">
              <h4>
                <span>蕭景燈</span>
                <span>Hsiao, Ching-Teng</span>
              </h4>
              <div className="text">
                <span>國科會科技辦公室 組主任</span>
              </div>
              <div className="tagList">
                <div className="tagUnit secondary">督導管理</div>
                <div className="tagUnit secondary">國科會科技辦公室總協調</div>
              </div>
            </div>
          </div>
          <div className="cardTeam__item element-item tag8">
            <div className="photo">
              <Image src={team_5} alt="許武龍 Hsu, Wuu-Long" />
            </div>
            <div className="infoCon">
              <h4>
                <span>許武龍</span>
                <span>Hsu, Wuu-Long</span>
              </h4>
              <div className="text">
                <span>LASS開源環境感測網路創辦人</span>
              </div>
              <div className="tagList">
                <div className="tagUnit secondary">執行管理</div>
                <div className="tagUnit secondary">專案經理</div>
              </div>
            </div>
          </div>
          <div className="cardTeam__item element-item tag8">
            <div className="photo">
              <Image src={team_6} alt="蕭奕弘 Hsiao, Yi-Hon" />
            </div>
            <div className="infoCon">
              <h4>
                <span>蕭奕弘</span>
                <span>Hsiao, Yi-Hon</span>
              </h4>
              <div className="text">
                <span>蕭奕弘律師事務所主持律師</span>
              </div>
              <div className="tagList">
                <div className="tagUnit secondary">執行管理</div>
                <div className="tagUnit secondary">顧問</div>
              </div>
            </div>
          </div>

          <div
            className={`cardTeam__item element-item tag7 hide7 ${
              active === menuList[7] ? "hide" : ""
            }`}
          >
            <div className="photo">
              <Image src={team_15} alt="協助AI法制化規劃" />
            </div>
            <div className="infoCon">
              <h4>
                <span>協助AI法制化規劃</span>
                <span>研究臺灣產業大型語言模型之現況與策略</span>
                <span>評估國際組織AI資料標準、推動作法及規範</span>
              </h4>
              <div className="tagList">
                <div className="tagUnit secondary">觀測組</div>
              </div>
            </div>
          </div>
          <div
            className={`cardTeam__item element-item tag8 hide8  ${
              active === menuList[8] ? "hide" : ""
            }`}
          >
            <div className="photo">
              <Image src={team_15} alt="研發AI評測工具與建立驗測資料庫" />
            </div>
            <div className="infoCon">
              <h4>
                <span>研發AI評測工具與建立驗測資料庫</span>
                <span>規劃並建立AI產品與系統評測中心/實驗室機制</span>
                <span>成立AI產品、系統評測中心與進行AI評測服務驗證試行</span>
              </h4>
              <div className="tagList">
                <div className="tagUnit secondary">評測組</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterRender;
