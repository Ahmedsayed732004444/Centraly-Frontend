import { createPurchaseInvoiceSchema } from '../purchaseSchemas';

describe('createPurchaseInvoiceSchema', () => {
  it('rejects an empty items list', () => {
    const result = createPurchaseInvoiceSchema.safeParse({
      supplierId: 's1',
      paidAmount: 0,
      items: [],
    });
    expect(result.success).toBe(false);
  });

  it('accepts a valid invoice payload', () => {
    const result = createPurchaseInvoiceSchema.safeParse({
      supplierId: 's1',
      paidAmount: 100,
      notes: 'ملاحظة',
      items: [
        {
          productId: 'p1',
          productName: 'منتج',
          quantity: 2,
          unitCost: 50,
          wholesalePrice: 60,
          retailPrice: 80,
        },
      ],
    });
    expect(result.success).toBe(true);
  });

  it('rejects quantity below 1', () => {
    const result = createPurchaseInvoiceSchema.safeParse({
      supplierId: 's1',
      paidAmount: 0,
      items: [
        {
          productId: 'p1',
          quantity: 0,
          unitCost: 10,
          wholesalePrice: 12,
          retailPrice: 15,
        },
      ],
    });
    expect(result.success).toBe(false);
  });
});
