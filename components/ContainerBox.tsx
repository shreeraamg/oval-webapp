import { ChildrenProp } from "@/types";
import { twMerge } from "tailwind-merge";

const ContainerBox = ({ children, className }: ChildrenProp) => {
  return (
    <div className={twMerge("min-h-screen w-full", className)}>{children}</div>
  );
};

export default ContainerBox;
