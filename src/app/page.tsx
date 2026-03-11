import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Trust from "@/components/Trust";
import CallToAction from "@/components/CallToAction";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen font-[var(--font-sans)] flex flex-col">
      <Header />
      <main className="flex-1 mt-20">
        <Hero />
        <WhyUs />
        <HowItWorks />
        <Services />
        <Pricing />
        <Trust />
        <CallToAction />
        <Contact />
      </main>
    </div>
  );
}
