import { HamburgerProps } from "@/types";
import Image from "next/image";

export const Hamburger = ({ isOpen, onClick }: HamburgerProps) => {
   return (
      <div
         className="flex items-center justify-center size-10 transition-all duration-300 ease-in-out cursor-pointer"
         onClick={onClick}
         role="button"
         aria-label={isOpen ? "Close menu" : "Open menu"}
         aria-expanded={isOpen}
         aria-roledescription="Hamburger menu"
      >
         <Image
            src={`/icons/menu-${isOpen ? "close" : "open"}.svg`}
            alt="Hamburger Menu"
            width={42}
            height={24}
            className="w-auto h-auto"
            priority={false}
         />
      </div>
   );
};
