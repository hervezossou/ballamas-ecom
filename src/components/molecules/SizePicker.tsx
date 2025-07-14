import { useState } from "react";
import { ProductSize } from "@/types";
import { SizeBadge } from "../atoms/SizeBadge";

const productSizes: ProductSize[] = ["XS", "S", "M", "L", "XL"];

export const SizePicker = () => {
    const [selectedSize, setSelectedSize] = useState<ProductSize>(productSizes[0]);

    return (
        <div className="flex flex-wrap gap-2.5">
            {productSizes.map((size) => (
                <SizeBadge 
                    key={size} 
                    size={size}
                    isSelected={selectedSize === size}
                    onSelect={() => setSelectedSize(size)} 
                    variant="large" 
                />
            ))}
        </div>
    )
}