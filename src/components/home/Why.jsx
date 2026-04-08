"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Why() {
  const t = useTranslations("Why");

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
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="w-full flex flex-col items-center lg:py-8 py-2 px-4 overflow-hidden">
      <div className="max-w-[1200px] w-full">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="flex flex-col lg:flex-row justify-between items-end gap-6 lg:gap-10 mb-12"
        >
          {/* Left Content */}
          <div className="flex flex-col items-start max-w-[650px]">
            {/* Badge */}
            <div className="rounded-full border border-[#E2E8F0] shadow-sm mb-6 bg-white flex items-center justify-center gap-[6px] px-[14px] py-[10px]">
              <Image
                src="/how/circle.svg"
                alt="Features"
                width={12}
                height={12}
                className="w-3 h-3"
              />
              <span className="text-[#3B82F6] text-sm font-medium tracking-wide">
                {t("badge")}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-[32px] sm:text-[48px] font-bold text-[#060B13] mb-4 tracking-tight leading-tight text-start">
              {t("titleStart")}
              <span className="text-[#005DFF]">{t("titleHighlight")}</span>
            </h2>

            {/* Description */}
            <p className="text-[16px] sm:text-xl text-[#555555] leading-relaxed text-start max-w-[550px]">
              {t("description")}
            </p>
          </div>

          {/* Right Content (Quote) */}
          <div className="hidden lg:block max-w-[350px] text-right pb-2  self-center">
            <p className="text-[#888888] text-base sm:text-md leading-relaxed font-medium">
              {t("quote")}
            </p>
          </div>
        </motion.div>

        {/* content section */}
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-end gap-10 lg:gap-[72px] w-full">
          {/* Left Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 w-full"
          >
            {/* Feature 1: Security */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-start w-full py-4 pr-3 border-b border-r border-[#E2E8F0] md:py-0 md:pb-[30px] md:pr-[36px] md:border-b md:border-r"
            >
              <div className="flex flex-col items-start gap-4 md:gap-5 w-full max-w-[272px]">
                <div className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-xl md:rounded-2xl bg-[#FF4F4F]/10">
                  <Image
                    src="/why/shield.svg"
                    alt="Security"
                    width={24}
                    height={24}
                    className="w-4 h-4 md:w-6 md:h-6"
                  />
                </div>
                <div className="flex flex-col gap-[6px] md:gap-2 text-start">
                  <h3 className="text-[11px] md:text-xl font-bold text-[#060B13] leading-tight">
                    {t("features.security.title")}
                  </h3>
                  <p className="text-[#555555] text-[9px] md:text-sm leading-relaxed">
                    {t("features.security.description")}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Feature 2: Speed */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-start w-full py-4 pl-3 border-b border-[#E2E8F0] md:py-0 md:pb-[30px] md:pl-[36px] md:border-r-0"
            >
              <div className="flex flex-col items-start gap-4 md:gap-5 w-full max-w-[272px]">
                <div className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-xl md:rounded-2xl bg-[#8B5CF6]/10">
                  <Image
                    src="/why/speed.svg"
                    alt="Speed"
                    width={24}
                    height={24}
                    className="w-4 h-4 md:w-6 md:h-6"
                  />
                </div>
                <div className="flex flex-col gap-[6px] md:gap-2 text-start">
                  <h3 className="text-[11px] md:text-xl font-bold text-[#060B13] leading-tight">
                    {t("features.speed.title")}
                  </h3>
                  <p className="text-[#555555] text-[9px] md:text-sm leading-relaxed">
                    {t("features.speed.description")}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Feature 3: Setup */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-start w-full py-4 pr-3 border-r border-[#E2E8F0] md:py-0 md:pt-[30px] md:pr-[36px] md:border-b-0 md:border-r"
            >
              <div className="flex flex-col items-start gap-4 md:gap-5 w-full max-w-[272px]">
                <div className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-xl md:rounded-2xl bg-[#F97316]/10">
                  <Image
                    src="/why/qr.svg"
                    alt="Setup"
                    width={24}
                    height={24}
                    className="w-4 h-4 md:w-6 md:h-6"
                  />
                </div>
                <div className="flex flex-col gap-[6px] md:gap-2 text-start">
                  <h3 className="text-[11px] md:text-xl font-bold text-[#060B13] leading-tight">
                    {t("features.setup.title")}
                  </h3>
                  <p className="text-[#555555] text-[9px] md:text-sm leading-relaxed">
                    {t("features.setup.description")}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Feature 4: Delivery */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-start w-full py-4 pl-3 md:py-0 md:pt-[30px] md:pl-[36px]"
            >
              <div className="flex flex-col items-start gap-4 md:gap-5 w-full max-w-[272px]">
                <div className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-xl md:rounded-2xl bg-[#22C55E]/10">
                  <Image
                    src="/why/thunder.svg"
                    alt="Delivery"
                    width={24}
                    height={24}
                    className="w-4 h-4 md:w-6 md:h-6"
                  />
                </div>
                <div className="flex flex-col gap-[6px] md:gap-2 text-start">
                  <h3 className="text-[11px] md:text-xl font-bold text-[#060B13] leading-tight">
                    {t("features.delivery.title")}
                  </h3>
                  <p className="text-[#555555] text-[9px] md:text-sm leading-relaxed">
                    {t("features.delivery.description")}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full lg:w-[800px] flex justify-center lg:block"
          >
            <Image
              src="/why/iphones.svg"
              alt="HiNet App Interface"
              width={512}
              height={452}
              className="w-full h-auto max-w-[800px] lg:max-w-none"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
