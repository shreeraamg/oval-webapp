type client = {
  company: string;
  imageSrc: string;
  testimonial?: string;
};

const clients: client[] = [
  { company: "The ARM Construction", imageSrc: "/clients/C1Arms.png" },
  { company: "", imageSrc: "/clients/C5Teckartpro.png" },
  { company: "Fit n Nut", imageSrc: "/clients/C2Fitnnut.png" },
  { company: "Journey Guru", imageSrc: "/clients/C6JourneyGuru.png" },
  { company: "i1 Sports", imageSrc: "/clients/C3i1Sports.png" },
  { company: "Take My Tickets", imageSrc: "/clients/C7TakeMYTIC.png" },
  { company: "SSV", imageSrc: "/clients/C4SSV.png" },
  { company: "", imageSrc: "/clients/C8Logo01.png" },
];

export default clients;
