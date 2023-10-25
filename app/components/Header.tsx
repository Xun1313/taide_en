"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import logo from "~/images/logo.svg";

// 標籤 hover 效果
// 選到該頁面亮起
const Header = () => {
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
        $("html").off("mouseleave mouseout mousedown touchstart");
      });
    };
  }, []);

  return (
    <header className="header">
      <div className="header__body">
        <div className="logo">
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>
        </div>
        <div className="menuBtn mobile">
          <a>≡</a>
        </div>
        <nav className="nav">
          <ul>
            <li className="btnSubNav">
              <a style={{ cursor: "pointer" }}>認識TAIDE</a>
              <div className="subNav">
                <Link href="/aboutProject">計畫背景</Link>
                <Link href="/aboutExpected">預期效益</Link>
                <Link href="/aboutStage">階段進展</Link>
              </div>
            </li>
            <li>
              <Link href="/teamList">團隊陣容</Link>
            </li>
            <li>
              <Link href="/resourcesList">學習資源</Link>
            </li>
            <li>
              <Link href="/newsList?keyword=">最新動態</Link>
            </li>
            <li>
              <Link href="/trainData?type=0">訓練資料</Link>
            </li>
            <li className="btnDownload">
              <Link href="/download">TAIDE模型下載</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
