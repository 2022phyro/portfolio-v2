import type { Metadata } from "next";
import { Geist, Geist_Mono, Mulish, Montserrat_Alternates } from "next/font/google";
import "./globals.css";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});
const montserratAlternates = Montserrat_Alternates({
  variable: "--font-ms",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Afam Ugwuanyi | Fullstack Developer – Phyro Kelstein",
  description:
    "Afam Ugwuanyi is a fullstack software engineer passionate about building modern, scalable web applications. Also known as Phyro or Phyro Kelstein.",
  keywords: [
    "Afam Ugwuanyi",
    "Phyro",
    "Phyro Kelstein",
    "Fullstack Developer",
    "Software Engineer",
    "Web Developer",
    "Next.js",
    "React",
    "Portfolio",
  ],
  authors: [{ name: "Afam Ugwuanyi" }],
  creator: "Afam Ugwuanyi",
  metadataBase: new URL("https://phyro.vercel.app"),
  openGraph: {
    title: "Afam Ugwuanyi | Software Engineer – Phyro Kelstein",
    description:
      "Portfolio of Afam Ugwuanyi, also known as Phyro Kelstein – fullstack developer crafting exceptional digital experiences.",
    url: "https://phyro.vercel.app",
    siteName: "Afam Ugwuanyi",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Afam Ugwuanyi Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Afam Ugwuanyi | Fullstack Developer – Phyro Kelstein",
    description:
      "Explore the work and projects of Afam Ugwuanyi (a.k.a. Phyro Kelstein), a fullstack software engineer.",
    images: ["/logo.png"],
    creator: "@phyrokelstein", // Optional: Replace or remove
  },
  icons: {
    icon: "/logo.ico",
    shortcut: "/logo.ico",
    apple: "/logo.png",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
