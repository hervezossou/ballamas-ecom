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
    iconSrc?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField = ({ type, value, label, name, placeholder, iconPosition, iconSrc, onChange }: InputProps) => {
    return (
        <div className="w-full max-w-xs flex items-center bg-b-white gap-2 px-3.5 rounded-full font-archivo h-11 border border-b-dark-gray focus-within:border-2 focus-within:border-emerald-600">
            <label htmlFor={name} className="block sr-only text-b-black text-sm font-medium">
                {label}
            </label>
            {iconSrc && iconPosition === "left" && (<Image 
                src={iconSrc} 
                width={20} 
                height={20} 
                alt="custom icon" 
            />)}
            <input
                type={type}
                name={name}
                id={label}
                value={value}
                className="w-full h-full not-autofill:shadow-none placeholder:text-b-black bg-transparent outline-none text-b-black text-sm"
                placeholder={placeholder}
                onChange={onChange}
            />
            {iconSrc && iconPosition === "right" && (<Image 
                src={iconSrc} 
                width={20} 
                height={20} 
                alt="custom icon" 
            />)}
        </div>
    )
}