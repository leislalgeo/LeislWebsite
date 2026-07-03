import type { Metadata } from "next";
import { Schibsted_Grotesk, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const siteUrl = "https://www.leislalgeo.com";
const ogDescription =
  "I work with founders and leaders building something new — organisations that need someone who can hold the vision and build the thing at the same time.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Leisl Algeo — Builder. Founder. Operator.",
  description:
    "Leisl Algeo works with founders and leaders building something new — organisations that need someone who can hold the vision and build the thing at the same time.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Leisl Algeo | Builder. Founder. Operator.",
    description: ogDescription,
    url: siteUrl,
    siteName: "Leisl Algeo",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Leisl Algeo — Builder. Founder. Operator.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leisl Algeo | Builder. Founder. Operator.",
    description: ogDescription,
    images: [`${siteUrl}/og-image.png`],
  },
  verification: {
    google: "PASTE YOUR CODE HERE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${schibstedGrotesk.variable} ${hankenGrotesk.variable}`}
    >
      <body className="bg-warm-white text-ink antialiased">{children}</body>
    </html>
  );
}
