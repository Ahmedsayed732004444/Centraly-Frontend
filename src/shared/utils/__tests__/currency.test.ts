import { formatCurrency } from '../currency';

describe('formatCurrency', () => {
  it('formats zero with no decimals', () => {
    // "ج.م." itself contains dots, so check there's no decimal point after a digit.
    expect(formatCurrency(0)).toContain('0');
    expect(formatCurrency(0)).not.toMatch(/\d\.\d/);
  });

  it('formats integers without forcing decimals', () => {
    const formatted = formatCurrency(1500);
    expect(formatted).toContain('1,500');
    expect(formatted).not.toMatch(/\d\.\d/);
  });

  it('uses Latin digits, never Arabic-Indic', () => {
    expect(formatCurrency(1500)).not.toMatch(/[٠-٩]/);
    expect(formatCurrency(0)).not.toMatch(/[٠-٩]/);
  });

  it('returns a fallback for invalid numbers', () => {
    expect(formatCurrency(Number.NaN)).toBe('0 ج.م.');
  });
});
