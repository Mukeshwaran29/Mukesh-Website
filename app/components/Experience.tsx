import { experience } from '@/data/profile';

export function Experience() {
  return (
    <section id="experience" className="section-container section-spacing border-t border-geist-border">
      <p className="text-[12px] font-medium tracking-wide uppercase text-geist-fg-tertiary mb-10">
        {experience.title}
      </p>
      <div className="max-w-[720px] space-y-12">
        {experience.roles.map((role, i) => (
          <div key={i} className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-[1px] before:h-[calc(100%-8px)] before:bg-geist-border">
            <div className="absolute left-[-3.5px] top-1.5 w-[7px] h-[7px] rounded-full bg-geist-fg" />
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
              <h3 className="heading-3 text-geist-fg">{role.title}</h3>
              <span className="text-[13px] text-geist-fg-tertiary whitespace-nowrap">{role.period}</span>
            </div>
            <p className="text-[14px] text-geist-fg-secondary font-medium mb-3">
              {role.company}
              {role.location && <span className="text-geist-fg-tertiary font-normal"> — {role.location}</span>}
            </p>
            <ul className="space-y-1.5">
              {role.highlights.map((item, j) => (
                <li key={j} className="text-[14px] leading-relaxed text-geist-fg-secondary pl-4 relative before:absolute before:left-0 before:top-[10px] before:w-[4px] before:h-[4px] before:rounded-full before:bg-geist-border-hover">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
