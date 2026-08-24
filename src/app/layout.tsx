import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Nav } from "@/components/Nav";
import { SITE_URL } from "@/lib/constants";
import "./globals.css";

const title = "Arca Wallet - Your Wallet's Missing Half";
const description =
  "Gift cards, memberships, loyalty programs, and passes — everything with a barcode, scanned once and one tap away. Arca Wallet keeps it all in one place on iOS.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: "%s | Arca Wallet",
  },
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: "Arca Wallet",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Arca Wallet",
  operatingSystem: "iOS",
  applicationCategory: "UtilitiesApplication",
  description,
  url: SITE_URL,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Nav />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
