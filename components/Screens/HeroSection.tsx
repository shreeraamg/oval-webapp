import Image from "next/image";
import ContactButton from "../ContactButton";
import { contactusText } from "@/data";

const HeroSection = () => {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row">
      <div className="flex-1 flex-col flex-center relative gap-5 lg:gap-0">
        <h1 className="font-semibold text-5xl lg:text-7xl text-center lg:text-left gradient-text">
          Grow with
          <br />
          confidence,
          <br />
          thrive with Oval.
        </h1>
        <ContactButton
          title={contactusText[0]}
          className="w-40 lg:absolute bottom-28 -translate-x-1/2 self-center lg:text-lg"
        />
      </div>
      <div className="flex-1 flex-col flex items-center lg:justify-center">
        <div className="h-72 lg:h-[26rem] w-72 lg:w-[26rem] relative">
          <Image
            src="/team/AllanJohn.jpg"
            alt="Allan John Judson"
            fill
            className="rounded-full"
          />
        </div>
        <h1 className="text-4xl my-4 font-bold">Allan John Judson</h1>
        <h4 className="text-lg font-semibold">Founder</h4>
      </div>
    </div>
  );
};

export default HeroSection;
