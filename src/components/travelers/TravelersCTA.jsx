"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TravelersCTA() {
  const t = useTranslations("TravelersCTA");

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
    <section className="w-full flex flex-col items-center py-16 lg:pb-12 lg:pt-0 lg:-mt-36 px-4 relative max-w-[1920px]">
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
          className="text-[16px] lg:text-[18px] font-normal leading-relaxed text-[#555555] max-w-[600px] font-sans px-4"
        >
          {t("description")}
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-row items-center justify-center gap-4 lg:gap-[20px] mt-6 lg:mt-8"
        >
          {/* Google Play Button */}
          <a
            href="https://play.google.com/store/apps/details?id=com.codeluminarity.hinetApp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get HiNet on Google Play"
            className="hover:opacity-80 hover:scale-105 transition-all"
          >
            <Image
              src="/hero/google.svg"
              alt="Get it on Google Play"
              width={237}
              height={62}
              className="w-[160px] sm:w-[180px] lg:w-[237px] h-auto"
            />
          </a>

          {/* App Store Button */}
          <a
            href="https://apps.apple.com/sa/app/hinet-%D9%87%D8%A7%D9%8A-%D9%86%D8%AA-esim/id6748906778"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download HiNet on the App Store"
            className="hover:opacity-80 hover:scale-105 transition-all"
          >
            <Image
              src="/hero/apple.svg"
              alt="Download on the App Store"
              width={237}
              height={62}
              className="w-[160px] sm:w-[180px] lg:w-[237px] h-auto"
            />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
