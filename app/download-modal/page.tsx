import { WithContext } from "schema-dts";
import Image from "next/image";
import btnNextArrow from "~/images/icon/btn_nextArrow.svg";
import btnDownArrow from "~/images/icon/btn_downArrow.svg";
import bg_download from "~/images/download/bg_download.png";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "模型版本下載 - TAIDE推動臺灣可信任生成式AI發展計畫",
  description:
    "完整指南解鎖TAIDE模型版本的下載及應用秘密。讓AI技能升級，迅速上手與實踐！",
  openGraph: {
    description:
      "完整指南解鎖TAIDE模型版本的下載及應用秘密。讓AI技能升級，迅速上手與實踐！",
  },
};

const DownloadModal = () => {
  const jsonLd: WithContext<any> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "完整指南解鎖TAIDE模型版本的下載及應用秘密。讓AI技能升級，迅速上手與實踐！",
    additionalName:
      "完整指南解鎖TAIDE模型版本的下載及應用秘密。讓AI技能升級，迅速上手與實踐！",
    url: process.env.WEBSITE_DOMAIN,
    datePublished: "2023-03-02",
  };

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
              <ul>
                <li>
                  <a style={{ cursor: "pointer" }} className="toTerms">
                    ·使用政策與許可協議
                  </a>
                </li>
                <li>
                  <a style={{ cursor: "pointer" }} className="toDownload">
                    ·模型版本
                  </a>
                </li>
                <li>
                  <a style={{ cursor: "pointer" }} className="toModel">
                    ·TAIDE合作模式
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="downloadDetail">
            <div className="downloadDetail__left">
              <div className="article__item terms">
                <h2>·使用政策與許可協議</h2>
                <div className="article__con">
                  <p>
                    TAIDE模型為LLAMA2模型結合臺灣文化與正體中文語料之衍生模型。
                  </p>
                  <p>
                    本TAIDE模型許可協議（下稱本協議）載明並確保使用者（下稱「您」）使用TAIDE模型時遵守下述行為。
                  </p>
                  <p>
                    本協議適用於使用TAIDE模型之任何人，使用者存取及使用TAIDE模型
                    (包括軟體、服務及衍生作品)的前提係遵守本協議，TAIDE可能會不定時更新該規則，本協議並未包含TAIDE模型使用之所有情形，TAIDE得於任何時間修訂、增減、補充本協議，並於網站上公布修訂版本。
                  </p>
                  <p>若本協議存在任何疑義，由TAIDE保留最終解釋權利。</p>
                  <p>
                    如您違反本協議、或授權或協助他人違反本協議，TAIDE得立即暫停或終止您對TAIDE模型之全部或部份使用。
                  </p>
                  <p>
                    本協議主要包含：
                    <br />
                    (1) TAIDE授權與使用條款
                    <br />
                    (2) LLAMA2許可協議 (META AI LLAMA2 Community License
                    Agreement)
                    <br />
                    (3) LLAMA2使用條款 (META AI LLAMA2 Acceptable Use Policy)
                  </p>
                  <p>
                    其中(2) LLAMA2許可協議 (META AI LLAMA2 Community License
                    Agreement)、 (3) LLAMA使用條款 (META AI LLAMA2 Acceptable
                    Use Policy) 係參照©Meta Platforms,
                    Inc.（下稱為Meta）公布之META AI LLAMA2 Community License
                    Agreement、 META AI LLAMA2 Acceptable Use
                    Policy。本協議之內容為中譯版本，以便參照說明。
                  </p>
                  <br />
                  <h3>1. TAIDE授權與使用條款</h3>
                  <p>1.1 您於使用TAIDE模型服務過程中，必須遵循以下原則：</p>
                  <p>1.1.1 遵守中華民國法律和法規；</p>
                  <p>
                    1.1.2
                    不得為任何非法目的使用TAIDE模型（包含但不限於中華民國法律和法規與
                    LLAMA2 使用條款之內容）；
                  </p>
                  <p>
                    1.1.3
                    不使用任何設備、軟體或程序，干擾或試圖干擾TAIDE模型之正常運作；
                  </p>
                  <p>
                    1.1.4
                    不允許入侵、接通、使用或企圖入侵、接通、使用TAIDE模型之伺服器及未經TAIDE或Meta許可之任何資料區；
                  </p>
                  <p>1.1.5 不得限制、制止其他使用者使用TAIDE模型；</p>
                  <p>
                    1.1.6
                    如發現任何非法使用帳號或任何出現安全漏洞的情況，應立即告知TAIDE。
                  </p>
                  <p>
                    1.2 損害賠償
                    <br />
                    您同意保障和維護TAIDE模型及任何其他第三方之利益，如因違反法律、法規或本協議而致使TAIDE模型或任何其他第三方造成損失，您同意自行承擔所造成損害之賠償責任。
                  </p>
                  <p>1.3 責任限制</p>
                  <p>
                    1.3.1
                    TAIDE於下列情形之一時，得暫停或中斷TAIDE模型之部分或全部服務：
                    <br />
                    a. 對於TAIDE模型相關系統設備進行遷移、更換或維護時；
                    <br />
                    b. 任何不可歸責於之事由所造成之服務停止或中斷；
                    <br />
                    c. 天災或其他不可抗力造成TAIDE模型之服務停止或中斷；
                  </p>
                  <p>
                    1.3.2
                    <br />
                    在任何情況下，TAIDE對於您或任何其他第三方因使用或不能使用TAIDE模型引起之，不論係契約責任、侵權責任、過失責任、產品責任或其他責任產生之損失，或任何間接性、特殊性、後果性、附帶性利潤損失及懲罰性損害均不負責。即便TAIDE已被告知可能發生前述情況，亦同。
                  </p>
                  <p>
                    1.4 服務變更、中斷或終止
                    <br />
                    您同意TAIDE有權隨時變更、中斷或終止部分或全部的TAIDE模型服務。
                  </p>
                  <p>
                    1.5 其他規定
                    <br />
                    如本協議之任何條款無論何種原因，完全或部分無效、終止或不具有執行力，本協議之其餘條款仍應有效並具有約束力。
                  </p>
                  <p>
                    1.6 法律管轄
                    <br />
                    本協議之訂立、執行和解釋及爭議解決均應適用於中華民國法律，並以臺灣臺北地方法院作為第一審管轄法院。
                  </p>
                  <br />
                  <h3>
                    2. LLAMA2 許可協議(META AI LLAMA2 Community License
                    Agreement)
                  </h3>
                  <p>
                    2.1 「LLAMA2
                    許可協議」係指此處規範LLAMA素材之使用、複製、發布和修改的條款和條件。
                  </p>
                  <p>
                    2.2「LLAMA相關文件」係指Meta一同與LLAMA2發布於ai.meta.com/resources/models-and-libraries/LLAMA-downloads/之規格、手冊和文件。
                  </p>
                  <p>
                    2.3
                    「被授權人」或「您」係指您，或若您代表您的雇主或其他人或法人簽訂本LLAMA2
                    許可協議，則代表人及被代表人必須符合適用法規範要求的法定年齡；且若您代表您的雇主或其他人或法人簽署本LLAMA2
                    許可協議，表示於適用法規範下，您獲得被代表人之合法授權。
                  </p>
                  <p>
                    2.4 「LLAMA
                    2」係指由Meta發布的基礎大型語言模型和軟體以及相關演算法，包括機器學習模型代碼、訓練模型權重、推斷啟用代碼、訓練啟用代碼、微調啟用代碼以及前述各項元素的其他部分，可於
                    ai.meta.com/resources/models-and-libraries/LLAMA-downloads/取得。
                  </p>
                  <p>
                    2.5 「LLAMA素材」係指本LLAMA2 許可協議提供之Meta專有LLAMA 2
                    和LLAMA 相關文件（或其中之任何部分）。
                    <br />
                    「Meta」或「我們」係指Meta Platforms Ireland
                    Limited（若您（自然人）位於歐洲經濟區或瑞士，或者法人之主要營業地點位於歐洲經濟區或瑞士）和Meta
                    Platforms, Inc.（若您位於歐洲經濟區或瑞士外）。
                  </p>
                  <p>
                    2.5.1 許可權和再發布：
                    <br />
                    a. 權利授予：
                    <br />
                    根據
                    Meta的智慧財產權及其他權利，您被授予非專有、全球性、不可轉讓和免版稅的有限許可，以使用、再製、發布、複製、創建衍生作品和對LLAMA素材進行修改。
                    <br />
                    b. 再發布和使用：
                    <br />
                    Ⅰ.
                    若您發布或將LLAMA素材或其任何衍生作品供第三方使用，您應向該第三方提供本LLAMA2
                    許可協議之副本。
                    <br />
                    Ⅱ.若您作為整合最終使用者，從被授權人處接收之產品有部分使用了LLAMA素材或其任何衍生作品，則本LLAMA2
                    許可協議第2條將不適用於您。
                    <br />
                    Ⅲ.您必須在您發布所有含有LLAMA素材之副本中，提供以下「須知文件」，其中應包含下述歸屬聲明：「LLAMA
                    2 係根據 LLAMA 2社群授權下使用，版權由© Meta Platforms, Inc.
                    所有，Meta並保留所有權利。」
                    <br />
                    Ⅳ. 您在使用
                    LLAMA素材時，必須遵守適用之法規（包括貿易相關法規範），並遵守LLAMA素材之使用政策（可在
                    <br />
                    https://ai.meta.com/LLAMA/use-policy取得），特此透過引用將其納入本LLAMA2
                    許可協議。
                    <br />
                    Ⅴ.
                    您不得使用LLAMA素材或LLAMA素材之任何輸出或結果來改進任何其他大型語言模型（不包括LLAMA
                    2或其衍生作品）。
                  </p>
                  <p>
                    2.5.2 附加商業條款：
                    <br />
                    若在LLAMA 2
                    版本發布之日，被授權人或被授權人之關聯公司提供的產品或服務，於前一個日曆月中之每月活躍用戶數超過7億，您必須向
                    Meta 申請許可，Met得決定是否授予您此類權利，除非 Meta
                    明確授權，否則您無權行使本LLAMA2 許可協議下的任何權利。
                  </p>
                  <p>
                    2.5.3免責聲明：
                    <br />
                    除非適用法律要求，否則LLAMA素材及其任何輸出和結果均以「原樣」提供，不為任何明示或默示的擔保，包括但不限於，所有權擔保、不侵權擔保、品質擔保、適銷性擔保、適用於特定用途或目的之擔保、任何專利有效性或不侵犯第三方智慧財產權之任何擔保。對於使用或重新發布LLAMA素材之適當性，您需全權負責，並承擔使用LLAMA素材以及任何輸出和結果所涉及之任何風險。
                  </p>
                  <p>
                    2.5.4責任限制：
                    <br />
                    在任何情況下，Meta或其關聯公司對於本LLAMA2許可協議引起之，不論係契約責任、侵權責任、過失責任、產品責任或其他責任產生之損失，或任何間接性、特殊性、後果性、附帶性利潤損失及懲罰性損害均不負責。即便Meta或其關聯公司已被告知可能發生前述情況，亦同。
                  </p>
                  <p>
                    2.5.5智慧財產權：
                    <br />
                    a. 本LLAMA2
                    <br />
                    許可協議未授權任何商標之使用許可，且在使用LLAMA素材方面，Meta和被許可方均不得使用對方或其任何關聯公司擁有或相關之名稱或標記，除非於描述和再發布LLAMA素材時，為了合理且符合慣例需求之使用。
                    <br />
                    b.
                    就使用Meta擁有之LLAMA素材製作之衍生作品方面，您將成為上述衍生作品和改作之所有權人。
                    <br />
                    c. 若您對Meta
                    <br />
                    任何實體提起訴訟或其他法律程序（包括訴訟中之交叉請求或反訴），主張LLAMA素材或LLAMA2之輸出或結果，或任何前述內容之任何部分侵害您的知識財產權或您擁有或得處分之其他權利，則本LLAMA2許可協議授權予您之權利將自訴訟提起之日或法律程序提起之日自動終止。而對於因您使用或發布LLAMA素材所引起或與之相關的任何第三方提出的任何賠償請求，您將對Meta進行賠償並使其免受損害。
                  </p>
                  <p>
                    2.5.6. 期限和終止：
                    <br />
                    本LLAMA2 許可協議之生效日期將自您接受本LLAMA2
                    許可協議或存取LLAMA素材之日起，依本LLAMA2
                    許可協議之條款內容生效；而本LLAMA2
                    許可協議之終止亦依據本LLAMA2許可協議之條款內容。若您違反本LLAMA2
                    許可協議之任何條款，Meta得隨時終止本LLAMA2
                    許可協議。本LLAMA2許可協議經終止後，您應立即刪除並停止使用LLAMA素材，惟本LLAMA2
                    許可協議之第3條、第4條和第7條將於終止後繼續有效。
                  </p>
                  <p>
                    2.5.7. 適用法律和管轄權：
                    <br />
                    本LLAMA2
                    許可協議受加州法律管轄並根據加州法律進行解釋，而不考慮法律選擇原則；且《聯合國國際貨物銷售合約公約》不適用於本LLAMA2
                    許可協議。
                    <br />
                    加州法院對因本LLAMA2 許可協議引起之任何爭議擁有專屬管轄權。
                  </p>
                  <br />
                  <h3>
                    3. LLAMA2 使用條款(META AI LLAMA2 Acceptable Use Policy)
                  </h3>
                  <p>
                    3.1 我們希望每個人都能安全、負責任地使用LLAMA
                    2，您同意您不會使用或允許他人使用 LLAMA 2作為以下之用途：
                  </p>
                  <p>
                    3.1.1 違反法律或侵害他人之權利，包括：
                    <br />
                    a.
                    參與、宣傳、生成、促進、鼓勵、策劃、煽動或推動非法活動或內容，例如：
                    <br />
                    Ⅰ. 暴力或恐怖主義
                    <br />
                    Ⅱ.
                    剝削或傷害兒童，包括索取、創建、獲取或傳播兒童剝削之相關內容或未能通報兒童性虐待之素材。
                    <br />
                    b. 人口販運、剝削和性暴力
                    <br />
                    Ⅰ.
                    向未成年人散佈不合法之資訊或素材，包括色情相關資訊，或未對使用者取得此類資訊時，進行法律規定之年齡控管限制。
                    <br />
                    Ⅱ. 性交易
                    <br />
                    Ⅲ. 任何其他犯罪活動
                    <br />
                    c.
                    參與、宣傳、煽動或促進對個人或群體的騷擾、虐待、威脅或或霸凌。
                    <br />
                    d.
                    參與、宣傳、煽動或促進在就業、就業福利、信貸、住房、其他經濟福利或其他基本商品和服務提供之歧視性、其他非法或有害行為。
                    <br />
                    e.
                    於未經授權或許可下，從事任何專業行業之行為，包括但不限於，金融、法律、醫療/健康或其他。
                    <br />
                    f.
                    在未經適用法規範允許之情況下，收集、處理、披露、生成或推斷有關個人健康、人口統計或其他個人隱私或信息。
                    <br />
                    g.
                    從事或促使任何侵犯、盜用或違反任何第三方權利之行為，包括使用LLAMA
                    2素材的產品或服務的輸出或結果所導致。
                    <br />
                    h.
                    創建、生成或促進惡意代碼、惡意軟體、電腦病毒或任何其他可能禁用、超負荷、干擾或損壞網站或計算機系統正常運作、完整性、操作或外觀之任何其他行為。
                  </p>
                  <p>
                    3.1.2
                    參與、宣傳、生成、促進、鼓勵、策劃、煽動、協助規劃或進行對個人造成死亡或傷害風險之行為，包括使用
                    LLAMA 2 進行：
                    <br />
                    a.
                    軍事、戰爭、核工業或應用、間諜活動，涉及由美國國務院《國際武器貿易條例》(ITAR)
                    限制之素材或活動。
                    <br />
                    b. 槍支和非法武器（包括武器開發）
                    <br />
                    c. 非法藥物及受管制/受監管之物質
                    <br />
                    d. 關鍵基礎設施、運輸技術或重型機械之營運
                    <br />
                    e. 自我傷害或傷害他人之行為，包括自殺、自殘和飲食失調
                    <br />
                    f. 旨在煽動或宣揚暴力、虐待或對個人造成身體傷害之任何內容
                  </p>
                  <p>
                    3.1.3. 故意欺騙或誤導他人，包括使用LLAMA 2進行：
                    <br />
                    a. 生成、宣傳或促進詐騙，或創建、宣傳虛假資訊。
                    <br />
                    b.
                    生成、宣傳或促進散布誹謗性內容，包含創建誹謗性聲明、圖像或其他內容。
                    <br />
                    c. 生成、宣傳或促進發布垃圾郵件。
                    <br />
                    d. 未經同意、授權或非法冒充他人。
                    <br />
                    e. 表示使用LLAMA 2之衍生作品係由人類生成的。
                    <br />
                    f.
                    生成或促進虛假之網絡活動，包含虛假留言和其他虛假之網絡參與方式。
                  </p>
                  <p>
                    3.1.4 未適當地向最終用戶披露人工智慧系統之任何已知危險。
                  </p>
                  <br />
                  <br />
                  <p>
                    參考來源：
                    <br />
                    META AI LLAMA2 Acceptable Use Policy
                    <br />
                    <a
                      href="https://ai.meta.com/LLAMA/use-policy/"
                      target="_blank"
                    >
                      https://ai.meta.com/LLAMA/use-policy/
                    </a>
                    <br />
                    META AI LLAMA2 Community License Agreement
                    <br />
                    <a
                      href="https://ai.meta.com/LLAMA/license/"
                      target="_blank"
                    >
                      https://ai.meta.com/LLAMA/license/
                    </a>
                  </p>
                </div>
              </div>
              <div className="downloadDetail__right download mobile">
                <h2>·模型版本</h2>
                <div className="downloadDetail__table">
                  <table>
                    <tbody>
                      <tr>
                        <th>模型版本</th>
                        <th>釋出日期</th>
                        <th>Tokens</th>
                      </tr>
                      <tr>
                        <td>b-1-0-0</td>
                        <td>-</td>
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
                    <a href="https://huggingface.co/taide" target="_blank">
                      <span>Huggingface 連結</span>
                      <Image src={btnDownArrow} style={{ height: "auto" }} alt="arrow" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="article__item even">
                <h2>·TAIDE合作模式</h2>
                <div className="article__con">
                  <h3>TAIDE誠徵合作夥伴，共同促進臺灣 LLM 的發展</h3>
                  <p>
                    <b>
                      我們正在積極的尋求合作夥伴，誠摯地邀請業界、學術界以及具備相關技術專業知識的任何有志之士參與這項具有里程碑意義性的合作！
                    </b>
                  </p>
                  <p>
                    TAIDE
                    旨在以臺灣文化為基底，融入臺灣特有的語言、價值觀、風俗習慣等元素，使生成式AI引擎能夠更好地理解和回應在地使用者的需求，打造可信任的生成式AI引擎基礎模型，並應用於不同領域，以滿足使用者多元化的需求。
                  </p>
                  <p>
                    合作基礎方案將由TAIDE提供一大型語言模型，為合作夥伴支援一個強大的工具，以應用於各種領域，包括自然語言處理、機器翻譯、智慧客服或更多創意的可能性。
                  </p>
                  <p>
                    TAIDE代表一個全新的機會，促進技術的進步和應用的拓展，並為合作夥伴和整個社會帶來實際的價值和成果。我們期待聽到來自世界各地的有志之士的回應，共同探索LLM的無限潛力。
                  </p>
                  <br />
                  <p>
                    <b>
                      如果您或您的組織對這個合作計畫感興趣，請聯繫我們以獲取更多詳細資訊與討論合作的可能性。
                    </b>
                  </p>
                  <p>
                    TAIDE專案團隊:{" "}
                    <a href="mailto:TAIDE@narlabs.org.tw">
                      TAIDE@narlabs.org.tw
                    </a>
                  </p>
                  <br />
                  <ul>
                    <li className="hd">TAIDE 會提供什麼?</li>
                    <li>
                      大型語言模型：提供一70億參數之大型語言模型，以協助合作夥伴實現其應用項目的目標。
                    </li>
                    <li>
                      技術支援和培訓：提供技術交流、知識分享、相關技術支援和培訓，以確保合作夥伴能夠順利導入和使用。
                    </li>
                    <li>
                      保密和安全管理：TAIDE將與合作夥伴簽署明確的合作協議，以保護合作夥伴的權益和智慧財產權，包括資料使用權限、智慧財產權歸屬、機密保護等方面的內容。
                    </li>
                  </ul>
                  <br />
                  <ul>
                    <li className="hd">合作夥伴需要準備什麼?</li>
                    <li>
                      資料集要求：合作夥伴需要能夠自行提供資料集，作為訓練和Fine-tuning模型的基礎，確保模型在實務應用中具有合適的資料支持。
                    </li>
                    <li>
                      相關資訊能力：合作夥伴應具備相關資訊能力與資源，包括資料處理、模型訓練專業知識與算力資源等，以確保資料集的品質和安全性。
                    </li>
                    <li>
                      應用提案：合作夥伴需提供相容TAIDE模型之合作方案，並符合推動生成式
                      AI 技術的發展和應用之目的。
                    </li>
                  </ul>
                  <br />
                  <br />
                  <p>
                    以下類型之應用，將會是TAIDE優先徵求項目，但當然，TAIDE永遠歡迎更多的創意加入:
                  </p>
                  <ul>
                    <li>自動化知識庫管理</li>
                    <li>軟體新聞翻譯工具</li>
                    <li>多語言支援工具</li>
                    <li>AI客服</li>
                    <li>API service</li>
                    <li>Web service</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="downloadDetail__right download desktop">
              <h2>·模型版本</h2>
              <div className="downloadDetail__table">
                <table>
                  <tbody>
                    <tr>
                      <th>模型版本</th>
                      <td>b-1-0-0</td>
                    </tr>
                    <tr>
                      <th>釋出日期</th>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>Tokens</th>
                      <td>1.7B</td>
                    </tr>
                  </tbody>
                </table>
                <div className="btn">
                  <a href="https://huggingface.co/taide" target="_blank">
                    <span>Huggingface 連結</span>
                    <Image src={btnDownArrow} style={{ height: "auto" }} alt="arrow" />
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
              <Image src={btnNextArrow} style={{ height: "auto" }} alt="about" />
            </a>
          </div>
        </article>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      ></script>
    </>
  );
};

export default DownloadModal;
