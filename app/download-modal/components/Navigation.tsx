"use client";

import { useEffect } from "react";
const Navigation = () => {
  useEffect(() => {
    $(document).ready(function () {
      var headerH = $(".header").height() as number;
      const terms: {
        offset: Function;
      } = $(".terms");
      const download: {
        offset: Function;
      } = $(".download");
      const article__item: {
        offset: Function;
      } = $(".article__item.even");
      $(".toTerms").click(function () {
        if (window.matchMedia("(max-width:960px)").matches) {
          $("html, body").animate(
            {
              scrollTop: terms.offset().top - headerH,
            },
            600
          );
        } else {
          $("html, body").animate(
            {
              scrollTop: terms.offset().top - headerH - 50,
            },
            600
          );
        }
      });
      $(".toDownload").click(function () {
        if (window.matchMedia("(max-width:960px)").matches) {
          $("html, body").animate(
            {
              scrollTop: download.offset().top - headerH,
            },
            600
          );
        } else {
          $("html, body").animate(
            {
              scrollTop: terms.offset().top - headerH - 50,
            },
            600
          );
        }
      });
      $(".toModel").click(function () {
        if (window.matchMedia("(max-width:960px)").matches) {
          $("html, body").animate(
            {
              scrollTop: article__item.offset().top - headerH,
            },
            600
          );
        } else {
          $("html, body").animate(
            {
              scrollTop: article__item.offset().top - headerH - 50,
            },
            600
          );
        }
      });
    });

    return () => {
      $(document).ready(function () {
        $(".toTerms").off("click");
        $(".toDownload").off("click");
        $(".toModel").off("click");
      });
    };
  }, []);

  return (
    <ul>
      <li>
        <a style={{ cursor: "pointer" }} className="toTerms">
          ·使用政策與許可協議
        </a>
      </li>
      <li>
        <a style={{ cursor: "pointer" }} className="toDownload">
          ·模型版本下載
        </a>
      </li>
      <li>
        <a style={{ cursor: "pointer" }} className="toModel">
          ·TAIDE合作模式
        </a>
      </li>
    </ul>
  );
};
export default Navigation;
