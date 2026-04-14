"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TravelersHowItWorks() {
  const t = useTranslations("TravelersHowItWorks");

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
    <section className="w-full flex flex-col items-center lg:py-10 py-6 px-4 overflow-hidden">
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
          className="rounded-full border border-[#E2E8F0] shadow-sm mb-8 bg-white flex py-[10px] px-[14px] justify-center items-center gap-[6px]"
        >
          <Image
            src="/how/circle.svg"
            alt="How it works"
            width={12}
            height={12}
            className="w-3 h-3"
          />
          <span className="text-[#3B82F6] text-sm font-medium tracking-wide">
            {t("badge")}
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={fadeInUp}
          className="text-[32px] sm:text-[48px] font-bold text-[#060B13] mb-6 tracking-tight leading-tight"
        >
          <span className="text-[#005DFF]">{t("titleHighlight")}</span>
          {t("titleEnd")}
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={fadeInUp}
          className="text-[16px] sm:text-xl text-[#555555] max-w-[800px] leading-relaxed font-normal"
        >
          {t("description")}
        </motion.p>
      </motion.div>

      <div className="flex flex-col-reverse lg:flex-row justify-between items-start self-stretch mt-16 w-full gap-10 lg:gap-0">
        {/* Steps Column */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col gap-2 lg:gap-6 w-full lg:w-[626px]"
        >
          {["step1", "step2", "step3"].map((step, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={`flex flex-col justify-center items-start gap-2.5 p-2 sm:py-4 sm:pl-5 sm:pr-[22px] w-full transition-colors duration-300 max-md:p-[16px] ${
                index === 0
                  ? "rounded-[22px] border-r-[2.5px] border-[#005DFF] bg-white shadow-sm"
                  : "rounded-2xl hover:bg-gray-50 bg-transparent"
              }`}
            >
              <h3 className="text-[14px] sm:text-[22px] font-bold text-[#060B13] text-start">
                {t(`steps.${step}.title`)}
              </h3>
              <p className="text-[11px] sm:text-[18px] text-[#555555] font-normal leading-relaxed text-start max-w-[500px]">
                {t(`steps.${step}.description`)}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full lg:w-[537px] flex justify-center lg:block lg:mt-0"
        >
          <Image
            src="/how/phone.svg"
            alt="App Interface"
            width={537}
            height={536}
            className="w-full h-auto max-w-[400px] lg:max-w-none"
          />
        </motion.div>
      </div>
    </section>
  );
}
