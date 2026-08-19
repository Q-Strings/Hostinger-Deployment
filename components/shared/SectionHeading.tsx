import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-3",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-sky">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-semibold text-slate-900 md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base text-slate-600 md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
