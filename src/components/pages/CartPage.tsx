"use client";

import { useCartStore } from "@/lib/store";
import { Button } from "@/components/atoms/Button";
import { useRouter } from "next/navigation";
import { OrderSummary } from "@/components/molecules/OrderSummary";
import { CartContainer } from "@/components/organisms/CartContainer";

export const CartPage = () => {
   const router = useRouter();

   const cartItems = useCartStore((state) => state.cartItems);
   const totalItems = cartItems.length;
   const isEmpty: boolean = totalItems === 0;

   const handleGoToShop = () => {
      router.push("/collections");
   };

   return (
      <>
         {isEmpty ? (
            <div className="flex flex-col items-center justify-center gap-20 mt-40 text-center">
               <div className="flex flex-col items-center gap-1 h-10">
                  <h2 className="font-archivo font-bold text-2xl md:text-4xl xl:text-6xl">
                     Your cart is empty!
                  </h2>
                  <p className="text-b-dark-gray text-sm md:text-base">
                     🛒 Looks like you haven't added anything yet.
                  </p>
               </div>
               <Button
                  className="px-10 py-6"
                  label="Go to Shop"
                  variant="filled"
                  color="black"
                  size="small"
                  onClick={handleGoToShop}
               />
            </div>
         ) : (
            <div className="mx-auto w-full flex flex-col items-center justify-center gap-10 py-10 lg:mx-0 xl:flex-row xl:items-start xl:py-15 xl:justify-between">
               <CartContainer />
               <OrderSummary />
            </div>
         )}
      </>
   );
};
