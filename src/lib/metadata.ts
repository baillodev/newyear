import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Happy New Year 2026 🎉",
  description: "Célébrez la nouvelle année avec notre site interactive!",
  keywords: ["New Year", "2026", "celebration"],
  authors: [{ name: "Mamadou Baillo Diallo", url: "https://baillo.dev" }],
  creator: "Mamadou Baillo Diallo",
  publisher: "NewYear App",
  metadataBase: new URL("https://newyear-xyz.vercel.app"),
  openGraph: {
    title: "Happy New Year 2026",
    description: "Célébrez la nouvelle année avec notre site interactive!",
    url: "https://newyear-xyz.vercel.app",
    siteName: "New Year",
    images: [
      {
        url: "/images/2026.png",
        width: 1200,
        height: 630,
        alt: "New Year Celebration",
      },
    ],
    locale: "en_EN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Happy New Year 2026 🎉",
    description: "Célébrez la nouvelle année avec notre site interactive!",
    images: ["/images/2026.png"],
  },
};
