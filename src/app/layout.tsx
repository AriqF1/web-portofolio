import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ariq Farhan | Software Engineer",
  description:
    "Portfolio of Ariq Farhan, a Full-stack Web Developer and Software Engineer specializing in Laravel, React, and robust backend systems.",
  keywords: [
    "Ariq Farhan",
    "Software Engineer",
    "Web Developer",
    "Laravel Developer",
    "React Developer",
    "Semarang",
  ],
  openGraph: {
    title: "Ariq Farhan | Software Engineer",
    description:
      "Portfolio of Ariq Farhan, a Full-stack Web Developer and Software Engineer specializing in Laravel, React, and robust backend systems.",
    url: "https://farhanariq.my.id",
    siteName: "Ariq Farhan Portfolio",
    images: [
      {
        url: "https://farhanariq.my.id/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ariq Farhan Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ariq Farhan | Software Engineer",
    description:
      "Full-stack Web Developer and Software Engineer specializing in Laravel and React.",
    images: ["https://farhanariq.my.id/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ariq Farhan Althaf",
    url: "https://farhanariq.my.id",
    sameAs: [
      "https://www.linkedin.com/in/ariqfarhan-dev/",
      "https://github.com/AriqF1",
      "https://instagram.com/farhanariq_", // Menambahkan Instagram sesuai link di Footer Anda
    ],
    jobTitle: "Software Engineer",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universitas Dian Nuswantoro",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Semarang",
      addressCountry: "ID",
    },
  };

  return (
    // suppressHydrationWarning ditambahkan untuk mencegah error dari ThemeProvider (Dark Mode)
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50`}
      >
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />

        {children}
      </body>
    </html>
  );
}
