import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Installation } from "@/components/installation";
import { UseCases } from "@/components/use-cases";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Installation />
        <UseCases />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
