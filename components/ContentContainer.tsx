import { ChildrenProp } from "@/types";
import { twMerge } from "tailwind-merge";

const ContentContainer = ({ children, className }: ChildrenProp) => {
  return (
    <div
      className={twMerge(
        "min-h-screen w-full mx-auto md:w-10/12 lg:w-1/2 pt-navbar",
        className
      )}
    >
      {children}
    </div>
  );
};

export default ContentContainer;
