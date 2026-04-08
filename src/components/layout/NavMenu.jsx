import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import SwitchLang from "@/components/SwitchLang";

const PROVIDER_LOGIN_URL =
  process.env.NEXT_PUBLIC_PROVIDER_PANEL_URL
    ? `${process.env.NEXT_PUBLIC_PROVIDER_PANEL_URL}/login`
    : "https://provider.hinet.testcode.tech/login";

export default function NavMenu() {
  const t = useTranslations("Navigation");
  const pathname = usePathname();

  const navLinks = [
    { href: "/travelers", label: t("forTravelers") },
    { href: "/business", label: t("forBusinesses") },
    { href: "/contactUs", label: t("contact") },
  ];

  return (
    <div className="flex w-fit justify-between items-center shrink-0 rounded-[100px] border border-[#DEE5ED] bg-[#FFF] pl-[20px] pr-[14px] py-[10px] gap-8 xl:gap-14 shadow-sm">
      {/* Navigation Links */}
      <div className="flex items-center gap-2">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[15px] font-medium transition-colors rounded-[100px] px-[20px] py-[12px] ${
                isActive
                  ? "bg-[#F4F6F9] text-[#1C5F9C]"
                  : "text-[#4B5563] hover:text-[#1C5F9C] hover:bg-[#F4F6F9]"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-[12px]">
        <SwitchLang />
        <a
          href={PROVIDER_LOGIN_URL}
          className="text-[15px] font-semibold text-[#4B5563] hover:text-[#1C5F9C] transition-colors px-[16px] py-[12px] rounded-[100px] hover:bg-[#F4F6F9]"
        >
          {t("signIn")}
        </a>
        <Link href="/auth/signup">
          <Button className="bg-[#9333EA] hover:bg-[#7E22CE] text-white font-semibold rounded-[100px] px-[24px] h-[48px] shadow-sm hover:shadow-md transition-all text-[15px]">
            {t("getApiAccess")}
          </Button>
        </Link>
      </div>
    </div>
  );
}
