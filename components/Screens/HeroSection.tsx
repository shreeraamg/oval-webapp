import Image from "next/image";
import ContainerBox from "../ContainerBox";
import ContactButton from "../ContactButton";

const HeroSection = () => {
  return (
    <ContainerBox className="flex flex-col lg:flex-row app-padding pt-navbar lg:pt-0">
      <div className="flex-[3] lg:flex-1 flex flex-col justify-center gap-6 items-center lg:items-start">
        <h1 className="font-semibold text-5xl lg:text-7xl text-center lg:text-left gradient-text leading-10">
          Grow with
          <br />
          confidence,
          <br />
          thrive with Oval.
        </h1>
        <ContactButton title="Work with us" className="w-32" />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center gap-3">
        <div className="avatar">
          <div className="w-60 lg:w-96 rounded-full relative">
            <Image src="/team/AllanJohn.jpg" fill alt="Allan John" />
          </div>
        </div>
        <h1 className="text-3xl font-bold">Allan John Judson</h1>
        <p className="font-bold">Founder</p>
      </div>
    </ContainerBox>
  );
};

export default HeroSection;
