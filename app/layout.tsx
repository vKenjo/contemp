import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AuthentiKa - Verify Your Photos Safely",
  description: "AuthentiKa helps elderly communities verify and protect their photos. Simple, safe, and easy to use.",
  keywords: ["photo verification", "elderly", "seniors", "photo protection", "community engagement", "safe photos"],
  authors: [{ name: "AuthentiKa Team" }],
  openGraph: {
    title: "AuthentiKa - Verify Your Photos Safely",
    description: "AuthentiKa helps elderly communities verify and protect their photos.",
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
        className={`${poppins.variable} antialiased`}
      >
        <ScrollToTop />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
