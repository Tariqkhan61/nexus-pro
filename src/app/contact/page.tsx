import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact | Nexus-Pro",
  description: "Get in touch with Muhammad Tariq Mahboob",
};

export default function ContactPage() {
  return (
    <div className="pt-10">
      <ContactForm />
    </div>
  );
}