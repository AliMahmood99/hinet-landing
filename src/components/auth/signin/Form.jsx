"use client";

import Link from "next/link";
import SubmitBtn from "../../ui/SubmitBtn";

import FormField from "../../ui/FormField";
import { useTranslations } from "next-intl";
import "../form.css";

export default function SignInPage() {
  const t = useTranslations("SignIn");
  return (
    <form className="auth-form space-y-5">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
        {t("title")} <span className="text-blue-600">{t("titleSpan")}</span>{" "}
        {t("title_p2")}
      </h1>
      <p className="text-gray-500 text-sm md:text-base mb-8 leading-relaxed">
        {t("subtitle")}
      </p>
      <FormField
        lbl={t("form.email.lbl")}
        htmlFor={t("form.email.lbl")}
        placeholder={t("form.email.placeholder")}
      />
      <FormField
        lbl={t("form.password.lbl")}
        htmlFor={t("form.password.lbl")}
        placeholder={t("form.password.placeholder")}
        type="password"
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
  );
}
