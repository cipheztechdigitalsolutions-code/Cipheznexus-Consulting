import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://cipheznexus.com";
const DESCRIPTION =
  "We design, build and ship AI systems for businesses that need results, not experiments. AI agents, workflow automation and product development.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "CiphezNexus Consulting — AI That Actually Moves Your Numbers",
    template: "%s · CiphezNexus Consulting",
  },
  description: DESCRIPTION,
  keywords: [
    "AI consulting",
    "AI agents",
    "workflow automation",
    "AI development",
    "RAG",
    "CiphezNexus",
  ],
  authors: [{ name: "CiphezNexus" }],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "CiphezNexus Consulting",
    title: "CiphezNexus Consulting — AI That Actually Moves Your Numbers",
    description: DESCRIPTION,
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "CiphezNexus Consulting" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CiphezNexus Consulting — AI That Actually Moves Your Numbers",
    description: DESCRIPTION,
    images: ["/og.svg"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#080A11",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${archivo.variable} ${mono.variable}`}>
      <body className="font-sans bg-ink text-cloud antialiased">{children}</body>
    </html>
  );
}
