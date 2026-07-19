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

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://abdallah-company.com"),
  title: "Abdallah Company",
  description: "Welcome to Abdallah Company",
  openGraph: {
    title: "Abdallah Company",
    description: "Welcome to Abdallah Company",
    images: [
      {
        url: "/bg.png",
        width: 1200,
        height: 630,
        alt: "Abdallah Company Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdallah Company",
    description: "Welcome to Abdallah Company",
    images: ["/bg.png"],
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
      data-scroll-behavior="smooth"
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
