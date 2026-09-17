import { roundMoney } from '@/shared/utils/currency';
export interface CartItem {
  id: string;
  productId: string;
  productName: string;
  imageUrl?: string;
  batchId: string;
  batchName: string;
  properties?: Record<string, string>;
  quantity: number;
  price: number;
  maxQuantity: number;
}

export function addOrIncrementCartItem(items: CartItem[], incoming: CartItem): CartItem[] {
  const existing = items.find((item) => item.id === incoming.id);
  if (!existing) return [...items, incoming];
  if (existing.quantity >= existing.maxQuantity) return items;
  return items.map((item) =>
    item.id === incoming.id ? { ...item, quantity: item.quantity + 1 } : item
  );
}

export function updateCartQuantity(items: CartItem[], id: string, delta: number): CartItem[] {
  return items.flatMap((item) => {
    if (item.id !== id) return [item];
    const nextQty = item.quantity + delta;
    if (nextQty <= 0) return [];
    if (nextQty > item.maxQuantity) return [item];
    return [{ ...item, quantity: nextQty }];
  });
}

export function removeCartItem(items: CartItem[], id: string): CartItem[] {
  return items.filter((item) => item.id !== id);
}

export function cartTotal(items: CartItem[]): number {
  return roundMoney(items.reduce((sum, item) => sum + item.price * item.quantity, 0));
}
