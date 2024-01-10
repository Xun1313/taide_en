"use client";

import Image from "next/image";
import Link from "next/link";
import btnDownArrow from "~/images/icon/btn_downArrow.svg";
import iconData from "~/images/icon/icon_data.svg";
import TrainDataResType from "../types";
import { useEffect } from "react";

const CardItem = ({ data }: { data: TrainDataResType.ItemType }) => {
  useEffect(() => {
    $(document).ready(function () {
      $(`.cardTrainData__item${data.id}`).show(500);
    });

  }, [data]);

  return (
    <>
      <div
        className={`cardTrainData__item cardTrainData__item${data.id}`}
        style={{ display: "none" }}
      >
        <div className="title">{data.supplyUnit}</div>
        <h3>{data.title}</h3>
        <div className="dataCard">
          <Image src={iconData} alt="data" />
        </div>
        {data.url && (
          <a
            className="tagUnit secondary"
            href={data.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            資料來源網站
          </a>
        )}
        <div className="btn">
          <Link
            href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/training-data/${data.id}`}
          >
            <span>更多資料</span>
            <Image src={btnDownArrow} style={{ height: "auto" }} alt="arrow" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default CardItem;
