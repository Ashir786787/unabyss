import type { Metadata } from "next";
import { JetBrains_Mono, Lexend, Newsreader } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Shine from "@/components/ui/Shine";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = "https://unabyss.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Never Re-Explain Yourself to AI Again | Unabyss",
  description:
    "Shared memory for all your AI agents. Built from the tools you use - Gmail, Slack and more - then made portable across Claude, ChatGPT and every agent via MCP.",
  keywords:
    "AI context, universal context layer, cross-agent context, AI memory, MCP, Claude, ChatGPT, Cursor, context management, Unabyss",
  publisher: "Unabyss",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      {
        url: "/favicon-on-dark.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/favicon-on-light.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: light)",
      },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    title: "Unabyss",
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/`,
    title: "Never Re-Explain Yourself to AI Again | Unabyss",
    description:
      "Shared memory for all your AI agents. Built from the tools you use - Gmail, Slack and more - then made portable across Claude, ChatGPT and every agent via MCP.",
    images: [{ url: "/og-image.png" }],
    siteName: "Unabyss",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@unabyssapp",
    title: "Never Re-Explain Yourself to AI Again | Unabyss",
    description:
      "Shared memory for all your AI agents. Built from the tools you use - Gmail, Slack and more - then made portable across Claude, ChatGPT and every agent via MCP.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexend.variable} ${jetbrainsMono.variable} ${newsreader.variable} v2-app-shell-bg bg-[var(--background)] text-[var(--foreground)]`}
      >
        <Header />
        <main className="min-h-screen overflow-hidden bg-[#0c0c0c]">
          {children}
        </main>
        <Footer />
        <Shine />
      </body>
    </html>
  );
}
