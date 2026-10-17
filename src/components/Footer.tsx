import Link from "next/link";
import {
  Sparkles,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { navLinks, owner } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-extrabold text-white">Nexus-Pro</span>
            </Link>
            <p className="text-base text-sm text-gray-400 mb-6">
              Premium digital agency for modern businesses. We build fast,
              beautiful aur scalable solutions.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-gray-800 hover:bg-brand-600 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-sm text-gray-400 hover:text-brand-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-base text-sm text-gray-400">
              <li>Web Development</li>
              <li>Graphic Design</li>
              <li>Digital Marketing</li>
              <li>E-Commerce</li>
              <li>UI/UX Design</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg text-white font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-basetext-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-400" />
                {owner.email}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-400" />
                {owner.phone}
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-400" />
                {owner.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-base text-gray-500">
            © {new Date().getFullYear()} Nexus-Pro. All rights reserved.
          </p>
          <p className="text-base text-gray-500">
            Designed & Developed by{" "}
            <span className="font-extrabold text-brand-400">{owner.name}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}