"use client";

import { ProductDetailsWrapper } from "@/components/organisms/ProductDetailsWrapper";
import { YouMayAlsoLike } from "@/components/organisms/YouMayAlsoLike";

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
         <YouMayAlsoLike handle={productHandle} />
      </>
   );
}
