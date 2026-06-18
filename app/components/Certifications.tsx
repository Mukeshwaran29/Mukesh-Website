import { certifications } from '@/data/profile';

export function Certifications() {
  return (
    <section className="section-container section-spacing border-t border-geist-border">
      <p className="text-[12px] font-medium tracking-wide uppercase text-geist-fg-tertiary mb-10">
        {certifications.title}
      </p>
      <div className="max-w-[720px] space-y-3">
        {certifications.items.map((cert, i) => (
          <div key={i} className="geist-card">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-geist bg-geist-accent-bg flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-geist-accent">
                  <path d="M5.5 8.5L7.5 10.5L10.5 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="1.5" y="1.5" width="13" height="13" rx="3" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-geist-fg">{cert.name}</h3>
                <p className="text-[13px] text-geist-fg-tertiary mt-0.5">{cert.date}</p>
                <p className="text-[14px] text-geist-fg-secondary mt-2 leading-relaxed">{cert.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
