import TravelersHero from "@/components/travelers/TravelersHero";
import TravelersHowItWorks from "@/components/travelers/TravelersHowItWorks";
import TravelersCTA from "@/components/travelers/TravelersCTA";
import Why from "@/components/home/Why";
import About from "@/components/home/About";
import FAQ from "@/components/home/FAQ";

export default function TravelersPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 sm:px-24 bg-[#F8FAFC]">
      <TravelersHero />
      <TravelersHowItWorks />
      <Why />
      <About />
      <FAQ />
      <TravelersCTA />
    </main>
  );
}
