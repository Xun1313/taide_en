import Image from "next/image";
import Link from "next/link";
import btnNextArrow from "~/images/icon/btn_nextArrow.svg";
import { format } from "date-fns";
import NewsResType from "../types";
import { typeMapping } from "~/utils/common";

const CardItem = ({ title, issueDate, id, type }: NewsResType.ItemType) => {
  return (
    <div className="card__item">
      <div className="photo">
        <Link href={`/newsList/newsDetail/${id}`}></Link>
        <Image
          src={`${process.env.NEXT_PUBLIC_NEWS_IMG_URL}/${id}`}
          alt={title}
          width={500}
          height={500}
        />

        <div className="btn">
          <Image src={btnNextArrow} alt="arrow" />
        </div>
      </div>
      <div className="infoCon">
        <h3>
          <Link href={`/newsList/newsDetail/${id}`}>{title}</Link>
        </h3>
        {issueDate && (
          <div className="tagUnit date">
            {format(new Date(issueDate), "yyyy.MM.dd")}
          </div>
        )}
        {typeMapping[type] && (
          <div className="tagUnit secondary">{typeMapping[type]}</div>
        )}
      </div>
    </div>
  );
};

export default CardItem;
