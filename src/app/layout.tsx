import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Melovia — Beyond the beat. Into the soul.",
  description:
    "Melovia is a beautifully crafted, ad-free Android music app. Enjoy millions of songs in all Indian languages with a clean, intuitive interface. Download free on GitHub.",
  keywords: [
    "Melovia",
    "Music App",
    "Android Music",
    "Free Music App",
    "Ad-Free Music",
    "Indian Music App",
    "Listen Together",
    "Melovia Soulmate",
    "Music Streaming Android",
    "Open Source Music App",
  ],
  authors: [{ name: "Melovia", url: "https://github.com/selvaofficial1026-design/Melovia" }],
  creator: "Melovia",
  metadataBase: new URL("https://melovia.vercel.app"),
  openGraph: {
    title: "Melovia — Beyond the beat. Into the soul.",
    description:
      "A beautifully crafted, ad-free Android music app. Millions of songs. All Indian languages. Download free.",
    url: "https://melovia.vercel.app",
    siteName: "Melovia",
    images: [
      {
        url: "/mockup-hero.jpeg",
        width: 1200,
        height: 630,
        alt: "Melovia App Interface",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Melovia — Beyond the beat. Into the soul.",
    description:
      "A beautifully crafted, ad-free Android music app. Millions of songs in all Indian languages.",
    images: ["/mockup-hero.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/logo-placeholder.png",
    apple: "/logo-placeholder.png",
  },
  manifest: undefined,
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} style={{ colorScheme: 'light' }}>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
