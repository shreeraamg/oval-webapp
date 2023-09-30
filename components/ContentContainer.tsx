import { ChildrenProp } from "@/types";

const ContentContainer = ({ children }: ChildrenProp) => {
  return (
    <div className="min-h-screen w-full mx-auto md:w-10/12 lg:w-1/2 pt-navbar">
      {children}
    </div>
  );
};

export default ContentContainer;
