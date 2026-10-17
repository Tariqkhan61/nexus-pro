"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { navLinks, owner } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-950/80 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-2xl font-extrabold bg-gradient-to-r from-brand-600 to-brand-900 dark:from-brand-400 dark:to-brand-200 bg-clip-text text-transparent">
                Nexus-Pro
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-semibold tracking-wide">
                by <span className="font-bold text-brand-600 dark:text-brand-400">{owner.name}</span>
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 font-semibold transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-600 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Right — Theme Toggle + CTA (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-brand-600 to-brand-700 text-white font-semibold hover:shadow-lg hover:shadow-brand-500/30 transition-all"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile — Theme + Menu */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-4 py-4 space-y-2 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-brand-50 dark:hover:bg-gray-800 hover:text-brand-600 font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 rounded-lg bg-gradient-to-r from-brand-600 to-brand-700 text-white font-medium text-center"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}