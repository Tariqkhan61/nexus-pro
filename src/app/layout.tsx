import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Nexus-Pro | Muhammad Tariq Mahboob",
  description:
    "Premium digital agency by Muhammad Tariq Mahboob. Modern web development, design aur marketing services.",
  authors: [{ name: "Muhammad Tariq Mahboob" }],
  creator: "Muhammad Tariq Mahboob",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}  data-scroll-behavior="smooth"
  suppressHydrationWarning>
      <body className="font-poppins bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 antialiased flex flex-col min-h-screen transition-colors">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}