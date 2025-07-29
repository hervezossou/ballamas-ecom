import { ProductSize } from "@/types";
import { SizeBadge } from "../atoms/SizeBadge";

const productSizes: ProductSize[] = ["XS", "S", "M", "L", "XL"];

interface SizePickerProps {
   productSize: ProductSize;
   onSelect: (size: ProductSize) => void;
}

export const SizePicker = ({ productSize, onSelect }: SizePickerProps) => {
   return (
      <div className="flex flex-wrap gap-2.5">
         {productSizes.map((size) => (
            <SizeBadge
               key={size}
               size={size}
               isSelected={size === productSize}
               onSelect={() => onSelect(size)}
               variant="large"
            />
         ))}
      </div>
   );
};
