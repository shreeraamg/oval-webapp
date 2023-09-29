import Image from "next/image";
import ContainerBox from "../ContainerBox";
import ContactButton from "../ContactButton";

const HeroSection = () => {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row">
      <div className="flex-1 w-full h-full bg-red-100">Hi</div>
      <div className="flex-1 w-full h-full bg-green-100">Hi</div>
    </div>
    // <div className="min-h-screen w-full flex flex-col lg:flex-row app-padding pt-navbar lg:pt-0 justify-start">
    //   <div className="flex-[3] lg:flex-1 flex flex-col justify-center gap-6 items-center lg:items-start">
    //     <h1 className="font-semibold text-5xl lg:text-7xl text-center lg:text-left gradient-text leading-10">
    //       Grow with
    //       <br />
    //       confidence,
    //       <br />
    //       thrive with Oval.
    //     </h1>
    //     <ContactButton
    //       title="Work with us"
    //       className="w-40 self-center lg:mt-12"
    //     />
    //   </div>
    //   <div className="flex-1 flex flex-col items-center justify-center gap-3">
    //     <div className="avatar">
    //       <div className="w-60 lg:w-[28rem] rounded-full relative">
    //         <Image src="/team/AllanJohn.jpg" fill alt="Allan John" />
    //       </div>
    //     </div>
    //     <h1 className="text-3xl font-bold">Allan John Judson</h1>
    //     <p className="font-bold">Founder</p>
    //   </div>
    // </div>
  );
};

export default HeroSection;
