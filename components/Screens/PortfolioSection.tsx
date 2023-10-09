"use client";

import Heading from "../Heading";
import WebsiteProjects from "../Slides/WebsiteProjects";
import SocialMediaHandles from "../Slides/SocialMediaHandles";
import TypeEffect from "../TypeEffect";
import { socialMediaPosters } from "@/data/portfolio";
import useTransition from "@/hooks/useTransition";

const PortfolioSection = () => {
  const currentPoster = useTransition(socialMediaPosters, 3000);
  return (
    <div className="app-padding">
      <div className="flex flex-col-reverse lg:flex-row lg:items-center gap-y-6 mb-28">
        <div className="lg:flex-[2] h-full">
          <WebsiteProjects />
        </div>
        <Heading className="lg:flex-1">Our Website Projects</Heading>
      </div>
      <div className="flex flex-col lg:flex-row w-full justify-between gap-y-6">
        <div className="flex flex-col min-h-full justify-center gap-16 bg-red-100">
          <Heading>Our Social Media Handles</Heading>
          <Heading>{socialMediaPosters[currentPoster].tag}</Heading>
          {/* <Heading>
            <TypeEffect
              words={socialMediaPosters.map((poster) => poster.tag)}
            />
          </Heading> */}
        </div>
        <div>
          <SocialMediaHandles />
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
