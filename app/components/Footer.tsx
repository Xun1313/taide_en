import Image from "next/image";
import Link from "next/link";
import logoW from "~/images/logo_w.svg";
import logoNstc from "~/images/logo_NSTC.png";
import logoNarlabs from "~/images/logo_NARlabs.png";
import logoModa from "~/images/logo_moda.png";

const Footer = () => {
  return (
    <footer className="footer">
      <article className="footer__body">
        <div className="logo">
          <a style={{ cursor: "pointer" }}>
            <Image src={logoW} style={{ height: "auto" }} alt="TAIDE" />
          </a>
          推動可信任生成式AI發展先期計畫
        </div>
        <div className="sitemapUnit desktop">
          <div className="sitemapUnit__body">
            <div className="sitemapUnit__item">
              <h3>認識TAIDE</h3>
              <p>
                <Link
                  href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/about/project-overview`}
                >
                  計畫背景
                </Link>
              </p>
              <p>
                <Link
                  href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/about/project-outcome`}
                >
                  預期效益
                </Link>
              </p>
              <p>
                <Link
                  href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/about/project-progress`}
                >
                  階段進展
                </Link>
              </p>
            </div>
            <div className="sitemapUnit__item">
              <h3>
                <Link href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/teamList`}>
                  團隊陣容
                </Link>
              </h3>
              <h3>
                <Link
                  href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/resourcesList`}
                >
                  學習資源
                </Link>
              </h3>
              <h3>
                <Link href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/newsList`}>
                  最新動態
                </Link>
              </h3>
            </div>
            <div className="sitemapUnit__item">
              <h3>
                <Link
                  href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/training-data`}
                >
                  訓練資料
                </Link>
              </h3>
              <h3>
                <Link
                  href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/download-model`}
                >
                  TAIDE模型
                </Link>
              </h3>
              <p>
                <Link href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/download-model`}>
                  條款與許可協議
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="sitemapUnit mobile">
          <div className="sitemapUnit__body">
            <div className="sitemapUnit__item">
              <h3>認識TAIDE</h3>
              <p>
                <Link
                  href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/about/project-overview`}
                >
                  計畫背景
                </Link>
              </p>
              <p>
                <Link
                  href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/about/project-outcome`}
                >
                  預期效益
                </Link>
              </p>
              <p>
                <Link
                  href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/about/project-progress`}
                >
                  階段進展
                </Link>
              </p>
              <h3>
                <Link href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/teamList`}>
                  團隊陣容
                </Link>
              </h3>
              <h3>
                <Link
                  href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/resourcesList`}
                >
                  學習資源
                </Link>
              </h3>
            </div>
            <div className="sitemapUnit__item">
              <h3>
                <Link href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/newsList`}>
                  最新動態
                </Link>
              </h3>
              <h3>
                <Link
                  href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/training-data`}
                >
                  訓練資料
                </Link>
              </h3>
              <h3>
                <Link
                  href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/download-model`}
                >
                  TAIDE模型
                </Link>
              </h3>
              <p>
                <Link href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/download-model`}>
                  條款與許可協議
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="partnerUnit">
          <div className="partnerUnit__item">
            <h3>指導單位</h3>
            <div>
              <a href="https://www.nstc.gov.tw/">
                <Image src={logoNstc} style={{ width: "auto" }} alt="NSTC" />
              </a>
            </div>
          </div>
          <div className="partnerUnit__item">
            <h3>執行單位</h3>
            <div>
              <a href="https://www.narlabs.org.tw/">
                <Image
                  src={logoNarlabs}
                  style={{ width: "auto" }}
                  alt="NARlabs"
                />
              </a>
              <a href="https://moda.gov.tw/">
                <Image src={logoModa} style={{ width: "auto" }} alt="moda" />
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">
          <span>© 財團法人國家實驗研究院科技政策研究與資訊中心</span>
          <span>{new Date().getFullYear()} All Rights Reserved.</span>
        </div>
      </article>
    </footer>
  );
};

export default Footer;
