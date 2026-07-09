import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdallah Company | Leading Innovation",
  description: "Discover our premium products, news, and global branches. We deliver excellence and innovative solutions.",
  openGraph: {
    title: "Abdullah Hashim Company",
    description: "Driving Progress Through Innovation, Quality, and Reliability",
    url: "https://abdallah-company.com",
    siteName: "Abdullah Hashim Company",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah Hashim Company",
    description: "Driving Progress Through Innovation, Quality, and Reliability",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col font-sans bg-white">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
