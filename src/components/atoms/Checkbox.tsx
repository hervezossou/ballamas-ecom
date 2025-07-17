import clsx from "clsx";
import Image from "next/image";

interface CheckboxProps {
   checked: boolean;
   onClick: () => void;
   className?: string;
}

export const Checkbox = ({ checked, className, onClick }: CheckboxProps) => {
   const baseStyles =
      "size-3.5 flex items-center justify-center p-0.75 border border-b-gray rounded-sm cursor-pointer lg:size-4.5 lg:p-0.5";
   const variantStyles = `${checked ? "bg-b-black" : "bg-transparent"} transition-all duration-300 ease-in-out`;

   return (
      <button
         className={clsx(baseStyles, variantStyles, className)}
         role="button"
         aria-label={checked ? "button checked" : "button not checked"}
         onClick={onClick}
      >
         {checked && (
            <Image
               src="/icons/check-icon.svg"
               alt="Check icon"
               width={8}
               height={6}
               className="size-auto"
            />
         )}
      </button>
   );
};
