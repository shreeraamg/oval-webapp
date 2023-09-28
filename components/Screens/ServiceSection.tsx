import ServiceCard from "../Cards/ServiceCard";
import ContainerBox from "../ContainerBox";
import {
  MdPeopleOutline,
  MdOutlineScreenSearchDesktop,
  MdWeb,
} from "react-icons/md";

const ServiceSection = () => {
  return (
    <ContainerBox className="pt-navbar app-padding">
      <div className="flex flex-col md:flex-row gap-10 w-full items-center">
        <ServiceCard icon={MdPeopleOutline} title="Title" description="..." />
        <ServiceCard
          icon={MdOutlineScreenSearchDesktop}
          title="Title"
          description=".asdasd.."
        />
        <ServiceCard icon={MdWeb} title="Title" description="..asdasd." />
      </div>
    </ContainerBox>
  );
};

export default ServiceSection;
