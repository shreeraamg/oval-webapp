"use client";

import useTransition from "@/hooks/useTransition";
import Image from "next/image";
import { websites } from "@/data";

const WebsiteProjects = () => {
  const currentSlide = useTransition(websites);

  return (
    <div className="mockup-browser border bg-base-300">
      <div className="mockup-browser-toolbar">
        <div className="input">{websites[currentSlide].company}</div>
      </div>
      <div className="w-full h-96 lg:h-30rem relative bg-base-200">
        <Image
          src={websites[currentSlide].imageSrc}
          alt={websites[currentSlide].company}
          className="object-cover object-top"
          fill
        />
      </div>
    </div>
  );
};

export default WebsiteProjects;
