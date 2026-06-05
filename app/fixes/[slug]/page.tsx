import Link from "next/link"
import { notFound } from "next/navigation"
import { FIXES, getFixBySlug } from "@/lib/fixes"
import { ArrowLeft, CheckCircle2 } from "lucide-react"

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return FIXES.map((f) => ({ slug: f.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const fix = getFixBySlug(slug)
  if (!fix) return { title: "Fix not found — FixNow" }
  return {
    title: `${fix.title} — FixNow`,
    description: fix.description,
  }
}

export default async function FixGuidePage({ params }: Props) {
  const { slug } = await params
  const fix = getFixBySlug(slug)
  if (!fix) notFound()

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

      <main className="flex-1 px-4 py-12">
        <div className="mx-auto max-w-2xl">
          <Link
            href="/fixes"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            All fixes
          </Link>

          <div className="mt-6">
            <span className="text-xs font-medium text-[var(--primary)]">
              {fix.duration}
            </span>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
              {fix.title}
            </h1>
            <p className="mt-3 text-[var(--muted-foreground)]">
              {fix.description}
            </p>
          </div>

          <ol className="mt-10 space-y-4">
            {fix.steps.map((step, i) => (
              <li
                key={i}
                className="flex gap-4 rounded-xl border p-5"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-xs font-semibold text-[var(--primary-foreground)]">
                  {i + 1}
                </div>
                <p className="text-sm leading-relaxed pt-0.5">{step}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10 rounded-xl border border-[var(--primary)]/20 bg-[var(--primary)]/5 p-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-[var(--primary)] shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">{"That's it!"}</p>
                <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                  If you followed these steps, your issue should be resolved. Still stuck?{" "}
                  <Link href="/fixes" className="text-[var(--primary)] hover:underline">
                    Try another fix
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
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
