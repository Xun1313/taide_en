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
          Promoting a Preliminary Plan for the Development
          <br /> of Trustworthy Generative AI
        </div>
        <div className="sitemapUnit desktop">
          <div className="sitemapUnit__body">
            <div className="sitemapUnit__item">
              <h3>
                <Link href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/en`}>
                  About TAIDE
                </Link>
              </h3>
            </div>
            <div className="sitemapUnit__item">
              <h3>
                <Link href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/en`}>
                  Team
                </Link>
              </h3>
            </div>
            <div className="sitemapUnit__item">
              <h3>
                <Link href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/en`}>
                  Project Info
                </Link>
              </h3>
            </div>
            <div className="sitemapUnit__item">
              <h3>
                <Link href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/en`}>
                  TAIDE Model
                </Link>
              </h3>
            </div>
          </div>
        </div>
        <div className="sitemapUnit mobile">
          <div className="sitemapUnit__body">
            <div className="sitemapUnit__item">
              <h3>
                <Link href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/en`}>
                  About TAIDE
                </Link>
              </h3>
            </div>
            <div className="sitemapUnit__item">
              <h3>
                <Link href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/en`}>
                  Team
                </Link>
              </h3>
            </div>
            <div className="sitemapUnit__item">
              <h3>
                <Link href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/en`}>
                  Project Info
                </Link>
              </h3>
            </div>
            <div className="sitemapUnit__item">
              <h3>
                <Link href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/en`}>
                  TAIDE Model
                </Link>
              </h3>
            </div>
          </div>
        </div>
        <div className="partnerUnit">
          <div className="partnerUnit__item">
            <h3>Directed by</h3>
            <div>
              <a href="https://www.nstc.gov.tw/" target="_blank">
                <Image src={logoNstc} style={{ width: "auto" }} alt="NSTC" />
              </a>
            </div>
          </div>
          <div className="partnerUnit__item">
            <h3>Execution unit</h3>
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
          <span>
            © National Institute of Experimental Science and Technology Policy
            Research and Information Center
          </span>
          <span>{new Date().getFullYear()} All Rights Reserved.</span>
        </div>
      </article>
    </footer>
  );
};

export default Footer;
