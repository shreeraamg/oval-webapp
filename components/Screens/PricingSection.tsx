import PricingCard from "../Cards/PricingCard";
import ContainerBox from "../ContainerBox";
import Heading from "../Heading";

const PricingSection = () => {
  return (
    <ContainerBox className="app-padding pt-navbar">
      <Heading>Pricing Structure</Heading>
      <div className="flex gap-x-8 mt-12">
        <PricingCard />
      </div>
    </ContainerBox>
  );
};

export default PricingSection;
