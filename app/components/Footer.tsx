import { profile } from '@/data/profile';

export function Footer() {
  return (
    <footer className="border-t border-geist-border">
      <div className="section-container py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[13px] text-geist-fg-tertiary">
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="text-[13px] text-geist-fg-tertiary hover:text-geist-fg transition-colors"
          >
            Email
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-geist-fg-tertiary hover:text-geist-fg transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-geist-fg-tertiary hover:text-geist-fg transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
