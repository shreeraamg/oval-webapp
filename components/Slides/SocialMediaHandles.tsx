"use client";

import Image from "next/image";

const SocialMediaHandles = () => {
  return (
    <div className="mockup-phone">
      <div className="camera"></div>
      <div className="display">
        <div className="artboard artboard-demo phone-1 relative">
          <Image
            src="/socialmedia/eleven.jpeg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SocialMediaHandles;
