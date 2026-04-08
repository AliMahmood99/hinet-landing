import { useTranslations } from "next-intl";
import SwitchLang from "@/components/SwitchLang";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Security from "@/components/home/Security";
import HowItWorks from "@/components/home/HowItWorks";
import Advice from "@/components/home/Advice";
import FAQ from "@/components/home/FAQ";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <main className="max-md:px-4">
        <HowItWorks />
        <Features />
        <Security />
        <FAQ />
        <Advice />
      </main>
    </main>
  );
}
