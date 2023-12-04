import { WithContext } from "schema-dts";

import Image from "next/image";
import btnNextArrow from "~/images/icon/btn_nextArrow.svg";
import type { Metadata } from "next";
import BackRoute from "./components/backRoute";

export const metadata: Metadata = {
  title: "型下載許可協議 - TAIDE推動臺灣可信任生成式AI發展計畫",
  description:
    "深入解析TAIDE的條款與許可協議，確保您在AI領域的安全應用。不可忽視的關鍵事項，立即掌握！",
  openGraph: {
    description:
      "深入解析TAIDE的條款與許可協議，確保您在AI領域的安全應用。不可忽視的關鍵事項，立即掌握！",
  },
};

const Terms = () => {
  const jsonLd: WithContext<any> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "深入解析TAIDE的條款與許可協議，確保您在AI領域的安全應用。不可忽視的關鍵事項，立即掌握！",
    additionalName:
      "深入解析TAIDE的條款與許可協議，確保您在AI領域的安全應用。不可忽視的關鍵事項，立即掌握！",
    url: process.env.WEBSITE_DOMAIN,
    datePublished: "2023-03-02",
  };
  return (
    <>
      <article className="termsUnit">
        <div className="termsUnit__body">
          <h1>條款與許可協議</h1>
          <div className="termsDetail">
            <div className="tagUnit secondary solid">TAIDE模型</div>
            <div className="back">
              <BackRoute />
            </div>
            <h2>TAIDE 模型許可協議</h2>

            <h3>歡迎使用TAIDE模型。</h3>

            <p>TAIDE模型為Llama2模型結合臺灣文化與正體中文語料之衍生模型。</p>
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

            <p>本協議主要包含：</p>
            <div className="ml-1">
              <p>(1) TAIDE授權與使用條款</p>
              <p>
                (2) Llama2許可協議 (Meta AI Llama2 Community License Agreement)
              </p>
              <p>(3) Llama2使用條款 (Meta AI Llama2 Acceptable Use Policy)</p>
            </div>
            <p className="desc">
              其中(2) Llama2許可協議 (Meta AI Llama2 Community License
              Agreement)、 (3) Llama使用條款 (Meta AI Llama2 Acceptable Use
              Policy) 係參照©Meta Platforms, Inc.（下稱為Meta）公布之Meta AI
              Llama2 Community License Agreement、 Meta AI Llama2 Acceptable Use
              Policy。本協議之內容為中譯版本，以便參照說明。
            </p>

            <h3>1. TAIDE授權與使用條款</h3>
            <p>
              <span>1.1 </span>
              <span>您於使用TAIDE模型服務過程中，必須遵循以下原則：</span>
            </p>
            <div className="ml-1">
              <p>
                <span>1.1.1</span>
                <span>遵守中華民國法律和法規。</span>
              </p>
              <p>
                <span>1.1.2</span>
                <span>
                  不得為任何非法目的使用TAIDE模型（包含但不限於中華民國法律和法規與
                  Llama2 使用條款之內容）。
                </span>
              </p>
              <p>
                <span>1.1.3</span>
                <span>
                  不使用任何設備、軟體或程序，干擾或試圖干擾TAIDE模型之正常運作。
                </span>
              </p>
              <p>
                <span>1.1.4</span>
                <span>
                  不允許入侵、接通、使用或企圖入侵、接通、使用TAIDE模型之伺服器及未經TAIDE或Meta許可之任何資料區。
                </span>
              </p>
              <p>
                <span>1.1.5 </span>
                <span>不得限制、制止其他使用者使用TAIDE模型。</span>
              </p>
              <p>
                <span>1.1.6 </span>
                <span>
                  如發現任何非法使用帳號或任何出現安全漏洞的情況，應立即告知TAIDE。
                </span>
              </p>
            </div>
            <p>
              <span>1.2</span>
              <span>損害賠償</span>
            </p>
            <div className="ml-1">
              <p>
                您同意保障和維護TAIDE模型及任何其他第三方之利益，如因違反法律、法規或本協議而致使TAIDE模型或任何其他第三方造成損失，您同意自行承擔所造成損害之賠償責任。
              </p>
            </div>
            <p>
              <span>1.3</span>
              <span>責任限制</span>
            </p>
            <div className="ml-1">
              <p>
                <span>1.3.1</span>
                <span>
                  TAIDE於下列情形之一時，得暫停或中斷TAIDE模型之部分或全部服務：
                </span>
              </p>
              <div className="ml-2">
                <p>a. 對於TAIDE模型相關系統設備進行遷移、更換或維護時。</p>
                <p>b. 任何不可歸責於之事由所造成之服務停止或中斷。</p>
                <p>c. 天災或其他不可抗力造成TAIDE模型之服務停止或中斷。</p>
              </div>
              <p>
                <span>1.3.2</span>
                <span>
                  在任何情況下，TAIDE對於您或任何其他第三方因使用或不能使用TAIDE模型引起之，不論係契約責任、侵權責任、過失責任、產品責任或其他責任產生之損失，或任何間接性、特殊性、後果性、附帶性利潤損失及懲罰性損害均不負責。即便TAIDE已被告知可能發生前述情況，亦同。
                </span>
              </p>
            </div>
            <p>
              <span>1.4</span>
              <span>服務變更、中斷或終止</span>
            </p>
            <div className="ml-1">
              <p>
                您同意TAIDE有權隨時變更、中斷或終止部分或全部的TAIDE模型服務。
              </p>
            </div>
            <p>
              <span>1.5</span>
              <span>其他規定</span>
            </p>
            <div className="ml-1">
              <p>
                如本協議之任何條款無論何種原因，完全或部分無效、終止或不具有執行力，本協議之其餘條款仍應有效並具有約束力。
              </p>
            </div>
            <p>
              <span>1.6</span>
              <span>法律管轄</span>
            </p>
            <div className="ml-1">
              <p>
                本協議之訂立、執行和解釋及爭議解決均應適用於中華民國法律，並以臺灣臺北地方法院作為第一審管轄法院。
              </p>
            </div>
            <h3>
              2. Llama2 許可協議(Meta AI Llama2 Community License Agreement)
            </h3>
            <p>
              <span>2.1</span>
              <span>
                「Llama2
                許可協議」係指此處規範Llama素材之使用、複製、發布和修改的條款和條件。
              </span>
            </p>
            <p>
              <span>2.2</span>
              <span>
                「Llama相關文件」係指Meta一同與Llama2發布於
                <a
                  href="https://ai.meta.com/resources/models-and-libraries/Llama-downloads/"
                  target="_blank"
                >
                  ai.meta.com/resources/models-and-libraries/Llama-downloads/
                </a>
                之規格、手冊和文件。
              </span>
            </p>
            <p>
              <span>2.3</span>
              <span>
                「被授權人」或「您」係指您，或若您代表您的雇主或其他人或法人簽訂本Llama2
                許可協議，則代表人及被代表人必須符合適用法規範要求的法定年齡；且若您代表您的雇主或其他人或法人簽署本Llama2
                許可協議，表示於適用法規範下，您獲得被代表人之合法授權。
              </span>
            </p>
            <p>
              <span>2.4</span>

              <span>
                「Llama
                2」係指由Meta發布的基礎大型語言模型和軟體以及相關演算法，包括機器學習模型代碼、訓練模型權重、推斷啟用代碼、訓練啟用代碼、微調啟用代碼以及前述各項元素的其他部分，可於
                ai.meta.com/resources/models-and-libraries/Llama-downloads/取得。
              </span>
            </p>
            <p>
              <span>2.5</span>
              <span>
                「Llama素材」係指本Llama2 許可協議提供之Meta專有Llama 2 和Llama
                相關文件（或其中之任何部分）。
                <br />
                「Meta」或「我們」係指Meta Platforms Ireland
                Limited（若您（自然人）位於歐洲經濟區或瑞士，或者法人之主要營業地點位於歐洲經濟區或瑞士）和Meta
                Platforms, Inc.（若您位於歐洲經濟區或瑞士外）。
              </span>
            </p>
            <p>
              <span>2.5.1</span>
              <span>許可權和再發布：</span>
            </p>
            <div className="ml-1">
              <p>
                <span>a.</span>
                <span>
                  權利授予：根據 Meta
                  的智慧財產權及其他權利，您被授予非專有、全球性、不可轉讓和免版稅的有限許可，以使用、再製、發布、複製、創建衍生作品和對Llama素材進行修改。
                </span>
              </p>
              <p>b. 再發布和使用：</p>
              <div className="ml-1">
                <p>
                  <span>Ⅰ.</span>
                  <span>
                    若您發布或將Llama素材或其任何衍生作品供第三方使用，您應向該第三方提供本Llama2
                    許可協議之副本。
                  </span>
                </p>
                <p>
                  <span>Ⅱ.</span>
                  <span>
                    若您作為整合最終使用者，從被授權人處接收之產品有部分使用了Llama素材或其任何衍生作品，則本Llama2
                    許可協議第2條將不適用於您。
                  </span>
                </p>
                <p>
                  <span>Ⅲ.</span>
                  <span>
                    您必須在您發布所有含有Llama素材之副本中，提供以下「須知文件」，其中應包含下述歸屬聲明：「Llama
                    2 係根據 Llama 2社群授權下使用，版權由© Meta Platforms, Inc.
                    所有，Meta並保留所有權利。」
                  </span>
                </p>
                <p>
                  <span>Ⅳ.</span>
                  <span>
                    您在使用
                    Llama素材時，必須遵守適用之法規（包括貿易相關法規範），並遵守Llama素材之使用政策（可在
                    https://ai.meta.com/Llama/use-policy取得），特此透過引用將其納入本Llama2
                    許可協議。
                  </span>
                </p>
                <p>
                  <span>Ⅴ.</span>
                  <span>
                    您不得使用Llama素材或Llama素材之任何輸出或結果來改進任何其他大型語言模型（不包括Llama
                    2或其衍生作品）。
                  </span>
                </p>
              </div>
            </div>
            <p>
              <span>2.5.2</span>
              <span>附加商業條款：</span>
            </p>
            <div className="ml-2">
              <p>
                若在Llama 2
                版本發布之日，被授權人或被授權人之關聯公司提供的產品或服務，於前一個日曆月中之每月活躍用戶數超過7億，您必須向
                Meta 申請許可，Met得決定是否授予您此類權利，除非 Meta
                明確授權，否則您無權行使本Llama2 許可協議下的任何權利。
              </p>
            </div>
            <p>
              <span>2.5.3</span>
              <span>免責聲明：</span>
            </p>
            <div className="ml-2">
              <p>
                除非適用法律要求，否則Llama素材及其任何輸出和結果均以「原樣」提供，不為任何明示或默示的擔保，包括但不限於，所有權擔保、不侵權擔保、品質擔保、適銷性擔保、適用於特定用途或目的之擔保、任何專利有效性或不侵犯第三方智慧財產權之任何擔保。對於使用或重新發布Llama素材之適當性，您需全權負責，並承擔使用Llama素材以及任何輸出和結果所涉及之任何風險。
              </p>
            </div>
            <p>
              <span>2.5.4</span>
              <span>責任限制：</span>
            </p>
            <div className="ml-2">
              <p>
                在任何情況下，Meta或其關聯公司對於本Llama2許可協議引起之，不論係契約責任、侵權責任、過失責任、產品責任或其他責任產生之損失，或任何間接性、特殊性、後果性、附帶性利潤損失及懲罰性損害均不負責。即便Meta或其關聯公司已被告知可能發生前述情況，亦同。
              </p>
            </div>
            <p>
              <span>2.5.5</span>
              <span>智慧財產權：</span>
            </p>
            <div className="ml-2">
              <p>
                <span>a.</span>
                <span>
                  本 Llama2
                  許可協議未授權任何商標之使用許可，且在使用Llama素材方面，Meta和被許可方均不得使用對方或其任何關聯公司擁有或相關之名稱或標記，除非於描述和再發布Llama素材時，為了合理且符合慣例需求之使用。
                </span>
              </p>
              <p>
                <span>b.</span>
                <span>
                  就使用Meta擁有之Llama素材製作之衍生作品方面，您將成為上述衍生作品和改作之所有權人。
                </span>
              </p>
              <p>
                <span>c.</span>
                <span>
                  若您對 Meta
                  任何實體提起訴訟或其他法律程序（包括訴訟中之交叉請求或反訴），主張Llama素材或Llama2之輸出或結果，或任何前述內容之任何部分侵害您的知識財產權或您擁有或得處分之其他權利，則本Llama2許可協議授權予您之權利將自訴訟提起之日或法律程序提起之日自動終止。而對於因您使用或發布Llama素材所引起或與之相關的任何第三方提出的任何賠償請求，您將對Meta進行賠償並使其免受損害。
                </span>
              </p>
            </div>
            <p>
              <span>2.5.6</span>
              <span>期限和終止：</span>
            </p>
            <div className="ml-2">
              <p>
                本Llama2 許可協議之生效日期將自您接受本Llama2
                許可協議或存取Llama素材之日起，依本Llama2
                許可協議之條款內容生效；而本Llama2
                許可協議之終止亦依據本Llama2許可協議之條款內容。若您違反本Llama2
                許可協議之任何條款，Meta得隨時終止本Llama2
                許可協議。本Llama2許可協議經終止後，您應立即刪除並停止使用Llama素材，惟本Llama2
                許可協議之第3條、第4條和第7條將於終止後繼續有效。
              </p>
            </div>
            <p>
              <span>2.5.7</span>
              <span>適用法律和管轄權：</span>
            </p>
            <div className="ml-2">
              <p>
                本Llama2
                許可協議受加州法律管轄並根據加州法律進行解釋，而不考慮法律選擇原則；且《聯合國國際貨物銷售合約公約》不適用於本Llama2
                許可協議。加州法院對因本Llama2
                許可協議引起之任何爭議擁有專屬管轄權。
              </p>
            </div>
            <br />
            <h3>3. Llama2 使用條款(Meta AI Llama2 Acceptable Use Policy)</h3>
            <p>
              <span>3.1</span>
              <span>
                我們希望每個人都能安全、負責任地使用Llama
                2，您同意您不會使用或允許他人使用 Llama 2作為以下之用途：
              </span>
            </p>

            <p>
              <span>3.1.1</span>
              <span>違反法律或侵害他人之權利，包括：</span>
            </p>
            <div className="ml-2">
              <p>
                <span>a.</span>
                <span>
                  參與、宣傳、生成、促進、鼓勵、策劃、煽動或推動非法活動或內容，例如：
                </span>
              </p>
              <div className="ml-1">
                <p>Ⅰ. 暴力或恐怖主義</p>
                <p>
                  Ⅱ.
                  剝削或傷害兒童，包括索取、創建、獲取或傳播兒童剝削之相關內容或未能通報兒童性虐待之素材。
                </p>
              </div>
              <p>
                <span>b.</span>
                <span>人口販運、剝削和性暴力</span>
              </p>
              <div className="ml-1">
                <p>
                  Ⅰ.
                  向未成年人散佈不合法之資訊或素材，包括色情相關資訊，或未對使用者取得此類資訊時，進行法律規定之年齡控管限制。
                </p>
                <p>Ⅱ. 性交易</p>
                <p>Ⅲ. 任何其他犯罪活動</p>
              </div>

              <p>
                <span>c.</span>
                <span>
                  參與、宣傳、煽動或促進對個人或群體的騷擾、虐待、威脅或或霸凌。
                </span>
              </p>
              <p>
                <span>d.</span>
                <span>
                  參與、宣傳、煽動或促進在就業、就業福利、信貸、住房、其他經濟福利或其他基本商品和服務提供之歧視性、其他非法或有害行為。
                </span>
              </p>
              <p>
                <span>e.</span>
                <span>
                  於未經授權或許可下，從事任何專業行業之行為，包括但不限於，金融、法律、醫療/健康或其他。
                </span>
              </p>
              <p>
                <span>f.</span>
                <span>
                  在未經適用法規範允許之情況下，收集、處理、披露、生成或推斷有關個人健康、人口統計或其他個人隱私或信息。
                </span>
              </p>
              <p>
                <span>g.</span>
                <span>
                  從事或促使任何侵犯、盜用或違反任何第三方權利之行為，包括使用Llama
                  2素材的產品或服務的輸出或結果所導致。
                </span>
              </p>
              <p>
                <span>h.</span>
                <span>
                  創建、生成或促進惡意代碼、惡意軟體、電腦病毒或任何其他可能禁用、超負荷、干擾或損壞網站或計算機系統正常運作、完整性、操作或外觀之任何其他行為。
                </span>
              </p>
            </div>

            <p>
              <span>3.1.2</span>
              <span>
                參與、宣傳、生成、促進、鼓勵、策劃、煽動、協助規劃或進行對個人造成死亡或傷害風險之行為，包括使用
                Llama 2 進行：
              </span>
            </p>
            <div className="ml-2">
              <p>
                a.
                軍事、戰爭、核工業或應用、間諜活動，涉及由美國國務院《國際武器貿易條例》(ITAR)
                限制之素材或活動。
              </p>
              <p>b. 槍支和非法武器（包括武器開發）</p>
              <p>c. 非法藥物及受管制/受監管之物質</p>
              <p>d. 關鍵基礎設施、運輸技術或重型機械之營運</p>
              <p>e. 自我傷害或傷害他人之行為，包括自殺、自殘和飲食失調</p>
              <p>f. 旨在煽動或宣揚暴力、虐待或對個人造成身體傷害之任何內容</p>
            </div>
            <p>
              <span>3.1.3</span>
              <span>故意欺騙或誤導他人，包括使用Llama 2進行：</span>
            </p>
            <div className="ml-2">
              <p>a. 生成、宣傳或促進詐騙，或創建、宣傳虛假資訊。</p>
              <p>
                b.
                生成、宣傳或促進散布誹謗性內容，包含創建誹謗性聲明、圖像或其他內容。
              </p>
              <p>c. 生成、宣傳或促進發布垃圾郵件。</p>
              <p>d. 未經同意、授權或非法冒充他人。</p>
              <p>e. 表示使用Llama 2之衍生作品係由人類生成的。</p>
              <p>
                f.
                生成或促進虛假之網絡活動，包含虛假留言和其他虛假之網絡參與方式。
              </p>
            </div>
            <p>
              <span>3.1.4</span>
              <span>未適當地向最終用戶披露人工智慧系統之任何已知危險。</span>
            </p>
            <br />
            <br />
            <p>參考來源：</p>
            <div className="sources">
              Meta AI Llama2 Acceptable Use Policy{" "}
              <a href="https://ai.meta.com/Llama/use-policy/" target="_blank">
                https://ai.meta.com/Llama/use-policy/
              </a>
            </div>

            <div className="sources">
              Meta AI Llama2 Community License Agreement{" "}
              <a href="https://ai.meta.com/Llama/license/" target="_blank">
                https://ai.meta.com/Llama/license/
              </a>
            </div>
          </div>
        </div>
      </article>
      <article className="contactUnit terms">
        <article className="contactUnit__body">
          <h2>
            <span>有任何想法？</span>
            <span>歡迎與我們聯絡</span>
          </h2>
          <div className="btn">
            <a href="mailto:TAIDE@narlabs.org.tw">
              <span>Contact TAIDE</span>
              <Image
                src={btnNextArrow}
                style={{ height: "auto" }}
                alt="arrow"
              />
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

export default Terms;
