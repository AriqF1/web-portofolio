import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
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
  title: "Ariq Farhan Althaf | Portfolio",
  description:
    "Portofolio web development dan software engineering by Ariq Farhan Althaf.",
  openGraph: {
    title: "Ariq Farhan Althaf | Portfolio",
    description:
      "Portofolio web development dan software engineering by Ariq Farhan Althaf.",
    url: "https://farhanariq.my.id",
    images: [
      {
        url: "https://farhanariq.my.id/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ariq Farhan Althaf Portfolio",
      },
    ],
    type: "website",
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
    ],
    jobTitle: "Web Developer, Backend Developer, Software Engineer",
    studentOf: "Universitas Dian Nuswantoro",
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />

        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
