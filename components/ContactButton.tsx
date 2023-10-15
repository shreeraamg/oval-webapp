import Link from "next/link";
import { twMerge } from "tailwind-merge";
import styles from "./components.module.css";

type Props = {
  title: string;
  className?: string;
};

const ContactButton = ({ title, className }: Props) => {
  return (
    <Link href="https://wa.link/u78yu4" className={className}>
      <button className={styles.button}>
        <span>{title}</span>
      </button>
    </Link>
  );
};

export default ContactButton;
