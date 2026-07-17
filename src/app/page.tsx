import { About } from "@/components/About";
import { Benefits } from "@/components/Benefits";
import { EmotionalCTA } from "@/components/EmotionalCTA";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HomeCare } from "@/components/HomeCare";
import { HowItWorks } from "@/components/HowItWorks";
import { ProblemSection } from "@/components/ProblemSection";
import { Services } from "@/components/Services";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <About />
        <Services />
        <HomeCare />
        <HowItWorks />
        <Benefits />
        <EmotionalCTA />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
