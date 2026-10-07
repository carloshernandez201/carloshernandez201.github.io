import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import { profile } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-4 sm:px-6">
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>
      <footer className="mx-auto max-w-3xl px-4 py-10 font-mono text-xs text-muted sm:px-6">
        © {new Date().getFullYear()} {profile.name} · Built with Next.js
      </footer>
    </>
  );
}
