import { useEffect, useRef, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { arEG } from 'react-day-picker/locale';
import { format } from 'date-fns';
import { CalendarDays, X } from 'lucide-react';
import 'react-day-picker/style.css';
import { tokens } from '@/shared/styles/tokens';
import { formatDateOnly } from '@/shared/utils/date';

// date-fns never swaps digits for Arabic-Indic ones (it only localizes words - month
// names, weekday names) so the calendar grid and the "8 سبتمبر 2026" display below both
// stay Latin-digit even under the arEG locale. Native <input type="date"> can't be
// themed this way at all - its calendar glyph and mm/dd/yyyy fallback follow the
// browser's OS language, not the page - which is why this replaces it everywhere.
function parseIsoDate(value?: string): Date | undefined {
  if (!value) return undefined;
  const [y, m, d] = value.split('-').map(Number);
  if (!y || !m || !d) return undefined;
  return new Date(y, m - 1, d);
}

interface DatePickerProps {
  /** ISO yyyy-MM-dd, same contract as a native <input type="date">. */
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function DatePicker({ value, onChange, placeholder = 'اختر تاريخ', className = '' }: DatePickerProps) {
  const [open, setOpen] = useState(false);
  const [align, setAlign] = useState<'left' | 'right'>('left');
  const containerRef = useRef<HTMLDivElement>(null);
  const selected = parseIsoDate(value);

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const estimatedPopupWidth = 300;
    const margin = 8;
    const spaceOnRight = window.innerWidth - rect.left;
    const spaceOnLeft = rect.right;
    setAlign(spaceOnRight < estimatedPopupWidth + margin && spaceOnLeft >= estimatedPopupWidth + margin ? 'right' : 'left');
  }, [open]);

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`${tokens.input} flex items-center justify-between gap-2 text-right`}
      >
        <span className={selected ? 'text-[var(--color-text-main)]' : 'text-gray-400'}>
          {selected ? formatDateOnly(selected) : placeholder}
        </span>
        <span className="flex items-center gap-1 shrink-0">
          {selected && (
            <X
              size={14}
              className="text-gray-400 hover:text-gray-600"
              onClick={(e) => {
                e.stopPropagation();
                onChange('');
              }}
            />
          )}
          <CalendarDays size={16} className="text-gray-400" />
        </span>
      </button>

      {open && (
        <div
          className={`absolute z-30 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg p-2 ${align === 'left' ? 'left-0' : 'right-0'}`}
          dir="rtl"
        >
          <DayPicker
            mode="single"
            dir="rtl"
            locale={arEG}
            selected={selected}
            defaultMonth={selected}
            weekStartsOn={6}
            onSelect={(date) => {
              onChange(date ? format(date, 'yyyy-MM-dd') : '');
              setOpen(false);
            }}
          />
        </div>
      )}
    </div>
  );
}
