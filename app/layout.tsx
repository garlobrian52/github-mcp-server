import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "GitHub MCP Server - Connect AI to GitHub",
  description:
    "The GitHub MCP Server connects AI tools directly to GitHub. Give your AI assistants the ability to read repositories, manage issues, analyze code, and automate workflows.",
  openGraph: {
    title: "GitHub MCP Server - Connect AI to GitHub",
    description:
      "Connect AI assistants like Claude, Cursor, and Copilot directly to GitHub repositories, issues, PRs, and workflows.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GitHub MCP Server",
    description:
      "Connect AI tools directly to GitHub. Read repos, manage issues, analyze code, automate workflows.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
