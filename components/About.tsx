import { profile, skills } from "@/lib/content";
import Section, { Tag } from "./Section";

export default function About() {
  return (
    <Section id="about" title="About">
      <p className="text-[17px] leading-relaxed">{profile.about}</p>
      <div className="mt-6 flex flex-wrap gap-1.5">
        {skills.map((s) => (
          <Tag key={s}>{s}</Tag>
        ))}
      </div>
    </Section>
  );
}
