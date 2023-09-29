import { IconType } from "react-icons";
import {
  MdOutlineScreenSearchDesktop,
  MdPeopleOutline,
  MdWeb,
} from "react-icons/md";

type service = {
  service: string;
  startPrice: string;
  description: string;
  offerings: string[];
  icon: IconType;
};

const services: service[] = [
  {
    service: "Social Media Handling",
    startPrice: "10,000",
    description: "creatives, reels, ads, branding, events and much more.",
    icon: MdPeopleOutline,
    offerings: [
      "Creatives",
      "Reels / videos",
      "Account management",
      "Social Media Ads",
      "Branding",
      "Event Campaign",
      "Targeted views",
    ],
  },
  {
    service: "Search Engine Optimization",
    description: "keywords, blogs, directories, forums, GMB and more.",
    icon: MdOutlineScreenSearchDesktop,
    startPrice: "20,000",
    offerings: [
      "Custom Keywords Target",
      "Directory submission",
      "Forum submission",
      "Guest Blogs",
      "1 Blog Writing",
      "GMB management",
      "Technical SEO and more",
    ],
  },
  {
    service: "Website Designing",
    description:
      "graphic designs, content creation, plugins, payment gateways, etc.,",
    icon: MdWeb,
    startPrice: "50,000",
    offerings: [
      "Graphic Design",
      "Content Creation",
      "Content Upload",
      "Plugin Integration",
      "Premium Themes",
      "Basic on page SEO",
      "Payment Gateway and more",
    ],
  },
];

export default services;
