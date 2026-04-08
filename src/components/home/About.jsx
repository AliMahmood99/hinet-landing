"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

function About() {
  const t = useTranslations("About");
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1); // Middle card active by default

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350; // Approximated card width + gap
      const container = scrollContainerRef.current;

      if (direction === "left") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

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
          {t("titleStart")}
          <span className="text-[#005DFF]">{t("titleHighlight")}</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={fadeInUp}
          className="text-[16px] sm:text-xl text-[#555555] max-w-[800px] leading-relaxed font-normal"
        >
          {t("description")}
        </motion.p>
      </motion.div>

      {/* Testimonials Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-[1200px] flex flex-col items-center"
      >
        <div
          ref={scrollContainerRef}
          className="w-full lg:mt-8 mt-0 overflow-x-auto pb-4 scroll-smooth max-md:-mt-8"
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "20px",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {/* Left Card */}
          <div
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex-shrink-0"
            style={{
              display: "flex",
              width: "336px",
              height: "178px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "flex-end",
              gap: "16px",
            }}
          >
            {/* Quote Icon */}
            <div className="w-full flex justify-start">
              <Image
                src="/about/quote.svg"
                alt="Quote"
                width={20}
                height={20}
                className="w-5 h-5 opacity-50"
              />
            </div>

            {/* Testimonial Text */}
            <p
              style={{
                color: "var(--sds-color-text-neutral-secondary, #555)",
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: "14.742px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "normal",
                alignSelf: "stretch",
                textAlign: "left",
              }}
            >
              "The results speak for themselves—from start to finish."
            </p>

            {/* User Section */}
            <div
              style={{
                display: "flex",
                height: "40.539px",
                alignItems: "flex-start",
                gap: "9.213px",
                flexShrink: 0,
                alignSelf: "stretch",
              }}
            >
              <Image
                src="/about/profile-right.svg"
                alt="User"
                width={40}
                height={40}
                style={{ width: "40.54px", height: "40.54px" }}
              />
              <div className="flex flex-col items-start">
                <span
                  style={{
                    color: "var(--sds-color-text-default-default, #000)",
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: "13.82px",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "18.427px",
                  }}
                >
                  AYa Atwan
                </span>
                <span
                  style={{
                    color: "#555",
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: "11.056px",
                    fontStyle: "normal",
                    fontWeight: 300,
                    lineHeight: "18.427px",
                  }}
                >
                  Big business owner
                </span>
              </div>
            </div>
          </div>

          {/* Middle Card */}
          <div
            className="bg-white rounded-2xl border border-gray-100 p-6 flex-shrink-0"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "28px",
            }}
          >
            {/* Person Image */}
            <div className="flex-shrink-0">
              <Image
                src="/about/person.svg"
                alt="Person"
                width={200}
                height={250}
                className="rounded-lg object-cover"
                style={{ width: "200px", height: "auto" }}
              />
            </div>

            {/* Content Column */}
            <div className="flex flex-col items-start gap-4 max-w-xs">
              {/* Quote Icon */}
              <div className="w-full flex justify-start">
                <Image
                  src="/about/quote.svg"
                  alt="Quote"
                  width={32}
                  height={32}
                  className="w-8 h-8 opacity-50"
                />
              </div>

              {/* Testimonial Text */}
              <p
                style={{
                  color: "var(--sds-color-text-neutral-secondary, #555)",
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "normal",
                  textAlign: "left",
                }}
              >
                "I’ve always been afraid of complicated setups, but HiNet made
                me feel comfortable and at ease. Wonderful experience!"
              </p>

              {/* User Info */}
              <div className="flex flex-col items-start">
                <span
                  style={{
                    color: "var(--sds-color-text-neutral-default, #000)",
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "20px",
                  }}
                >
                  Ali Atwan
                </span>
                <span
                  style={{
                    color: "#555",
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: 300,
                    lineHeight: "20px",
                  }}
                >
                  Small business owner
                </span>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div
            className="bg-white rounded-2xl border border-gray-100 p-6 flex-shrink-0"
            style={{
              display: "flex",
              width: "336px",
              height: "178px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "16px",
            }}
          >
            {/* Quote Icon */}
            <div className="w-full flex justify-start">
              <Image
                src="/about/quote.svg"
                alt="Quote"
                width={20}
                height={20}
                className="w-8 h-8 opacity-50"
              />
            </div>

            {/* Testimonial Text */}
            <p
              style={{
                color: "var(--sds-color-text-neutral-secondary, #555)",
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: "14.742px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "normal",
                alignSelf: "stretch",
                textAlign: "left",
              }}
            >
              "The results speak for themselves—from start to finish."
            </p>

            {/* User Section */}
            <div
              style={{
                display: "flex",
                height: "40.539px",
                alignItems: "flex-start",
                gap: "9.213px",
                flexShrink: 0,
                alignSelf: "stretch",
              }}
            >
              <Image
                src="/about/profile-right.svg"
                alt="User"
                width={40}
                height={40}
                style={{ width: "40.54px", height: "40.54px" }}
              />
              <div className="flex flex-col items-start">
                <span
                  style={{
                    color: "var(--sds-color-text-default-default, #000)",
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: "13.82px",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "18.427px",
                  }}
                >
                  AYa Atwan
                </span>
                <span
                  style={{
                    color: "#555",
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: "11.056px",
                    fontStyle: "normal",
                    fontWeight: 300,
                    lineHeight: "18.427px",
                  }}
                >
                  Big business owner
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="w-full flex items-center justify-center lg:justify-end gap-6 mt-8">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full bg-[#EBF2FF] flex items-center justify-center hover:bg-blue-100 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-[#005DFF]" />
          </button>

          <div className="flex gap-2">
            {[0, 1, 2, 3].map((idx) => (
              <div
                key={idx}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? "w-2 bg-[#005DFF]" : "w-2 bg-[#E2E8F0]"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full bg-[#EBF2FF] flex items-center justify-center hover:bg-blue-100 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-[#005DFF]" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
