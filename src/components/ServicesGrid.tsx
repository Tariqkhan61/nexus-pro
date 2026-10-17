"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Palette,
  Megaphone,
  ShoppingCart,
  Layout,
  PenTool,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { services } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Code,
  Palette,
  Megaphone,
  ShoppingCart,
  Layout,
  PenTool,
};

const categories = [
  { id: "all", label: "All Services" },
  { id: "web", label: "Web" },
  { id: "design", label: "Design" },
  { id: "marketing", label: "Marketing" },
];

export default function ServicesGrid() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredServices =
    activeFilter === "all"
      ? services
      : services.filter((s) => s.category === activeFilter);

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-brand-50/40 dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-brand-100 dark:bg-brand-900/40 text-brand-700 dark:text-brand-300 text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            What We{" "}
            <span className="bg-gradient-to-r from-brand-600 to-purple-600 bg-clip-text text-transparent">
              Offer
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Modern businesses ke liye complete digital solutions — web
            development, design aur marketing, sab kuch ek jagah.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-5 py-2.5 rounded-full font-medium transition-all ${
                activeFilter === cat.id
                  ? "bg-gradient-to-r from-brand-600 to-brand-700 text-white shadow-lg shadow-brand-500/30"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-brand-500 hover:text-brand-600"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => {
              const Icon = iconMap[service.icon] || Code;
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group relative p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-brand-200 shadow-sm hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Learn More */}
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-brand-600 dark:text-brand-400 font-semibold group-hover:gap-3 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-brand-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}