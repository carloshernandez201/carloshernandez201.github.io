export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="reveal border-t border-border py-16 sm:py-20">
      <h2 className="mb-8 font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted">
        {title}
      </h2>
      {children}
    </section>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-muted">
      {children}
    </span>
  );
}
