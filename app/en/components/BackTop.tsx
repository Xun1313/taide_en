"use client";

import { useEffect } from "react";
const BackTop = () => {
  function headerScroll() {
    var st = $(window).scrollTop() || 0;
    if (st > 0) {
      $(".backtop").addClass("open");
    } else {
      $(".backtop").removeClass("open");
    }
  }
  useEffect(() => {
    $(document).ready(function () {
      if ($(".backtop").length <= 0) {
        $(".wrapper").append(
          '<div class="backtop"><div class="backtop__body"><a class="backtop__link" href="#">Back to Top</a></div></div>'
        );
      }
      $(".backtop a").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
      });
    });
    window.onscroll = function () {
      headerScroll();
    };

    return () => {
      $(document).ready(function () {
        $(".backtop a").off("click");
      });
    };
  }, []);

  return <></>;
};

export default BackTop;
