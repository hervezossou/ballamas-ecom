// src/types/index.ts

// This file defines TypeScript types for the application, including Product, Collection, and CartItem types.

export type Product = {
   handle: string;
   title: string;
   description: string;
   price: { amount: number; currencyCode: string };
   featuredImage: {
      url: string;
   };
};

export type RawProduct = {
   handle: string;
   title: string;
   description: string;
   variants: {
      edges: {
         node: {
            price: {
               amount: string;
               currencyCode: string;
            };
         };
      }[];
   };
   images: {
      edges: {
         node: {
            url: string;
         };
      }[];
   };
};

export type Collection = {
   handle: string;
   title: string;
   description: string;
   image: {
      url: string;
   };
};

export type Category = {
   label: string;
   quantity: number;
};

export interface LogoProps {
   variant: "light" | "dark";
}

export interface HamburgerProps {
   isOpen: boolean;
   onClick: () => void;
}

export type ProductSize = "XS" | "S" | "M" | "L" | "XL";

export type ProductColor = "ocean" | "olive" | "purple" | "green";

// CategoryStore type represents the state of the selected category in the application.
export type CategoryStore = {
   selectedCategory: string;
   setSelectedCategory: (category: string) => void;
};

// CartItem type represents an item in the shopping cart.
export type CartItem = {
   handle: string;
   title: string;
   color: ProductColor;
   size: ProductSize;
   price: {
      amount: number;
      currency: string;
   };
   featuredImage: {
      url: string;
   };
   quantity: number;
};

// CartState type represents the state of the shopping cart.
export interface CartState {
   cartItems: CartItem[]; // contient tous les produits ajoutés au panier
   addItem: (item: CartItem) => void; // ajoute un produit au panier
   removeItem: (handle: string, size: ProductSize, color: ProductColor) => void;
   clearCart: () => void;
   increment: (handle: string, size: ProductSize, color: ProductColor) => void;
   decrement: (handle: string, size: ProductSize, color: ProductColor) => void;
}
