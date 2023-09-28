import Image from "next/image";
import ContainerBox from "../ContainerBox";
import Heading from "../Heading";

const PortfolioSection = () => {
  return (
    <ContainerBox className="app-padding">
      {/* Website Projects */}
      <div className="flex flex-col-reverse lg:flex-row lg:items-center gap-y-4 mb-12">
        <div className="lg:flex-[2] h-full">
          <div className="mockup-browser border bg-base-300">
            <div className="mockup-browser-toolbar">
              <div className="input">https://daisyui.com</div>
            </div>
            <div className="w-full h-96 lg:h-30rem relative bg-base-200">
              <Image
                src="/websites/project3.jpeg"
                alt=""
                className="object-cover object-top"
                fill
              />
            </div>
          </div>
        </div>
        <Heading className="lg:flex-1">Our Website Projects</Heading>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-y-4">
        <Heading>Our Social Media Handles</Heading>
        <div>
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
        </div>
      </div>
    </ContainerBox>
  );
};

export default PortfolioSection;
