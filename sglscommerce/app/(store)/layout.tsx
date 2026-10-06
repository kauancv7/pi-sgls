import { type ReactNode } from "react";

import { Header } from "@/components/layout/Header";
import { Navbar } from "@/components/layout/Navbar";
import { SiteFooter } from "@/components/layout/site-footer";
import { TopBar } from "@/components/layout/TopBar";

type StoreLayoutProps = {
  children: ReactNode;
};

export default function StoreLayout({ children }: StoreLayoutProps) {
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />
      {children}
      <SiteFooter />
    </>
  );
}
