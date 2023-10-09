import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import ContactButton from "./ContactButton";
import { company, navLinks } from "@/data";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="fixed z-40 bg-white w-full py-3 flex items-center justify-between app-padding shadow-md">
      <Logo />
      <div className="hidden lg:flex">
        <ul className="flex-center gap-x-8">
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link href={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <span className="hidden lg:flex">
        <ContactButton title="Contact Us" />
      </span>
      <div className="flex lg:hidden dropdown dropdown-hover dropdown-end">
        <button className="btn btn-ghost btn-square">
          <HamburgerMenuIcon />
        </button>
        <ul
          tabIndex={0}
          className="dropdown-content z-50 top-4 menu p-2 shadow bg-base-100 rounded-box w-52"
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
