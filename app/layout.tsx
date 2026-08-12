import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://uzafir.com"),
  title: "Uzafir A. Rafaq | Mathematician and Computer Scientist",
  description:
    "Research, projects, publications, and experience of Uzafir A. Rafaq.",
  openGraph: {
    title: "Uzafir A. Rafaq",
    description: "Mathematician and Computer Scientist",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Uzafir A. Rafaq",
    description: "Mathematician and Computer Scientist",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
