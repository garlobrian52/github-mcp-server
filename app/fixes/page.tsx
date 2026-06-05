import Link from "next/link"
import { FIXES, fixHref } from "@/lib/fixes"
import { Wifi, Monitor, Smartphone, Printer, KeyRound, Tv } from "lucide-react"

const categoryIcons = {
  wifi: Wifi,
  computer: Monitor,
  phone: Smartphone,
  printer: Printer,
  account: KeyRound,
  streaming: Tv,
}

export const metadata = {
  title: "All fixes — FixNow",
  description: "Browse step-by-step guides for everyday tech problems.",
}

export default function FixesIndexPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 border-b bg-[var(--background)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--background)]/80">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            FixNow
          </Link>
          <nav className="flex items-center gap-4">
            <Link
              href="/fixes"
              className="text-sm font-medium text-[var(--foreground)]"
            >
              All Fixes
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
            All fixes
          </h1>
          <p className="mt-2 text-[var(--muted-foreground)]">
            Pick a problem and follow clear steps written for normal humans.
          </p>
          <ul className="mt-8 flex flex-col gap-3">
            {FIXES.map((fix) => {
              const Icon = categoryIcons[fix.category]
              return (
                <li key={fix.slug}>
                  <Link
                    href={fixHref(fix.slug)}
                    className="group flex items-start gap-4 rounded-xl border p-5 transition-colors hover:bg-[var(--secondary)]"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--primary)]/10">
                      <Icon className="h-5 w-5 text-[var(--primary)]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-medium group-hover:text-[var(--foreground)]">
                          {fix.title}
                        </span>
                        <span className="text-xs font-medium text-[var(--primary)]">
                          {fix.duration}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                        {fix.description}
                      </p>
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </main>

      <footer className="border-t py-8 px-4 text-center text-sm text-[var(--muted-foreground)]">
        <Link href="/" className="hover:text-[var(--foreground)] transition-colors">
          FixNow
        </Link>
        {" · "}
        {new Date().getFullYear()}
      </footer>
    </div>
  )
}
