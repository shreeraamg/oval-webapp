import ServiceCard from "../Cards/ServiceCard";
import Heading from "../Heading";
import ContactButton from "../ContactButton";
import TypeEffect from "../TypeEffect";
import { services } from "@/data";

const ServiceSection = () => {
  return (
    <div className="app-padding py-20">
      <Heading className="mb-12">Our offered Services</Heading>
      <div className="flex flex-col md:flex-row gap-10 w-full items-center justify-between">
        {services.map((item, index) => (
          <ServiceCard
            key={index}
            service={item.service}
            icon={item.icon}
            description={item.description}
          />
        ))}
      </div>
      <span className="flex flex-col md:flex-row items-center justify-center my-36 gap-y-4">
        <Heading className="text-6xl">We Create&nbsp;&nbsp;</Heading>
        <Heading className="bg-gradient-to-r from-[#3dff00] via-[#00ffa1] to-[#00ddeb] text-7xl">
          <TypeEffect
            words={["Brands", "Business", "Strategies", "Value", "Growth"]}
          />
        </Heading>
      </span>
      <div className="flex justify-center">
        <ContactButton title="We're just a click away" />
      </div>
    </div>
  );
};

export default ServiceSection;
