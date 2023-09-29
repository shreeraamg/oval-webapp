import Image from "next/image";

const clients = [
  "/clients/C1Arms.png",
  "/clients/C5Teckartpro.png",
  "/clients/C2Fitnnut.png",
  "/clients/C6JourneyGuru.png",
  "/clients/C3i1Sports.png",
  "/clients/C7TakeMYTIC.png",
  "/clients/C4SSV.png",
  "/clients/C8Logo01.png",
];

const LogoStrip = () => {
  return (
    <div className="w-full bg-black text-white py-2 lg:py-4 overflow-hidden whitespace-nowrap relative">
      <div className="inline-block animate-slide-slow">
        {clients.map((client, index) => (
          <Image
            key={index}
            src={client}
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
            src={client}
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
