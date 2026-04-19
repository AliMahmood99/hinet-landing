"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { ChevronRight, Plane } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TravelersHero() {
  const t = useTranslations("TravelersHero");
  const buttonsRef = useRef(null);
  const [highlight, setHighlight] = useState(false);

  // Trigger pulse-highlight when user arrives via the #get-app anchor
  useEffect(() => {
    const trigger = () => {
      if (typeof window === "undefined") return;
      if (window.location.hash !== "#get-app") return;
      // Small delay lets the native smooth-scroll finish before we draw attention
      setTimeout(() => {
        if (!buttonsRef.current) return;
        buttonsRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        setHighlight(true);
        setTimeout(() => setHighlight(false), 2600); // ~one full animation cycle
      }, 150);
    };
    trigger();
    window.addEventListener("hashchange", trigger);
    return () => window.removeEventListener("hashchange", trigger);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full flex flex-col items-center py-6 lg:py-12 px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center gap-[24px] lg:gap-[40px] text-center max-w-[1200px] w-full"
      >
        {/* Text Content Container */}
        <div className="flex flex-col items-center gap-[24px] lg:gap-[40px] max-w-[900px]">
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-1 pr-3 py-1 bg-white border border-[#E2E8F0] rounded-full shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
          >
            <Image src="/hero/plus.svg" alt="Launch" width={24} height={24} />
            <span className="text-sm font-medium text-[#1E293B]">
              {t("launchBadge")}
            </span>
            <ChevronRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#1E293B] transition-colors" />
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-[26px] sm:text-[42px] lg:text-[62px] leading-[1.2] lg:leading-[68px] font-semibold text-[#060B13] tracking-[-0.02em] font-sans px-2"
          >
            {t("titleStart")}
            <span className="relative inline-block">
              <span className="bg-clip-text text-transparent bg-brand-gradient">
                {t("titleHighlight")}
              </span>
              {/* Animated Plane Flying across "Connected" */}
              <motion.div
                className="absolute top-0 -left-12 pointer-events-none"
                animate={{
                  x: [-20, 60, 150],
                  y: [0, -15, 5],
                  rotate: [15, 25, 15],
                  opacity: [0, 0.7, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 1,
                }}
              >
                <Plane className="w-5 h-5 sm:w-7 sm:h-7 text-[#005DFF]" />
              </motion.div>
            </span>
            {t("titleMiddle")}
            <span className="hidden sm:inline">
              <br />
            </span>
            {t("titleEnd")}
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-[16px] lg:text-[20px] font-normal leading-relaxed text-[#555555] max-w-[650px] font-sans px-4"
          >
            {t("description")}
          </motion.p>

          {/* Buttons */}
          <motion.div
            id="get-app"
            ref={buttonsRef}
            variants={itemVariants}
            className={`flex flex-col sm:flex-row items-center gap-4 lg:gap-[20px] mt-4 lg:mt-10 scroll-mt-28 ${
              highlight ? "get-app-highlight" : ""
            }`}
          >
            {/* Google Play Button */}
            <a
              href="https://play.google.com/store/apps/details?id=com.codeluminarity.hinetApp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get HiNet on Google Play"
              className="store-btn-link hover:opacity-90 transition-all"
            >
              <Image
                src="/hero/google1.svg"
                alt="Get it on Google Play"
                width={237}
                height={62}
                className="w-[180px] lg:w-[237px] h-auto"
              />
            </a>

            {/* App Store Button */}
            <a
              href="https://apps.apple.com/sa/app/hinet-%D9%87%D8%A7%D9%8A-%D9%86%D8%AA-esim/id6748906778"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download HiNet on the App Store"
              className="store-btn-link hover:opacity-90 transition-all"
            >
              <Image
                src="/hero/apple1.svg"
                alt="Download on the App Store"
                width={237}
                height={62}
                className="w-[180px] lg:w-[237px] h-auto"
              />
            </a>
          </motion.div>
        </div>

        {/* Hero Image Section */}
        <div className="relative w-full mt-8 lg:mt-12 flex justify-center items-center min-h-[400px] lg:min-h-[600px]">
          {/* Subtle Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[50%] max-w-[1920px] aspect-square bg-[#6E51E0]/20 blur-[100px] pointer-events-none" />

          {/* Floating Cards - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="absolute left-[calc(50%-180px)] sm:left-[calc(50%-250px)] lg:left-[calc(50%-450px)] top-[2%] sm:top-[0%] lg:top-[12%] w-[80px] sm:w-[150px] lg:w-auto animate-float z-20"
          >
            <Image
              src="/hero/stats.svg"
              alt="Stats"
              width={240}
              height={100}
              className="w-full h-auto drop-shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute left-[calc(50%-200px)] sm:left-[calc(50%-280px)] lg:left-[calc(50%-480px)] bottom-[10%] sm:bottom-[20%] lg:bottom-[25%] w-[100px] sm:w-[180px] lg:w-auto animate-float-delayed z-20"
          >
            <Image
              src="/hero/tower.svg"
              alt="Tower"
              width={260}
              height={260}
              className="w-full h-auto drop-shadow-xl"
            />
          </motion.div>

          {/* Floating Cards - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="absolute left-[calc(50%+100px)] sm:left-[calc(50%+150px)] lg:left-[calc(50%+250px)] top-[5%] sm:top-[5%] lg:top-[10%] w-[90px] sm:w-[160px] lg:w-auto animate-float z-20"
          >
            <Image
              src="/hero/countries.svg"
              alt="Countries"
              width={260}
              height={100}
              className="w-full h-auto drop-shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="absolute left-[calc(50%+50px)] sm:left-[calc(50%+100px)] lg:left-[calc(50%+200px)] bottom-[5%] sm:bottom-[15%] lg:bottom-[20%] w-[100px] sm:w-[190px] lg:w-auto animate-float-delayed z-20"
          >
            <Image
              src="/hero/top-country.svg"
              alt="Top Country"
              width={300}
              height={140}
              className="w-full h-auto drop-shadow-xl"
            />
          </motion.div>

          {/* Main Hero Phone */}
          <motion.div
            variants={imageVariants}
            className="relative z-10 w-full flex justify-center px-4 sm:px-0"
          >
            <Image
              src="/hero/hero.svg"
              alt="Hero App Illustration"
              width={900}
              height={700}
              className="max-w-[340px] sm:max-w-[600px] lg:max-w-[900px] lg:h-[700px] h-auto object-contain translate-x-10"
              priority
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
