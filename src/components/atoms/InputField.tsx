import Image from "next/image";

type InputType = "text" | "email" | "password";
type IconPosition = "left" | "right";

interface InputProps {
    type: InputType;
    value: string;
    label: string;
    name: string;
    placeholder?: string;
    iconPosition?: IconPosition;
    icon?: string;
    color: "black" | "white";
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField = ({ type, value, label, name, placeholder, iconPosition, icon, color = "white", onChange }: InputProps) => {
    return (
        <div className={`w-full max-w-xs flex items-center bg-transparent gap-2 px-3.5 rounded-full font-archivo h-11 border ${color === "black" ? "border-b-dark-gray" : "border-b-white"} focus-within:border-2 focus-within:border-emerald-600`}>
            <label 
                htmlFor={name} 
                className={`block sr-only ${color === "black" ? "text-b-black" : "text-b-white"} text-sm font-medium`}
            >
                {label}
            </label>
            {icon && iconPosition === "left" && (<Image 
                src={icon} 
                width={20} 
                height={20} 
                alt="custom icon" 
            />)}
            <input
                type={type}
                name={name}
                id={label}
                value={value}
                className={`w-full h-full not-autofill:shadow-none bg-transparent outline-none ${color === "black" ? "placeholder:text-b-black text-b-black" : "text-b-white placeholder:text-b-white"} text-sm`}
                placeholder={placeholder}
                onChange={onChange}
            />
            {icon && iconPosition === "right" && (<Image 
                src={icon} 
                width={20} 
                height={20} 
                alt="custom icon" 
            />)}
        </div>
    )
}