"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import SubmitBtn from "../ui/SubmitBtn";
import "./contact.css";

export default function Form() {
  const t = useTranslations("Contact");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const API_BASE =
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://hinet.testcode.tech/api/v1";

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = t("form.errors.nameRequired");
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("form.errors.emailInvalid");
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = t("form.errors.messageRequired");
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch(`${API_BASE}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim().toLowerCase(),
          phone: formData.phone.trim() || undefined,
          message: formData.message.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error?.message || "Something went wrong");
      }

      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      toast.success(t("form.success"));
    } catch (err) {
      if (err.message?.includes("Too many")) {
        toast.error(t("form.errors.tooMany"));
      } else {
        toast.error(err.message || t("form.errors.generic"));
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success state
  if (isSubmitted) {
    return (
      <div className="contact-form text-center py-12">
        <div className="text-5xl mb-4">&#10003;</div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {t("form.successTitle")}
        </h3>
        <p className="text-gray-500 mb-6">{t("form.successDesc")}</p>
        <button
          type="button"
          onClick={() => setIsSubmitted(false)}
          className="submit-btn inline-block"
        >
          {t("form.sendAnother")}
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <div className="inputs-col">
          <div className="field">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
              {t("form.name.lbl")}
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t("form.name.placeholder")}
              disabled={isSubmitting}
              className={`w-full px-4 py-2.5 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-gray-400 ${
                errors.name ? "border-red-400" : "border-gray-200"
              }`}
            />
            {errors.name && (
              <p className="text-xs text-red-500 mt-1">{errors.name}</p>
            )}
          </div>

          <div className="field">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
              {t("form.email.lbl")}
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t("form.email.placeholder")}
              disabled={isSubmitting}
              className={`w-full px-4 py-2.5 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-gray-400 ${
                errors.email ? "border-red-400" : "border-gray-200"
              }`}
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email}</p>
            )}
          </div>

          <div className="field">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
              {t("form.phone.lbl")}
            </label>
            <input
              type="text"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={t("form.phone.placeholder")}
              disabled={isSubmitting}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-gray-400"
            />
          </div>
        </div>

        <div className="message-col">
          <div className="field h-full">
            <label htmlFor="message">{t("form.message.lbl")}</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t("form.message.placeholder")}
              disabled={isSubmitting}
              required
              className={errors.message ? "border-red-400" : ""}
            ></textarea>
            {errors.message && (
              <p className="text-xs text-red-500 mt-1">{errors.message}</p>
            )}
          </div>
        </div>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className={`submit-btn ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
      >
        {isSubmitting ? t("form.submitting") : t("form.submit")}
      </button>
    </form>
  );
}
