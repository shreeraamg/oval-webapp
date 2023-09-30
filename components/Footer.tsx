import { company } from "@/data";
import Link from "next/link";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <aside>
        <Logo />
        <ul className="space-y-2">
          <li>{company}</li>
          <li>+91 80560 05348</li>
          <li>
            <Link href="mailto:ovaldigitalmarketing@gmail.com">
              ovaldigitalmarketing@gmail.com
            </Link>
          </li>
        </ul>
      </aside>
      <nav>
        <header className="footer-title">Services</header>
        <Link className="link link-hover" href="/#services">
          Social Media Handling
        </Link>
        <Link className="link link-hover" href="/#services">
          Search Engine Optimization
        </Link>
        <Link className="link link-hover" href="/#services">
          Website designing
        </Link>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <Link className="link link-hover" href="/aboutus">
          About us
        </Link>
        <Link className="link link-hover" href="/#services">
          Services
        </Link>
        <Link className="link link-hover" href="/blog">
          Blog
        </Link>
        <Link className="link link-hover" href="/careers">
          Careers
        </Link>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <Link href="/terms-and-conditions">Terms and Conditions</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
      </nav>
    </footer>
  );
};

export default Footer;
