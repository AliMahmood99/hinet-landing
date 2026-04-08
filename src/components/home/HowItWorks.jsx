"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const t = useTranslations("HowItWorks");

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
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
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
          className="rounded-full border border-[#E2E8F0] shadow-sm mb-6 bg-white flex py-[8px] px-[16px] justify-center items-center gap-[8px]"
        >
          <Image
            src="/how/circle.svg"
            alt="How it works"
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <span className="text-[#3B82F6] text-sm font-medium tracking-wide border-l border-[#E2E8F0] pl-2 ml-1">
            {t("badge")}
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={fadeInUp}
          className="text-[36px] sm:text-[48px] font-bold text-[#060B13] mb-4 tracking-tight leading-tight"
        >
          <span className="text-[#005DFF]">{t("titleHighlight")}</span>
          {t("titleEnd")}
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={fadeInUp}
          className="text-[16px] sm:text-[18px] text-[#555555] max-w-[800px] leading-relaxed font-normal"
        >
          {t("description")}
        </motion.p>
      </motion.div>

      {/* Steps Layout */}
      <div className="mt-16 sm:mt-16 max-w-[1200px] w-full relative">
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-12 lg:gap-8">
          {/* Left Column */}
          <div className="flex flex-col gap-12 lg:gap-32 w-full lg:w-[350px] order-2 lg:order-1">
            {/* Step 1 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="flex flex-col items-start lg:items-start gap-3"
            >
              <span className="text-[#888888] text-[15px]">Step 01</span>
              <h3 className="text-[22px] sm:text-[26px] font-bold text-[#060B13]">
                {t("steps.step1.title")}
              </h3>
              <p className="text-[#555555] text-[15px] sm:text-[16px] leading-relaxed text-start">
                {t("steps.step1.description")}
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="flex flex-col items-start lg:items-start gap-3"
            >
              <span className="text-[#888888] text-[15px]">Step 03</span>
              <h3 className="text-[22px] sm:text-[26px] font-bold text-[#060B13]">
                {t("steps.step3.title")}
              </h3>
              <p className="text-[#555555] text-[15px] sm:text-[16px] leading-relaxed text-start">
                {t("steps.step3.description")}
              </p>
            </motion.div>
          </div>

          {/* Center Column - Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-2 w-full lg:w-auto flex justify-center z-10"
          >
            <div className="bg-white rounded-[25px] border border-[#e5efff] p-16 sm:p-24 flex items-center justify-center w-[300px] h-[400px] sm:w-[380px] sm:h-[480px]">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={200}
                height={200}
                className="w-full max-w-[160px] sm:max-w-[220px] h-auto object-contain"
              />
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="flex flex-col gap-12 lg:gap-32 w-full lg:w-[350px] order-3">
            {/* Step 2 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="flex flex-col items-start lg:items-start gap-3"
            >
              <span className="text-[#888888] text-[15px]">Step 02</span>
              <h3 className="text-[22px] sm:text-[26px] font-bold text-[#060B13]">
                {t("steps.step2.title")}
              </h3>
              <p className="text-[#555555] text-[15px] sm:text-[16px] leading-relaxed text-start">
                {t("steps.step2.description")}
              </p>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="flex flex-col items-start lg:items-start gap-3"
            >
              <span className="text-[#888888] text-[15px]">Step 04</span>
              <h3 className="text-[22px] sm:text-[26px] font-bold text-[#060B13]">
                {t("steps.step4.title")}
              </h3>
              <p className="text-[#555555] text-[15px] sm:text-[16px] leading-relaxed text-start">
                {t("steps.step4.description")}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
