import HeroSection from "@/components/Screens/HeroSection";
import PortfolioSection from "@/components/Screens/PortfolioSection";
import PricingSection from "@/components/Screens/PricingSection";
import ServiceSection from "@/components/Screens/ServiceSection";
import TestimonialSection from "@/components/Screens/TestimonialSection";
import LogoStrip from "@/components/Slides/LogoStrip";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <LogoStrip />
      <ServiceSection />
      <PortfolioSection />
      <TestimonialSection />
      <PricingSection />
    </div>
  );
}
