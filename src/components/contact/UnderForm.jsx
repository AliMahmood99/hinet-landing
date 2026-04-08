"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
export default function UnderForm() {
  const t = useTranslations("Contact");
  return (
    <div className="under-form">
      <h2>{t("underForm.title")}</h2>
      <p>{t("underForm.description")}</p>
      <button className="">
        <span className="get-started-txt bg-gradient-to-r from-[#005dff] to-[#5f5ca4] bg-clip-text text-transparent">
          {t("underForm.button")}
        </span>
        <Image
          src="/contact/arrow-up.svg"
          alt=""
          width={40.76}
          height={40.76}
          className="img"
        />
      </button>
    </div>
  );
}
