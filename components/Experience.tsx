import { experience } from "@/lib/content";
import Section, { Tag } from "./Section";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-10">
        {experience.map((job) => (
          <li key={`${job.company}-${job.dates}`} className="grid gap-2 sm:grid-cols-[5rem_1fr] sm:gap-8">
            <p className="pt-0.5 font-mono text-xs text-muted">{job.dates}</p>
            <div>
              <h3 className="font-medium">
                {job.title} <span className="text-accent">· {job.company}</span>
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{job.summary}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {job.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
