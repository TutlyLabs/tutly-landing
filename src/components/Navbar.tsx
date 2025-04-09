import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Link as ScrollLink } from "react-scroll";

const links = [
  {
    name: "About",
    link: "#",
  },
  {
    name: "Clients",
    link: "#testimonials",
  },
  {
    name: "FAQ",
    link: "#faqs",
  },
  {
    name: "Pricing",
    link: "#",
  },
  {
    name: "Developers",
    link: "#",
  },
];

function Navbar() {
  return (
    <div className="flex justify-between items-center py-4 sticky top-0 bg-[#0F1427] z-50 lg:px-24">
      <div className="flex gap-20 items-center">
        <Link href="/" className="flex space-x-2 items-center">
          <Image
            src="/logo.png"
            className="rounded"
            width={30}
            height={30}
            alt="logo"
          />
          <div>
            <h1 className="font-black text-xl">Tutly</h1>
          </div>
        </Link>
        <div className="flex gap-12 items-center max-lg:hidden">
          {links.map((link) =>
            link.link.startsWith("#") ? (
              <Link
                key={link.name}
                href={link.link.substring(1)}
                // smooth={true}
                // duration={500}
                className="font-semibold tracking-wider text-gray-500 hover:text-white cursor-pointer"
              >
                {link.name}
              </Link>
            ) : (
              <Link key={link.name} href={link.link}>
                <h1 className="font-semibold tracking-wider text-gray-500 hover:text-white">
                  {link.name}
                </h1>
              </Link>
            )
          )}
        </div>
      </div>
      <div className="flex gap-6 items-center">
        <Link href="//learn.tutly.in" target="_blank">
          Login
        </Link>
        <Link
          href="mailto:sales@tutly.in"
          className="animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 p-1 px-2"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
