import { ProductSize } from "@/types";
import { SizeBadge } from "../atoms/SizeBadge";
import { useMediaQuery } from "@/lib/utils";

const productSizes: ProductSize[] = ["XS", "S", "M", "L", "XL"];

interface SizePickerProps {
   productSize: ProductSize;
   onSelect: (size: ProductSize) => void;
}

export const SizePicker = ({ productSize, onSelect }: SizePickerProps) => {
   const isMobile = useMediaQuery("(max-width: 768px)");

   return (
      <div className="flex flex-wrap gap-2.5">
         {productSizes.map((size) => (
            <SizeBadge
               key={size}
               size={size}
               isSelected={size === productSize}
               onSelect={() => onSelect(size)}
               variant={`${isMobile ? "small" : "large"}`}
            />
         ))}
      </div>
   );
};
