import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Portfolio | Nexus-Pro",
  description: "Our recent projects",
};

export default function PortfolioPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-20">
      <span className="inline-block px-4 py-2 rounded-full bg-brand-100 text-brand-700 text-sm font-semibold mb-4">
        Portfolio
      </span>
      <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
        Coming{" "}
        <span className="bg-gradient-to-r from-brand-600 to-purple-600 bg-clip-text text-transparent">
          Soon
        </span>
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 text-center max-w-xl">
        Hamara portfolio jald hi live hoga. Tab tak hum se contact karein.
      </p>
      <CTASection />
    </div>
  );
}