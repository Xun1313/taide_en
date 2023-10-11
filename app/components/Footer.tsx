import Image from "next/image";
import logoW from "~/images/logo_w.svg";
import logoNstc from "~/images/logo_NSTC.png";
import logoNarlabs from "~/images/logo_NARlabs.png";
import logoModa from "~/images/logo_moda.png";

const Footer = () => {
  return (
    <footer className="footer">
      <article className="footer__body">
        <div className="logo">
          <a href="index.html">
            <Image src={logoW} alt="TAIDE" />
          </a>
          推動可信任生成式AI發展先期計畫
        </div>
        <div className="sitemapUnit desktop">
          <div className="sitemapUnit__body">
            <div className="sitemapUnit__item">
              <h3>認識TAIDE</h3>
              <p>
                <a href="aboutProject.html">計畫背景</a>
              </p>
              <p>
                <a href="aboutExpected.html">預期效益</a>
              </p>
              <p>
                <a href="aboutStage.html">階段進展</a>
              </p>
            </div>
            <div className="sitemapUnit__item">
              <h3>
                <a href="teamList.html">團隊陣容</a>
              </h3>
              <h3>
                <a href="resourcesList.html">學習資源</a>
              </h3>
              <h3>
                <a href="newsList.html">最新動態</a>
              </h3>
            </div>
            <div className="sitemapUnit__item">
              <h3>
                <a href="trainData.html">訓練資料</a>
              </h3>
              <h3>
                <a href="download.html">TAIDE模型下載</a>
              </h3>
              <p>
                <a href="terms.html">條款與許可協議</a>
              </p>
            </div>
          </div>
        </div>
        <div className="sitemapUnit mobile">
          <div className="sitemapUnit__body">
            <div className="sitemapUnit__item">
              <h3>認識TAIDE</h3>
              <p>
                <a href="aboutProject.html">計畫背景</a>
              </p>
              <p>
                <a href="aboutExpected.html">預期效益</a>
              </p>
              <p>
                <a href="aboutStage.html">階段進展</a>
              </p>
              <h3>
                <a href="teamList.html">團隊陣容</a>
              </h3>
              <h3>
                <a href="resourcesList.html">學習資源</a>
              </h3>
            </div>
            <div className="sitemapUnit__item">
              <h3>
                <a href="newsList.html">最新動態</a>
              </h3>
              <h3>
                <a href="trainData.html">訓練資料</a>
              </h3>
              <h3>
                <a href="download.html">TAIDE模型下載</a>
              </h3>
              <p>
                <a href="terms.html">條款與許可協議</a>
              </p>
            </div>
          </div>
        </div>
        <div className="partnerUnit">
          <div className="partnerUnit__item">
            <h3>指導單位</h3>
            <div>
              <a href="#">
                {" "}
                <Image src={logoNstc} alt="NSTC" />
              </a>
            </div>
          </div>
          <div className="partnerUnit__item">
            <h3>執行單位</h3>
            <div>
              <a href="#">
                <Image src={logoNarlabs} alt="NARlabs" />
              </a>
              <a href="#">
                <Image src={logoModa} alt="moda" />
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">
          <span>© 財團法人國家實驗研究院科技政策研究與資訊中心</span>
          <span>2023 All Rights Reserved.</span>
        </div>
      </article>
    </footer>
  );
};

export default Footer;