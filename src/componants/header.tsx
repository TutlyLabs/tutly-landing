"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [
  {
      name: "Product",
      path: "/"
  },
  {
      name: "Pricing",
      path: "/pricing"
  },
  {
      name: "Industry",
      path: "/industry"
  },
  {
      name: "Customer Stories",
      path: "#reviews"
  },
  {
      name: "About",
      path: "#about"
  },
  {
      name: "Blog",
      path: "#blog"
  },
]
export default function Header() {
  const pathname = usePathname();
  return (
    <div className="flex justify-between items-center px-32 py-2 bg-primary-900 text-white">
            <div>
                {/* <Image src="" alt="logo" width={140} height={100} /> */}
            </div>
            <div className="flex items-center gap-7">
                {
                    links.map((link) => (
                        <Link className={`${pathname === link.path&&"inline-block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500"}`} href={link.path} key={link.path}>{link.name}</Link>
                    ))
                }
            </div>
            <div className="flex items-center gap-10">
                <button className="text-pink-300">Login</button>
                <button className="px-6 py-3 font-semibold rounded-full bg-gradient-to-br from-pink-400 to-violet-400">Talk to Us</button>
            </div>
        </div>
  );
}
