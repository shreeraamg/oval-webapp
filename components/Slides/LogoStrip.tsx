import Image from "next/image";
import { clients } from "@/data";

const LogoStrip = () => {
  return (
    <div className="w-full bg-black text-white py-2 lg:py-4 overflow-hidden whitespace-nowrap relative">
      <div className="inline-block animate-slide-slow">
        {clients.map((client, index) => (
          <Image
            key={index}
            src={client.imageSrc}
            alt=""
            height={50}
            width={150}
            className="inline mx-8"
          />
        ))}
      </div>
      <div className="inline-block animate-slide-slow">
        {clients.map((client, index) => (
          <Image
            key={index}
            src={client.imageSrc}
            alt=""
            height={50}
            width={150}
            className="inline mx-8"
          />
        ))}
      </div>
    </div>
  );
};

export default LogoStrip;
