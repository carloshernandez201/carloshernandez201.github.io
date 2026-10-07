import { profile } from "@/lib/content";
import { GitHubIcon } from "./Icons";

export default function Hero() {
  return (
    <section id="top" className="reveal pb-16 pt-20 sm:pb-24 sm:pt-28">
      <p className="mb-4 font-mono text-sm text-accent">{profile.role}</p>
      <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">{profile.name}</h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{profile.tagline}</p>
      <a
        href={profile.links.github}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-85"
      >
        <GitHubIcon /> GitHub
      </a>
    </section>
  );
}
