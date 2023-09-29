import React from "react";
import { IconType } from "react-icons";

interface Props {
  service: string;
  icon: IconType;
  description: string;
}

const ServiceCard = ({ service, icon: Icon, description }: Props) => {
  return (
    <div className="card w-[90%] lg:w-96 bg-base-100 shadow-xl lg:hover:-translate-y-8 transition-transform duration-300">
      <div className="card-body flex flex-col items-center gap-y-4">
        <Icon size={68} />
        <h2 className="card-title">{service}</h2>
        <p className="text-center tex-sm">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
