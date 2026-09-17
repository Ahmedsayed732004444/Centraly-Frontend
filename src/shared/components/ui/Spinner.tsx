import { Loader2 } from 'lucide-react';

interface SpinnerProps {
  size?: number;
  className?: string;
  label?: string;
}

export function Spinner({ size = 24, className = '', label = 'جاري التحميل' }: SpinnerProps) {
  return (
    <Loader2
      className={`animate-spin text-[var(--color-primary)] ${className}`}
      size={size}
      aria-label={label}
    />
  );
}
