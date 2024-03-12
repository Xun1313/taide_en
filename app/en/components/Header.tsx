"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import logo from "~/images/logo.png";

// 標籤 hover 效果
// 選到該頁面亮起
const Header = () => {

  useEffect(() => {
    document.querySelector("#toAbout")?.setAttribute("name", "toAbout");
    document.querySelector("#toTeam")?.setAttribute("name", "toTeam");
    document.querySelector("#toProject")?.setAttribute("name", "toProject");

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
          <Link href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/en`}>
            <Image src={logo} alt="logo" style={{ height: "auto" }} />
          </Link>
        </div>
        <div className="menuBtn mobile">
          <a>≡</a>
        </div>
        <nav className={`nav`}>
          <ul>
            <li>
              <Link href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/en#toAbout`}>
                About TAIDE
              </Link>
            </li>

            <li>
              <Link href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/en#toTeam`}>
                Team
              </Link>
            </li>

            <li>
              <Link href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/en#toProject`}>
                Project Info
              </Link>
            </li>

            <li className={`btnDownload`}>
              <Link
                href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/en/download-model`}
              >
                TAIDE Model
              </Link>
            </li>
          </ul>
          <ol>
            <li>
              <Link href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/`}>
                中文
              </Link>
            </li>
            <li className="active">
              <Link href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/en`}>
                EN
              </Link>
            </li>
          </ol>
        </nav>
      </div>
    </header>
  );
};

export default Header;
