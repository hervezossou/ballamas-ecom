"use client";

import { useState, useEffect, use } from "react";
import { CollectionCard } from "@/components/molecules/CollectionCard";
import { CollectionCardSkeleton } from "@/components/skeletons/CollectionCardSkeleton";
import { Collection } from "@/types";
import { getAllCollections } from "@/lib/products";

export default function CollectionsPage() {
   const [collections, setCollections] = useState<Collection[]>([]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const fetchCollections = async () => {
         try {
            setIsLoading(true);
            const fetchedCollections = await getAllCollections(10);
            if (fetchedCollections) {
               setCollections(fetchedCollections || []);
            }
         } catch (error) {
            console.error("Error fetching collections:", error);
         } finally {
            setIsLoading(false);
         }
      };

      fetchCollections();
   }, []);

   return (
      <>
         <div className="mt-8 w-full max-w-[1200px] flex flex-col items-start justify-between px-10">
            <h1 className="font-archivo font-bold text-2xl lg:text-4xl">
               Collections
            </h1>
            <p className="font-archivo text-sm md:text-base lg:text-lg">
               Explore our diverse collections of products.
            </p>
         </div>
         <div className="mx-auto w-full max-w-[1200px] grid grid-cols-1 items-center justify-center gap-4 py-12 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-12 lg:py-16">
            {isLoading
               ? Array.from({ length: 8 }).map((_, index) => (
                    <CollectionCardSkeleton key={index} />
                 ))
               : collections.map((collection) => (
                    <CollectionCard
                       key={collection.handle}
                       collection={collection}
                    />
                 ))}
         </div>
      </>
   );
}
