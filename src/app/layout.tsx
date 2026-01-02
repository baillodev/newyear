import type { Metadata } from "next";
import "./globals.css";
import { oswwald } from "@/lib/fonts";
import { metadata as siteMetadata } from "@/lib/metadata";

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${oswwald.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
