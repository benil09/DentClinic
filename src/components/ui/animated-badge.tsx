import { cn } from "@/lib/utils";

interface AnimatedBadgeProps {
  text: string;
  className?: string;
}

export function AnimatedBadge({ text, className }: AnimatedBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-primary/5 to-primary/10 rounded-full border border-primary/10",
        className,
      )}
    >
      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
      <span className="text-xs font-medium text-primary">{text}</span>
    </div>
  );
}
