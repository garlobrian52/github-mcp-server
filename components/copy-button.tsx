"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CopyButtonProps {
  text: string;
  className?: string;
}

export function CopyButton({ text, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={cn(
        "inline-flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm font-mono text-muted-foreground hover:bg-card/80 transition-colors",
        className
      )}
    >
      <span className="text-accent">$</span>
      <span className="truncate max-w-[260px] sm:max-w-none">{text}</span>
      {copied ? (
        <Check className="h-4 w-4 text-accent shrink-0" />
      ) : (
        <Copy className="h-4 w-4 shrink-0" />
      )}
    </button>
  );
}
