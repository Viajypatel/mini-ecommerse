import {create} from "zustand";

export const useCartStore = create((set, get) => ({
  cartItems: [],
  addToCart: (product, quantity = 1) => {
    const exists = get().cartItems.find(item => item.id === product.id);
    if (exists) {
      set({
        cartItems: get().cartItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        ),
      });
    } else {
      set({ cartItems: [...get().cartItems, { ...product, quantity }] });
    }
  },
  removeFromCart: (id) => set({ cartItems: get().cartItems.filter(item => item.id !== id) }),
  updateQuantity: (id, quantity) => set({
    cartItems: get().cartItems.map(item =>
      item.id === id ? { ...item, quantity } : item
    ),
  }),
  clearCart: () => set({ cartItems: [] }),
}));
