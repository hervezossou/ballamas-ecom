"use client";

import { getCollectionByHandle } from "@/lib/products";
import { useState, useEffect } from "react";
import { Product } from "@/types";
import { ProductCard } from "@/components/molecules/ProductCard";
import { ProductCardSkeleton } from "@/components/skeletons/ProductCardSkeleton";

export default function CollectionProductsPage({ handle }: { handle: string }) {
   const collectionHandle = handle as string;

   const [products, setProducts] = useState<Product[]>([]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const fetchCollection = async () => {
         try {
            setIsLoading(true);
            const collection = await getCollectionByHandle(collectionHandle);
            const fetchedProducts = collection?.products;
            if (fetchedProducts) {
               setProducts(fetchedProducts || []);
               setIsLoading(false);
            }
         } catch (error) {
            console.error("Error fetching collection:", error);
         } finally {
            setIsLoading(false);
         }
      };

      fetchCollection();
   }, [collectionHandle]);

   return (
      <section className="mx-auto flex flex-col items-start justify-between py-10 gap-10 lg:py-16">
         <h1 className="font-archivo font-bold text-2xl lg:ml-20 lg:text-4xl">
            Collection: {collectionHandle.toUpperCase()}
         </h1>
         <div className="w-full max-w-[1200px] grid grid-cols-1 items-center justify-between gap-8 md:grid-cols-2 lg:px-20 xl:grid-cols-3">
            {isLoading
               ? Array.from({ length: 6 }).map((_, index) => (
                    <ProductCardSkeleton key={index} />
                 ))
               : products.map((product) => (
                    <ProductCard key={product.handle} product={product} />
                 ))}
         </div>
      </section>
   );
}
