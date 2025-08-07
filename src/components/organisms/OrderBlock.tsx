"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "../atoms/Button";
import { InputField } from "../atoms/InputField";

export const OrderBlock = () => {
   const [discountCode, setDiscountCode] = useState("");

   return (
      <div className="flex flex-col items-start gap-4 w-full">
         <section className="flex flex-col items-start gap-1">
            <h3 className="font-archivo font-semibold text-sm md:text-base xl:text-lg">
               Your Order
            </h3>
            <p className="font-archivo font-medium text-xs text-b-dark-gray md:text-sm">
               By placing your order, you agree to Ballamas{" "}
               <Link
                  href="#"
                  className="text-b-black underline cursor-pointer hover:opacity-60"
               >
                  Privacy
               </Link>{" "}
               and{" "}
               <Link
                  href="#"
                  className="text-b-black underline cursor-pointer hover:opacity-60"
               >
                  Policy
               </Link>
            </p>
         </section>
         <div className="w-full flex flex-col items-start gap-2">
            <div></div>
            <div className="w-full flex flex-col items-start gap-2">
               <div className="flex flex-col items-start justify-between w-full gap-1">
                  <h4 className="font-archivo font-medium text-b-black text-xs md:text-sm">
                     Discount Code
                  </h4>
                  <form className="flex items-center gap-1 w-[335px] md:w-md md:gap-2">
                     <InputField
                        type="text"
                        value={discountCode}
                        label="Discount Code"
                        placeholder="Add discount code"
                        name="discount-code"
                        color="black"
                        onChange={(e) => setDiscountCode(e.target.value)}
                     />
                     <Button
                        variant="filled"
                        size="small"
                        color="black"
                        label="Apply"
                     />
                  </form>
               </div>
               <p className="font-archivo font-medium text-xs text-b-dark-gray md:text-sm">
                  <span className="text-b-black">New customer?</span>{" "}
                  <Link
                     href="#"
                     className="text-b-black underline hover:opacity-80"
                  >
                     Signup
                  </Link>{" "}
                  to get better offer.
               </p>
            </div>
            <div className="flex flex-col items-start w-full mt-2">
               <div className="flex flex-col items-start justify-between gap-2 w-full">
                  <div className="flex items-center justify-between w-full gap-8">
                     <h3 className="font-archivo font-medium text-sm text-b-dark-gray md:text-base">
                        Subtotal
                     </h3>
                     <h3 className="font-archivo font-medium text-sm text-b-dark-gray md:text-base">
                        $524.00
                     </h3>
                  </div>
                  <div className="flex items-center justify-between w-full gap-8">
                     <h3 className="font-archivo font-medium text-sm text-b-dark-gray md:text-base">
                        Discount
                     </h3>
                     <h3 className="font-archivo font-medium text-sm text-b-dark-gray md:text-base">
                        $0
                     </h3>
                  </div>
               </div>
               <div className="w-full h-0.5 bg-b-light-gray my-4" />
               <div className="w-full flex items-center justify-between gap-8">
                  <h3 className="font-archivo font-semibold text-sm text-b-black md:text-base">
                     Order total
                  </h3>
                  <h3 className="font-archivo font-semibold text-sm text-b-black md:text-base">
                     $524.00
                  </h3>
               </div>
            </div>
         </div>
      </div>
   );
};
