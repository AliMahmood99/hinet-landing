"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
export default function UpperForm() {
  const t = useTranslations("Contact");
  return (
    <>
      <h1>{t("title")}</h1>
      <p>{t("subtitle")}</p>

      <div className="btn-container">
        <button className="email-btn">
          <Image src="/contact/email.svg" alt="" width={22} height={20} />
          <p>{t("gmail")}</p>
        </button>
        <button className="phone-btn">
          <Image src="/contact/phone.svg" alt="" width={20} height={20} />
          <p>{t("phone")}</p>
        </button>
      </div>
    </>
  );
}
