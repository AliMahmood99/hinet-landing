"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import SubmitBtn from "../ui/SubmitBtn";
import FormField from "../ui/FormField";
import "./contact.css";

export default function Form() {
  const t = useTranslations("Contact");
  return (
    <>
      <form className="contact-form">
        <div className="form-grid">
          <div className="inputs-col">
            <FormField
              lbl={t("form.name.lbl")}
              htmlFor="name"
              placeholder={t("form.name.placeholder")}
            />

            <FormField
              lbl={t("form.email.lbl")}
              htmlFor="email"
              placeholder={t("form.email.placeholder")}
            />

            <FormField
              lbl={t("form.phone.lbl")}
              htmlFor="phone"
              placeholder={t("form.phone.placeholder")}
            />
          </div>

          <div className="message-col">
            <div className="field h-full">
              <label htmlFor="message">{t("form.message.lbl")}</label>
              <textarea
                id="message"
                placeholder={t("form.message.placeholder")}
                required
              ></textarea>
            </div>
          </div>
        </div>
        <SubmitBtn submitTxt={t("form.submit")} />
      </form>
    </>
  );
}
