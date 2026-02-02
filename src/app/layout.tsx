import type { Metadata } from "next";
import { Playfair_Display, Jost } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Asana Resort | Luxury Wellness Retreat in Vietnam",
  description: "Experience ultimate tranquility at Asana Resort, a premium wellness retreat nestled in the lush green hills of Vietnam. Discover luxurious accommodations, world-class spa treatments, and unforgettable dining experiences.",
  keywords: ["luxury resort", "wellness retreat", "Vietnam hotel", "spa resort", "boutique hotel", "Asana Resort"],
  authors: [{ name: "Asana Resort" }],
  openGraph: {
    title: "Asana Resort | Luxury Wellness Retreat in Vietnam",
    description: "Experience ultimate tranquility at Asana Resort, a premium wellness retreat nestled in the lush green hills of Vietnam.",
    type: "website",
    locale: "en_US",
    siteName: "Asana Resort",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asana Resort | Luxury Wellness Retreat",
    description: "Experience ultimate tranquility at Asana Resort",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#1E3A2F" />
      </head>
      <body
        className={`${playfair.variable} ${jost.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
