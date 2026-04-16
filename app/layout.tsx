import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SpinCulture",
  description: "Electrospun fibrous platforms for advanced cell culture and bioengineering research.",
  icons: {
    icon: [
      { url: "/favicon-spinculture.png", type: "image/png" },
      { url: "/LOGO%20SOL.png", type: "image/png" },
    ],
    shortcut: "/favicon-spinculture.png",
    apple: "/favicon-spinculture.png",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
