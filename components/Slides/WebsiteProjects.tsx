"use client";

import useTransition from "@/hooks/useTransition";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const websites = [
  // "/websites/project1.jpeg",
  // "/websites/project2.jpeg",
  "/websites/project3.jpeg",
  // "/websites/project4.jpeg",
  // "/websites/project5.jpeg",
  // "/websites/project6.jpeg",
  "/websites/project7.jpeg",
  "/websites/project8.jpeg",
  // "/websites/project9.jpeg",
  "/websites/project10.jpeg",
  "/websites/project11.jpeg",
];

const WebsiteProjects = () => {
  const currentSlide = useTransition(websites);

  return (
    <div className="mockup-browser border bg-base-300">
      <div className="mockup-browser-toolbar">
        <div className="input">https://daisyui.com</div>
      </div>
      <div className="w-full h-96 lg:h-30rem relative bg-base-200">
        <Image
          src={websites[currentSlide]}
          alt=""
          className="object-cover object-top"
          fill
        />
      </div>
    </div>
  );
};

export default WebsiteProjects;
