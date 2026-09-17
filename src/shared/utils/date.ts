// 'ar-EG-u-nu-latn' keeps Arabic month names/weekdays but forces Latin (0-9) digits -
// the app standardized on Latin digits everywhere (invoice numbers, phone numbers,
// money) so date digits shouldn't switch to Arabic-Indic mid-app.
const DATE_LOCALE = 'ar-EG-u-nu-latn';

function toDate(dateString: string | Date | undefined): Date | null {
  if (!dateString) return null;

  if (typeof dateString !== 'string') return new Date(dateString);

  let str = dateString;
  // If string has a time component but lacks a timezone indicator ('Z' or offset like '+03:00')
  if (str.includes('T') && !str.endsWith('Z') && !/(?:\+|-)\d{2}:\d{2}$/.test(str)) {
    str += 'Z';
  }
  return new Date(str);
}

/** Date + time, e.g. "8 سبتمبر 2026، 01:30 م". Matches the previous formatDate output. */
export function formatDateTime(dateString: string | Date | undefined): string {
  const dateObj = toDate(dateString);
  if (!dateObj) return '';

  return new Intl.DateTimeFormat(DATE_LOCALE, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(dateObj);
}

/** Date only, no time, e.g. "8 سبتمبر 2026". */
export function formatDateOnly(dateString: string | Date | undefined): string {
  const dateObj = toDate(dateString);
  if (!dateObj) return '';

  return new Intl.DateTimeFormat(DATE_LOCALE, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(dateObj);
}

/** @deprecated use formatDateTime (or formatDateOnly when no time is needed) */
export function formatDate(dateString: string | Date | undefined): string {
  return formatDateTime(dateString);
}

export function toUtcStartOfDayISOString(dateString: string): string {
  const localDate = new Date(dateString);
  localDate.setHours(0, 0, 0, 0);
  return localDate.toISOString();
}

export function toUtcEndOfDayISOString(dateString: string): string {
  const localDate = new Date(dateString);
  localDate.setHours(23, 59, 59, 999);
  return localDate.toISOString();
}
