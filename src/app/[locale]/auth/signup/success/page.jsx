import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { CheckCircle2, Clock, Mail, KeyRound, Rocket } from "lucide-react";

export default function SignUpSuccess() {
  const t = useTranslations("SignUpSuccess");

  const steps = [
    { icon: Clock, text: t("steps.step1") },
    { icon: Mail, text: t("steps.step2") },
    { icon: KeyRound, text: t("steps.step3") },
    { icon: Rocket, text: t("steps.step4") },
  ];

  return (
    <div className="min-h-[calc(100dvh-80px)] flex items-center justify-center px-4 py-12">
      <div className="max-w-lg w-full text-center">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-green-500" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          {t("title")}
        </h1>
        <p className="text-blue-600 font-semibold text-lg mb-4">
          {t("subtitle")}
        </p>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
          {t("description")}
        </p>

        {/* Steps */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-8 text-start">
          <h3 className="font-semibold text-gray-800 mb-4 text-sm uppercase tracking-wide">
            {t("whatNext")}
          </h3>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                  <step.icon className="w-4 h-4 text-blue-600" />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90 flex items-center justify-center gap-2"
            style={{
              background: "linear-gradient(90deg, #005DFF 0%, #5F5CA4 100%)",
            }}
          >
            {t("backHome")}
          </Link>
          <Link
            href="/contactUs"
            className="px-6 py-3 rounded-xl border border-gray-200 text-gray-700 font-semibold text-sm transition-all hover:bg-gray-50 flex items-center justify-center gap-2"
          >
            {t("contactUs")}
          </Link>
        </div>
      </div>
    </div>
  );
}
