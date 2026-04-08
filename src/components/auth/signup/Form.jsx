"use client";

import Link from "next/link";
import FormField from "../../ui/FormField";
import { useTranslations } from "next-intl";
import SubmitBtn from "../../ui/SubmitBtn";
import "../form.css";

export default function Form() {
  const t = useTranslations("SignUp");

  return (
    <>
      <form action="" className="auth-form space-y-5">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
          {t("title")} <span className="text-blue-600">{t("titleSpan")}</span>
        </h1>
        <p className="text-gray-500 text-sm md:text-base mb-8 leading-relaxed">
          {t("subtitle")}
        </p>
        {/* Full Name */}
        <FormField
          lbl={t("form.name.lbl")}
          htmlFor={t("form.name.lbl")}
          placeholder={t("form.name.placeholder")}
        />

        {/* Business Email */}
        <FormField
          lbl={t("form.email.lbl")}
          htmlFor={t("form.email.lbl")}
          placeholder={t("form.email.placeholder")}
        />

        {/* Phone Number */}
        <FormField
          lbl={t("form.phone.lbl")}
          htmlFor={t("form.phone.lbl")}
          placeholder={t("form.phone.placeholder")}
        />

        {/* Commercial Registration No. */}
        <FormField
          lbl={t("form.crn.lbl")}
          htmlFor={t("form.crn.lbl")}
          placeholder={t("form.crn.placeholder")}
        />

        {/* Password */}
        <FormField
          lbl={t("form.password.lbl")}
          htmlFor={t("form.password.lbl")}
          placeholder={t("form.password.placeholder")}
        />

        {/* Submit Button */}
        <SubmitBtn submitTxt={t("form.submit")} />

        {/* الفوتر الصغير */}
        <p className="text-center text-sm text-gray-500 mt-6 font-bold">
          Already a partner?{" "}
          <Link
            href="/signin"
            className="text-[#4c5de6] hover:underline transition-all"
          >
            Sign In
          </Link>
        </p>
      </form>
    </>
  );
}
