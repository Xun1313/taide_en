"use client";
import Image from "next/image";
import { useEffect } from "react";

import logo_nstc from "~/images/en/logo_nstc.png";
import btn_nextArrow from "~/images/icon/btn_nextArrow.svg";
import logo_stpi1 from "~/images/en/logo_stpi1.png";
import logo_nchc from "~/images/en/logo_nchc.png";
import logo_moda from "~/images/en/logo_moda.png";
import logo_stpi2 from "~/images/en/logo_stpi2.png";

import icon_popup_close from "~/images/en/icon_popup_close.svg";

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
import team_17 from "~/images/team/team_17.png";

const TeamUnit = () => {
  function openPopupMsg1() {
    $(".popupUnit1").addClass("open");
  }
  function openPopupMsg2() {
    $(".popupUnit2").addClass("open");
  }
  function openPopupMsg3() {
    $(".popupUnit3").addClass("open");
  }
  function openPopupMsg4() {
    $(".popupUnit4").addClass("open");
  }
  function openPopupMsg5() {
    $(".popupUnit5").addClass("open");
  }
  function openPopupMsg6() {
    $(".popupUnit6").addClass("open");
  }
  function closePopupMsg() {
    $(".popupUnit").removeClass("open");
  }

  return (
    <>
      <article className="teamUnit">
        <a id="toTeam"></a>
        <div className="teamUnit__body">
          <h2>TAIDE Team</h2>
          <div className="row">
            <div className="cardTeam max">
              <div className="cardTeam__item">
                <h3>National Science and Technology Council</h3>
                <div className="text">
                  <span>
                    Comprising the National Applied Research Laboratories,
                  </span>
                  <span>
                    Ministry of Digital Affairs, Academia Sinica, professors
                    from major
                  </span>
                  <span>universities, and experts from various fields.</span>
                </div>
                <div className="logo">
                  <Image
                    src={logo_nstc}
                    style={{ height: "auto" }}
                    alt="logo"
                  />
                </div>
              </div>
            </div>
            <div className="cardTeam">
              <div className="cardTeam__item cardTeam__item1 odd max">
                <h3>Elite Ensemble</h3>
              </div>
              <div className="cardTeam__item odd">
                <h3>Core model training with RLHF group</h3>
                <div className="btn">
                  <a onClick={openPopupMsg1} style={{ cursor: "pointer" }}>
                    <span>
                      professional
                      <br />
                      cabinet
                    </span>
                    <Image
                      src={btn_nextArrow}
                      style={{ height: "auto" }}
                      alt="arrow"
                    />
                  </a>
                </div>
              </div>
              <div className="cardTeam__item odd">
                <h3>Data acquisition with annotation team</h3>
                <div className="logo">
                  <Image
                    src={logo_stpi1}
                    style={{ height: "auto" }}
                    alt="logo"
                  />
                </div>
                <div className="btn">
                  <a onClick={openPopupMsg2} style={{ cursor: "pointer" }}>
                    <span>
                      professional
                      <br />
                      cabinet
                    </span>
                    <Image
                      src={btn_nextArrow}
                      style={{ height: "auto" }}
                      alt="arrow"
                    />
                  </a>
                </div>
              </div>
              <div className="cardTeam__item odd">
                <h3>
                  High-speed computing resources and technical support team
                </h3>
                <div className="logo w80">
                  <Image
                    src={logo_nchc}
                    style={{ height: "auto" }}
                    alt="logo"
                  />
                </div>
                <div className="btn">
                  <a onClick={openPopupMsg3} style={{ cursor: "pointer" }}>
                    <span>
                      professional
                      <br />
                      cabinet
                    </span>
                    <Image
                      src={btn_nextArrow}
                      style={{ height: "auto" }}
                      alt="arrow"
                    />
                  </a>
                </div>
              </div>
              <div className="cardTeam__item odd">
                <h3>
                  Application service platform construction and management team
                </h3>
                <div className="logo w80">
                  <Image
                    src={logo_nchc}
                    style={{ height: "auto" }}
                    alt="logo"
                  />
                </div>
                <div className="btn">
                  <a onClick={openPopupMsg4} style={{ cursor: "pointer" }}>
                    <span>
                      professional
                      <br />
                      cabinet
                    </span>
                    <Image
                      src={btn_nextArrow}
                      style={{ height: "auto" }}
                      alt="arrow"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="cardTeam">
              <div className="cardTeam__item cardTeam__item1 even max">
                <h3>Superior Team</h3>
              </div>
              <div className="cardTeam__item cardTeam__item2 even max">
                <h3>International observation with specification group</h3>
                <h3>Evaluation system and Testing Environment Team</h3>
                <div className="logo w80">
                  <Image
                    src={logo_moda}
                    style={{ height: "auto" }}
                    alt="logo"
                  />
                </div>
              </div>
              <div className="cardTeam__item even">
                <h3>Project Supervision Management</h3>
                <div className="btn">
                  <a onClick={openPopupMsg5} style={{ cursor: "pointer" }}>
                    <span>
                      professional
                      <br />
                      cabinet
                    </span>
                    <Image
                      src={btn_nextArrow}
                      style={{ height: "auto" }}
                      alt="arrow"
                    />
                  </a>
                </div>
              </div>
              <div className="cardTeam__item even">
                <h3>Project Execution Management</h3>
                <div className="logo w80">
                  <Image
                    src={logo_stpi2}
                    style={{ height: "auto" }}
                    alt="logo"
                  />
                </div>
                <div className="btn">
                  <a onClick={openPopupMsg6} style={{ cursor: "pointer" }}>
                    <span>
                      professional
                      <br />
                      cabinet
                    </span>
                    <Image
                      src={btn_nextArrow}
                      style={{ height: "auto" }}
                      alt="arrow"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <div className="popupUnit popupUnit1">
        <a className="popupUnit__bg" onClick={closePopupMsg}></a>
        <div className="popupUnit__wrap">
          <a
            className="close"
            style={{ cursor: "pointer" }}
            onClick={closePopupMsg}
          >
            <Image
              src={icon_popup_close}
              style={{ height: "auto" }}
              alt="close"
            />
          </a>
          <h2>Core model training with RLHF group</h2>
          <article className="teamList">
            <div className="teamList__body">
              <div data-js="filtering-demo">
                <div className="cardTeam">
                  <div className="cardTeam__item">
                    <div className="photo">
                      <a
                        href="https://www.iisr.csie.ncu.edu.tw/faculty"
                        target="_blank"
                      ></a>
                      <Image src={team_8} alt="蔡宗翰 Tsai, Tzong-Han" />

                      <div className="btn">
                        <Image
                          src={btn_nextArrow}
                          style={{ height: "auto" }}
                          alt="arrow"
                        />
                      </div>
                    </div>
                    <div className="infoCon">
                      <h4>
                        <span>Tsai, Tzong-Han</span>
                      </h4>
                      <div className="text">
                        <span>
                          Department of Computer Science & Information
                          Engineering, National Central University
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="cardTeam__item">
                    <div className="photo">
                      <a
                        href="https://iagentntu.github.io/professor/Jane.html"
                        target="_blank"
                      ></a>
                      <Image src={team_9} alt="許永真 Hsu, Yung-Jen" />

                      <div className="btn">
                        <Image
                          src={btn_nextArrow}
                          style={{ height: "auto" }}
                          alt="arrow"
                        />
                      </div>
                    </div>
                    <div className="infoCon">
                      <h4>
                        <span>Hsu, Yung-Jen</span>
                      </h4>
                      <div className="text">
                        <span>
                          Department of Computer Science and Information
                          Engineering, National Taiwan University
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="cardTeam__item">
                    <div className="photo">
                      <a
                        href="https://cgilab.nctu.edu.tw/~icwu/"
                        target="_blank"
                      ></a>
                      <Image src={team_10} alt="吳毅成 Wu, I-Chen" />

                      <div className="btn">
                        <Image
                          src={btn_nextArrow}
                          style={{ height: "auto" }}
                          alt="arrow"
                        />
                      </div>
                    </div>
                    <div className="infoCon">
                      <h4>
                        <span>Wu, I-Chen</span>
                      </h4>
                      <div className="text">
                        <span>
                          College of Computer Science, National Yang Ming Chiao
                          Tung University
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="cardTeam__item">
                    <div className="photo">
                      <a
                        href="http://speech.ee.ntu.edu.tw/~tlkagk/index.html"
                        target="_blank"
                      ></a>
                      <Image src={team_11} alt="李宏毅 Lee, Hung-Yi" />

                      <div className="btn">
                        <Image
                          src={btn_nextArrow}
                          style={{ height: "auto" }}
                          alt="arrow"
                        />
                      </div>
                    </div>
                    <div className="infoCon">
                      <h4>
                        <span>Lee, Hung-Yi</span>
                      </h4>
                      <div className="text">
                        <span>
                          Department of Electrical Engineering, National Taiwan
                          University
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="cardTeam__item">
                    <div className="photo">
                      <a
                        href="https://sites.google.com/nycu.edu.tw/speechlabx/prof-yuan-fu-liao?authuser=0"
                        target="_blank"
                      ></a>
                      <Image src={team_12} alt="廖元甫 Liao, Yuan-Fu" />

                      <div className="btn">
                        <Image
                          src={btn_nextArrow}
                          style={{ height: "auto" }}
                          alt="arrow"
                        />
                      </div>
                    </div>
                    <div className="infoCon">
                      <h4>
                        <span>Liao, Yuan-Fu</span>
                      </h4>
                      <div className="text">
                        <span>
                          Institute of Artificial Intelligence Innovation,
                          Industry Academia Innovation School, National Yang
                          Ming Chiao Tung University
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="cardTeam__item">
                    <div className="photo">
                      <a
                        href="https://homepage.iis.sinica.edu.tw/pages/hhhuang/contact_zh.html"
                        target="_blank"
                      ></a>
                      <Image src={team_17} alt="黃瀚萱 Huang, Hen-Hsen" />

                      <div className="btn">
                        <Image
                          src={btn_nextArrow}
                          style={{ height: "auto" }}
                          alt="arrow"
                        />
                      </div>
                    </div>
                    <div className="infoCon">
                      <h4>
                        <span>Huang, Hen-Hsen</span>
                      </h4>
                      <div className="text">
                        <span>
                          Institute of Information Science, Academia Sinica
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div className="popupUnit popupUnit2">
        <a className="popupUnit__bg" onClick={closePopupMsg}></a>
        <div className="popupUnit__wrap">
          <a
            className="close"
            style={{ cursor: "pointer" }}
            onClick={closePopupMsg}
          >
            <Image
              src={icon_popup_close}
              style={{ height: "auto" }}
              alt="close"
            />
          </a>
          <h2>Data acquisition with annotation team</h2>
          <article className="teamList">
            <div className="teamList__body">
              <div data-js="filtering-demo">
                <div className="cardTeam">
                  <div className="cardTeam__item">
                    <div className="photo">
                      <a href="https://lab.depositar.io/" target="_blank"></a>
                      <Image src={team_7} alt="莊庭瑞 Chuang, Tyng-Ruey" />

                      <div className="btn">
                        <Image
                          src={btn_nextArrow}
                          style={{ height: "auto" }}
                          alt="arrow"
                        />
                      </div>
                    </div>
                    <div className="infoCon">
                      <h4>
                        <span>Chuang, Tyng-Ruey</span>
                      </h4>
                      <div className="text">
                        <span>
                          Institute of Information Science, Academia Sinica
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div className="popupUnit popupUnit3">
        <a className="popupUnit__bg" onClick={closePopupMsg}></a>
        <div className="popupUnit__wrap">
          <a
            className="close"
            style={{ cursor: "pointer" }}
            onClick={closePopupMsg}
          >
            <Image
              src={icon_popup_close}
              style={{ height: "auto" }}
              alt="close"
            />
          </a>
          <h2>High-speed computing resources and technical support team</h2>
          <article className="teamList">
            <div className="teamList__body">
              <div data-js="filtering-demo">
                <div className="cardTeam">
                  <div className="cardTeam__item">
                    <div className="photo">
                      <Image src={team_13} alt="張朝亮 Chang, Chau-Lyan" />
                    </div>
                    <div className="infoCon">
                      <h4>
                        <span>Chang, Chau-Lyan</span>
                      </h4>
                      <div className="text">
                        <span>
                          National Center for High-performance Computing,
                          NARLabs
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div className="popupUnit popupUnit4">
        <a className="popupUnit__bg" onClick={closePopupMsg}></a>
        <div className="popupUnit__wrap">
          <a
            className="close"
            style={{ cursor: "pointer" }}
            onClick={closePopupMsg}
          >
            <Image
              src={icon_popup_close}
              style={{ height: "auto" }}
              alt="close"
            />
          </a>
          <h2>Application service platform construction and management team</h2>
          <article className="teamList">
            <div className="teamList__body">
              <div data-js="filtering-demo">
                <div className="cardTeam">
                  <div className="cardTeam__item">
                    <div className="photo">
                      <a
                        href="https://www.csie.nuk.edu.tw/~wuch/"
                        target="_blank"
                      ></a>
                      <Image src={team_14} alt="吳俊興 Wu, Chun-Hsin" />

                      <div className="btn">
                        <Image
                          src={btn_nextArrow}
                          style={{ height: "auto" }}
                          alt="arrow"
                        />
                      </div>
                    </div>
                    <div className="infoCon">
                      <h4>
                        <span>Wu, Chun-Hsin</span>
                      </h4>
                      <div className="text">
                        <span>
                          Department of Computer Science & Information
                          Engineering, Kaohsiung University
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div className="popupUnit popupUnit5">
        <a className="popupUnit__bg" onClick={closePopupMsg}></a>
        <div className="popupUnit__wrap">
          <a
            className="close"
            style={{ cursor: "pointer" }}
            onClick={closePopupMsg}
          >
            <Image
              src={icon_popup_close}
              style={{ height: "auto" }}
              alt="close"
            />
          </a>
          <h2>Project Supervision Management</h2>
          <article className="teamList">
            <div className="teamList__body">
              <div data-js="filtering-demo">
                <div className="cardTeam">
                  <div className="cardTeam__item">
                    <div className="photo">
                      <Image src={team_4} alt="李育杰 Lee, Yuh-Jye" />
                    </div>
                    <div className="infoCon">
                      <h4>
                        <span>Lee, Yuh-Jye</span>
                      </h4>
                      <div className="text">
                        <span>
                          Research Center for Information Technology Innovation,
                          Academia Sinica
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="cardTeam__item">
                    <div className="photo">
                      <Image src={team_1} alt="林博文 Lin, Bou-Wen" />
                    </div>
                    <div className="infoCon">
                      <h4>
                        <span>Lin, Bou-Wen</span>
                      </h4>
                      <div className="text">
                        <span>National Applied Research Laboratories</span>
                      </div>
                    </div>
                  </div>
                  <div className="cardTeam__item">
                    <div className="photo">
                      <Image src={team_2} alt="林青嶔 Lin, Ching-Chin" />
                    </div>
                    <div className="infoCon">
                      <h4>
                        <span>Lin, Ching-Chin</span>
                      </h4>
                      <div className="text">
                        <span>Administration for Digital Industries, moda</span>
                      </div>
                    </div>
                  </div>
                  <div className="cardTeam__item">
                    <div className="photo">
                      <Image src={team_3} alt="蕭景燈 Hsiao, Ching-Ten" />
                    </div>
                    <div className="infoCon">
                      <h4>
                        <span>Hsiao, Ching-Teng</span>
                      </h4>
                      <div className="text">
                        <span>
                          Office of Science and Technology Policy, NSTC
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div className="popupUnit popupUnit6">
        <a className="popupUnit__bg" onClick={closePopupMsg}></a>
        <div className="popupUnit__wrap">
          <a
            className="close"
            style={{ cursor: "pointer" }}
            onClick={closePopupMsg}
          >
            <Image
              src={icon_popup_close}
              style={{ height: "auto" }}
              alt="close"
            />
          </a>
          <h2>Project Execution Management</h2>
          <article className="teamList">
            <div className="teamList__body">
              <div data-js="filtering-demo">
                <div className="cardTeam">
                  <div className="cardTeam__item">
                    <div className="photo">
                      <Image src={team_5} alt="許武龍 Hsu, Wuu-Long" />
                    </div>
                    <div className="infoCon">
                      <h4>
                        <span>Hsu, Wuu-Long</span>
                      </h4>
                      <div className="text">
                        <span>Location Aware Sensing System</span>
                      </div>
                    </div>
                  </div>
                  <div className="cardTeam__item">
                    <div className="photo">
                      <Image src={team_6} alt="蕭奕弘 Hsiao, Yi-Hon" />
                    </div>
                    <div className="infoCon">
                      <h4>
                        <span>Hsiao, Yi-Hon</span>
                      </h4>
                      <div className="text">
                        <span>Hsiao, Yi-Hon Law Firm</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default TeamUnit;
