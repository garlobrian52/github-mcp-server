"use client";

import { useState } from "react";
import { Copy, Check, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const installOptions = [
  {
    id: "vscode",
    label: "VS Code",
    description: "One-click install for VS Code 1.101+",
    installUrl:
      "https://insiders.vscode.dev/redirect/mcp/install?name=github&config=%7B%22type%22%3A%20%22http%22%2C%22url%22%3A%20%22https%3A%2F%2Fapi.githubcopilot.com%2Fmcp%2F%22%7D",
    code: `{
  "servers": {
    "github": {
      "type": "http",
      "url": "https://api.githubcopilot.com/mcp/"
    }
  }
}`,
  },
  {
    id: "docker",
    label: "Docker",
    description: "Run locally with Docker",
    code: `docker run -i --rm \\
  -e GITHUB_PERSONAL_ACCESS_TOKEN=<your-token> \\
  ghcr.io/github/github-mcp-server`,
  },
  {
    id: "claude",
    label: "Claude",
    description: "Configuration for Claude Desktop",
    code: `{
  "mcpServers": {
    "github": {
      "command": "docker",
      "args": [
        "run", "-i", "--rm",
        "-e", "GITHUB_PERSONAL_ACCESS_TOKEN",
        "ghcr.io/github/github-mcp-server"
      ],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "<YOUR_TOKEN>"
      }
    }
  }
}`,
  },
];

export function Installation() {
  const [activeTab, setActiveTab] = useState("vscode");
  const [copied, setCopied] = useState(false);

  const activeOption = installOptions.find((opt) => opt.id === activeTab);

  const handleCopy = async () => {
    if (activeOption?.code) {
      await navigator.clipboard.writeText(activeOption.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="installation" className="py-20 md:py-32 bg-card/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Get started in minutes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Choose your preferred installation method and start using GitHub MCP Server with your AI tools.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-6 p-1 bg-secondary rounded-lg">
            {installOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setActiveTab(option.id)}
                className={cn(
                  "flex-1 min-w-[100px] px-4 py-2.5 text-sm font-medium rounded-md transition-colors",
                  activeTab === option.id
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {option.label}
              </button>
            ))}
          </div>

          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-border">
              <div>
                <p className="text-sm font-medium text-foreground">
                  {activeOption?.label}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {activeOption?.description}
                </p>
              </div>
              <div className="flex items-center gap-2">
                {activeOption?.installUrl && (
                  <a
                    href={activeOption.installUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    Install
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="h-3 w-3" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" />
                      Copy
                    </>
                  )}
                </button>
              </div>
            </div>
            <pre className="p-4 overflow-x-auto text-sm">
              <code className="text-muted-foreground">{activeOption?.code}</code>
            </pre>
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Need help?{" "}
            <a
              href="https://github.com/github/github-mcp-server#readme"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              View the full documentation
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
