"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Features() {
  const t = useTranslations("FeaturesSection");

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

  return (
    <section className="w-full flex flex-col items-center lg:py-20 py-10 px-4 overflow-hidden bg-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="flex flex-col items-center text-center max-w-[1200px] w-full"
      >
        {/* Badge */}
        <motion.div
          variants={fadeInUp}
          className="rounded-full border border-gray-100 shadow-sm mb-6 bg-white flex py-[8px] px-[16px] justify-center items-center gap-[8px]"
        >
          <Image
            src="/how/circle.svg"
            alt="How it works"
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <span className="text-blue-500 text-sm font-medium tracking-wide">
            {t("badge")}
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={fadeInUp}
          className="text-[36px] sm:text-[48px] font-bold text-[#060B13] mb-4 tracking-tight leading-tight max-w-[800px]"
        >
          {t("titleStart")}
          <span className="text-blue-600">{t("titleHighlight")}</span>
          {t("titleEnd")}
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={fadeInUp}
          className="text-[16px] sm:text-[18px] text-[#555555] max-w-[800px] leading-relaxed font-normal mb-16"
        >
          {t("description")}
        </motion.p>

        {/* Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 text-start">
          {/* Card 1: Real-Time Analytics */}
          <motion.div
            variants={fadeInUp}
            className="rounded-md bg-white flex flex-col gap-6 h-full"
          >
            <div className="w-full bg-[#fff] rounded-md border border-gray-100/90 flex flex-col items-center justify-center overflow-hidden">
              <Image
                src="/features/orders.svg"
                alt="Real-Time Analytics"
                width={400}
                height={250}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 p-2 mt-auto">
              <h3 className="text-xl font-bold text-[#060B13]">
                {t("cards.analytics.title")}
              </h3>
              <p className="text-[#555555] text-sm leading-relaxed">
                {t("cards.analytics.description")}
              </p>
            </div>
          </motion.div>

          {/* Card 2: White Label */}
          <motion.div
            variants={fadeInUp}
            className="rounded-md bg-white flex flex-col gap-6 h-full"
          >
            <div className="w-full bg-white rounded-md border border-gray-100/90 flex flex-col items-center justify-center overflow-hidden gap-4">
              <Image
                src="/features/white-label.svg"
                alt="White-Label Feature 1"
                width={596}
                height={79}
                className="w-full h-auto object-contain"
              />
              <Image
                src="/features/white-label.svg"
                alt="White-Label Feature 2"
                width={596}
                height={79}
                className="w-full h-auto object-contain"
              />
              <Image
                src="/features/white-label.svg"
                alt="White-Label Feature 3"
                width={596}
                height={79}
                className="w-full h-auto object-contain opacity-50"
              />
            </div>
            <div className="flex flex-col gap-2 p-2 mt-auto">
              <h3 className="text-xl font-bold text-[#060B13]">
                {t("cards.whiteLabel.title")}
              </h3>
              <p className="text-[#555555] text-sm leading-relaxed">
                {t("cards.whiteLabel.description")}
              </p>
            </div>
          </motion.div>

          {/* Card 3: Performance Monitor */}
          <motion.div
            variants={fadeInUp}
            className="rounded-md bg-white flex flex-col gap-6 h-full"
          >
            <div className="w-full flex flex-col gap-4">
              <div className="w-full rounded-xl border border-gray-200/70 p-5 sm:p-6 flex flex-col relative shadow-sm">
                <div className="absolute top-5 sm:top-6 right-5 sm:right-6 w-9 h-9">
                  <Image
                    src="/features/arrows.svg"
                    alt="How it works"
                    width={24}
                    height={24}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="text-[#333333] text-[15px] sm:text-[17px] mb-[18px]">
                  Total API Requests
                </h4>
                <div className="text-[#1062FE] text-[38px] sm:text-[46px] font-bold tracking-tight leading-none mb-[12px]">
                  15,647
                </div>
                <p className="text-[#888888] text-[13px] sm:text-[14px]">
                  Monitor incoming API traffic with accuracy
                </p>
              </div>

              <div className="w-full rounded-xl border border-gray-200/70 p-5 sm:p-6 flex flex-col relative shadow-sm">
                <div className="absolute top-5 sm:top-6 right-5 sm:right-6 w-9 h-9">
                  <Image
                    src="/features/tick.svg"
                    alt="How it works"
                    width={36}
                    height={36}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="text-[#333333] text-[15px] sm:text-[17px] mb-[18px]">
                  Successful Orders
                </h4>
                <div className="text-[#1062FE] text-[38px] sm:text-[46px] font-bold tracking-tight leading-none">
                  12,483
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 p-2 mt-auto">
              <h3 className="text-xl font-bold text-[#060B13]">
                {t("cards.performance.title")}
              </h3>
              <p className="text-[#555555] text-sm leading-relaxed">
                {t("cards.performance.description")}
              </p>
            </div>
          </motion.div>

          {/* Card 4: Global Coverage */}
          <motion.div
            variants={fadeInUp}
            className="rounded-md bg-white flex flex-col gap-6 h-full"
          >
            <div className="w-full bg-white rounded-xl border border-gray-200/70 flex flex-col shadow-sm pt-3 px-3 pb-2 relative overflow-hidden">
              <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-100/80">
                <h4 className="text-[16px] sm:text-[18px] font-bold text-[#060B13]">
                  Top Countries
                </h4>
                <span className="text-[#3C57DA] text-[15px] sm:text-[16px] font-medium">
                  200+ countries
                </span>
              </div>

              <div className="flex flex-col relative">
                {/* Saudi Arabia */}
                <div className="flex justify-between items-center  border-b border-gray-100/80">
                  <div className="flex items-center gap-4">
                    <div className="w-7 h-5 rounded-[3px] overflow-hidden flex items-center justify-center">
                      {/* Placeholder for flag */}
                      <Image
                        src="/features/sa.svg"
                        alt="Saudi Arabia"
                        width={24}
                        height={24}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-[#060B13] font-semibold text-[15px] sm:text-[16px]">
                      Saudi Arabia
                    </span>
                  </div>
                  <span className="text-[#060B13] font-bold text-[15px] sm:text-[17px]">
                    4,280
                  </span>
                </div>

                {/* UAE */}
                <div className="flex justify-between items-center py-4 border-b border-gray-100/80">
                  <div className="flex items-center gap-4">
                    <div className="w-7 h-7 rounded-[3px] overflow-hidden flex items-center justify-center">
                      {/* Placeholder for flag */}
                      <Image
                        src="/features/uae.svg"
                        alt="United Arab Emirates"
                        width={24}
                        height={24}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-[#060B13] font-semibold text-[15px] sm:text-[16px]">
                      United Arab Emirates
                    </span>
                  </div>
                  <span className="text-[#060B13] font-bold text-[15px] sm:text-[17px]">
                    1,520
                  </span>
                </div>

                {/* UK */}
                <div className="flex justify-between items-center py-4 border-b border-gray-100/80">
                  <div className="flex items-center gap-4">
                    <div className="w-7 h-7 rounded-[3px] overflow-hidden flex items-center justify-center">
                      {/* Placeholder for flag */}
                      <Image
                        src="/features/en.svg"
                        alt="United Kingdom"
                        width={24}
                        height={24}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-[#060B13] font-semibold text-[15px] sm:text-[16px]">
                      United Kingdom
                    </span>
                  </div>
                  <span className="text-[#060B13] font-bold text-[15px] sm:text-[17px]">
                    1,740
                  </span>
                </div>

                {/* Germany */}
                <div className="flex justify-between items-center py-4 border-b border-gray-100/80">
                  <div className="flex items-center gap-4">
                    <div className="w-7 h-5 bg-black rounded-[3px] overflow-hidden flex flex-col">
                      {/* Placeholder for flag */}
                      <div className="w-full h-1/3 bg-black"></div>
                      <div className="w-full h-1/3 bg-red-600"></div>
                      <div className="w-full h-1/3 bg-yellow-400"></div>
                    </div>
                    <span className="text-[#060B13] font-semibold text-[15px] sm:text-[16px]">
                      Germany
                    </span>
                  </div>
                  <span className="text-[#060B13] font-bold text-[15px] sm:text-[17px]">
                    2,890
                  </span>
                </div>

                {/* USA (Faded out manually or by gradient) */}
                <div className="flex justify-between items-center py-4 bg-white opacity-20 relative z-0">
                  <div className="flex items-center gap-4">
                    <div className="w-7 h-5 bg-gray-200 rounded-[3px] overflow-hidden flex items-center justify-center">
                      {/* Placeholder for flag */}
                      <span className="text-[10px] text-gray-500">US</span>
                    </div>
                    <span className="text-[#060B13] font-semibold text-[15px] sm:text-[16px]">
                      United States
                    </span>
                  </div>
                  <span className="text-[#060B13] font-bold text-[15px] sm:text-[17px]">
                    1,740
                  </span>
                </div>

                {/* Gradient overlay for perfect fade out effect */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent/10 z-10 pointer-events-none"></div>
              </div>
            </div>

            <div className="flex flex-col gap-2 p-2 mt-auto">
              <h3 className="text-xl font-bold text-[#060B13]">
                {t("cards.coverage.title")}
              </h3>
              <p className="text-[#555555] text-sm leading-relaxed">
                {t("cards.coverage.description")}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
