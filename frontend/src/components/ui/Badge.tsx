interface BadgeProps {
  children: React.ReactNode;
  variant?: "blue" | "sky" | "green";
  className?: string;
}

const variants = {
  blue: "bg-[var(--blue-50)] text-[var(--blue-600)] border-[var(--blue-300)]",
  sky: "bg-sky-50 text-[var(--sky-500)] border-[var(--sky-400)]",
  green: "bg-green-50 text-[var(--green-500)] border-green-300",
};

export default function Badge({
  children,
  variant = "blue",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest rounded-full border ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
