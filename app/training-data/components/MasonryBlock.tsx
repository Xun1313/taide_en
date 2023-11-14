"use client";

import Image from "next/image";
import { useEffect } from "react";

import WorldCloudResType from "../worldCloudType";

const MasonryBlock = ({ wordCloudList }: WorldCloudResType.WorldCloudType) => {
  useEffect(() => {
    $(document).ready(function () {
      // 獲取元素的父級容器
      var grid = document.querySelector(".grid") as HTMLDivElement;
      // 將子元素轉為數組
      var items = Array.from(grid.children);

      // 打亂元素順序
      items.sort(function () {
        return 0.5 - Math.random();
      });

      // 將打亂後的元素重新加入父容器
      items.forEach(function (item) {
        grid.appendChild(item);
      });

      $(".grid").masonry({
        itemSelector: ".grid-item",
        gutter: 10,
        fitWidth: true,
      });
    });
  }, []);

  return (
    <div className="logoCloud">
      <div className="grid">
        {wordCloudList.map((e) => (
          <div className={`grid-item width-${e.proportion}`} key={e.id}>
            <Image
              src={`${process.env.NEXT_PUBLIC_NEWS_IMG_URL}/${e.id}`}
              alt={e.title}
              width={500}
              height={500}
              style={{ height: "auto" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MasonryBlock;
