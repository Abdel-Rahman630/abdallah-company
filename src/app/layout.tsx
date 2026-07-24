import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JoinUs from "@/components/layout/JoinUs";
import { LoadingProvider } from "@/providers/LoadingProvider";
import { LanguageProvider } from "@/providers/LanguageProvider";
import PageLoader from "@/components/ui/PageLoader";
import { cookies } from "next/headers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://abdallah-company.com";

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: {
    default: "Abdullah Hashim Company",
    template: "%s | Abdullah Hashim Company",
  },
  description:
    "Abdullah Hashim Company (AHCL) — a leading Saudi conglomerate delivering excellence across automotive, marine, agriculture, and industrial sectors since 1950.",
  keywords: [
    "Abdullah Hashim Company",
    "AHCL",
    "Saudi Arabia",
    "automotive",
    "marine",
    "agriculture",
    "industrial",
    "Honda",
  ],
  authors: [{ name: "Abdullah Hashim Company", url: APP_URL }],
  icons: {
    icon: [
      { url: "/LOGO2.png", type: "image/png" },
    ],
    shortcut: "/LOGO2.png",
    apple: "/LOGO2.png",
  },
  openGraph: {
    title: "Abdullah Hashim Company",
    description:
      "A leading Saudi conglomerate delivering excellence across automotive, marine, agriculture, and industrial sectors.",
    url: APP_URL,
    siteName: "Abdullah Hashim Company",
    images: [
      {
        url: "/LOGO2.png",
        width: 1200,
        height: 630,
        alt: "Abdullah Hashim Company Logo",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah Hashim Company",
    description:
      "A leading Saudi conglomerate delivering excellence across automotive, marine, agriculture, and industrial sectors.",
    images: ["/LOGO2.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const locale = (cookieStore.get("NEXT_LOCALE")?.value || "en") as "en" | "ar";
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col font-sans bg-white" suppressHydrationWarning>
        <LanguageProvider initialLocale={locale}>
          <LoadingProvider>
            <PageLoader />
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <JoinUs />
            <Footer />
          </LoadingProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
