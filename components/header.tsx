"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { GitHubIcon } from "./icons/github";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Docs", href: "https://github.com/github/github-mcp-server#readme" },
  { label: "Installation", href: "#installation" },
  { label: "Features", href: "#features" },
  { label: "Use Cases", href: "#use-cases" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <GitHubIcon className="h-8 w-8 text-foreground" />
              <span className="text-lg font-semibold text-foreground">
                GitHub MCP Server
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="https://github.com/github/github-mcp-server"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary/80 transition-colors"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </Link>
            <Link
              href="#installation"
              className="inline-flex items-center rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
            >
              Get Started
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "md:hidden border-t border-border bg-background",
          mobileMenuOpen ? "block" : "hidden"
        )}
      >
        <div className="px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <Link
              href="https://github.com/github/github-mcp-server"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary px-4 py-3 text-sm font-medium text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              <GitHubIcon className="h-4 w-4" />
              View on GitHub
            </Link>
            <Link
              href="#installation"
              className="inline-flex items-center justify-center rounded-lg bg-foreground px-4 py-3 text-sm font-medium text-background"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
