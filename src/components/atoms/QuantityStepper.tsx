import Image from "next/image";

interface QuantityStepperProps {
   handle: string; // handle of the product
   initialQuantity: number;
   onIncrement: (handle: string) => void;
   onDecrement: (handle: string) => void;
}

export const QuantityStepper = ({
   handle,
   initialQuantity,
   onIncrement,
   onDecrement,
}: QuantityStepperProps) => {
   return (
      <div className="w-[124px] h-11 flex items-center justify-center gap-6 bg-b-light-gray p-3 rounded-4xl">
         <button
            onClick={() => onDecrement(handle)}
            disabled={initialQuantity <= 1}
            className="flex items-center justify-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
         >
            <Image
               src="/icons/remove.svg"
               alt="Decrement"
               width={20}
               height={20}
            />
         </button>
         <span className="font-archivo font-medium text-b-black text-xs md:text-sm">
            {initialQuantity}
         </span>
         <button
            onClick={() => onIncrement(handle)}
            className="flex items-center justify-center cursor-pointer"
         >
            <Image
               src="/icons/plus.svg"
               alt="Increment"
               width={20}
               height={20}
            />
         </button>
      </div>
   );
};
