import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Overbase",
  description: "Overbase portal",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="text-ink antialiased">
        <ScrollIndicator />
        {children}
      </body>
    </html>
  );
}
