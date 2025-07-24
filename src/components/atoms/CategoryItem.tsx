import clsx from "clsx";
import { Category } from "@/types";

interface CategoryItemProps {
   category: Category;
   isSelected: boolean;
   onSelect: (category: string) => void;
}

export const CategoryItem = ({
   category,
   isSelected,
   onSelect,
}: CategoryItemProps) => {
   const selectedStyles = isSelected
      ? "bg-b-black text-b-white"
      : "bg-b-white text-b-black border-2 border-b-black";

   const baseStyles =
      "w-max h-12 flex items-center justify-between gap-2 px-4 py-3 rounded-full cursor-pointer transition-colors duration-300 font-medium";

   return (
      <button
         className={clsx(baseStyles, selectedStyles)}
         onClick={() => onSelect(category.label.toLowerCase())}
         type="button"
         aria-pressed={isSelected}
         aria-label={`Category ${category} ${isSelected ? "selected" : "not selected"}`}
      >
         <span className="text-xl">{category.label}</span>
         <span className="text-base">{category.quantity}</span>
      </button>
   );
};
