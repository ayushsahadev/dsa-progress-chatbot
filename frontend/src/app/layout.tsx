import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import './globals.css';
import { SnackbarProviderWrapper } from '@/components/SnackbarProviderWrapper'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dsa-progress-chatbot.vercel.app"),
  applicationName: "dBot by Ayush Saha",
  title: "dBot — DSA Interview Coach by Ayush Saha",
  description:
    "dBot by Ayush Saha is an AI-powered DSA interview coach with SDE-1, SDE-2, and SDE-3 coaching modes and a FAISS retrieval pipeline.",
  authors: [{ name: "Ayush Saha", url: "https://ayush-saha-portfolio.vercel.app/" }],
  creator: "Ayush Saha",
  publisher: "Ayush Saha",
  keywords: [
    "Ayush Saha",
    "DSA interview coach",
    "AI interview preparation",
    "FAISS",
    "RAG",
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "dBot — DSA Interview Coach by Ayush Saha",
    description:
      "Explore dBot by Ayush Saha: role-specific AI coaching and retrieval grounded in DSA knowledge.",
    url: "https://dsa-progress-chatbot.vercel.app/",
    siteName: "dBot by Ayush Saha",
    images: [
      {
        url: "/dsa-chat-preview.png",
        width: 1400,
        height: 900,
        alt: "dBot DSA interview coach chat interface",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "dBot — DSA Interview Coach by Ayush Saha",
    description:
      "Practice DSA interviews with role-specific AI coaching and a knowledge-grounded retrieval pipeline.",
    images: ["/dsa-chat-preview.png"],
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
        <SnackbarProviderWrapper>
          {children}
        </SnackbarProviderWrapper>
      </body>
    </html>
  );
}
