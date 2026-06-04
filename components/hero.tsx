import Link from "next/link";
import { ArrowRight, Copy, Check } from "lucide-react";
import { CopyButton } from "./copy-button";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm text-accent mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Open Source MCP Server
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground text-balance">
            Connect AI to GitHub
          </h1>
          
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground text-pretty leading-relaxed">
            The GitHub MCP Server gives AI assistants like Claude, Cursor, and Copilot the ability to read repositories, manage issues and PRs, analyze code, and automate workflows.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#installation"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-foreground px-6 py-3 text-base font-medium text-background hover:bg-foreground/90 transition-colors"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
            
            <CopyButton
              text="docker run -i ghcr.io/github/github-mcp-server"
              className="w-full sm:w-auto"
            />
          </div>
          
          <div className="mt-16 flex items-center justify-center gap-8 flex-wrap">
            <p className="text-sm text-muted-foreground">Works with</p>
            <div className="flex items-center gap-6 flex-wrap justify-center">
              {["VS Code", "Claude", "Cursor", "Copilot", "Windsurf"].map((tool) => (
                <span key={tool} className="text-sm font-medium text-foreground/70">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
