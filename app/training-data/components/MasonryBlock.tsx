"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import WorldCloudResType from "../worldCloudType";

const MasonryBlock = ({ wordCloudList }: WorldCloudResType.WorldCloudType) => {
  const [imgLoadedLength, setImgLoadedLength] = useState(0);
  const imgRefList = useRef<HTMLImageElement[]>([]);
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
    });
  }, []);

  useEffect(() => {
    if (imgLoadedLength === wordCloudList.length) {
      imgRefList.current.forEach((e) => (e.style.height = "auto"));

      $(".grid").masonry({
        itemSelector: ".grid-item",
        gutter: 5,
        fitWidth: true,
      });
    }

  }, [imgLoadedLength, wordCloudList.length]);

  return (
    <div className="logoCloud">
      <div className="grid">
        {wordCloudList.map((e, i) => (
          <div className={`grid-item width-${e.proportion}`} key={e.id}>
            <Image
              src={`${process.env.NEXT_PUBLIC_WORD_CLOUD_IMG_URL}/${e.id}`}
              alt={e.title}
              width={500}
              height={500}
              style={{ height: 0 }}
              onLoad={() => setImgLoadedLength((prev) => prev + 1)}
              ref={(el) => (imgRefList.current[i] = el as HTMLImageElement)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MasonryBlock;
