"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import logo from "~/images/logo.png";

// 標籤 hover 效果
// 選到該頁面亮起
const Header = () => {
  const pathname = usePathname();
  const handleHoverNavigation = (
    linkList: string[],
    className: string = "path"
  ) => (linkList.includes(pathname.split("/")[1]) ? className : "");

  useEffect(() => {
    $(document).ready(function () {
      $(".btnSubNav").click(function () {
        if ($(this).hasClass("on")) {
          $(this).removeClass("on");
          $(".subNav").removeClass("open");
        } else {
          $(this).addClass("on");
          $(".subNav").addClass("open");
        }
      });

      $(".btnDownload").hover(
        function () {
          $(".nav").addClass("hover");
        },
        function () {
          $(".nav").removeClass("hover");
        }
      );

      // mobile menu click
      $(".menuBtn").click(function (e) {
        e.preventDefault();
        if ($(this).hasClass("on")) {
          $(this).removeClass("on");
          $(".header").removeClass("open");
        } else {
          $(this).addClass("on");
          $(this).closest(".header").addClass("open");
        }
      });

      $("nav ul li a").click(function () {
        if ($(".menuBtn").hasClass("on")) {
          $(".menuBtn").removeClass("on");
          $(".header").removeClass("open");
        } else {
          $(".menuBtn").addClass("on");
          $(".menuBtn").closest(".header").addClass("open");
        }
      });

      $("html").on("mouseleave mouseout mousedown touchstart", function (e) {
        if ($(e.target).closest(".header").length <= 0) {
          $(".btnSubNav").removeClass("on");
          $(".subNav").removeClass("open");
          $(".menuBtn").removeClass("on");
          $(".header").removeClass("open");
        }
      });
    });

    return () => {
      $(document).ready(function () {
        $(".btnSubNav").off("click");
        $(".btnDownload").unbind("mouseenter mouseleave");
        $(".menuBtn").off("click");
        $("nav ul li a").off("click");
        $("html").off("mouseleave mouseout mousedown touchstart");
      });
    };
  }, []);

  return (
    <header className="header">
      <div className="header__body">
        <div className="logo">
          <Link href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/`}>
            <Image src={logo} alt="logo" style={{ height: "auto" }} />
          </Link>
        </div>
        <div className="menuBtn mobile">
          <a>≡</a>
        </div>
        <nav
          className={`nav ${handleHoverNavigation(
            ["download-modal"],
            "hover2"
          )}`}
        >
          <ul>
            <li
              className={`btnSubNav ${handleHoverNavigation([
                "project-overview",
                "project-outcome",
                "project-progress",
              ])}`}
            >
              <a style={{ cursor: "pointer" }}>認識TAIDE</a>
              <div className="subNav">
                <Link
                  href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/about/project-overview`}
                >
                  計畫背景
                </Link>
                <Link
                  href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/about/project-outcome`}
                >
                  預期效益
                </Link>
                <Link
                  href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/about/project-progress`}
                >
                  階段進展
                </Link>
              </div>
            </li>
            <li className={`${handleHoverNavigation(["teamList"])}`}>
              <Link href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/teamList`}>
                團隊陣容
              </Link>
            </li>
            <li
              className={`${handleHoverNavigation([
                "resourcesList",
                "resourcesList2",
              ])}`}
            >
              <Link
                href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/resourcesList`}
              >
                學習資源
              </Link>
            </li>
            <li className={`${handleHoverNavigation(["newsList"])}`}>
              <Link
                href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/newsList?keyword=`}
              >
                最新動態
              </Link>
            </li>
            <li className={`${handleHoverNavigation(["training-data"])}`}>
              <Link
                href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/training-data?type=0`}
              >
                訓練資料
              </Link>
            </li>
            <li
              className={`btnDownload ${handleHoverNavigation([
                "download-modal",
              ])}`}
            >
              <Link
                href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/download-modal`}
              >
                TAIDE模型
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
