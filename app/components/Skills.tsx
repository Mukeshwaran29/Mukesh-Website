import { skills } from '@/data/profile';

const categoryColors: Record<number, { bg: string; text: string }> = {
  0: { bg: 'bg-geist-accent-bg', text: 'text-geist-accent' },
  1: { bg: 'bg-geist-green-bg', text: 'text-geist-green' },
  2: { bg: 'bg-geist-amber-bg', text: 'text-[#aa4d00]' },
  3: { bg: 'bg-purple-50', text: 'text-purple-700' },
};

export function Skills() {
  return (
    <section id="skills" className="section-container section-spacing border-t border-geist-border">
      <p className="text-[12px] font-medium tracking-wide uppercase text-geist-fg-tertiary mb-10">
        {skills.title}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skills.categories.map((cat, i) => {
          const color = categoryColors[i] || categoryColors[0];
          return (
            <div key={i} className="geist-card">
              <h3 className="text-[13px] font-medium text-geist-fg mb-4">{cat.name}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill, j) => (
                  <span
                    key={j}
                    className={`inline-flex items-center px-2.5 py-1 text-[12px] font-medium rounded-full ${color.bg} ${color.text}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
