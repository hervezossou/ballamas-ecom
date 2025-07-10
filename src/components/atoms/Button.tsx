import clsx from "clsx";
import Image from "next/image";

interface ButtonProps {
    label?: string;
    showIcon?: boolean;
    variant: "filled" | "outlined"
    size: "small" | "large";
    layout: "default" | "reverse";
    onClick?: () => void;
}

const baseStyles = `flex items-center justify-center gap-[6px] px-5 py-3 rounded-full cursor-pointer transition-colors duration-300 font-sans font-semibold`;

const variantStyles = {
    filled: "bg-b-black text-b-white",
    outlined: "bg-b-white text-b-black border-2 border-b-black",
};

const sizeStyles = {
    small: "h-11 text-sm",
    large: "h-[68px] text-lg",
};

const layoutStyles = {
    default: "flex-row",    
    reverse: "flex-row-reverse",
};

export const Button = ({ label, showIcon, variant, size, layout, onClick }: ButtonProps) => {

    const widthClass =
        showIcon && size === "small" && label !== ""
            ? "w-[154px]"
            : showIcon && label === "" && size === "small"
            ? "w-11"
            : showIcon && label === "" && size === "large"
            ? "w-[68px]"
            : size === "large"
            ? "w-[180px]"
            : "w-[128px]";

    return (
        <button 
            className={clsx(baseStyles, variantStyles[variant], sizeStyles[size], layoutStyles[layout], widthClass)}
            onClick={onClick}
        >
            {showIcon && 
                <Image 
                    src={`/icons/${variant === "filled" ? "circle-white" : "circle-black"}.svg`} 
                    alt="Circle Icon" 
                    width={20} 
                    height={20} 
                    className="w-auto h-auto shrink-0"
                />
            }
            {label && <span className="text-nowrap tracking-tight">{label}</span>}
        </button>
    )
}