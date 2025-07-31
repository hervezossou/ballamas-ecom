"use client";

import { ProductDetailsWrapper } from "@/components/organisms/ProductDetailsWrapper";
import { CollectionProducts } from "@/components/organisms/CollectionProducts";

interface ProductPageProps {
   handle: string;
}

export default function ProductPage({ handle }: ProductPageProps) {
   const productHandle = handle as string;

   return (
      <>
         {/* Product details page content goes here */}
         <section className="w-full flex items-center justify-center pt-10 lg:pt-16">
            <ProductDetailsWrapper handle={productHandle} />
         </section>
         <section className="w-full max-w-[1200px] flex flex-col items-start justify-between gap-4 py-8 lg:py-12 lg:gap-8">
            <h2 className="font-chillax font-semibold text-2xl lg:text-3xl">
               You may also like
            </h2>
            <div className="w-full flex self-stretch flex-col items-center justify-between gap-2 md:flex-row md:overflow-hidden lg:gap-3.5">
               <CollectionProducts />
            </div>
         </section>
      </>
   );
}
