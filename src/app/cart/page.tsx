"use client"

import { useCartStore } from "@/lib/store"
import { Button } from "@/components/atoms/Button";
import { useRouter } from "next/navigation";
import { OrderSummary } from "@/components/molecules/OrderSummary";
import { CartContainer } from "@/components/organisms/CartContainer";

export default function CartPage() {
    const router = useRouter();

    const cartItems = useCartStore((state) => state.cartItems);
    const totalItems = cartItems.length;
    const isEmpty:boolean = totalItems === 0;

    const handleGoToShop = () => {
        router.push("/collections");
    };
    
    return (
        <>
            {isEmpty ? 
                <div className="container flex flex-col items-center justify-center mt-40 text-center">
                    <h2 className="font-archivo font-bold text-2xl mb-4 md:text-4xl xl:text-6xl">
                        Your cart is empty
                    </h2>
                    <p className="text-b-dark-gray my-2 text-sm md:text-base">
                        🛒 Looks like you haven’t added anything yet.
                    </p>
                    <Button 
                        className="mt-4 px-10 py-6" 
                        label="Go to Shop"
                        variant="filled"
                        color="black"
                        size="small"
                        onClick={handleGoToShop}
                    />
                </div>
            :   <div className="container w-full max-w-[1200px] flex flex-col items-center justify-between gap-2 min-h-screen py-20 lg:flex-row lg:items-start xl:justify-between lg:gap-4">
                    <CartContainer />
                    <OrderSummary />
                </div>
            }
        </>
    )
}