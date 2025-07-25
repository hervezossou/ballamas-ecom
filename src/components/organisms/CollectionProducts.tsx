"use client";

import { useState, useEffect } from "react";

import { CategoriesFilter } from "@/components/molecules/CategoriesFilter";
import { ProductCardSkeleton } from "../skeletons/ProductCardSkeleton";
import { ProductCard } from "../molecules/ProductCard";

import { useCategoryStore } from "@/lib/store";
import { Product } from "@/types";
import { getCollectionByHandle } from "@/lib/products";

export const CollectionProducts = () => {

    const { selectedCategory } = useCategoryStore();
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Fetch products based on selected category
        const fecthProducts = async () => {
            try {
                setIsLoading(true);
                if (selectedCategory === "all") {
                    // Fetch random products
                } else {
                    // Fetch products based on the selected category
                    const fetchedProducts = await getCollectionByHandle(selectedCategory, 9);
                    if (fetchedProducts) {
                        setProducts(fetchedProducts);
                    }
                    setIsLoading(false);
                }
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setIsLoading(false);
            }
        }

        fecthProducts();
    }, [isLoading, selectedCategory]);

    if (!products || products.length === 0) {
        return (
            <section className="flex flex-col items-center justify-between py-10 gap-10">
                <CategoriesFilter />

                {/* Skeleton Loader for Product Cards */}
                <div className="w-full max-w-[1200px] grid grid-cols-1 items-center justify-between gap-8 md:grid-cols-2 lg:px-20 xl:grid-cols-3">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <ProductCardSkeleton key={index} />
                    ))}
                </div>
            </section>
        )
    }

    return (
        <section className="flex flex-col items-center justify-between py-10 gap-10">
            {/* Category Filter */}
            <CategoriesFilter />
            <div className="w-full max-w-[1200px] grid grid-cols-1 items-center justify-between gap-8 md:grid-cols-2 lg:px-20 xl:grid-cols-3">
                {products.map((product) => (
                    <ProductCard 
                        key={product.id} 
                        product={product} 
                    />
                ))}
            </div>
        </section>
    )
}