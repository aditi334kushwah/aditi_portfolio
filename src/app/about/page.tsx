import type { Metadata } from "next";
import PremiumNavbar from "@/components/PremiumNavbar";
import Footer from "@/components/Footer";
import AboutEditorial from "@/components/AboutEditorial";

export const metadata: Metadata = {
  title: "About Aditi Kushwah | Python Full Stack Developer",
  description:
    "Meet Aditi Kushwah, a Python Full Stack Developer and Integrated MCA final year student with 6 months internship experience. Discover her engineering mindset, technical toolkit, and product philosophy.",
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen flex flex-col pt-16">
      <PremiumNavbar />
      <main className="flex-1">
        <AboutEditorial />
      </main>
      <Footer />
    </div>
  );
}

