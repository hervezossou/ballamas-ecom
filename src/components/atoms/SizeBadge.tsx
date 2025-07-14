import { ProductSize } from "@/types";
import clsx from "clsx";
import { useState } from "react";

interface SizeBadgeProps {
   size: ProductSize;
   isSelected?: boolean;
   onSelect?: () => void;
   variant: "small" | "large";
}

export const SizeBadge = ({ size, isSelected, onSelect, variant }: SizeBadgeProps) => {
   const baseStyles = `flex items-center justify-center p-3.5 rounded-full cursor-pointer transition-all font-medium ${isSelected ? "bg-b-black text-b-white" : "bg-none text-b-black border-2 border-b-black"} duration-300 ease-in-out`;

   const variantStyles = {
      small: "w-[55px] h-[42px] text-xl leading-[28px]",
      large: "w-[75px] h-[52px] text-2xl leading-[32px]",
   };

   return (
      <button
         className={clsx(baseStyles, variantStyles[variant])}
         onClick={onSelect}
         type="button"
         aria-pressed={isSelected}
         aria-label={`Size ${size} ${isSelected ? "selected" : "not selected"}`}
      >
         <span
            className={clsx(
               variantStyles[variant],
               "flex items-center justify-center"
            )}
         >
            {size}
         </span>
      </button>
   );
};
