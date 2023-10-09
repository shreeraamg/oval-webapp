import { clients } from "@/data";
import TestimonialCard from "../Cards/TestimonialCard";
import Heading from "../Heading";

const TestimonialSection = () => {
  return (
    <div className="app-padding pt-navbar">
      <Heading>Client Testimonials</Heading>
      <div className="flex gap-x-8 overflow-x-scroll mt-12">
        {clients
          .filter((client) =>
            client.testimonial !== undefined ? client : null
          )
          .map((cwt, index) => (
            <TestimonialCard
              key={index}
              company={cwt.company}
              testimonial={cwt.testimonial || ""}
              imageSrc={cwt.imageSrc}
            />
          ))}
        {clients
          .filter((client) =>
            client.testimonial !== undefined ? client : null
          )
          .map((cwt, index) => (
            <TestimonialCard
              key={index}
              company={cwt.company}
              testimonial={cwt.testimonial || ""}
              imageSrc={cwt.imageSrc}
            />
          ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
