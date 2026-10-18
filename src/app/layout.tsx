import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JoinUs from "@/components/layout/JoinUs";
import { LoadingProvider } from "@/providers/LoadingProvider";
import { LanguageProvider } from "@/providers/LanguageProvider";
import { DivisionsProvider } from "@/providers/DivisionsProvider";
import PageLoader from "@/components/ui/PageLoader";
import { cookies } from "next/headers";
import { getHomeDivisions } from "@/services/divisions.service";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://abdallah-company.com";

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const locale = (cookieStore.get("NEXT_LOCALE")?.value || "en") as "en" | "ar";
  const isAr = locale === "ar";

  const titleDefault = isAr
    ? "شركة عبد الله هاشم المحدودة | الموقع الرسمي"
    : "Abdullah Hashim Company Limited | Official Website";
  const titleTemplate = isAr
    ? "%s | شركة عبد الله هاشم المحدودة"
    : "%s | Abdullah Hashim Company Limited";
  const siteName = isAr
    ? "شركة عبد الله هاشم المحدودة"
    : "Abdullah Hashim Company Limited";
  const description = isAr
    ? "شركة عبد الله هاشم المحدودة (AHCL) موزّع متميز للسيارات والآلات في المملكة العربية السعودية منذ عام 1945."
    : "Abdullah Hashim Company Limited (AHCL) is an established Automotive & machinery distributor in Saudi Arabia. Since its establishment in 1945, it has grown and expanded its network of showrooms, service centers & dealers, allowing it to serve a large customer base in the kingdom.";

  return {
    metadataBase: new URL(APP_URL),
    title: {
      default: titleDefault,
      template: titleTemplate,
    },
    description,
    keywords: isAr
      ? [
          "شركة عبد الله هاشم المحدودة | الموقع الرسمي",
          "AHCL",
          "السعودية",
          "سيارات",
          "معدات",
          "شاحنات تجارية",
          "هوندا",
        ]
      : [
          "Abdullah Hashim Company Limited | Official Website",
          "AHCL",
          "Saudi Arabia",
          "automotive",
          "machinery",
          "commercial trucks",
          "Honda",
        ],
    authors: [{ name: "Icon Creations" }],
    icons: {
      icon: [{ url: "/LOGO2.png", type: "image/png" }],
      shortcut: "/LOGO2.png",
      apple: "/LOGO2.png",
    },
    openGraph: {
      title: titleDefault,
      description,
      url: APP_URL,
      siteName,
      images: [
        {
          url: "/LOGO2.png",
          width: 1200,
          height: 630,
          alt: isAr ? "شعار شركة عبد الله هاشم" : "Abdullah Hashim Company Logo",
        },
      ],
      type: "website",
      locale: isAr ? "ar_SA" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: titleDefault,
      description,
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
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const locale = (cookieStore.get("NEXT_LOCALE")?.value || "en") as "en" | "ar";
  const dir = locale === "ar" ? "rtl" : "ltr";

  // Fetch divisions once on the server — shared across Header, Footer, and all pages.
  const divisions = await getHomeDivisions(locale).catch(() => []);

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col font-sans bg-white" suppressHydrationWarning>
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-N4S2XRZPK7" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N4S2XRZPK7');
          `}
        </Script>
        <LoadingProvider>
          <PageLoader />
          <LanguageProvider initialLocale={locale}>
            <DivisionsProvider divisions={divisions}>
              <Header />
              <main className="flex-grow">{children}</main>
              <JoinUs />
              <Footer />
            </DivisionsProvider>
          </LanguageProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
