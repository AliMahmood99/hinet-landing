"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

function FAQ() {
  const t = useTranslations("FAQ");
  const questions = ["q1", "q2", "q3", "q4"];

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
    <section className="w-full flex flex-col items-center lg:py-10 py-6 px-4 overflow-hidden">
      <div
        className="w-full max-w-[1280px] flex flex-col lg:flex-row gap-[80px] max-md:gap-[0px] items-start"
        style={{
          minHeight: "600px",
        }}
      >
        {/* Left Side Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex-1 flex flex-col items-start lg:max-w-[450px]"
        >
          {/* Badge & Mobile Contact Button */}
          <motion.div
            variants={fadeInUp}
            className="w-full flex items-center justify-between mb-8"
          >
            <div
              className="rounded-full border border-[#E2E8F0] shadow-sm bg-white"
              style={{
                display: "flex",
                padding: "10px 14px",
                justifyContent: "center",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <Image
                src="/how/circle.svg"
                alt="FAQ Icon"
                width={12}
                height={12}
                className="w-3 h-3"
              />
              <span className="text-[#3B82F6] text-sm font-medium tracking-wide">
                {t("badge")}
              </span>
            </div>

            <button
              className="lg:hidden flex items-center gap-2.5 px-5 py-2.5 text-white font-semibold transition-all hover:opacity-90 active:scale-95 shadow-md text-sm"
              style={{
                borderRadius: "32px",
                border: "1px solid #EFF0F5",
                background: "linear-gradient(90deg, #005DFF 0%, #5F5CA4 100%)",
              }}
            >
              {t("contactUs")}
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            style={{
              color: "#000",
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: "32px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "normal",
              marginBottom: "24px",
            }}
          >
            {t("title")}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            style={{
              color: "#646575",
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
              marginBottom: "40px",
            }}
          >
            {t("description")}
          </motion.p>

          <motion.button
            variants={fadeInUp}
            className="hidden lg:flex items-center gap-2.5 px-8 py-3.5 text-white font-semibold transition-all hover:opacity-90 active:scale-95 shadow-md"
            style={{
              borderRadius: "32px",
              border: "1px solid #EFF0F5",
              background: "linear-gradient(90deg, #005DFF 0%, #5F5CA4 100%)",
            }}
          >
            {t("contactUs")}
            <ArrowUpRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Right Side Accordion */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 w-full"
        >
          <Accordion
            type="single"
            collapsible
            defaultValue="q1"
            className="w-full space-y-4"
          >
            {questions.map((qKey) => (
              <AccordionItem
                key={qKey}
                value={qKey}
                className="group border-none transition-all duration-300 data-[state=open]:bg-[#FFF] data-[state=open]:rounded-[28px] data-[state=open]:border data-[state=open]:border-[#FAFAFA] data-[state=open]:p-[28px] data-[state=open]:mb-6 data-[state=open]:flex data-[state=open]:flex-col data-[state=open]:items-stretch data-[state=open]:gap-[16px] data-[state=open]:self-stretch data-[state=closed]:border-b data-[state=closed]:border-[#E2E8F0] data-[state=closed]:py-2"
              >
                <AccordionTrigger className="hover:no-underline py-0 w-full [&>svg]:hidden">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="flex-shrink-0">
                        <Image
                          src="/faq/messege.svg"
                          alt="Message"
                          width={24}
                          height={24}
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                      <h3
                        className="transition-colors text-left"
                        style={{
                          color: "#111113",
                          fontFamily: '"Plus Jakarta Sans", sans-serif',
                          fontStyle: "normal",
                          fontWeight: 600,
                          lineHeight: "normal",
                        }}
                      >
                        <span className="sm:hidden text-[12px]">
                          {t(`questions.${qKey}.question`)}
                        </span>
                        <span className="hidden sm:inline text-[20px]">
                          {t(`questions.${qKey}.question`)}
                        </span>
                      </h3>
                    </div>

                    <div
                      className="w-10 h-10 max-sm:w-5 max-sm:h-5 flex-shrink-0 flex items-center justify-center rounded-full text-white transition-all shadow-sm overflow-hidden ml-4"
                      style={{
                        background:
                          "linear-gradient(135deg, #005DFF 0%, #4D74FF 100%)",
                      }}
                    >
                      <div className="group-data-[state=open]:hidden">
                        <Image
                          src="/faq/plus.svg"
                          alt="Plus"
                          width={20}
                          height={20}
                          className="w-5 h-5 max-sm:w-[12px] max-sm:h-[12px] flex items-center justify-center"
                          style={{ filter: "brightness(0) invert(1)" }}
                        />
                      </div>
                      <div className="hidden group-data-[state=open]:block">
                        <Image
                          src="/faq/x.svg"
                          alt="Close"
                          width={20}
                          height={20}
                          className="w-5 h-5 flex items-center justify-center"
                          style={{ filter: "brightness(0) invert(1)" }}
                        />
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-0 pb-0 animate-in fade-in slide-in-from-top-2 duration-300 w-full">
                  <p
                    className="sm:text-[16px] text-[10px] sm:pl-[40px] pl-0"
                    style={{
                      color: "#646575",
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "150%",
                      letterSpacing: "-0.096px",
                    }}
                  >
                    {t(`questions.${qKey}.answer`)}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

export default FAQ;
