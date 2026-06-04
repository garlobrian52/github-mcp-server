import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GitHubIcon } from "./icons/github";

export function CTA() {
  return (
    <section className="py-20 md:py-32 bg-card/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl border border-border bg-card p-8 md:p-12 lg:p-16 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
          
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Ready to supercharge your AI workflow?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto text-pretty">
              Get started with GitHub MCP Server today and unlock the full potential of AI-powered development.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#installation"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-foreground px-6 py-3 text-base font-medium text-background hover:bg-foreground/90 transition-colors"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="https://github.com/github/github-mcp-server"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-base font-medium text-foreground hover:bg-secondary transition-colors"
              >
                <GitHubIcon className="h-4 w-4" />
                Star on GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
