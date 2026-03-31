import { Code, Terminal, Link as LinkIcon } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-light)]">
      <div className="max-w-[var(--container-max)] mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left */}
        <p className="text-sm text-[var(--navy-400)]">
          © {new Date().getFullYear()} {SITE.name}. Backend & Machine Learning
          Developer.
        </p>

        {/* Right — icons */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/kras827-sketch"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg text-[var(--navy-400)] hover:text-[var(--blue-600)] hover:bg-[var(--blue-50)] flex items-center justify-center transition-all duration-200"
            aria-label="Code"
          >
            <Code size={17} />
          </a>
          <a
            href="#"
            className="w-9 h-9 rounded-lg text-[var(--navy-400)] hover:text-[var(--blue-600)] hover:bg-[var(--blue-50)] flex items-center justify-center transition-all duration-200"
            aria-label="Terminal"
          >
            <Terminal size={17} />
          </a>
          <a
            href="#"
            className="w-9 h-9 rounded-lg text-[var(--navy-400)] hover:text-[var(--blue-600)] hover:bg-[var(--blue-50)] flex items-center justify-center transition-all duration-200"
            aria-label="Links"
          >
            <LinkIcon size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
