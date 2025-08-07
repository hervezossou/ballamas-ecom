"use client";

import { useState } from "react";
import { ShippingMethod } from "@/types";
import { ShippingCard } from "../molecules/ShippingCard";

const shippingMethods: ShippingMethod[] = [
   {
      id: "free",
      title: "Free Shipping",
      description: "7-30 business days",
      cost: 0,
   },
   {
      id: "regular",
      title: "Regular Shipping",
      description: "3-14 business days",
      cost: 7.5,
   },
   {
      id: "express",
      title: "Express Shipping",
      description: "1-3 business days",
      cost: 22.5,
   },
];

export const ShippingMethods = () => {
   const [selectedMethod, setSelectedMethod] = useState<string>("regular");

   return (
      <div className="w-full flex flex-col items-start gap-4">
         <h3 className="font-archivo font-semibold text-b-black text-sm md:text-base xl:text-lg">
            Shipping Methods
         </h3>
         <div className="w-full flex flex-col justify-between gap-3">
            {shippingMethods.map((method) => (
               <ShippingCard
                  key={method.id}
                  method={method}
                  isSelected={method.id === selectedMethod}
                  onSelect={setSelectedMethod}
               />
            ))}
         </div>
      </div>
   );
};
