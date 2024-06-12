"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Events",
    path: "/events"
  },
  {
    name: "Features",
    path: "#features"
  },
  {
    name: "Reviews",
    path: "#reviews",
  },
  {
    name: "About",
    path: "#about",
  },
];
export default function Header() {
  const pathname = usePathname();
  return (
    <div className="flex justify-between items-center px-32 py-3 bg-black text-white">
      <div className="text-xl font-black">{/* <Image src="" alt="logo" width={140} height={100} /> */}TUTLY</div>
      <div className="flex items-center gap-7">
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
      <div className="flex items-center gap-10">
        <Link href="https://learn.tutly.in/" className="hover:text-blue-500">Login</Link>
        <Link href={"mailto:sales@tutly.in"} target="_blank" className="px-4 py-2 font-semibold rounded-full bg-gradient-to-br from-violet-600 to-blue-400">
          Contact Us
        </Link>
      </div>
    </div>
  );
}
