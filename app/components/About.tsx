import { about } from '@/data/profile';

export function About() {
  return (
    <section id="about" className="section-container section-spacing border-t border-geist-border">
      <div className="max-w-[720px]">
        <p className="text-[12px] font-medium tracking-wide uppercase text-geist-fg-tertiary mb-4">
          {about.title}
        </p>
        <div className="space-y-4">
          {about.paragraphs.map((text, i) => (
            <p key={i} className="body-text text-[17px] leading-[1.7]">
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
