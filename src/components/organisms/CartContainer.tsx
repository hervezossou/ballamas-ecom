"use client";

import { useCartStore } from "@/lib/store";
import { CartProduct } from "../molecules/CartProduct";
import Image from "next/image";

export const CartContainer = () => {
    const cartItems = useCartStore((state) => state.cartItems);
    const totalItems = cartItems.length;
    //const totalPrice = cartItems.reduce((total, item) => total + item.price.amount * item.quantity, 0).toFixed(2);

    return (
        <div className="container w-full max-w-[873px h-auto flex flex-col items-start justify-between gap-5">
            <div className="w-full flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold mb-4">
                    Cart({totalItems})
                </h1>
                <button className="w-auto h-9 flex items-center justify-between gap-2 bg-b-light-gray p-3 rounded-full cursor-pointer group hover:bg-b-gray transition-colors duration-300">
                    <Image 
                        src="/icons/trash.svg" 
                        width={16} 
                        height={16} 
                        alt="Clear Cart"
                        className="text-b-dark-gray text-sm hover:text-b-black transition-colors duration-300"
                    />
                    <span className="font-archivo font-medium text-xs text-b-dark-gray group-hover:text-b-black md:text-sm">
                        Clear Cart
                    </span>
                </button>
            </div>
            {/* Here you would map through cart items and display them */}
            <div className="w-full flex flex-col gap-4">
                {cartItems.map((item) => (
                    <CartProduct key={item.handle} item={item} />
                ))}
            </div>
        </div>
    )
}