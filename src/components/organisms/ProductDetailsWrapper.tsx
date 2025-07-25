"use client";

import { useEffect, useState } from "react";
import { getProductByHandle } from "@/lib/products";
import { Product } from "@/types";
import { ProductDetails } from "./ProductDetails";
import { ProductDetailsSkeleton } from "../skeletons/ProductDetailsSkeleton";

interface ProductCardWrapperProps {
   handle: string;
}

export const ProductDetailsWrapper = ({ handle }: ProductCardWrapperProps) => {
   const [product, setProduct] = useState<Product | null>(null);

   useEffect(() => {
      async function fetchProduct() {
         const data = await getProductByHandle(handle);
         setProduct(data);
      }

      fetchProduct();
   }, [handle]);

   if (!product) return <ProductDetailsSkeleton />;

   return <ProductDetails product={product} />;
};
