"use client";
import { useMemo } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

import BackTop from "~/components/BackTop";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isEn = useMemo(() => pathname.includes("/en"), [pathname]);
  const Header = isEn
  ? dynamic(() => import("~/en/components/Header"))
  : dynamic(() => import("~/components/Header"));

  const Footer = isEn
    ? dynamic(() => import("~/en/components/Footer"))
    : dynamic(() => import("~/components/Footer"));

  return (
    <section className={`wrapper ${isEn && "enPage"}`}>
      <Header />
      <main className="main" itemType="https://schema.org/Organization">
        {children}
      </main>
      <Footer />
      <BackTop />
    </section>
  );
};

export default MainLayout;
