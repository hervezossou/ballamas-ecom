import { create } from "zustand";

type CategoryStore = {
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
}

export const useCategoryStore = create<CategoryStore>((set) => ({
    selectedCategory: "all",
    setSelectedCategory: (category: string) => set({ selectedCategory: category }),
}))