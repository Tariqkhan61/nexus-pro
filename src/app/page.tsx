import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import TestimonialSlider from "@/components/TestimonialSlider";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesGrid />
      <TestimonialSlider />
      <CTASection />
      <ContactForm />
    </div>
  );
}