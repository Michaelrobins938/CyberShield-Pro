import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CyberShield Pro - Enterprise Cybersecurity",
  description: "Professional cybersecurity SaaS platform with AI-powered threat detection and enterprise-grade security features.",
  keywords: ["cybersecurity", "security", "AI", "threat detection", "enterprise", "SOC 2", "compliance"],
  authors: [{ name: "CyberShield Pro Team" }],
  openGraph: {
    title: "CyberShield Pro - Enterprise Cybersecurity",
    description: "Professional cybersecurity SaaS platform with AI-powered threat detection.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
