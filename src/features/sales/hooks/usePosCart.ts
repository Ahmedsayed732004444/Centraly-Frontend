import { useCallback, useState } from 'react';
import {
  CartItem,
  addOrIncrementCartItem,
  cartTotal,
  removeCartItem,
  updateCartQuantity,
} from '../utils/cartLogic';

export function usePosCart() {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = useCallback((item: CartItem) => {
    setItems((prev) => addOrIncrementCartItem(prev, item));
  }, []);

  const updateQuantity = useCallback((id: string, delta: number) => {
    setItems((prev) => updateCartQuantity(prev, id, delta));
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => removeCartItem(prev, id));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  return {
    items,
    addItem,
    updateQuantity,
    removeItem,
    clear,
    totalAmount: cartTotal(items),
  };
}
