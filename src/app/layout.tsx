import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const SITE_URL = "https://not7pro.github.io/gulf-union-premium";

export const metadata: Metadata = {
  title: {
    default: "Gulf Union Foods Co. | Premium Beverage Manufacturer | Saudi Arabia",
    template: "%s | Gulf Union Foods Co.",
  },
  description: "Gulf Union Foods Co. — established in 1995. A leading Saudi FMCG manufacturer of juices, nectars, energy drinks, and sparkling beverages, serving 42+ global markets from 4 world-class factories.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Gulf Union Foods Co.",
    title: "Gulf Union Foods Co. | Premium Beverage Manufacturer",
    description: "A leading Saudi FMCG manufacturer of juices, nectars, energy drinks, and sparkling beverages, serving 42+ global markets.",
    images: [
      {
        url: `${SITE_URL}/images/logo.png`,
        width: 800,
        height: 600,
        alt: "Gulf Union Foods Co. logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gulf Union Foods Co. | Premium Beverage Manufacturer",
    description: "A leading Saudi FMCG manufacturer serving 42+ global markets.",
    images: [`${SITE_URL}/images/logo.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Organization structured data
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Gulf Union Foods Co.",
  url: "https://gulf-union.com",
  logo: `${SITE_URL}/images/logo.png`,
  foundingDate: "1995",
  description: "A leading Saudi FMCG manufacturer of juices, nectars, energy drinks, and sparkling beverages.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Riyadh",
    addressCountry: "SA",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+966-9200-22205",
    email: "info@gulf-union.com",
    contactType: "customer service",
  },
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: 1300,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <a href="#main-content" style={{
          position: 'absolute',
          left: '-9999px',
          top: 'auto',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
        }}>
          Skip to main content
        </a>
        <LenisProvider>
          <Navbar />
          <div id="main-content">
            {children}
          </div>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
