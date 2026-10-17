"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Rocket, ArrowRight, MessageCircle } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-600 via-brand-700 to-purple-700 p-10 sm:p-16 text-center"
        >
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl" />

          <div className="relative">
            {/* Icon */}
            <div className="w-16 h-16 mx-auto rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
              <Rocket className="w-8 h-8 text-white" />
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10">
              Apna idea share karein. Hum use real product banate hain — fast,
              beautiful aur scalable.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-brand-700 font-semibold hover:shadow-2xl transition-all hover:-translate-y-0.5"
              >
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold hover:bg-white/20 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}