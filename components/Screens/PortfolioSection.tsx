import Heading from "../Heading";
import WebsiteProjects from "../Slides/WebsiteProjects";
import SocialMediaHandles from "../Slides/SocialMediaHandles";

const PortfolioSection = () => {
  return (
    <div className="app-padding">
      <div className="flex flex-col-reverse lg:flex-row lg:items-center gap-y-6 mb-28">
        <div className="lg:flex-[2] h-full">
          <WebsiteProjects />
        </div>
        <Heading className="lg:flex-1">Our Website Projects</Heading>
      </div>
      <div className="flex flex-col lg:flex-row w-full justify-between items-center gap-y-6">
        <Heading>Our Social Media Handles</Heading>
        <div>
          <SocialMediaHandles />
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
