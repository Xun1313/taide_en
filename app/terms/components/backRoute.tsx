"use client";

import { useRouter } from "next/navigation";

const BackRoute = () => {
  const router = useRouter();
  return (
    <a style={{ cursor: "pointer" }} onClick={() => router.back()}>
      返回上頁
    </a>
  );
};

export default BackRoute;
