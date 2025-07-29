"use client";

import { motion, AnimatePresence, color } from "motion/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Product, ProductSize } from "@/types";
import { PromoBadge } from "../atoms/PromoBadge";
import { Button } from "../atoms/Button";
import { mapProductToCartItem } from "@/lib/utils/mapProductToCartItem";
import { useCartStore } from "@/lib/store";

interface ProductCardProps {
   product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
   const [isVisible, setIsVisible] = useState(false);
   const productHandle = product.handle;
   const router = useRouter();
   const addItem = useCartStore((state) => state.addItem);

   const handleAddToCart = () => {
      const cartProduct = mapProductToCartItem(product, 1, "S", "olive");
      addItem(cartProduct);
   };

   return (
      <motion.div
         id={product.handle}
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 3, ease: "easeInOut" }}
         className="w-[322.67px] mx-auto flex flex-col gap-4 cursor-pointer"
         onClick={() => router.push(`/products/${productHandle}`)}
      >
         <div
            className="w-auto relative h-[405px] flex items-center justify-center rounded-4xl"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
         >
            <Image
               src={product.featuredImage.url}
               width={322.67}
               height={405}
               alt={`${product.title} image`}
               className="object-cover w-auto h-full rounded-4xl transition-all ease-in-out duration-300"
            />
            <AnimatePresence initial={false}>
               {isVisible && (
                  <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     className="absolute inset-0 w-[322.67px] h-full flex flex-col justify-between bg-b-black/50 p-4.5 rounded-4xl"
                  >
                     <PromoBadge variant="light" />
                     <div className="mx-auto flex items-center gap-1">
                        <Button
                           variant="filled"
                           color="white"
                           label="ADD TO CART"
                           icon="/icons/cart.svg"
                           size="small"
                           className="font-mono"
                           onClick={handleAddToCart}
                        />
                        <Button
                           variant="outlined"
                           color="white"
                           label="BUY NOW"
                           size="small"
                        />
                     </div>
                  </motion.div>
               )}
            </AnimatePresence>
         </div>
         <div className="flex flex-col gap-1">
            <h3 className="text-3xl uppercase font-archivo font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
               {product.title}
            </h3>
            <p className="text-b-dark-gray text-xl font-archivo font-semibold md:text-3xl">
               ${product.price.amount}
            </p>
         </div>
      </motion.div>
   );
};
