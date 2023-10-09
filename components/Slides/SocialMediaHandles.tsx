"use client";

import { socialMediaPosters } from "@/data/portfolio";
import useTransition from "@/hooks/useTransition";
import Image from "next/image";

const SocialMediaHandles = () => {
  const currentSlide = useTransition(socialMediaPosters, 3000);

  return (
    <div className="mockup-phone">
      <div className="camera"></div>
      <div className="display">
        <div className="artboard artboard-demo phone-1 relative">
          <Image
            src={socialMediaPosters[currentSlide].imageSrc}
            alt={socialMediaPosters[currentSlide].tag}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SocialMediaHandles;
