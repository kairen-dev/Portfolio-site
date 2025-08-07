"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#0f0f0f]/80 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-extrabold tracking-tight text-white">
          Kai Ren
        </Link>

        <div className="flex space-x-6">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative text-sm md:text-base font-medium transition duration-200 ${
                pathname === href
                  ? "text-white"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <span className="group-hover:opacity-100 opacity-0 absolute left-0 bottom-0 h-[2px] w-full bg-blue-500 transition-all duration-300"></span>
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
