"use client"

import { useCartStore } from "@/lib/store"

export default function CartPage() {
    const { cartItems } = useCartStore();
    const totalItems: number = cartItems.length;
    
    return (
        <>
            <div className="w-full max-w-[1200px] flex flex-col items-center justify-between gap-8 min-h-screen p-4 xl:flex-row xl:items-start xl:justify-between xl:gap-12 xl:py-12">
                <section>
                    <h1 className="text-2xl font-bold mb-4">
                        Cart({totalItems})
                    </h1>
                    {/* Here you would map through cart items and display them */}
                </section>
                <section>
                    <h3 className="text-2xl font-bold mb-4">
                        Order Summary
                    </h3>
                </section>
            </div>
        </>
    )
}