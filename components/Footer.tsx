import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <aside>
        <Image
          src="/logo.png"
          alt="Oval Digital Marketing"
          width={150}
          height={50}
        />
        <p>
          Oval Digital Marketing
          <br />
          +91 80560 05348
          <br />
          <Link href="mailto:ovaldigitalmarketing@gmail.com">
            ovaldigitalmarketing@gmail.com
          </Link>
        </p>
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
        <Link className="link link-hover" href="/">
          About us
        </Link>
        <Link className="link link-hover" href="/">
          Services
        </Link>
        <Link className="link link-hover" href="/">
          Blog
        </Link>
        <Link className="link link-hover" href="/">
          Careers
        </Link>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <Link href="/">Terms and Conditions</Link>
        <Link href="/">Privacy Policy</Link>
      </nav>
    </footer>
  );
};

export default Footer;
