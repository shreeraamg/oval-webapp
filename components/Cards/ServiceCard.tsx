import React from "react";
import { IconType } from "react-icons";

interface Props {
  title: string;
  icon: IconType;
  description: string;
}

const ServiceCard = ({ title, icon: Icon, description }: Props) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl lg:hover:-translate-y-8 transition-transform duration-300">
      <div className="card-body flex flex-col items-center">
        <Icon size={60} />
        <h2 className="card-title">{title}</h2>
        <p className="text-center">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
