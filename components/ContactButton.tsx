import Link from "next/link";
import { twMerge } from "tailwind-merge";

type Props = {
  title: string;
  className?: string;
};

const ContactButton = ({ title, className }: Props) => {
  return (
    <Link
      href="/"
      className={twMerge("btn btn-success normal-case", className)}
    >
      {title}
    </Link>
  );
};

export default ContactButton;
