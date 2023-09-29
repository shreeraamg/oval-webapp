import PricingCard from "../Cards/PricingCard";
import ContactButton from "../ContactButton";
import Heading from "../Heading";
import { services } from "@/data";

const PricingSection = () => {
  return (
    <div className="app-padding my-16">
      <Heading>Pricing Structure</Heading>
      <div className="flex gap-x-16 flex-col gap-y-6 lg:flex-row my-12 justify-center items-center">
        {services.map((item, index) => (
          <PricingCard
            key={index}
            service={item.service}
            startPrice={item.startPrice}
            offerings={item.offerings}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <ContactButton title="Book a Call" className="w-40" />
      </div>
    </div>
  );
};

export default PricingSection;
