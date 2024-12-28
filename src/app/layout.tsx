import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";
import ErrorBoundary from "@/components/ErrorBoundary";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DataBots.in - LLM as a Service",
  description:
    "Transform your data with custom LLM solutions. Secure, scalable, and easy to integrate.",
  keywords: "LLM, AI, machine learning, data processing, API",
  authors: [{ name: "DataBots Team" }],
  openGraph: {
    title: "DataBots.in - LLM as a Service",
    description: "Transform your data with custom LLM solutions",
    url: "https://databots.in",
    siteName: "DataBots",
    images: [
      {
        url: "https://databots.in/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DataBots.in - LLM as a Service",
    description: "Transform your data with custom LLM solutions",
    images: ["https://databots.in/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ErrorBoundary>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster position="bottom-right" />
        </ErrorBoundary>
      </body>
    </html>
  );
}
