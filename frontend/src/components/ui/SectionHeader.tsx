import AnimatedSection from "./AnimatedSection";
import Badge from "./Badge";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  accent?: boolean; // blue underline bar
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
  accent = false,
}: SectionHeaderProps) {
  return (
    <AnimatedSection className={`mb-16 ${centered ? "text-center" : ""}`}>
      {badge && (
        <div className={`mb-4 ${centered ? "flex justify-center" : ""}`}>
          <Badge>{badge}</Badge>
        </div>
      )}
      <h2
        className="text-4xl md:text-5xl font-extrabold tracking-tight"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h2>
      {accent && (
        <div
          className={`mt-4 h-1 w-12 rounded-full bg-[var(--blue-600)] ${
            centered ? "mx-auto" : ""
          }`}
        />
      )}
      {subtitle && (
        <p className="mt-5 max-w-2xl text-lg text-[var(--text-secondary)] leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
}
