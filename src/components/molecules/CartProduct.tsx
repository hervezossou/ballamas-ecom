import { CartItemCard } from "../atoms/CartItemCard"
import { QuantityStepper } from "../atoms/QuantityStepper";
import { CartItem } from "@/types"
import Image from "next/image";

import { useCartStore } from "@/lib/store";

interface CartItemProps {
    item: CartItem;
}
// This component will display each item in the cart, including its image, title, color,

export const CartProduct = ({ item }: CartItemProps) => {
    const increment = useCartStore((state) => state.increment);
    const decrement = useCartStore((state) => state.decrement);
    const removeItem = useCartStore((state) => state.removeItem);

    const totalPrice = (item.price.amount * item.quantity).toFixed(2);

    return (
        <div className="w-full flex items-center justify-between gap-4 py-4 border-b-2 border-b-light-gray">
            <CartItemCard
                image={item.featuredImage.url}
                title={item.title}
                price={item.price.amount}
                color={item.color}
                size={item.size}
            />
            <div className="w-[335px] flex items-center justify-between gap-28">
                <div className="flex items-center gap-2">
                    <QuantityStepper 
                        handle={item.handle}
                        initialQuantity={item.quantity} 
                        onIncrement={() => increment(item.handle)} 
                        onDecrement={() => decrement(item.handle)} 
                    />
                    <button 
                        className="size-11 flex items-center justify-center gap-2 bg-b-light-gray p-3 rounded-full cursor-pointer"
                        aria-description="Remove Item"
                        onClick={() => removeItem(item.handle)}
                    >
                        <Image 
                            src="/icons/trash.svg" 
                            width={20} 
                            height={20}
                            alt="Remove Item"
                        />
                    </button>
                </div>
                <div className="flex items-center w-28">
                    <span className="font-archivo font-semibold text-xs text-b-black md:text-sm">
                        ${totalPrice}
                    </span>
                </div>
            </div>
        </div>
    )
}