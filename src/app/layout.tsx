import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { DualityProvider } from "@/components/duality";
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
  title: "Dídac Soler — Design Engineer",
  description: "Design Engineer — 20+ años diseñando, ahora también construyendo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-mode="official" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DualityProvider>
          {children}
        </DualityProvider>
      </body>
    </html>
  );
}
