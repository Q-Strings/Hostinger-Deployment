import "./globals.css";
import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";

import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { PageTransition } from "@/components/shared/PageTransition";
import { StructuredData } from "@/components/shared/StructuredData";
import { cn } from "@/lib/utils";
import {
  buildOrganizationSchema,
  buildWebsiteSchema,
  createMetadata,
  siteConfig
} from "@/lib/seo";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "conference",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1
    }
  },
  ...createMetadata({
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    path: "/"
  })
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(manrope.variable, playfair.variable)}>
      <body className="min-h-screen bg-slate-50 font-sans text-slate-900">
        <StructuredData
          data={[buildOrganizationSchema(), buildWebsiteSchema()]}
        />
        <Navbar />
        <PageTransition>
          <main className="min-h-screen">
            <div className="container py-10">{children}</div>
          </main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
