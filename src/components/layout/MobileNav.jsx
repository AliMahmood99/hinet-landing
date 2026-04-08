"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Logo from "@/components/common/Logo";
import Image from "next/image";
import SwitchLang from "@/components/SwitchLang";

const PROVIDER_LOGIN_URL =
  process.env.NEXT_PUBLIC_PROVIDER_PANEL_URL
    ? `${process.env.NEXT_PUBLIC_PROVIDER_PANEL_URL}/login`
    : "https://provider.hinet.testcode.tech/login";

export default function MobileNav() {
  const t = useTranslations("Navigation");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "/travelers", label: t("forTravelers") },
    { href: "/business", label: t("forBusinesses") },
    { href: "/contactUs", label: t("contact") },
  ];

  return (
    <>
      {/* Hamburger button */}
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden relative z-50 text-[#1F2937]"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Image src="/header/menu.svg" alt="Menu" width={35} height={35} />
        )}
      </Button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Slide-out Menu */}
      <div
        className={`fixed inset-y-0 right-0 z-40 w-[280px] sm:w-[350px] bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full bg-white">
          <div className="p-6 border-b border-[#DEE5ED]">
            <Logo />
          </div>

          <div className="flex-1 overflow-y-auto py-6 px-6">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 rounded-xl text-lg font-medium text-[#4B5563] hover:text-[#1C5F9C] hover:bg-[#F8FAFC] transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-8 flex flex-col gap-4">
              {/* Language switcher */}
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#F8FAFC] transition-all">
                <SwitchLang onClick={() => setIsOpen(false)} />
                <span className="text-base text-[#4B5563] font-medium">
                  {t("switchLanguage")}
                </span>
              </div>

              <a
                href={PROVIDER_LOGIN_URL}
                className="w-full text-center bg-[#F8FAFC] hover:bg-[#E5E7EB] text-[#2563EB] font-semibold rounded-full h-[44px] flex items-center justify-center transition-all"
                onClick={() => setIsOpen(false)}
              >
                {t("signIn")}
              </a>
              <Link
                href="/auth/signup"
                className="w-full text-center bg-[#923CF6] hover:bg-[#7C3AED] text-white font-semibold rounded-full h-[44px] flex items-center justify-center shadow-md hover:shadow-lg transition-all"
                onClick={() => setIsOpen(false)}
              >
                {t("getApiAccess")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
