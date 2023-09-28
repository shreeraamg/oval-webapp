import { ChildrenProp } from "@/types";
import { twMerge } from "tailwind-merge";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

const Heading = ({ children, className }: ChildrenProp) => {
  return (
    <h1
      className={twMerge(
        "text-4xl text-center font-bold",
        outfit.className,
        className
      )}
    >
      {children}
    </h1>
  );
};

export default Heading;
