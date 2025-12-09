import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WiseGuard AI - Responsible AI for Seniors",
  description: "Empowering elderly communities to use AI safely and protect their digital memories. Learn about responsible AI use and photo data privacy.",
  keywords: ["AI safety", "elderly", "seniors", "data privacy", "photo protection", "responsible AI"],
  authors: [{ name: "WiseGuard AI Team" }],
  openGraph: {
    title: "WiseGuard AI - Responsible AI for Seniors",
    description: "Empowering elderly communities to use AI safely and protect their digital memories.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
