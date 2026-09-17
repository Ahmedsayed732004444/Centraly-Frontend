import { CartItem, addOrIncrementCartItem, cartTotal, removeCartItem, updateCartQuantity } from '../cartLogic';

function item(overrides: Partial<CartItem> = {}): CartItem {
  return {
    id: 'p1_b1_10',
    productId: 'p1',
    productName: 'آيفون',
    batchId: 'b1',
    batchName: 'مورد',
    quantity: 1,
    price: 10,
    maxQuantity: 5,
    ...overrides,
  };
}

describe('cartLogic', () => {
  it('adds a new line then increments the same line', () => {
    const first = addOrIncrementCartItem([], item());
    expect(first).toHaveLength(1);
    expect(first[0].quantity).toBe(1);

    const second = addOrIncrementCartItem(first, item());
    expect(second).toHaveLength(1);
    expect(second[0].quantity).toBe(2);
  });

  it('does not exceed maxQuantity', () => {
    const full = [item({ quantity: 5, maxQuantity: 5 })];
    const next = addOrIncrementCartItem(full, item({ maxQuantity: 5 }));
    expect(next[0].quantity).toBe(5);
  });

  it('updates quantity and removes the line when it reaches zero', () => {
    const items = [item({ quantity: 2 })];
    expect(updateCartQuantity(items, 'p1_b1_10', 1)[0].quantity).toBe(3);
    expect(updateCartQuantity(items, 'p1_b1_10', -2)).toHaveLength(0);
  });

  it('ignores increment past stock', () => {
    const items = [item({ quantity: 5, maxQuantity: 5 })];
    expect(updateCartQuantity(items, 'p1_b1_10', 1)[0].quantity).toBe(5);
  });

  it('removes a line and calculates the total', () => {
    const items = [item({ quantity: 2, price: 50 }), item({ id: 'other', quantity: 1, price: 20 })];
    expect(cartTotal(items)).toBe(120);
    expect(removeCartItem(items, 'p1_b1_10')).toHaveLength(1);
  });
});
