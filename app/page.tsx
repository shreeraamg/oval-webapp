import {
  HeroSection,
  PortfolioSection,
  PricingSection,
  ServiceSection,
  TestimonialSection,
} from "@/components/Screens";
import LogoStrip from "@/components/Slides/LogoStrip";

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
