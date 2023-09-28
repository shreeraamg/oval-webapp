import TestimonialCard from "../Cards/TestimonialCard";
import ContainerBox from "../ContainerBox";
import Heading from "../Heading";

const TestimonialSection = () => {
  return (
    <ContainerBox className="app-padding pt-navbar">
      <Heading>Client Testimonials</Heading>
      <div className="flex gap-x-8 overflow-x-scroll mt-12">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </ContainerBox>
  );
};

export default TestimonialSection;
