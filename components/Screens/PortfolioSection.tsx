import Image from "next/image";
import ContainerBox from "../ContainerBox";

const PortfolioSection = () => {
  return (
    <ContainerBox className="flex app-padding flex-col lg:flex-row">
      <div className="flex-[2] h-full">
        <div className="mockup-browser border bg-base-300">
          <div className="mockup-browser-toolbar">
            <div className="input">https://daisyui.com</div>
          </div>
          <div className="w-full h-96 relative bg-base-200">
            <Image
              src="/websites/project3.jpeg"
              alt=""
              className="object-cover object-top"
              fill
            />
          </div>
        </div>
      </div>
      <div className="flex-1"></div>
    </ContainerBox>
  );
};

export default PortfolioSection;
