import { formatProductSpecs, getStockStatus, resolveProductImageUrl } from '../posUtils';

describe('posUtils', () => {
  it('returns out of stock when quantity is zero or flagged', () => {
    expect(getStockStatus(0, false, false, 5)).toBe('out');
    expect(getStockStatus(3, true, false, 5)).toBe('out');
  });

  it('returns low stock from flag or min alert', () => {
    expect(getStockStatus(4, false, true, 5)).toBe('low');
    expect(getStockStatus(2, false, false, 5)).toBe('low');
  });

  it('returns in stock otherwise', () => {
    expect(getStockStatus(10, false, false, 5)).toBe('in');
  });

  it('formats specs and skips empty values', () => {
    expect(formatProductSpecs()).toBe('');
    expect(formatProductSpecs({ color: 'أحمر', storage: '512', extra: '' })).toBe('أحمر - 512');
  });

  it('resolves relative image urls against the API base', () => {
    expect(resolveProductImageUrl(undefined)).toBeUndefined();
    expect(resolveProductImageUrl('https://cdn.example/p.png')).toBe('https://cdn.example/p.png');
    expect(resolveProductImageUrl('/uploads/p.png')).toMatch(/\/uploads\/p\.png$/);
  });
});
