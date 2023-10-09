import Link from "next/link";
import { twMerge } from "tailwind-merge";
import styles from "./components.module.css";

type Props = {
  title: string;
  className?: string;
};

const ContactButton = ({ title }: Props) => {
  return (
    <Link href="https://wa.link/u78yu4" className={twMerge(styles.bn5)}>
      {title}
    </Link>
  );
};

export default ContactButton;
