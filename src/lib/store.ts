import { create } from "zustand";

type CategoryStore = {
   selectedCategory: string;
   setSelectedCategory: (category: string) => void;
};

export const useCategoryStore = create<CategoryStore>((set) => ({
   selectedCategory: "all",
   setSelectedCategory: (category: string) =>
      set({ selectedCategory: category }),
}));

type CartItem = {
   handle: string;
   title: string;
   color: string;
   size: string;
   price: {
      amount: number;
      currency: string;
   }
   featuredImage: {
      url: string;
   }
   quantity: number;
};

interface CartState {
   cartItems: CartItem[]; // contient tous les produits ajoutés au panier
   addItem: (item: CartItem) => void; // ajoute un produit au panier
   removeItem: (handle: string) => void;
   clearCart: () => void;
   increment: (handle: string) => void;
   decrement: (handle: string) => void; 
}

export const useCartStore = create<CartState>((set) => ({
   cartItems: [],

   addItem: (item: CartItem) => set((state) => {
      // Verify if the item already exists in the cart with the same handle, color, and size
      const existingItemIndex = state.cartItems.findIndex(
         (cartItem) => 
            cartItem.handle === item.handle &&
            cartItem.color === item.color &&
            cartItem.size === item.size
      );

      // If it exists, update the quantity; otherwise, add the new item
      if (existingItemIndex !== -1) {
         return {
            cartItems: state.cartItems.map((cartItem) =>
               cartItem.handle === item.handle ? { ...cartItem, quantity: cartItem.quantity + item.quantity } : cartItem
            ),
         };
      }

      // If it doesn't exist, add the new item to the cart
      return { cartItems: [...state.cartItems, item] };
   }),
   
   removeItem: (handle: string) => set((state) => ({
      cartItems: state.cartItems.filter((item) => item.handle !== handle)
   })),

   clearCart: () => set({ cartItems: [] }),

   increment: (handle: string) => set((state) => ({
      cartItems: state.cartItems.map((item) =>
         item.handle === handle ? { ...item, quantity: item.quantity + 1 } : item
      ).filter((item) => item.quantity > 0) // Ensure no items with quantity 0 remain
   })),

   decrement: (handle: string) => set((state) => ({
      cartItems: state.cartItems.map((item) =>
         item.handle === handle && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      ).filter((item) => item.quantity > 0) // Ensure no items with quantity 0 Item
   }))
}));