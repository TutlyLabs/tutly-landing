"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Features",
    path: "#features"
  },
  {
    name: "Reviews",
    path: "#",
  },
  {
    name: "About",
    path: "#about",
  },
  {
    name: "Events",
    path: "/events"
  },
];
export default function Header() {
  const pathname = usePathname();
  return (
    <div className="flex justify-between items-center px-32 py-3 max-lg:px-6 max-sm:px-2 bg-black text-white">
      <div className="text-xl font-black">TUTLY</div>
      <div className="flex items-center gap-7 max-lg:hidden">
        {links.map((link) => (
          <Link
            className={`hover:text-blue-500 ${
              pathname===link.path &&
              "text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-blue-500 font-bold"
            }`}
            href={link.path}
            key={link.path}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-10 max-sm:gap-4">
        <Link href="https://learn.tutly.in/" className="hover:text-blue-500">Login</Link>
        <Link href={"mailto:sales@tutly.in"} target="_blank" className="px-4 py-2 font-semibold rounded-full bg-gradient-to-br from-violet-600 to-blue-400 max-sm:px-2 max-sm:py-1">
          Contact Us
        </Link>
      </div>
    </div>
  );
}
