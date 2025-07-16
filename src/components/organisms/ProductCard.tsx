"use client";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { Product } from "@/types";
import { PromoBadge } from "../atoms/PromoBadge";
import { Button } from "../atoms/Button";

interface ProductCardProps {
   product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
   const [isVisible, setIsVisible] = useState(false);

   return (
      <motion.div
         id={product.id}
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 3, ease: "easeInOut" }}
         className="flex flex-col gap-4"
      >
         <div
            className="relative h-full flex items-center justify-center rounded-4xl"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
         >
            <Image
               src={product.featuredImage.url}
               width={322.67}
               height={405}
               alt={`${product.title} image`}
               className="object-cover"
            />
            <AnimatePresence initial={false}>
               {isVisible && (
                  <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     className="absolute inset-0 flex flex-col justify-between bg-b-black/50 p-4.5 rounded-4xl"
                  >
                     <PromoBadge variant="light" />
                     <div className="flex items-center gap-1">
                        <Button
                           variant="filled"
                           color="white"
                           label="ADD TO CART"
                           icon="/icons/cart.svg"
                           size="small"
                           className="font-mono"
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
            <h3 className="text-3xl uppercase font-archivo font-semibold">
               {product.title}
            </h3>
            <p className="text-b-dark-gray text-xl font-archivo font-semibold md:text-3xl">
               ${product.price.amount}
            </p>
         </div>
      </motion.div>
   );
};
