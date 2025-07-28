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
    const { onIncrement, onDecrement, removeItem } = useCartStore((state) => ({
        onIncrement: state.increment,
        onDecrement: state.decrement,
        removeItem: state.removeItem
    }));

    const totalPrice = (item.price.amount * item.quantity).toFixed(2);

    return (
        <div className="flex items-center justify-between gap-4 p-4 border-b border-b-light-gray">
            <CartItemCard
                image={item.featuredImage.url}
                title={item.title}
                price={item.price.amount}
                color={item.color}
                size={item.size}
            />
            <div className="flex items-center">
                <QuantityStepper 
                    handle={item.handle}
                    initialQuantity={item.quantity} 
                    onIncrement={() => onIncrement(item.handle)} 
                    onDecrement={() => onDecrement(item.handle)} 
                />
                <button 
                    className="size-11 flex items-center justify-center gap-2 bg-b-light-gray p-3 rounded-full"
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
            <div className="flex items-center w-full maxw-w-28">
                <span className="font-archivo font-semibold text-xs text-b-black md:text-sm">
                    {totalPrice}
                </span>
            </div>
        </div>
    )
}