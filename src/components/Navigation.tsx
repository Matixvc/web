"use client";

import { motion } from "framer-motion";
import { Home, FolderOpen, User } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const navItems = [
  { name: "Inicio", href: "/", icon: Home },
  { name: "Portafolio", href: "/portafolio", icon: FolderOpen },
  { name: "CV", href: "/cv", icon: User },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            MV
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.name} href={item.href}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </motion.div>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden py-4"
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)}>
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors py-2"
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </motion.div>
                </Link>
              );
            })}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}