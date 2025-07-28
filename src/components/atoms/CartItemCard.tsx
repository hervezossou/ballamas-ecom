import Image from "next/image";
import { ProductSize } from "@/types";
import { mapSize } from "@/lib/utils/mapsize";

interface CartItemCardProps {
    title: string;
    image: string;
    color: string;
    size: ProductSize;
    price: number;
}

export const CartItemCard = ({ title, image, color, size, price }: CartItemCardProps) => {
    return (
        <div className="w-full max-w-[308px] h-18 flex items-start gap-2.5">
            <div className="w-18 h-18 flex items-center justify-center">
                <Image 
                    src={image}
                    alt={title}
                    width={60}
                    height={60}
                    className="size-18 object-cover rounded-lg"
                    aria-description="Product image"
                />
            </div>
            <div className="flex flex-col justify-between w-full max-w-[226px] h-15">
                <span className="font-archivo font-semibold text-xs md:text-sm">
                    {title}
                </span>
                <span className="font-archivo font-medium text-xs text-b-dark-gray">
                    {color.charAt(0).toUpperCase() + color.slice(1)}-{mapSize(size)}
                </span>
                <span className="font-archivo font-semibold text-xs md:text-sm">
                    ${price.toFixed(2)}
                </span>
            </div>
        </div>
    )
}