"use client";

import { Button } from "../atoms/Button";
import { useCartStore } from "@/lib/store"
import { useRouter } from "next/navigation";

export const OrderSummary = () => {
    const cartItems = useCartStore((state) => state.cartItems);
    const totalPrice = cartItems.reduce((total, item) => total + item.price.amount * item.quantity, 0).toFixed(2);
    const discount = 0; // Replace with actual discount logic if needed

    const router = useRouter();

    const handleCheckout = () => {
        router.push("/checkout"); // Navigate to checkout page
    }

    return (
        <div className="w-[285px] flex flex-col gap-2 px-6 py-4 border border-b-light-gray shadow-md rounded-xl lg:gap-4">
            <h3 className="text-xl font-archivo font-semibold mb-4 lg:text-lg">Order Summary</h3>
            {/* Here you would map through cart items and display them */}
            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                    <div className="flex justify-between mb-2">
                        <span className="font-archivo font-medium text-b-dark-gray text-sm">
                            Subtotal
                        </span>
                        <span className="font-archivo font-medium text-b-dark-gray text-sm">
                            ${totalPrice}
                        </span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span className="font-archivo font-medium text-b-dark-gray text-sm">
                            Shipping
                        </span>
                        <span className="font-archivo font-medium text-b-dark-gray text-sm">
                            ${discount}
                        </span> 
                    </div>
                </div>
                <div className="w-full h-0.5 bg-b-light-gray"></div>
                <div className="flex flex-col gap-2">
                    <div className="w-full flex justify-between">
                        <span className="font-archivo font-semibold text-b-black text-sm">
                            Total
                        </span>
                        <span className="font-archivo font-semibold text-b-black text-sm">
                            ${totalPrice + discount}
                        </span> {/* Replace with actual total */}
                    </div>
                    <Button 
                        label="Checkout now"
                        variant="filled"
                        color="black"
                        size="large"
                        className="w-full mt-2"
                        onClick={handleCheckout}
                    />
                </div>
            </div>
        </div>
    )
}