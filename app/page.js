"use client";

import Link from "next/link";
import Image from "next/image";
import avatar from "@/public/my-pic.jpg";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-[90vh] flex flex-col-reverse md:flex-row items-center py-4 pb-12 justify-center px-6 gap-16">
      
      {/* TEXT SECTION */}
      <motion.section
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl text-center md:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
          Hi, I’m <span className="text-blue-500">Kai Ren</span><br />
          A Full-Stack Developer
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg md:text-xl text-neutral-400 mb-10 leading-relaxed"
        >
          I craft blazing fast, beautiful web apps using Next.js, Node.js, and modern technologies — built to impress and scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center md:justify-start gap-4"
        >
          <Link
            href="/projects"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-sm md:text-base text-white font-semibold rounded-lg shadow-lg hover:shadow-blue-500/50 transition transform hover:-translate-y-1"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-white text-white text-sm md:text-base hover:bg-white hover:text-black font-semibold rounded-lg transition transform hover:-translate-y-1"
          >
            Contact Me
          </Link>
        </motion.div>
      </motion.section>

      {/* IMAGE SECTION */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative group w-48 h-48 md:w-64 md:h-64"
      >
        <div className="absolute inset-0 rounded-full bg-blue-500 blur-2xl opacity-30 scale-110 group-hover:opacity-50 transition-all duration-500" />
        <div className="relative w-full h-full overflow-hidden rounded-full border-4 border-blue-600 shadow-xl shadow-blue-500/20 group-hover:scale-105 transition-transform duration-500">
          <Image
            src={avatar}
            alt="Kai Ren"
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </motion.div>
    </main>
  );
}
