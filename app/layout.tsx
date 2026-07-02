import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ZoikoLogiaHeader } from "./component/Zoikologiaheader";
import { ZoikoLogiaFooter } from "./component/Zoikologiafooter";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZoikoLogia — Accounting intelligence, governed by design",
  description:
    "Source-backed accounting intelligence powered by Kriton™. Governed, auditable, and built for professional accounting workflows.",
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
      <body className="min-h-full flex flex-col">
        <ZoikoLogiaHeader />
        <main className="flex-1">{children}</main>
        <ZoikoLogiaFooter />
      </body>
    </html>
  );
}