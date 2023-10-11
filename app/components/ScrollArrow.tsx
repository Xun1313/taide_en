"use client";
import Image from "next/image";
import { useEffect } from "react";
import btnDownArrow from "~/images/icon/btn_downArrow.svg";

const ScrollArrow = ({ title = "了解更多", target = "section1" }) => {
  useEffect(() => {
    $(document).ready(function () {
      $(".jsToPlan").click(function () {
        const targetElement: {
          offset: Function;
        } = $(`.${target}`);
        var headerH = $(".header").height() as number;
        $("html, body").animate(
          {
            scrollTop: targetElement.offset().top - headerH - 40,
          },
          600
        );
      });
    });

    return () => {
      $(document).ready(function () {
        $(".jsToPlan").off("click");
      });
    };
  }, [target]);

  return (
    <div className="btn jsToPlan">
      <a
        style={{
          cursor: "pointer",
        }}
      >
        <span>{title}</span>
        <Image src={btnDownArrow} alt="arrow" />
      </a>
    </div>
  );
};

export default ScrollArrow;
