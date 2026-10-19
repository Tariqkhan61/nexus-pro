"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { owner } from "@/lib/data";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-brand-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-300/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-brand-200 dark:border-brand-700 text-sm font-medium text-brand-700 dark:text-brand-300 mb-6 shadow-sm"            >
              <Sparkles className="w-4 h-4" />
              Premium Digital Agency
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white mb-6"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-brand-600 via-purple-600 to-brand-700 bg-clip-text text-transparent">
                {owner.name}
              </span>{" "}
              👋
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl text-gray-700 dark:text-gray-300 font-bold">
                {owner.tagline}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl"
            >
              Modern businesses ke liye fast, beautiful aur scalable digital
              solutions. Web development, design aur marketing — sab kuch ek
              jagah.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-brand-600 to-brand-700 text-white font-semibold hover:shadow-xl hover:shadow-brand-500/30 transition-all hover:-translate-y-0.5"
              >
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-semibold border-2 border-gray-200 dark:border-gray-700 hover:border-brand-500 hover:text-brand-600 transition-all"
              >
                <Play className="w-4 h-4" />
                View Portfolio
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 max-w-lg"
            >
              {[
                { value: "50+", label: "Projects" },
                { value: "30+", label: "Clients" },
                { value: "5+", label: "Years" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-brand-600 to-brand-700 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Visual Card */}
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.4, duration: 0.8 }}
  className="relative hidden lg:block"
>
  <div className="relative w-full aspect-square max-w-md mx-auto">
    {/* Background Gradient Card (Peeche wala) */}
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-500 to-purple-600 shadow-2xl shadow-brand-500/40 rotate-6 hover:rotate-3 transition-transform duration-500" />
    
    {/* Screenshot Container (Aage wala) */}
    <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
      <Image
        src="/screenshot.jpg"
        alt="Nexus-Pro Website Preview"
        fill
        className="object-cover object-top"
        priority
      />
    </div>
  </div>
</motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">
            Scroll
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-gray-300 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 rounded-full bg-brand-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}