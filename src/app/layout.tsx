import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import UserSync from "@/components/userSync";
import TanStackProvider from "@/components/Providers/TanStackProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Dentclinic - Your Online Dental Clinic",
    template: "%s | Dentclinic",
  },
  description:
    "A modern dental online clinic available 24/7. Get instant AI guidance and book appointments with top-rated dentists.",
  keywords: [
    "dentist",
    "dental clinic",
    "online dentist",
    "AI dental care",
    "emergency dentist",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dentclinic.com",
    title: "Dentclinic - Your Online Dental Clinic",
    description:
      "A modern dental online clinic available 24/7. Get instant AI guidance and book appointments with top-rated dentists.",
    siteName: "Dentclinic",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dentclinic - Your Online Dental Clinic",
    description:
      "A modern dental online clinic available 24/7. Get instant AI guidance and book appointments with top-rated dentists.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Dentclinic",
  image: "https://dentclinic.com/logo.png",
  description: "A modern dental online clinic available 24/7.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Dental St",
    addressLocality: "New York",
    addressRegion: "NY",
    postalCode: "10001",
    addressCountry: "US",
  },
  telephone: "+15551234567",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  url: "https://dentclinic.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TanStackProvider>
      <ClerkProvider>
        <html lang="en">
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
          >
            <UserSync />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {children}
          </body>
        </html>
      </ClerkProvider>
    </TanStackProvider>
  );
}
