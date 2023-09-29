import TestimonialCard from "../Cards/TestimonialCard";
import Heading from "../Heading";

const TestimonialSection = () => {
  return (
    <div className="app-padding pt-navbar">
      <Heading>Client Testimonials</Heading>
      <div className="flex gap-x-8 overflow-x-scroll mt-12">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
};

export default TestimonialSection;
