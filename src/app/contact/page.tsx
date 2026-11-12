import type { Metadata } from "next";
import PremiumNavbar from "@/components/PremiumNavbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Aditi Kushwah | Python Full Stack Developer",
  description:
    "Get in touch with Aditi Kushwah for software engineering roles, Python backend development, and full-stack consultations.",
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen flex flex-col pt-16">
      <PremiumNavbar />
      <main className="flex-1">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

