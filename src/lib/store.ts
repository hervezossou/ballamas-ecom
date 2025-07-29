import { create } from "zustand";
import {
   CartState,
   CartItem,
   CategoryStore,
   ProductSize,
   ProductColor,
} from "@/types";

export const useCategoryStore = create<CategoryStore>((set) => ({
   selectedCategory: "all",
   setSelectedCategory: (category: string) =>
      set({ selectedCategory: category }),
}));

export const useCartStore = create<CartState>((set) => ({
   cartItems: [],

   addItem: (item: CartItem) =>
      set((state) => {
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
                  cartItem.handle === item.handle
                     ? {
                          ...cartItem,
                          quantity: cartItem.quantity + item.quantity,
                       }
                     : cartItem
               ),
            };
         }

         // If it doesn't exist, add the new item to the cart
         return { cartItems: [...state.cartItems, item] };
      }),

   removeItem: (handle: string, size: ProductSize, color: ProductColor) =>
      set((state) => ({
         cartItems: state.cartItems.filter(
            (item) =>
               !(
                  item.handle === handle &&
                  item.size === size &&
                  item.color === color
               )
         ),
      })),

   clearCart: () => set({ cartItems: [] }),

   increment: (handle: string, size: string, color: string) =>
      set((state) => ({
         cartItems: state.cartItems
            .map((item) =>
               item.handle === handle &&
               item.size === size &&
               item.color === color
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
            )
            .filter((item) => item.quantity > 0), // facultatif ici pour increment, mais OK à garder
      })),

   decrement: (handle: string, size: string, color: string) =>
      set((state) => ({
         cartItems: state.cartItems
            .map((item) =>
               item.handle === handle &&
               item.size === size &&
               item.color === color &&
               item.quantity > 1
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
            )
            .filter((item) => item.quantity > 0), // Retire les items dont la quantité est 0
      })),
}));
