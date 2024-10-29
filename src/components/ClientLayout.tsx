"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      <Header />
      <main>{children}</main>
      {/* Agar yo'l "/loginPage" bo'lsa, Footerni yashiramiz */}
      {pathname !== "/loginPage" && <Footer />}
    </>
  );
}
