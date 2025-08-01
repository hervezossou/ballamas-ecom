"use client";

import { useState, useEffect } from "react";
import { ProductCard } from "../molecules/ProductCard";
import { ProductRecommendation } from "@/types";
import { getProductByHandle } from "@/lib/products";
import { getProductRecommendations } from "@/lib/products";

interface ProductRecommendationProps {
   handle: string;
}

export const YouMayAlsoLike = ({
   handle,
}: ProductRecommendationProps) => {
   const [products, setProducts] = useState<ProductRecommendation[] | null>([]);

   useEffect(() => {
      async function fecthRecommendations() {
         const data = await getProductByHandle(handle);
         if (!data) return;

         const recommendations = await getProductRecommendations(data.id);

         if (recommendations) {
            setProducts(recommendations);
            console.log("Recommandations :", recommendations);
         }
      }

      fecthRecommendations();
   }, [handle]);

   return (
      <section className="w-full flex flex-col items-start justify-between gap-4 py-10 lg:py-24 lg:gap-8">
         <h2 className="font-chillax font-semibold text-2xl lg:text-3xl">
            You may also like
         </h2>
         <div className="w-full flex self-stretch flex-col items-center justify-between gap-2 lg:flex-row lg:gap-8 lg:overflow-x-scroll scroll-snap-x scroll-snap-mandatory">
            {products ? (
               products.map((product) => (
                  <ProductCard key={product.handle} product={product} />
               ))
            ) : (
               <p>There is no recommendation for this product.</p>
            )}
         </div>
      </section>
   );
};
