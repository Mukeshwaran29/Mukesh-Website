import { education } from '@/data/profile';

export function Education() {
  return (
    <section id="education" className="section-container section-spacing border-t border-geist-border">
      <p className="text-[12px] font-medium tracking-wide uppercase text-geist-fg-tertiary mb-10">
        {education.title}
      </p>
      <div className="max-w-[720px] space-y-4">
        {education.items.map((item, i) => (
          <div key={i} className="geist-card flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <h3 className="text-[15px] font-semibold text-geist-fg">{item.degree}</h3>
              <p className="text-[14px] text-geist-fg-secondary mt-0.5">{item.school}</p>
            </div>
            <div className="flex items-center gap-3 text-[13px] text-geist-fg-tertiary">
              <span>{item.year}</span>
              <span className="w-[1px] h-3 bg-geist-border" />
              <span>{item.grade}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
