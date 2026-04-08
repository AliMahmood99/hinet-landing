"use client";

import { useTranslations } from "next-intl";
import {
  Sparkles,
  ArrowUpRight,
  Map,
  LayoutDashboard,
  GitMerge,
  Tag,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  const t = useTranslations("Hero");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative w-full flex flex-col items-center pt-16 lg:pt-24 pb-0 px-4 overflow-hidden bg-[#FBFCFD]">
      {/* Background Gradient */}
      <div
        className="absolute pointer-events-none z-0"
        style={{
          width: "120%",
          left: "-10%",
          height: "800px",
          opacity: 0.4,
          background: "linear-gradient(35deg, #eef2ff, #3960F9)",
          filter: "blur(100px)",
          top: "45%",
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative flex flex-col items-center text-center max-w-[1240px] w-full z-10"
      >
        {/* Floating Labels */}
        {/* 200+ Countries - Top Left */}
        <motion.div
          initial={{ opacity: 0, x: -30, rotate: -15 }}
          animate={{ opacity: 1, x: 0, rotate: -8 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="absolute left-[2%] lg:left-[5%] top-[60px] lg:top-[100px] z-20 hidden md:block"
        >
          <div
            className="flex items-center gap-2 px-4 py-2"
            style={{
              borderRadius: "99px",
              border: "0.5px solid #FFF",
              background: "#DBECF5",
              boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.04)",
            }}
          >
            <Image src="/hero/country.svg" alt="map" width={24} height={24} />
            <span className="text-[14px] font-bold text-[#0284C7]">
              200+ Countries
            </span>
            <Image
              src="/hero/country-cursor.svg"
              alt="cursor"
              width={20}
              height={20}
              className="absolute -bottom-4 right-8"
            />
          </div>
        </motion.div>

        {/* Dashboard - Middle Left */}
        <motion.div
          initial={{ opacity: 0, x: -40, rotate: 40 }}
          animate={{ opacity: 1, x: 0, rotate: 12 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="absolute left-[5%] lg:left-[10%] top-[340px] lg:top-[380px] z-20 hidden md:block"
        >
          <div
            className="flex items-center gap-2 px-4 py-2"
            style={{
              borderRadius: "99px",
              border: "0.5px solid #FFF",
              background: "#E8E6F7",
              boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.04)",
            }}
          >
            <Image src="/hero/dashbaord.svg" alt="map" width={24} height={24} />
            <span className="text-[14px] font-bold text-[#8E79FF]">
              Dashboard
            </span>
            <Image
              src="/hero/dashbaord-cursor.svg"
              alt="cursor"
              width={20}
              height={20}
              className="absolute -top-4 right-4"
            />
          </div>
        </motion.div>

        {/* REST API - Top Right */}
        <motion.div
          initial={{ opacity: 0, x: 30, rotate: 15 }}
          animate={{ opacity: 1, x: 0, rotate: 10 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="absolute right-[2%] lg:right-[6%] top-[80px] lg:top-[120px] z-20 hidden md:block"
        >
          <div
            className="flex items-center gap-2 px-4 py-2"
            style={{
              borderRadius: "99px",
              border: "0.6px solid #FFF",
              background: "#F5ECD9",
              boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.04)",
            }}
          >
            <Image src="/hero/api.svg" alt="map" width={24} height={24} />
            <span className="text-[14px] font-bold text-[#FFB21E]">
              REST API
            </span>
            <Image
              src="/hero/api-cursor.svg"
              alt="cursor"
              width={20}
              height={20}
              className="absolute -bottom-4 left-6"
            />
          </div>
        </motion.div>

        {/* White-Label - Middle Right */}
        <motion.div
          initial={{ opacity: 0, x: 40, rotate: -40 }}
          animate={{ opacity: 1, x: 0, rotate: -12 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="absolute right-[4%] lg:right-[9%] top-[360px] lg:top-[370px] z-20 hidden md:block"
        >
          <div
            className="flex items-center gap-2 px-4 py-2"
            style={{
              borderRadius: "99px",
              border: "0.6px solid #FFF",
              background: "#F0E3E2",
              boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.04)",
            }}
          >
            <Image src="/hero/tag.svg" alt="map" width={24} height={24} />
            <span className="text-[14px] font-bold text-[#F3785D]">
              White-Label
            </span>
            <Image
              src="/hero/tag-cursor.svg"
              alt="cursor"
              width={20}
              height={20}
              className="absolute -top-4 left-4"
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="flex flex-col items-center">
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="relative inline-flex rounded-full mb-8 shadow-sm p-[1px]"
            style={{
              background:
                "linear-gradient(120deg, #2563EB 0%, #E2E8F0 30%, transparent 100%)",
            }}
          >
            <div className="flex items-center gap-2 px-4 py-1.5 bg-white rounded-full w-full h-full">
              <Image src="/hero/star.svg" alt="map" width={24} height={24} />
              <span className="text-[13px] font-bold text-[#475569]">
                {t("launchBadge")}
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-[42px] sm:text-[52px] lg:text-[72px] leading-[1.1] font-bold text-[#0F172A] tracking-tight mb-8"
          >
            <span className="text-[#2563EB]">
              {t("titleStart")}
              {t("titleHighlight")}
            </span>
            {t("titleMiddle")}
            <br />
            {t("titleEnd")}
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-[17px] lg:text-[20px] text-[#64748B] max-w-[780px] mb-12 leading-relaxed px-4"
          >
            {t("description")}
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 mb-2 lg:mb-16"
          >
            <button
              className="flex items-center gap-2 px-10 py-4 text-white font-bold transition-all group hover:opacity-90"
              style={{
                borderRadius: "32px",
                border: "1px solid #EFF0F5",
                background: "linear-gradient(90deg, #005DFF 0%, #5F5CA4 100%)",
              }}
            >
              {t("bookDemo")}
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <Link
              href="/contactUs"
              className="flex items-center gap-2 px-10 py-4 text-[#2563EB] font-bold transition-all group hover:bg-black/5"
              style={{
                borderRadius: "32px",
                border: "1px solid #EFF0F5",
                background: "rgba(0, 0, 0, 0.04)",
              }}
            >
              {t("contactUs")}
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Hero Image Section - Positioned closer to buttons */}
        <motion.div
          variants={imageVariants}
          className="relative w-full max-w-[1100px] flex justify-center mt-2 lg:mt-4"
        >
          {/* Cloud Top Left */}
          <div className="absolute -left-[5%] sm:-left-[10%] lg:-left-[20%] top-[10%] lg:top-[5%] w-[150px] sm:w-[250px] lg:w-[400px] aspect-[2/1] -z-10 pointer-events-none">
            <Image
              src="/hero/could.svg"
              alt="Cloud Background"
              width={400}
              height={200}
              className="w-full h-full object-cover"
              style={{
                opacity: 0.1,
                mixBlendMode: "screen",
                objectPosition: "50%",
              }}
            />
          </div>

          {/* Cloud Bottom Right */}
          <div className="absolute -right-[5%] sm:-right-[10%] lg:-right-[35%] bottom-[10%] lg:bottom-[10%] w-[150px] sm:w-[250px] lg:w-[400px] aspect-[2/1] -z-10 pointer-events-none">
            <Image
              src="/hero/could.svg"
              alt="Cloud Background"
              width={400}
              height={200}
              className="w-full h-full object-cover"
              style={{
                opacity: 0.1,
                mixBlendMode: "screen",
                objectPosition: "50%",
              }}
            />
          </div>

          <div
            className="relative w-full"
            style={{
              WebkitMaskImage:
                "linear-gradient(180deg, white 40%, transparent 100%)",
              maskImage: "linear-gradient(180deg, white 40%, transparent 100%)",
            }}
          >
            <Image
              src="/hero/new-hero.png"
              alt="HiNet B2B Dashboard"
              width={1100}
              height={600}
              className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
