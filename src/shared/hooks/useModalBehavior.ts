import { RefObject, useEffect, useRef } from 'react';
import { useFocusTrap } from './useFocusTrap';

/**
 * Shared overlay behavior: body scroll lock, Escape to close, focus trap, restore focus.
 */
export function useModalBehavior(
  isOpen: boolean,
  onClose: () => void,
  containerRef: RefObject<HTMLElement | null>
) {
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useFocusTrap(containerRef, isOpen);

  useEffect(() => {
    if (!isOpen) return;

    previousFocusRef.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
      previousFocusRef.current?.focus();
    };
  }, [isOpen, onClose]);
}
