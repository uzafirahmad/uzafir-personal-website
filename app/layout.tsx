import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://uzafir.com"),
  title: {
    default: "Uzafir A. Rafaq | Mathematician and Computer Scientist",
    template: "%s | Uzafir A. Rafaq",
  },
  description:
    "Uzafir A. Rafaq is a mathematician, computer scientist, and software engineer researching physics-informed machine learning and human-computer interaction.",
  applicationName: "Uzafir A. Rafaq",
  authors: [{ name: "Uzafir A. Rafaq", url: "https://uzafir.com" }],
  creator: "Uzafir A. Rafaq",
  publisher: "Uzafir A. Rafaq",
  keywords: [
    "Uzafir A. Rafaq",
    "mathematician",
    "computer scientist",
    "physics-informed machine learning",
    "human-computer interaction",
    "statistical mechanics",
    "high-performance computing",
    "software engineer",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Uzafir A. Rafaq | Mathematician and Computer Scientist",
    description: "Research in physics-informed machine learning, statistical mechanics, and human-computer interaction.",
    type: "website",
    url: "/",
    siteName: "Uzafir A. Rafaq",
    locale: "en_US",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Uzafir A. Rafaq — Mathematician and Computer Scientist" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Uzafir A. Rafaq | Mathematician and Computer Scientist",
    description: "Research in physics-informed machine learning, statistical mechanics, and human-computer interaction.",
    images: [{ url: "/og.png", alt: "Uzafir A. Rafaq — Mathematician and Computer Scientist" }],
  },
  category: "technology",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
