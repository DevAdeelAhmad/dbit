import Disclaimer from "@/components/Disclaimer";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhoWeAre from "@/components/WhoWeAre";

export default function Home() {
  return (
    <>
      <main className="spiralbg">
        <Hero />
        <WhoWeAre />
        <HowItWorks />
        <Features />
        <Disclaimer />
      </main>
    </>
  );
}
