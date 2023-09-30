import Image from "next/image";
import Link from "next/link";

import { company } from "@/data";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/logo.png" alt={company} width={150} height={50} />
    </Link>
  );
};

export default Logo;
