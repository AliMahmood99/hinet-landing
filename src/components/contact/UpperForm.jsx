"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function UpperForm() {
  const t = useTranslations("Contact");
  const email = t("gmail");
  const phone = t("phone");
  // Strip all whitespace for the tel: URI
  const telHref = phone ? `tel:${phone.replace(/\s+/g, "")}` : null;

  return (
    <>
      <h1>{t("title")}</h1>
      <p>{t("subtitle")}</p>

      <div className="btn-container">
        <a
          href={email ? `mailto:${email}` : undefined}
          className="email-btn"
          role="button"
        >
          <Image src="/contact/email.svg" alt="" width={22} height={20} />
          <p>{email}</p>
        </a>
        <a
          href={telHref || undefined}
          className="phone-btn"
          role="button"
        >
          <Image src="/contact/phone.svg" alt="" width={20} height={20} />
          <p>{phone}</p>
        </a>
      </div>
    </>
  );
}
