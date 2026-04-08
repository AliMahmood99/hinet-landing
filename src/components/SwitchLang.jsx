"use client";

import { useState, useEffect } from "react";
import { useLocale } from "next-intl";

import { usePathname } from "@/i18n/navigation";

import Link from "next/link";

function SwitchLang({ className, onClick, isHidden }) {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <Link
      href={`/${locale === "ar" ? "en" : "ar"}/${pathname
        .split("/")
        .slice(1)
        .join("/")}`}
      title={locale === "en" ? "Switch to Arabic" : "التغيير إلى الإنجليزية"}
      style={{ top: isHidden ? "-100px" : "0" }}
      className={`flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#F4F6F9] hover:bg-[#E5E7EB] transition-colors ${className || ""}`}
      onClick={onClick}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#4B5563"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m5 8 6 6" />
        <path d="m4 14 6-6 2-3" />
        <path d="M2 5h12" />
        <path d="M7 2h1" />
        <path d="m22 22-5-10-5 10" />
        <path d="m14 18h6" />
      </svg>
    </Link>
  );
}

export default SwitchLang;
