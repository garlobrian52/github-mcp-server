import Link from "next/link";
import { GitHubIcon } from "./icons/github";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <GitHubIcon className="h-6 w-6 text-foreground" />
            <span className="text-sm font-medium text-foreground">
              GitHub MCP Server
            </span>
          </div>
          
          <nav className="flex items-center gap-6 flex-wrap justify-center">
            <Link
              href="https://github.com/github/github-mcp-server"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="https://github.com/github/github-mcp-server#readme"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Documentation
            </Link>
            <Link
              href="https://github.com/github/github-mcp-server/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Issues
            </Link>
            <Link
              href="https://github.com/github/github-mcp-server/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              License
            </Link>
          </nav>
          
          <p className="text-sm text-muted-foreground">
            MIT License
          </p>
        </div>
      </div>
    </footer>
  );
}
