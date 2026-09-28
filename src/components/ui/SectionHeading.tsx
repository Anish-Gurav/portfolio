import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  /** Tailwind gradient classes for the accent bar, e.g. "bg-gradient-to-r from-cyan-400 to-blue-500" */
  accentGradient?: string;
}

export function SectionHeading({ title, subtitle, className, accentGradient }: SectionHeadingProps) {
  return (
    <div className={cn('flex flex-col items-center text-center', className)}>
      <div
        className={cn(
          'mb-4 h-1 w-12 rounded-full',
          accentGradient ?? 'bg-[#00D4FF]'
        )}
      />
      <h2 className="font-display text-4xl font-bold text-[#E4E4E7] md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl font-body text-lg text-[#71717A]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
