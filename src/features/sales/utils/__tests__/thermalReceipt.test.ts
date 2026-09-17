import { describe, it, expect } from 'vitest';
import { generateCode128Svg } from '../barcode128';
import { buildThermalReceiptHtml } from '../thermalReceiptPrint';
import { SalesInvoiceResponse, SaleType, PaymentMethod } from '../../schemas/salesSchemas';

describe('generateCode128Svg', () => {
  it('returns empty string for empty input', () => {
    expect(generateCode128Svg('')).toBe('');
    expect(generateCode128Svg('   ')).toBe('');
  });

  it('generates valid SVG with rect bars and sanitized text for alphanumeric code', () => {
    const svg = generateCode128Svg('INV-2026-001');
    expect(svg).toContain('<svg');
    expect(svg).toContain('</svg>');
    expect(svg).toContain('<rect');
    expect(svg).toContain('INV-2026-001');
  });

  it('handles purely numeric invoice numbers', () => {
    const svg = generateCode128Svg('100452');
    expect(svg).toContain('<svg');
    expect(svg).toContain('100452');
  });
});

describe('buildThermalReceiptHtml', () => {
  const mockInvoice: SalesInvoiceResponse = {
    id: 'inv-123-uuid',
    invoiceNumber: 'INV-9988',
    customer: {
      id: 'cust-1',
      name: 'أحمد محمود',
      phone: '01012345678',
    },
    saleType: SaleType.Retail,
    paymentMethod: PaymentMethod.Cash,
    totalAmount: 350,
    paidAmount: 350,
    remainingAmount: 0,
    createdAt: '2026-09-08T10:30:00.000Z',
    hasReturns: false,
    items: [
      {
        id: 'item-1',
        productId: 'p1',
        productName: 'كابل شحن سريع Type-C',
        batchId: 'b1',
        quantity: 2,
        returnedQuantity: 0,
        unitPrice: 100,
        unitCost: 60,
        lineTotal: 200,
      },
      {
        id: 'item-2',
        productId: 'p2',
        productName: 'جراب حماية شفاف',
        batchId: 'b2',
        quantity: 1,
        returnedQuantity: 0,
        unitPrice: 150,
        unitCost: 80,
        lineTotal: 150,
      },
    ],
  };

  it('includes prominent invoice number', () => {
    const html = buildThermalReceiptHtml(mockInvoice);
    expect(html).toContain('#INV-9988');
  });

  it('includes customer details', () => {
    const html = buildThermalReceiptHtml(mockInvoice);
    expect(html).toContain('أحمد محمود');
    expect(html).toContain('01012345678');
  });

  it('includes all items, quantities and total', () => {
    const html = buildThermalReceiptHtml(mockInvoice);
    expect(html).toContain('كابل شحن سريع Type-C');
    expect(html).toContain('جراب حماية شفاف');
    expect(html).toContain('قطعة');
    expect(html).toContain('فاتورة مبيعات');
  });

  it('contains barcode SVG in the output', () => {
    const html = buildThermalReceiptHtml(mockInvoice);
    expect(html).toContain('<svg');
    expect(html).toContain('INV-9988');
  });

  it('applies 80mm thermal page size', () => {
    const html = buildThermalReceiptHtml(mockInvoice);
    expect(html).toContain('80mm');
  });
});
