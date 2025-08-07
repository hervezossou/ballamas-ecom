import { ShippingMethod } from "@/types";

interface ShippingCardProps {
   method: ShippingMethod;
   isSelected: boolean;
   onSelect: (id: string) => void;
}

export const ShippingCard = ({
   method,
   isSelected,
   onSelect,
}: ShippingCardProps) => {
   return (
      <div
         className="w-full h-max flex items-center justify-between p-3 border border-b-light-gray rounded-xl cursor-pointer"
         onClick={() => onSelect(method.id)}
      >
         <div className="flex items-center gap-2 w-full max-w-[278px]">
            <input
               type="radio"
               id={method.id}
               name="shipping"
               value={method.id}
               checked={isSelected}
               onChange={() => onSelect(method.id)}
               className="mt-1 accent-b-black border-b-dark-gray checked:border-b-b-black checked:outline-none"
            />
            <label
               htmlFor={method.title}
               className="flex flex-col items-start gap-1"
            >
               <h4 className="font-archivo font-medium text-b-black text-xs md:text-sm xl:text-base">
                  {method.title}
               </h4>
               <p className="font-archivo text-[10px] text-b-dark-gray md:text-xs">
                  {method.description}
               </p>
            </label>
         </div>
         <span className="font-archivo font-medium text-b-black text-xs md:text-sm xl:text-base">
            ${method.cost}
         </span>
      </div>
   );
};
