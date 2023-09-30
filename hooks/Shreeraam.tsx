import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Shreeraam = () => {
  return (
    <span className="flex-center absolute bottom-2 right-2 font-semibold text-base text-cyan-600">
      <Link
        className="flex-center"
        target="_blank"
        href="https://www.linkedin.com/in/shreeraam"
      >
        <p>Made by&nbsp;&nbsp;</p>
        Shreeraam G&nbsp;&nbsp;
        <ExternalLinkIcon />
      </Link>
    </span>
  );
};

export default Shreeraam;
