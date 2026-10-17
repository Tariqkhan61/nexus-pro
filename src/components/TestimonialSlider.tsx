"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function TestimonialSlider() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-brand-50/40 to-white dark:from-gray-900 dark:to-gray-950 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 -left-40 w-96 h-96 bg-brand-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-40 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 rounded-full bg-brand-100 dark:bg-brand-900/40 text-brand-700 dark:text-brand-300 text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            What{" "}
            <span className="bg-gradient-to-r from-brand-600 to-purple-600 bg-clip-text text-transparent">
              Clients
            </span>{" "}
            Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real feedback from businesses we've helped grow.
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          loop
          className="pb-16"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="group h-full p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-brand-200 dark:hover:border-brand-500 shadow-sm hover:shadow-xl transition-all duration-300">
                {/* Quote Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Message */}
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 italic">
                  "{t.message}"
                </p>

                {/* Author */}
                <div className="pt-6 border-t border-gray-100 dark:border-gray-700 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center text-white font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">
                      {t.name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}