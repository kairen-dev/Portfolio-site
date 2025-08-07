"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; 

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setCurrentPath(pathname);
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 w-[90vw] max-w-5xl z-50 md:rounded-full rounded-4xl bg-[#0f172a]/70 backdrop-blur-xl border border-white/10 shadow-md shadow-blue-500/10">
      <div className="px-6 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link
          href="/"
          className="text-white text-2xl font-bold tracking-wide hover:text-blue-500 transition"
        >
          Kai Ren
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {navItems.map(({ href, label }) => {
            const isActive = currentPath === href;
            return (
              <Link
                key={href}
                href={href}
                className={`group relative text-sm font-medium transition duration-300 ${
                  isActive ? "text-white" : "text-neutral-400 hover:text-white"
                }`}
              >
                {label}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 w-full bg-blue-500 transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100 ${
                    isActive ? "scale-x-100" : ""
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 pt-2 space-y-3">
          {navItems.map(({ href, label }) => {
            const isActive = currentPath === href;
            return (
              <Link
                key={href}
                href={href}
                className={`block text-sm font-medium transition duration-300 ${
                  isActive ? "text-white" : "text-neutral-400 hover:text-white"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
