"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Advice() {
  const t = useTranslations("Advice");

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
    <section className="w-full flex flex-col items-center py-16 lg:pb-12 lg:pt-12 lg:-mt-36 px-4 relative max-w-[1920px]">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[50%] max-w-[1920px] aspect-square bg-[#6E51E0]/20 blur-[100px] pointer-events-none" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="flex flex-col items-center gap-[16px] lg:gap-[24px] text-center max-w-[900px] w-full z-10"
      >
        {/* Heading */}
        <motion.h2
          variants={fadeInUp}
          className="text-[28px] sm:text-[36px] lg:text-[48px] leading-tight font-bold text-[#060B13] tracking-[-0.02em] font-sans"
        >
          {t("title")}
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={fadeInUp}
          className="text-[16px] lg:text-[18px] font-normal leading-relaxed text-[#555555] max-w-[700px] font-sans px-4"
        >
          {t("description")}
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col items-center justify-center w-full mt-6 lg:mt-8 px-4"
        >
          <a
            href="#"
            className="flex items-center justify-center self-stretch h-[77px] py-[14px] px-[20px] rounded-[32px] border border-white bg-black/[0.04] transition-colors hover:bg-black/[0.08] text-[#3C57DA] font-semibold text-[15px] sm:text-[18px] gap-2 w-full max-w-[500px] mx-auto"
          >
            <span>{t("button")}</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
