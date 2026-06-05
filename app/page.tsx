import Link from "next/link"
import { FIXES, fixHref, FOOTER_FIX_LINKS } from "@/lib/fixes"
import { Wifi, Monitor, Smartphone, Printer, KeyRound, Tv } from "lucide-react"

const categoryIcons = {
  wifi: Wifi,
  computer: Monitor,
  phone: Smartphone,
  printer: Printer,
  account: KeyRound,
  streaming: Tv,
}

export default function HomePage() {
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
              className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            >
              All Fixes
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="px-4 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-semibold tracking-tight md:text-5xl text-balance">
              Fix your tech in minutes
            </h1>
            <p className="mt-4 text-[var(--muted-foreground)] text-base md:text-lg max-w-xl mx-auto text-pretty">
              Step-by-step guides for everyday problems. No jargon, no phone trees, just solutions.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/fixes"
                className="inline-flex h-12 w-full sm:w-auto min-w-[160px] items-center justify-center rounded-[var(--radius)] bg-[var(--primary)] px-6 text-sm font-medium text-[var(--primary-foreground)] transition-colors hover:opacity-90"
              >
                Fix something now
              </Link>
            </div>
          </div>
        </section>

        {/* Fix Grid */}
        <section id="fixes" className="px-4 pb-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-xl font-semibold tracking-tight mb-6">
              Common fixes
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {FIXES.map((fix) => {
                const Icon = categoryIcons[fix.category]
                return (
                  <Link
                    key={fix.slug}
                    href={fixHref(fix.slug)}
                    className="group flex flex-col gap-3 rounded-xl border p-5 transition-colors hover:bg-[var(--secondary)]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--primary)]/10">
                        <Icon className="h-5 w-5 text-[var(--primary)]" />
                      </div>
                      <span className="text-xs font-medium text-[var(--primary)]">
                        {fix.duration}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-medium group-hover:text-[var(--foreground)]">
                        {fix.title}
                      </h3>
                      <p className="mt-1 text-sm text-[var(--muted-foreground)] line-clamp-2">
                        {fix.description}
                      </p>
                    </div>
                  </Link>
                )
              })}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/fixes"
                className="text-sm font-medium text-[var(--primary)] hover:underline"
              >
                See all fixes
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 px-4">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="font-semibold">FixNow</h3>
              <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                Quick fixes for everyday tech problems.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-medium">Popular Fixes</h4>
              <ul className="mt-3 space-y-2">
                {FOOTER_FIX_LINKS.map((link) => (
                  <li key={link.slug}>
                    <Link
                      href={fixHref(link.slug)}
                      className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium">Resources</h4>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link
                    href="/fixes"
                    className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                  >
                    All Fixes
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-[var(--muted-foreground)]">
            {new Date().getFullYear()} FixNow
          </div>
        </div>
      </footer>
    </div>
  )
}
