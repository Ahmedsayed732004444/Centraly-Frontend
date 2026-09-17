import { useState } from 'react';
import { resolveImageUrl } from '@/shared/utils/resolveImageUrl';
import { Avatar } from './Avatar';

const SIZES = {
  sm: 'h-8 w-8',
  md: 'h-10 w-10 sm:h-11 sm:w-11',
  lg: 'h-14 w-14',
  xl: 'h-16 w-16 sm:h-20 sm:w-20',
} as const;

interface EntityImageProps {
  /** Product/user/customer/... name - used for the fallback initial+color and the img alt text. */
  name: string;
  imageUrl?: string | null;
  size?: keyof typeof SIZES;
  rounded?: 'full' | 'lg';
  className?: string;
}

/**
 * A product/entity photo when one exists, falling back to the same initial-letter
 * Avatar used everywhere there's no photo - replaces the 6 different empty-box-icon
 * placeholders that used to show up across POS, products, purchases and wallets.
 */
export function EntityImage({ name, imageUrl, size = 'md', rounded = 'lg', className = '' }: EntityImageProps) {
  const [failed, setFailed] = useState(false);
  const src = resolveImageUrl(imageUrl ?? undefined);

  if (!src || failed) {
    return <Avatar name={name} size={size} className={className} />;
  }

  return (
    <img
      src={src}
      alt={name}
      onError={() => setFailed(true)}
      className={`object-cover border border-gray-100 shrink-0 ${SIZES[size]} ${rounded === 'full' ? 'rounded-full' : 'rounded-lg'} ${className}`}
    />
  );
}
