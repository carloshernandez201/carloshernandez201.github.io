"use client";

import { useState } from "react";
import { projects, type Project, type ProjectTag } from "@/lib/content";
import { ArrowIcon, GitHubIcon } from "./Icons";
import Section, { Tag } from "./Section";

const filters: ("All" | ProjectTag)[] = ["All", "ML", "Systems", "Full-stack", "Finance", "Contribution"];

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex items-center gap-3 text-sm">
      <a
        href={project.repo}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.name} on GitHub`}
        className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-accent"
      >
        <GitHubIcon className="h-4 w-4" /> Code
      </a>
      {project.link && (
        <a
          href={project.link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-muted transition-colors hover:text-accent"
        >
          {project.link.label} <ArrowIcon />
        </a>
      )}
    </div>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  return (
    <article className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/50 sm:p-7">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="text-lg font-semibold tracking-tight">{project.name}</h3>
        <ProjectLinks project={project} />
      </div>
      <p className="mt-3 leading-relaxed text-muted">{project.summary}</p>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <Tag key={s}>{s}</Tag>
        ))}
      </div>
    </article>
  );
}

function SmallCard({ project }: { project: Project }) {
  return (
    <a
      href={project.repo}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/50"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-medium tracking-tight">{project.name}</h3>
        <ArrowIcon className="mt-1 h-3.5 w-3.5 shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
      </div>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>
      <p className="mt-4 font-mono text-[11px] text-muted">{project.stack.join(" · ")}</p>
    </a>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const visible = filter === "All" ? rest : rest.filter((p) => p.tags.includes(filter));

  return (
    <Section id="projects" title="Projects">
      <div className="space-y-5">
        {featured.map((p) => (
          <FeaturedCard key={p.repo} project={p} />
        ))}
      </div>

      <div className="mt-16 flex flex-wrap items-center justify-between gap-4">
        <h3 className="text-lg font-semibold tracking-tight">More projects</h3>
        <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filter projects">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`rounded-full px-3 py-1 text-xs transition-colors ${
                filter === f ? "bg-fg text-bg" : "border border-border text-muted hover:text-fg"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {visible.map((p) => (
          <SmallCard key={p.repo} project={p} />
        ))}
        {visible.length === 0 && (
          <p className="text-sm text-muted">Nothing here yet.</p>
        )}
      </div>
    </Section>
  );
}
