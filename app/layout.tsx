import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Sk Badsha Nishan | Full-Stack Developer",
  description:
    "Full-stack developer passionate about building exceptional digital experiences. Specializing in React, Next.js, Node.js, and modern web technologies.",
  generator: "v0.app",
  keywords: [
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Web Developer",
    "Software Engineer",
  ],
  authors: [{ name: "Sk Badsha Nishan" }],
  icons: {
    icon: [
      {
        url: "/logo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/logo.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/logo.png",
  },
  openGraph: {
    title: "Sk Badsha Nishan | Full-Stack Developer",
    description:
      "Full-stack developer passionate about building exceptional digital experiences.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
