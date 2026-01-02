import type { Metadata } from "next";
import "./globals.css";
import { oswwald } from "@/lib/fonts";
import { metadata } from "@/lib/metadata";

export const metadataData = metadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oswwald.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
