import Image from "next/image";

interface PaymentMethodCardProps {
   selected: boolean;
   onSelect: () => void;
   icon: string;
   iconAlt: string;
   label: string;
   className?: string;
}

export const PaymentMethodCard = ({
   selected,
   onSelect,
   icon,
   iconAlt,
   label,
   className = "",
}: PaymentMethodCardProps) => {
   return (
      <div
         role="button"
         tabIndex={0}
         onClick={onSelect}
         onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
               e.preventDefault();
               onSelect();
            }
         }}
         className={`w-[159.5px] h-20 flex flex-col items-start gap-2 rounded-2xl border-2 lg:w-full ${
            selected ? "border-b-black" : "border-b-light-gray"
         } cursor-pointer transition-colors ease-in-out duration-300  p-2.5 ${className}`}
      >
         <Image
            src={icon}
            alt={iconAlt}
            width={24}
            height={24}
            className="flex-shrink-0 size-6"
         />
         <p className="font-archivo font-medium text-b-black text-xs md:text-sm lg:text-base">
            {label}
         </p>
      </div>
   );
};
