"use client";

import { useCartStore } from "@/lib/store";
import { CartProduct } from "../molecules/CartProduct";
import Image from "next/image";

export const CartContainer = () => {
   const cartItems = useCartStore((state) => state.cartItems);
   const clearCart = useCartStore((state) => state.clearCart);
   const totalItems = cartItems.length;
   //const totalPrice = cartItems.reduce((total, item) => total + item.price.amount * item.quantity, 0).toFixed(2);

   return (
      <div className="w-full h-auto flex flex-col items-start justify-between gap-5">
         <div className="w-full flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold mb-4">Cart({totalItems})</h1>
            <button
               className="w-auto h-9 flex items-center justify-between gap-2 bg-b-light-gray p-3 rounded-full cursor-pointer group hover:bg-red-500 transition-colors duration-300"
               onClick={() => clearCart()}
            >
               <Image
                  src="/icons/trash.svg"
                  width={14}
                  height={14}
                  alt="Clear Cart"
                  className="fill-none text-sm group-hover:fill-b-white transition-colors duration-300"
               />
               <span className="font-archivo font-medium text-xs text-b-dark-gray group-hover:text-b-white md:text-sm">
                  Clear Cart
               </span>
            </button>
         </div>
         {/* Here you would map through cart items and display them */}
         <div className="w-full flex flex-col items-start justify-between gap-2">
            <div className="w-full flex items-center justify-between pb-2 border-b-2 border-b-light-gray">
               <span className="w-full max-w-[308px] font-archivo font-medium text-b-dark-gray text-sm">
                  Product
               </span>
               <div className="w-full max-w-[335px] flex items-center justify-between">
                  <span className="ml-0 font-archivo font-medium text-b-dark-gray text-sm md:ml-10">
                     Quantity
                  </span>
                  <span className="max-w-28 font-archivo font-medium text-right text-b-dark-gray text-sm">
                     Price
                  </span>
               </div>
            </div>
            <div className="w-full flex flex-col gap-4">
               {cartItems.map((item) => (
                  <CartProduct
                     key={`${item.handle}-${item.size}`}
                     item={item}
                  />
               ))}
            </div>
         </div>
      </div>
   );
};
