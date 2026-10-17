"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import { owner, services } from "@/lib/data";

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  // ⚠️ YAHAN APNA WHATSAPP NUMBER DALEIN (country code ke sath, bina + ke)
  const WHATSAPP_NUMBER = "923202009631";

  const onSubmit = (data: FormData) => {
    const message = `*New Inquiry from Nexus-Pro*%0A%0A*Name:* ${data.name}%0A*Email:* ${data.email}%0A*Phone:* ${data.phone}%0A*Service:* ${data.service}%0A%0A*Message:*%0A${data.message}`;

    // WhatsApp open karo
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
      "_blank"
    );

    setSubmitted(true);
    reset();

    // 5 second baad success message hide karo
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-b from-white to-brand-50/40 dark:from-gray-950 dark:to-gray-900 overflow-hidden"
    >
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-300/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-brand-100 dark:bg-brand-900/40 text-brand-700 dark:text-brand-300 text-sm font-semibold mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Let's{" "}
            <span className="bg-gradient-to-r from-brand-600 to-purple-600 bg-clip-text text-transparent">
              Talk
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Apna project discuss karein. Hum 24 hours mein reply karte hain.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-brand-200 dark:hover:border-brand-500 shadow-sm hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                Email
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{owner.email}</p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-brand-200 dark:hover:border-brand-500 shadow-sm hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                Phone
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{owner.phone}</p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-brand-200 dark:hover:border-brand-500 shadow-sm hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                Location
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{owner.location}</p>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-xl"
          >
            {submitted ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 mx-auto rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Message Sent! 🎉
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  WhatsApp par aap ka message khul gaya hai. Hum jaldi reply
                  karenge.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      {...register("name", { required: "Name zaroori hai" })}
                      type="text"
                      placeholder="Aap ka naam"
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      {...register("email", {
                        required: "Email zaroori hai",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Email sahi nahi hai",
                        },
                      })}
                      type="email"
                      placeholder="aap@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Phone
                    </label>
                    <input
                      {...register("phone")}
                      type="tel"
                      placeholder="+92 300 1234567"
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Service *
                    </label>
                    <select
                      {...register("service", {
                        required: "Service select karein",
                      })}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                    {errors.service && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.service.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    {...register("message", {
                      required: "Message zaroori hai",
                    })}
                    rows={5}
                    placeholder="Apne project ke bare mein batayein..."
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all resize-none"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full group flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-brand-600 to-brand-700 text-white font-semibold hover:shadow-xl hover:shadow-brand-500/30 transition-all hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5" />
                  Send via WhatsApp
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  Form submit hone par WhatsApp open hoga pre-filled message ke
                  sath.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}