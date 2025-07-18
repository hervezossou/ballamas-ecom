"use client";

import { useEffect, useState } from "react";
import { getProductById } from "@/lib/products";
import { Product } from "@/types";
import { ProductDetails } from "./ProductDetails";
import { ProductDetailsSkeleton } from "../skeletons/ProductDetailsSkeleton";
import { buildShopifyGlobalId } from "@/lib/utils/shopifyId";

interface ProductCardWrapperProps {
   id: string;
}

export const ProductDetailsWrapper = ({ id }: ProductCardWrapperProps) => {
   const [product, setProduct] = useState<Product | null>(null);
   const globalId = buildShopifyGlobalId(id, "Product");

   useEffect(() => {
      async function fetchProduct() {
         const data = await getProductById(globalId);
         setProduct(data);
      }

      fetchProduct();
   }, [id]);

   if (!product) return <ProductDetailsSkeleton />;

   return <ProductDetails product={product} />;
};
