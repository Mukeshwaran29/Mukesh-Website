import { contact } from '@/data/profile';

export function Contact() {
  return (
    <section id="contact" className="section-container section-spacing border-t border-geist-border">
      <div className="max-w-[720px]">
        <p className="text-[12px] font-medium tracking-wide uppercase text-geist-fg-tertiary mb-4">
          {contact.title}
        </p>
        <h2 className="heading-2 mb-4">{contact.subtitle}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
          <a
            href={`mailto:${contact.email}`}
            className="geist-card group hover:border-geist-border-hover transition-colors duration-150"
          >
            <p className="text-[12px] font-medium tracking-wide uppercase text-geist-fg-tertiary mb-2">
              Email
            </p>
            <p className="text-[15px] text-geist-fg group-hover:text-geist-accent transition-colors">
              {contact.email}
            </p>
          </a>

          <a
            href={`tel:${contact.phone}`}
            className="geist-card group hover:border-geist-border-hover transition-colors duration-150"
          >
            <p className="text-[12px] font-medium tracking-wide uppercase text-geist-fg-tertiary mb-2">
              Phone
            </p>
            <p className="text-[15px] text-geist-fg group-hover:text-geist-accent transition-colors">
              {contact.phone}
            </p>
          </a>

          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="geist-card group hover:border-geist-border-hover transition-colors duration-150"
          >
            <p className="text-[12px] font-medium tracking-wide uppercase text-geist-fg-tertiary mb-2">
              LinkedIn
            </p>
            <p className="text-[15px] text-geist-fg group-hover:text-geist-accent transition-colors">
              /in/mukeshwaran-s
            </p>
          </a>

          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="geist-card group hover:border-geist-border-hover transition-colors duration-150"
          >
            <p className="text-[12px] font-medium tracking-wide uppercase text-geist-fg-tertiary mb-2">
              GitHub
            </p>
            <p className="text-[15px] text-geist-fg group-hover:text-geist-accent transition-colors">
              /Mukeshwaran29
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
