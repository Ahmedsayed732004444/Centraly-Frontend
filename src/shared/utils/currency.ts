// 'ar-EG-u-nu-latn' keeps the Arabic month/currency wording but forces Latin (0-9)
// digits - the app standardized on Latin digits everywhere (invoice numbers, phone
// numbers) so money/date digits shouldn't switch to Arabic-Indic mid-app.
const CURRENCY_LOCALE = 'ar-EG-u-nu-latn';

// Amounts are whole Egyptian pounds end-to-end (the backend stores money as an
// integer, not decimal - piastres aren't in everyday use), so formatting never
// shows a fractional part.
export function formatCurrency(value: number): string {
  if (value == null || isNaN(value)) {
    return '0 ج.م.';
  }

  // Use Intl.NumberFormat to get comma separators (e.g. 155,000)
  const formatter = new Intl.NumberFormat(CURRENCY_LOCALE, {
    style: 'currency',
    currency: 'EGP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return formatter.format(value);
}

export function roundMoney(value: number): number {
  return Math.round(value);
}

/** Thousands-separated number, no currency suffix - for places that render their own "ج.م" label (compact badges, table cells). Same Latin-digit rule as formatCurrency. */
export function formatNumber(value: number): string {
  if (value == null || isNaN(value)) return '0';
  return new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(value);
}
