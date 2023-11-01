"use client";
import { useRouter } from "next/navigation";
import type { Metadata } from "next";
import { useRef, useEffect } from "react";
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
        router.push(`/newsList?keyword=${searchInput.current.value}`);
      }
    }
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
      />
    </div>
  );
};

export default SearchInput;
