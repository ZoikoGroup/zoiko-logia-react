import type { Metadata } from "next";
import { geistSans, geistMono, playfair } from "./fonts/fonts";
import "./globals.css";
import { ZoikoLogiaHeader } from "./component/Zoikologiaheader";
import { ZoikoLogiaFooter } from "./component/Zoikologiafooter";

export const metadata: Metadata = {
  title: "ZoikoLogia — Accounting intelligence, governed by design",
  description:
    "Source-backed accounting intelligence powered by Kriton™. Governed, auditable, and built for professional accounting workflows.",
icons: {
  icon: "/favicon.png",
  shortcut: "/favicon.png",
  apple: "/favicon.png",
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
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <ZoikoLogiaHeader />
        <main className="flex-1">{children}</main>
        <ZoikoLogiaFooter />
      </body>
    </html>
  );
}