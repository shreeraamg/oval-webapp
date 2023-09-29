import ServiceCard from "../Cards/ServiceCard";
import ContainerBox from "../ContainerBox";
import {
  MdPeopleOutline,
  MdOutlineScreenSearchDesktop,
  MdWeb,
} from "react-icons/md";
import Heading from "../Heading";
import ContactButton from "../ContactButton";
import TypeEffect from "../TypeEffect";

const ServiceSection = () => {
  return (
    <ContainerBox className="pt-navbar app-padding flex flex-col items-center gap-y-6 lg:gap-y-24 mb-16 lg:mb-0">
      <div className="flex flex-col md:flex-row gap-10 w-full items-center">
        <ServiceCard icon={MdPeopleOutline} title="Title" description="..." />
        <ServiceCard
          icon={MdOutlineScreenSearchDesktop}
          title="Title"
          description=".asdasd.."
        />
        <ServiceCard icon={MdWeb} title="Title" description="..asdasd." />
      </div>
      <span className="flex flex-col md:flex-row mt-6 lg:-mb-6 items-center">
        <Heading className="lg:text-5xl">We Create&nbsp;&nbsp;</Heading>
        <Heading className="bg-success text-5xl lg:text-6xl">
          <TypeEffect words={["Hello", "World"]} />
        </Heading>
      </span>
      <ContactButton title="Want to create" />
    </ContainerBox>
  );
};

export default ServiceSection;
