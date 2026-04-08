"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import { toast } from "sonner";
import { Loader2, Building2, Mail, User, Phone, Check, FileText, ClipboardList, ScanSearch, Rocket } from "lucide-react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import { signupSchema } from "@/lib/validations/signup";
import { registerBusiness } from "@/lib/api";
import "../form.css";

export default function SignUpForm() {
  const t = useTranslations("SignUp");
  const locale = useLocale();
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState("");

  const {
    register,
    handleSubmit,
    control,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signupSchema),
    mode: "onTouched",
    defaultValues: {
      companyName: "",
      firstName: "",
      lastName: "",
      email: "",
      crn: "",
      phone: "",
      acceptTerms: false,
    },
  });

  const getErrorMessage = (fieldError) => {
    if (!fieldError) return null;
    const key = fieldError.message;
    // Try to get translation, fallback to the raw message
    try {
      return t(`form.errors.${key}`);
    } catch {
      return key;
    }
  };

  const onSubmit = async (data) => {
    try {
      await registerBusiness({
        ...data,
        country: selectedCountry || undefined,
      });

      toast.success(t("form.successMessage"), {
        duration: 5000,
      });

      router.push("/auth/signup/success");
    } catch (error) {
      const status = error?.response?.status;
      const errorCode = error?.response?.data?.error?.code;

      if (status === 409 || errorCode === "CONFLICT") {
        setError("email", { message: "emailExists" });
        toast.error(t("form.errors.emailExists"));
      } else if (status === 400) {
        const details = error?.response?.data?.error?.details;
        if (details) {
          // Map backend validation errors to form fields
          Object.entries(details).forEach(([field, message]) => {
            if (field in signupSchema.shape) {
              setError(field, { message: String(message) });
            }
          });
        }
        toast.error(t("form.errors.validationFailed"));
      } else if (status === 429) {
        toast.error(t("form.errors.rateLimited"));
      } else if (!error?.response) {
        toast.error(t("form.errors.networkError"));
      } else {
        toast.error(t("form.errors.generic"));
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="auth-form space-y-3.5"
      noValidate
    >
      {/* Header */}
      <div className="mb-1">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
          {t("title")} <span className="text-blue-600">{t("titleSpan")}</span>
        </h1>
        {/* Steps Flow */}
        <div className="flex items-center gap-2 mt-3">
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
              <ClipboardList className="w-3 h-3 text-blue-600" />
            </div>
            <span className="text-xs font-medium text-gray-700">{t("steps.step1")}</span>
          </div>
          <div className="w-4 h-px bg-gray-300 rtl:rotate-180" />
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center">
              <ScanSearch className="w-3 h-3 text-amber-600" />
            </div>
            <span className="text-xs font-medium text-gray-700">{t("steps.step2")}</span>
          </div>
          <div className="w-4 h-px bg-gray-300 rtl:rotate-180" />
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
              <Rocket className="w-3 h-3 text-green-600" />
            </div>
            <span className="text-xs font-medium text-gray-700">{t("steps.step3")}</span>
          </div>
        </div>
      </div>

      {/* Company Name */}
      <div>
        <label htmlFor="companyName" className="block text-xs font-semibold text-gray-700 mb-1">
          {t("form.companyName.lbl")}
        </label>
        <div className="relative">
          <Building2 className="absolute left-3 rtl:left-auto rtl:right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            id="companyName"
            type="text"
            autoFocus
            maxLength={300}
            placeholder={t("form.companyName.placeholder")}
            className={`w-full pl-10 rtl:pl-4 rtl:pr-10 pr-4 py-2.5 rounded-xl border ${
              errors.companyName
                ? "border-red-400 focus:ring-red-200"
                : "border-gray-200 focus:ring-blue-100"
            } focus:outline-none focus:ring-2 focus:border-transparent transition-all text-sm`}
            {...register("companyName")}
          />
        </div>
        {errors.companyName && (
          <p className="text-red-500 text-xs mt-1">{getErrorMessage(errors.companyName)}</p>
        )}
      </div>

      {/* First Name + Last Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-xs font-semibold text-gray-700 mb-1">
            {t("form.firstName.lbl")}
          </label>
          <div className="relative">
            <User className="absolute left-3 rtl:left-auto rtl:right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              id="firstName"
              type="text"
              maxLength={100}
              placeholder={t("form.firstName.placeholder")}
              className={`w-full pl-10 rtl:pl-4 rtl:pr-10 pr-4 py-2.5 rounded-xl border ${
                errors.firstName
                  ? "border-red-400 focus:ring-red-200"
                  : "border-gray-200 focus:ring-blue-100"
              } focus:outline-none focus:ring-2 focus:border-transparent transition-all text-sm`}
              {...register("firstName")}
            />
          </div>
          {errors.firstName && (
            <p className="text-red-500 text-xs mt-1">{getErrorMessage(errors.firstName)}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-xs font-semibold text-gray-700 mb-1">
            {t("form.lastName.lbl")}
          </label>
          <div className="relative">
            <User className="absolute left-3 rtl:left-auto rtl:right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              id="lastName"
              type="text"
              maxLength={100}
              placeholder={t("form.lastName.placeholder")}
              className={`w-full pl-10 rtl:pl-4 rtl:pr-10 pr-4 py-2.5 rounded-xl border ${
                errors.lastName
                  ? "border-red-400 focus:ring-red-200"
                  : "border-gray-200 focus:ring-blue-100"
              } focus:outline-none focus:ring-2 focus:border-transparent transition-all text-sm`}
              {...register("lastName")}
            />
          </div>
          {errors.lastName && (
            <p className="text-red-500 text-xs mt-1">{getErrorMessage(errors.lastName)}</p>
          )}
        </div>
      </div>

      {/* Business Email */}
      <div>
        <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-1">
          {t("form.email.lbl")}
        </label>
        <div className="relative">
          <Mail className="absolute left-3 rtl:left-auto rtl:right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            id="email"
            type="email"
            maxLength={255}
            placeholder={t("form.email.placeholder")}
            className={`w-full pl-10 rtl:pl-4 rtl:pr-10 pr-4 py-2.5 rounded-xl border ${
              errors.email
                ? "border-red-400 focus:ring-red-200"
                : "border-gray-200 focus:ring-blue-100"
            } focus:outline-none focus:ring-2 focus:border-transparent transition-all text-sm`}
            {...register("email")}
          />
        </div>
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{getErrorMessage(errors.email)}</p>
        )}
      </div>

      {/* Commercial Registration Number */}
      <div>
        <label htmlFor="crn" className="block text-xs font-semibold text-gray-700 mb-1">
          {t("form.crn.lbl")} <span className="text-gray-400 font-normal">({t("form.phone.optional")})</span>
        </label>
        <div className="relative">
          <FileText className="absolute left-3 rtl:left-auto rtl:right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            id="crn"
            type="text"
            maxLength={50}
            placeholder={t("form.crn.placeholder")}
            className={`w-full pl-10 rtl:pl-4 rtl:pr-10 pr-4 py-2.5 rounded-xl border ${
              errors.crn
                ? "border-red-400 focus:ring-red-200"
                : "border-gray-200 focus:ring-blue-100"
            } focus:outline-none focus:ring-2 focus:border-transparent transition-all text-sm`}
            {...register("crn")}
          />
        </div>
        {errors.crn && (
          <p className="text-red-500 text-xs mt-1">{getErrorMessage(errors.crn)}</p>
        )}
      </div>

      {/* Phone with Country Code */}
      <div>
        <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 mb-1">
          {t("form.phone.lbl")} <span className="text-gray-400 font-normal">({t("form.phone.optional")})</span>
        </label>
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <PhoneInput
              {...field}
              international
              countryCallingCodeEditable={false}
              defaultCountry={locale === "ar" ? "SA" : "US"}
              onCountryChange={(country) => setSelectedCountry(country || "")}
              className={`phone-input-wrapper w-full rounded-xl border ${
                errors.phone
                  ? "border-red-400 focus-within:ring-red-200"
                  : "border-gray-200 focus-within:ring-blue-100"
              } focus-within:ring-2 focus-within:border-transparent transition-all`}
            />
          )}
        />
        {errors.phone && (
          <p className="text-red-500 text-xs mt-1">{getErrorMessage(errors.phone)}</p>
        )}
      </div>

      {/* Terms & Privacy */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="relative mt-0.5">
            <input
              type="checkbox"
              className="sr-only peer"
              {...register("acceptTerms")}
            />
            <div className={`w-5 h-5 rounded-md border-2 transition-all flex items-center justify-center ${
              errors.acceptTerms
                ? "border-red-400"
                : "border-gray-300 group-hover:border-blue-400"
            } peer-checked:bg-blue-600 peer-checked:border-blue-600`}>
              <Check className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
            </div>
          </div>
          <span className="text-sm text-gray-600 leading-relaxed">
            {t("form.terms.text")}{" "}
            <a href="/terms" target="_blank" className="text-blue-600 hover:underline font-medium">
              {t("form.terms.termsLink")}
            </a>{" "}
            {t("form.terms.and")}{" "}
            <a href="/privacy" target="_blank" className="text-blue-600 hover:underline font-medium">
              {t("form.terms.privacyLink")}
            </a>
          </span>
        </label>
        {errors.acceptTerms && (
          <p className="text-red-500 text-xs mt-1.5">{getErrorMessage(errors.acceptTerms)}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 rounded-xl text-white font-semibold text-sm transition-all disabled:opacity-60 disabled:cursor-not-allowed hover:opacity-90 flex items-center justify-center gap-2"
        style={{
          background: "linear-gradient(90deg, #005DFF 0%, #5F5CA4 100%)",
        }}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            {t("form.submitting")}
          </>
        ) : (
          t("form.submit")
        )}
      </button>

    </form>
  );
}
