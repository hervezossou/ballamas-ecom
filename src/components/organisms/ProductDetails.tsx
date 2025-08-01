"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SizePicker } from "../molecules/SizePicker";
import { ColorBox } from "../atoms/ColorBox";
import { Button } from "../atoms/Button";

import { Product } from "@/types";
import { ProductColor, ProductSize } from "@/types";
import { mapProductToCartItem } from "@/lib/mappers";
import { useCartStore } from "@/lib/store";

interface ProductDetailsProps {
   product: Product;
}

export const ProductDetails = ({ product }: ProductDetailsProps) => {
   const colors: ProductColor[] = ["ocean", "olive", "purple", "green"];
   const [selectedColor, setSelectedColor] = useState<ProductColor>(colors[0]);
   const [selectedSize, setSelectedSize] = useState<ProductSize>("XS");

   const productHandle = product.handle;
   const addItem = useCartStore((state) => state.addItem);
   const router = useRouter();

   const handleAddToCart = () => {
      const cartProduct = mapProductToCartItem(
         product,
         1,
         selectedSize,
         selectedColor
      );
      addItem(cartProduct);
   };

   const handleBuyNow = () => {
      handleAddToCart();
      router.push("/checkout");
   };

   return (
      <div
         id={productHandle}
         className="flex flex-col items-start justify-center gap-8 lg:h-[600px] lg:flex-row lg:gap-10.5"
      >
         <div className="flex flex-col items-center h-full justify-center gap-4 rounded-4xl lg:w-[579px]">
            <Image
               src={product.featuredImage.url}
               alt={`${product.title} image`}
               width={579}
               height={600}
               className="object-cover h-full rounded-4xl"
            />
         </div>
         <div className="flex flex-col items-start justify-between gap-4 lg:w-1/2 lg:gap-5.5">
            <div className="flex flex-col gap-4 h-[410px] lg:gap-5">
               <div className="flex flex-col gap-2 md:gap-3 lg:gap-4.5">
                  <h3 className="text-3xl font-chillax font-semibold md:text-[42px]">
                     {product.title}
                  </h3>
                  <p className="text-b-black text-2xl font-archivo font-semibold md:text-4xl">
                     {product.price.currencyCode} ${product.price.amount}
                  </p>
                  <div className="flex flex-col gap-2 lg:gap-3">
                     <h3 className="text-xl font-archivo font-medium text-b-black md:text-3xl">
                        Color:{" "}
                        <span className="capitalize">{selectedColor}</span>
                     </h3>
                     <div className="flex items-center justify-start gap-4">
                        {colors.map((color) => (
                           <ColorBox
                              key={color}
                              color={color as ProductColor}
                              isSelected={selectedColor === color}
                              onSelect={(color) =>
                                 setSelectedColor(color as ProductColor)
                              }
                           />
                        ))}
                     </div>
                  </div>
                  <div className="flex flex-col gap-2 lg:gap-3">
                     <h3 className="text-xl font-archivo font-medium text-b-black md:text-3xl">
                        Size:
                     </h3>
                     <SizePicker
                        productSize={selectedSize}
                        onSelect={(selectedSize) =>
                           setSelectedSize(selectedSize)
                        }
                     />
                  </div>
               </div>
               <div className="flex w-[579px] items-center gap-2">
                  <Button
                     variant="filled"
                     color="black"
                     label="BUY NOW"
                     size="large"
                     className="w-full"
                     onClick={(e) => {
                        e.stopPropagation();
                        handleBuyNow();
                     }}
                  />
                  <Button
                     variant="outlined"
                     color="black"
                     label="ADD TO CART"
                     size="large"
                     className="w-full"
                     onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart();
                     }}
                  />
               </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-2 lg:gap-3.5">
               <h3 className="text-b-black text-2xl font-medium font-chillax md:text-3xl lg:font-semibold lg:text-3xl">
                  Description
               </h3>
               <p className="text-b-dark-gray tracking-[-4%] text-justify text-sm md:text-lg">
                  {product.description}
               </p>
            </div>
         </div>
      </div>
   );
};
