import { services } from "@/data";
import PricingCard from "../Cards/PricingCard";
import ContactButton from "../ContactButton";
import ContainerBox from "../ContainerBox";
import Heading from "../Heading";

const PricingSection = () => {
  return (
    <ContainerBox className="app-padding pt-navbar flex flex-col items-center mb-12 lg:mb-0">
      <Heading>Pricing Structure</Heading>
      <div className="flex gap-x-10 flex-col gap-y-6 lg:flex-row my-12 justify-between">
        {services.map((item, index) => (
          <PricingCard
            key={index}
            service={item.service}
            startPrice={item.startPrice}
            offerings={item.offerings}
          />
        ))}
      </div>
      <ContactButton title="Book a Call" />
    </ContainerBox>
  );
};

export default PricingSection;
