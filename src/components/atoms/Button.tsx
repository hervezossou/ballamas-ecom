import clsx from "clsx";
import Image from "next/image";

interface ButtonProps {
   variant: "filled" | "outlined";
   color?: "black" | "white";
   label?: string;
   icon?: string;
   iconAlt?: string;
   size: "small" | "large";
   layout?: "default" | "reverse";
   className?: string;
   onClick?: () => void;
}

const baseStyles = `flex items-center justify-center gap-[6px] rounded-full cursor-pointer transition-colors duration-300 font-semibold`;

const heightStyles = {
   small: "h-11",
   large: "h-[68px]",
};

const labelStyles = {
   small: "text-sm",
   large: "text-lg",
};

const layoutStyles = {
   default: "flex-row",
   reverse: "flex-row-reverse",
};

export const Button = ({
   variant = "filled",
   color = "white",
   label,
   icon,
   iconAlt,
   size = "small",
   layout = "default",
   className,
   onClick,
}: ButtonProps) => {
   const hasIcon = Boolean(icon);
   const hasLabel = Boolean(label);
   const isIconOnly = hasIcon && !hasLabel;

   const getWidthStyles = () => {
      if (isIconOnly) {
         return size === "small" ? "w-11" : "w-[68px]";
      }
      if (hasIcon && hasLabel) {
         return size === "small"
            ? "w-[154px] px-5 py-3"
            : "w-[180px] px-5 py-3";
      }
      return size === "large" ? "w-[180px] px-5 py-3" : "w-auto px-5 py-4";
   };

   const widthStyles = getWidthStyles();

   const variantStyles = {
      filled: `${color === "black" ? "bg-b-black text-b-white hover:bg-b-black/90" : "bg-b-white text-b-black hover:bg-b-white/90"}`,
      outlined: `${color === "black" ? "bg-transparent text-b-black border-2 border-b-black hover:bg-b-green hover:border-none hover:text-b-white" : "bg-transparent text-b-white border-2 border-b-white"}`,
   };

   return (
      <button
         className={clsx(
            baseStyles,
            variantStyles[variant],
            heightStyles[size],
            layoutStyles[layout],
            widthStyles,
            className
         )}
         onClick={onClick}
      >
         {icon && (
            <Image
               src={icon}
               alt={iconAlt || "Button Icon"}
               width={20}
               height={20}
               className="shrink-0"
            />
         )}
         {label && (
            <span className={clsx(labelStyles, "text-nowrap tracking-tight")}>
               {label}
            </span>
         )}
      </button>
   );
};
