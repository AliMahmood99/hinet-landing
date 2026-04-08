"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Security() {
  const t = useTranslations("SecuritySection");

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const cards = [
    {
      key: "secureApi",
    },
    {
      key: "isolatedEnv",
    },
    {
      key: "encryptedTrans",
    },
    {
      key: "auditLog",
    },
  ];

  return (
    <section className="w-full flex flex-col items-center lg:py-20 py-10 px-4 overflow-hidden bg-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="flex flex-col lg:flex-row max-w-[1200px] w-full gap-12 lg:gap-24 items-start"
      >
        {/* Left Side: Content */}
        <div className="flex flex-col items-start text-start w-full lg:w-1/2 lg:sticky lg:top-0">
          {/* Badge */}
          <motion.div
            variants={fadeInUp}
            className="rounded-full border border-gray-100 shadow-sm mb-6 bg-white flex py-[8px] px-[16px] justify-center items-center gap-[8px]"
          >
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <span className="text-blue-500 text-sm font-medium tracking-wide">
              {t("badge")}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeInUp}
            className="text-[36px] sm:text-[48px] font-bold text-[#060B13] mb-4 tracking-tight leading-tight"
          >
            {t("titleStart")}
            <span className="text-blue-600">{t("titleHighlight")}</span>
            {t("titleEnd")}
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-[16px] sm:text-[18px] text-[#555555] leading-relaxed font-normal"
          >
            {t("description")}
          </motion.p>
        </div>

        {/* Right Side: Cards Wrap */}
        <div className="w-full lg:w-1/2 bg-[#F8F9FA] rounded-[32px] p-4 sm:p-6 lg:p-8 flex flex-col gap-4">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col items-start text-start shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100/50"
            >
              <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mb-4 flex-shrink-0">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3 className="text-[18px] sm:text-[20px] font-bold text-[#060B13] mb-2 tracking-tight">
                {t(`cards.${card.key}.title`)}
              </h3>
              <p className="text-[#555555] text-[14px] sm:text-[15px] leading-relaxed">
                {t(`cards.${card.key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
