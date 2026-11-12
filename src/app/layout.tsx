import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import CustomCursor from "@/components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aditi Kushwah | Python Full Stack Developer | Portfolio",
  description:
    "Portfolio of Aditi Kushwah – Python Full Stack Developer specializing in Django, Next.js, React, REST APIs, and PostgreSQL. Final year MCA candidate with 6 months internship experience.",
  keywords: [
    "Aditi Kushwah",
    "Python Developer",
    "Django Developer",
    "Full Stack Developer",
    "Next.js",
    "React.js",
    "Django REST Framework",
    "PostgreSQL",
    "Python Backend Developer",
    "Software Engineer",
  ],
  authors: [{ name: "Aditi Kushwah" }],
  openGraph: {
    title: "Aditi Kushwah – Python Full Stack Developer",
    description:
      "Building modern web applications and reliable backend systems using Python, Django, React, and Next.js.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/aditi-portrait.png",
        width: 800,
        height: 900,
        alt: "Aditi Kushwah – Python Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditi Kushwah – Python Full Stack Developer",
    description:
      "Python Full Stack Developer passionate about scalable web applications, clean REST APIs, and modern user interfaces.",
    images: ["/aditi-portrait.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <body className="min-h-screen flex flex-col antialiased selection:bg-indigo-500/30 selection:text-indigo-200">
        <ThemeProvider>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
