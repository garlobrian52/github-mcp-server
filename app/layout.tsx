import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "FixNow — Quick fixes for everyday tech problems",
  description:
    "Step-by-step guides to fix Wi-Fi, slow computers, phone issues, printers, and more. No jargon, just solutions.",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-[var(--background)]">
      <body className="antialiased">{children}</body>
    </html>
  )
}
