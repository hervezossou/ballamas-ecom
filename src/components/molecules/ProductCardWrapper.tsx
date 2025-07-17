"use client";

import { useEffect, useState } from "react";
import { getProductById } from "@/lib/products";
import { Product } from "@/types";
import { ProductCard } from "./ProductCard";

interface ProductCardWrapperProps {
  id: string;
}

export const ProductCardWrapper = ({ id }: ProductCardWrapperProps) => {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      const data = await getProductById(id);
      setProduct(data);
    }

    fetchProduct();
  }, [id]);

  if (!product) return <div>Chargement...</div>;

  return <ProductCard product={product} />;
};
