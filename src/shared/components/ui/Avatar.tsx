// Fixed palette (not raw Tailwind bg-*-500 etc.) so every avatar reads as part of the
// same system regardless of which name hashed into it - light bg + matching dark text,
// same shape the admin Users table already used for its own accounts.
const PALETTE = [
  { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-100' },
  { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-100' },
  { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-100' },
  { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-100' },
  { bg: 'bg-rose-50', text: 'text-rose-600', border: 'border-rose-100' },
  { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-100' },
  { bg: 'bg-teal-50', text: 'text-teal-600', border: 'border-teal-100' },
  { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-100' },
];

function paletteFor(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash << 5) - hash + name.charCodeAt(i);
    hash |= 0;
  }
  return PALETTE[Math.abs(hash) % PALETTE.length];
}

const SIZES = {
  sm: 'h-8 w-8 text-xs',
  md: 'h-10 w-10 sm:h-11 sm:w-11 text-lg',
  lg: 'h-14 w-14 text-xl',
  xl: 'h-16 w-16 sm:h-20 sm:w-20 text-2xl',
} as const;

interface AvatarProps {
  name: string;
  size?: keyof typeof SIZES;
  className?: string;
}

/** First-letter circle with a color derived from the name's hash - same identity every render. */
export function Avatar({ name, size = 'md', className = '' }: AvatarProps) {
  const { bg, text, border } = paletteFor(name || '?');
  const initial = (name || '؟').trim().charAt(0).toUpperCase();

  return (
    <div
      className={`rounded-full flex items-center justify-center font-bold border shrink-0 ${SIZES[size]} ${bg} ${text} ${border} ${className}`}
    >
      {initial}
    </div>
  );
}
