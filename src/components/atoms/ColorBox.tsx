import clsx from "clsx";
import { ProductColor } from "@/types";

interface ColorBoxProps {
   color: ProductColor;
   isSelected?: boolean;
   onSelect: (color: ProductColor) => void;
}

export const ColorBox = ({ color, isSelected, onSelect }: ColorBoxProps) => {
   const getColorStyles = (color: ProductColor) => {
      if (color === "ocean") {
         return "bg-b-ocean";
      }
      if (color === "olive") {
         return "bg-b-olive";
      }
      if (color === "purple") {
         return "bg-b-purple";
      }
      if (color === "green") {
         return "bg-b-green";
      }
   };

   const baseStyles =
      "size-6 rounded-full cursor-pointer transition-all duration-300 ease-in-out lg:size-8";

   const colorStyles = getColorStyles(color);

   return (
      <div
         className={clsx(baseStyles, colorStyles, {
            "ring-3 ring-b-black": isSelected,
         })}
         aria-label={`Color ${color} ${isSelected ? "selected" : "not selected"}`}
         aria-selected={isSelected}
         onClick={() => onSelect(color)}
      ></div>
   );
};
