import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import ContactButton from "./ContactButton";

const navLinks = [
  { title: "Home", url: "/" },
  { title: "Services", url: "/#services" },
  { title: "Blog", url: "/" },
  { title: "About us", url: "/" },
];

const Navbar = () => {
  return (
    <nav className="py-3 flex-center app-padding shadow-md">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Oval Digital Marketing"
          width={150}
          height={50}
        />
      </Link>
      <div className="hidden lg:flex">
        <ul className="flex-center gap-x-8">
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link href={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <ContactButton title="Contact Us" className="hidden lg:flex" />
      <div className="flex lg:hidden dropdown dropdown-hover dropdown-end">
        <button className="btn btn-ghost btn-square">
          <HamburgerMenuIcon />
        </button>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] top-4 menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link href={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
