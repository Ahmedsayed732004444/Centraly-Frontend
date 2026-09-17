import { DatePicker } from './DatePicker';

interface DateRangeFilterProps {
  startDate: string;
  endDate: string;
  onChange: (start: string, end: string) => void;
  className?: string;
}

/** From/to date pair sharing one shared DatePicker - drop-in replacement for the two native `<input type="date">` fields each list page used to wire up on its own. */
export function DateRangeFilter({ startDate, endDate, onChange, className = '' }: DateRangeFilterProps) {
  return (
    <div className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto ${className}`}>
      <DatePicker value={startDate} onChange={(v) => onChange(v, endDate)} placeholder="من تاريخ" className="w-full sm:w-auto" />
      <span className="text-gray-500 hidden sm:inline">-</span>
      <DatePicker value={endDate} onChange={(v) => onChange(startDate, v)} placeholder="إلى تاريخ" className="w-full sm:w-auto" />
    </div>
  );
}
