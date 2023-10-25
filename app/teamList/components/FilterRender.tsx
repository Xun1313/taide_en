"use client";

import Image from "next/image";
import btnNextArrow from "~/images/icon/btn_nextArrow.svg";
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
import { useState } from "react";

const FilterRender = () => {
  const [active, setActive] = useState("全部");
  return (
    <>
      <div data-js="filtering-demo">
        <div className="tagList tagClick filter-button-group button-group js-radio-button-group">
          <button
            className={`tagUnit secondary ${active === "全部" && "active"}`}
            data-filter="*"
            onClick={() => setActive("全部")}
          >
            全部
          </button>
          <button
            className={`tagUnit secondary ${active === "督導管理" && "active"}`}
            data-filter=".tag1"
            onClick={() => setActive("督導管理")}
          >
            督導管理
          </button>
          <button
            className={`tagUnit secondary ${active === "執行管理" && "active"}`}
            data-filter=".tag2"
            onClick={() => setActive("執行管理")}
          >
            執行管理
          </button>
          <button
            className={`tagUnit secondary ${active === "資料組" && "active"}`}
            data-filter=".tag3"
            onClick={() => setActive("資料組")}
          >
            資料組
          </button>
          <button
            className={`tagUnit secondary ${active === "模型組" && "active"}`}
            data-filter=".tag4"
            onClick={() => setActive("模型組")}
          >
            模型組
          </button>
          <button
            className={`tagUnit secondary ${active === "算力組" && "active"}`}
            data-filter=".tag5"
            onClick={() => setActive("算力組")}
          >
            算力組
          </button>
          <button
            className={`tagUnit secondary ${active === "應用組" && "active"}`}
            data-filter=".tag6"
            onClick={() => setActive("應用組")}
          >
            應用組
          </button>
          <button
            className={`tagUnit secondary ${active === "觀測組" && "active"}`}
            data-filter=".tag7"
            onClick={() => setActive("觀測組")}
          >
            觀測組
          </button>
          <button
            className={`tagUnit secondary ${active === "評測組" && "active"}`}
            data-filter=".tag8"
            onClick={() => setActive("評測組")}
          >
            評測組
          </button>
        </div>
        <div className="cardTeam grid">
          <div className="cardTeam__item element-item tag1 tag3">
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
                <div className="tagUnit secondary">資料組</div>
              </div>
            </div>
          </div>
          <div className="cardTeam__item element-item tag1">
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
              </div>
            </div>
          </div>
          <div className="cardTeam__item element-item tag1">
            <div className="photo">
              <Image src={team_3} alt="蕭景燈 Hsiao, Ching-Teng" />
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
              </div>
            </div>
          </div>
          <div className="cardTeam__item element-item tag1">
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
              </div>
            </div>
          </div>
          <div className="cardTeam__item element-item tag2">
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
              </div>
            </div>
          </div>
          <div className="cardTeam__item element-item tag2">
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
              </div>
            </div>
          </div>
          <div className="cardTeam__item element-item tag3">
            <div className="photo">
              <a href="https://lab.depositar.io/" target="_blank"></a>
              <Image src={team_7} alt="莊庭瑞 Chuang, Tyng-Ruey" />
              <div className="btn">
                <Image src={btnNextArrow} alt="arrow" />
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
              </div>
            </div>
          </div>
          <div className="cardTeam__item element-item tag4">
            <div className="photo">
              <a
                href="https://www.iisr.csie.ncu.edu.tw/faculty"
                target="_blank"
              ></a>
              <Image src={team_8} alt="蔡宗翰 Tsai, Tzong-Han" />
              <div className="btn">
                <Image src={btnNextArrow} alt="arrow" />
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
              </div>
            </div>
          </div>
          <div className="cardTeam__item element-item tag4">
            <div className="photo">
              <a
                href="https://iagentntu.github.io/professor/Jane.html"
                target="_blank"
              ></a>
              <Image src={team_9} alt="許永真 Hsu, Yung-Je" />
              <div className="btn">
                <Image src={btnNextArrow} alt="arrow" />
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
              </div>
            </div>
          </div>
          <div className="cardTeam__item element-item tag4">
            <div className="photo">
              <a href="https://cgilab.nctu.edu.tw/~icwu/" target="_blank"></a>
              <Image src={team_10} alt="吳毅成 Wu, I-Chen" />
              <div className="btn">
                <Image src={btnNextArrow} alt="arrow" />
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
              </div>
            </div>
          </div>
          <div className="cardTeam__item element-item tag4">
            <div className="photo">
              <a
                href="http://speech.ee.ntu.edu.tw/~tlkagk/index.html"
                target="_blank"
              ></a>
              <Image src={team_11} alt="李宏毅 Lee, Hung-Yi" />
              <div className="btn">
                <Image src={btnNextArrow} alt="arrow" />
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
              </div>
            </div>
          </div>
          <div className="cardTeam__item element-item tag4">
            <div className="photo">
              <a
                href="https://sites.google.com/nycu.edu.tw/speechlabx/prof-yuan-fu-liao?authuser=0"
                target="_blank"
              ></a>
              <Image src={team_12} alt="廖元甫 Liao, Yuan-Fu" />
              <div className="btn">
                <Image src={btnNextArrow} alt="arrow" />
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
              </div>
            </div>
          </div>
          <div className="cardTeam__item element-item tag1 tag5 tag6">
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
                <div className="tagUnit secondary">計畫共同主持人</div>
                <div className="tagUnit secondary">算力組</div>
                <div className="tagUnit secondary">應用組</div>
              </div>
            </div>
          </div>
          <div className="cardTeam__item element-item tag6">
            <div className="photo">
              <a href="https://www.csie.nuk.edu.tw/~wuch/" target="_blank"></a>
              <Image src={team_14} alt="吳俊興 Wu, Chun-Hsin" />
              <div className="btn">
                <Image src={btnNextArrow} alt="arrow" />
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
              </div>
            </div>
          </div>

          <div className="cardTeam__item element-item tag7">
            <div className="photo">
              <Image src={team_15} alt="協助AI法制化規劃" />
            </div>
            <div className="infoCon">
              <h4>
                <span>協助AI法制化規劃</span>
                <span>研究臺灣產業大型語言模型之現況與策略</span>
              </h4>
              <div className="text">
                <span>評估國際組織AI資料標準、推動作法及規範</span>
              </div>
              <div className="tagList">
                <div className="tagUnit secondary">觀測組</div>
              </div>
            </div>
          </div>
          <div className="cardTeam__item element-item tag8">
            <div className="photo">
              <Image src={team_16} alt="研發AI評測工具與建立驗測資料庫" />
            </div>
            <div className="infoCon">
              <h4>
                <span>研發AI評測工具與建立驗測資料庫</span>
                <span>規劃並建立AI產品與系統評測中心/實驗室機制</span>
              </h4>
              <div className="text">
                <span>成立AI產品、系統評測中心與進行AI評測服務驗證試行</span>
              </div>

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
