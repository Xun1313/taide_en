"use client";
import Link from "next/link";
import { useEffect } from "react";
import TrainDataResType from "../types";

const Navigation = ({
  trainDataTypeList,
  type,
}: {
  trainDataTypeList: Record<string, string>;
  type: number;
}) => {
  useEffect(() => {
    $(document).ready(function () {
      $(".tagUnit").click(function () {
        const targetElement: {
          offset: Function;
        } = $(`h1`);
        var header = $(".header").height() as number;
        $("html, body").animate(
          {
            scrollTop: targetElement.offset().top - header,
          },
          200
        );
      });
    });

    return () => {
      $(document).ready(function () {
        $(".tagUnit").off("click");
      });
    };
  }, []);

  return (
    <>
      <h1>訓練資料</h1>
      <div className="tagList tagClick">
        {Object.keys(trainDataTypeList).map((e) => (
          <div
            className={`tagUnit secondary ${type === Number(e) && "active"}`}
            key={trainDataTypeList[e]}
          >
            <Link
              href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/training-data?type=${e}`}
              scroll={false}
            >
              {trainDataTypeList[e]}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Navigation;
