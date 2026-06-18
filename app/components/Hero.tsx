import { hero, profile } from '@/data/profile';

export function Hero() {
  return (
    <section className="section-container section-spacing pt-24 md:pt-32 lg:pt-40">
      <div className="max-w-[720px]">
        <p className="text-[13px] font-medium tracking-wide uppercase text-geist-fg-tertiary mb-6">
          {hero.greeting}
        </p>
        <h1 className="heading-1 mb-6">
          {profile.name}
          <span className="block text-geist-accent mt-2">{hero.highlight}</span>
        </h1>
        <p className="text-[17px] md:text-lg leading-relaxed text-geist-fg-secondary max-w-[600px] mb-10">
          {hero.subtitle}
        </p>
        <div className="flex items-center gap-3">
          <a
            href={hero.cta.primary.href}
            className="inline-flex items-center h-10 px-4 text-[14px] font-medium bg-geist-fg text-geist-bg rounded-geist hover:bg-[#333] transition-colors duration-150"
          >
            {hero.cta.primary.label}
          </a>
          <a
            href={hero.cta.secondary.href}
            className="inline-flex items-center h-10 px-4 text-[14px] font-medium border border-geist-border rounded-geist text-geist-fg hover:border-geist-border-hover transition-colors duration-150"
          >
            {hero.cta.secondary.label}
          </a>
        </div>
      </div>
    </section>
  );
}
