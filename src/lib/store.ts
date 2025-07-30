import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
   CartState,
   CartItem,
   CategoryStore,
   ProductSize,
   ProductColor,
} from "@/types";
import { get } from "http";

export const useCategoryStore = create<CategoryStore>()(
   persist(
      (set) => ({
         selectedCategory: "all",
         setSelectedCategory: (category: string) =>
            set({ selectedCategory: category }),
      }),
      {
         name: "category-storage",
      }
   )
);

export const useCartStore = create<CartState>()(
   persist(
      (set, get) => ({
         cartItems: [],

         addItem: (item: CartItem) => {
            // Verify if the item already exists in the cart with the same handle, color, and size
            const existingItemIndex = get().cartItems.findIndex(
               (cartItem) =>
                  cartItem.handle === item.handle &&
                  cartItem.color === item.color &&
                  cartItem.size === item.size
            );

            // If it exists, update the quantity; otherwise, add the new item
            if (existingItemIndex !== -1) {
               set({
                  cartItems: get().cartItems.map((cartItem) =>
                     cartItem.handle === item.handle &&
                     cartItem.size === item.size &&
                     cartItem.color === item.color
                        ? {
                             ...cartItem,
                             quantity: cartItem.quantity + item.quantity,
                          }
                        : cartItem
                  ),
               });
            } else {
               // If it doesn't exist, add the new item to the cart
               set({ cartItems: [...get().cartItems, item] });
            }
         },

         removeItem: (
            handle: string,
            size: ProductSize,
            color: ProductColor
         ) => {
            set({
               cartItems: get().cartItems.filter(
                  (item) =>
                     !(
                        item.handle === handle &&
                        item.size === size &&
                        item.color === color
                     )
               ),
            });
         },

         increment: (handle: string, size: string, color: string) => {
            set({
               cartItems: get()
                  .cartItems.map((item) =>
                     item.handle === handle &&
                     item.size === size &&
                     item.color === color
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                  )
                  .filter((item) => item.quantity > 0), // facultatif ici pour increment, mais OK à garder
            });
         },

         decrement: (handle: string, size: string, color: string) => {
            set({
               cartItems: get()
                  .cartItems.map((item) =>
                     item.handle === handle &&
                     item.size === size &&
                     item.color === color &&
                     item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                  )
                  .filter((item) => item.quantity > 0), // Retire les items dont la quantité est 0
            });
         },

         clearCart: () => {
            set({ cartItems: [] });
         },
      }),
      {
         name: "cart-storage",
         storage:
            typeof window !== "undefined"
               ? {
                    getItem: async (name) => {
                       const value = localStorage.getItem(name);
                       return value ? JSON.parse(value) : null;
                    },
                    setItem: async (name, value) => {
                       localStorage.setItem(name, JSON.stringify(value));
                    },
                    removeItem: async (name) => {
                       localStorage.removeItem(name);
                    },
                 }
               : undefined,
      }
   )
);
