"use client";
import { useRouter } from "next/navigation";
import type { Metadata } from "next";
import { useRef, useEffect, KeyboardEventHandler } from "react";
import NewsResType from "../types";

export const metadata: Metadata = {
  title: "TAIDE - 最新動態",
};

const SearchInput = ({ keyword = "" }: NewsResType.QueryType) => {
  const searchInput = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (searchInput.current) {
      searchInput.current.value = keyword as string;
    }
  }, [keyword]);

  const handleSearch = () => {
    if (searchInput.current) {
      if (searchInput.current.value) {
        router.push(
          `${process.env.NEXT_PUBLIC_ASSET_PREFIX}/newsList?keyword=${searchInput.current.value}`
        );
      }
    }
  };

  const performSearch = (e: any): void => {
    if (e.which === 13) handleSearch();
  };
  return (
    <div className="searchUnit">
      <button type="submit" onClick={handleSearch}>
        <span>search</span>
      </button>

      <input
        type="search"
        id="quicksearch"
        name="q"
        placeholder="請輸入搜尋關鍵字..."
        ref={searchInput}
        onKeyUp={performSearch}
      />
    </div>
  );
};

export default SearchInput;
