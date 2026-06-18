import { awards } from '@/data/profile';

export function Awards() {
  return (
    <section id="awards" className="section-container section-spacing border-t border-geist-border">
      <p className="text-[12px] font-medium tracking-wide uppercase text-geist-fg-tertiary mb-10">
        {awards.title}
      </p>
      <div className="max-w-[720px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {awards.items.map((item, i) => (
            <div key={i} className="geist-card flex items-start gap-3">
              <div className="flex-shrink-0 mt-0.5">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-geist-amber">
                  <path d="M8 1.5L9.9 5.9L14.5 6.3L11.2 9.5L12.2 14L8 11.5L3.8 14L4.8 9.5L1.5 6.3L6.1 5.9L8 1.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h3 className="text-[14px] font-semibold text-geist-fg">{item.award}</h3>
                <p className="text-[12px] text-geist-fg-tertiary mt-0.5">{item.year}</p>
                <p className="text-[13px] text-geist-fg-secondary mt-1.5 leading-relaxed">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
