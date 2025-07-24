"use client"
import { Category } from "@/types";
import { CategoryItem } from "../atoms/CategoryItem";
import { useCategoryStore } from "@/lib/store";

const categories: Category[] = [
   { label: "All", quantity: 132 },
   { label: "Accessories", quantity: 13 },
   { label: "Featured", quantity: 67 },
   { label: "Unisex", quantity: 52 },
];

export const CategoriesFilter = () => {
   const { selectedCategory, setSelectedCategory } = useCategoryStore()

   return (
      <div className="flex flex-wrap gap-2.5">
         {categories.map((category) => (
            <CategoryItem
               key={category.label}
               category={category}
               isSelected={selectedCategory === category.label.toLowerCase()}
               onSelect={setSelectedCategory}
            />
         ))}
      </div>
   );
};
