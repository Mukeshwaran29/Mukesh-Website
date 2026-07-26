import { projects } from '@/data/profile';

export function Projects() {
  return (
    <section id="projects" className="section-container section-spacing border-t border-geist-border">
      <p className="text-[12px] font-medium tracking-wide uppercase text-geist-fg-tertiary mb-10">
        {projects.title}
      </p>
      <div className="max-w-[720px] space-y-3">
        {projects.items.map((project, i) => (
          <div key={i} className="geist-card">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-geist bg-geist-accent-bg flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-geist-accent">
                  <path d="M8 2L2 5V11L8 14L14 11V5L8 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 5L8 8L14 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 14V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-[15px] font-semibold text-geist-fg">{project.title}</h3>
                <p className="text-[13px] text-geist-fg-tertiary mt-0.5">{project.role}</p>
                <p className="text-[14px] text-geist-fg-secondary mt-2 leading-relaxed">{project.description}</p>
                <p className="text-[13px] text-geist-fg-tertiary mt-2">
                  <span className="font-semibold">Tech Stack:</span> {project.techStack}
                </p>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-[13px] font-medium text-geist-accent hover:underline">
                    View Project Details ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
