import Image from "next/image";

type InputType = "text" | "email" | "password" | "tel";
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
   showLabel: boolean;
   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField = ({
   type,
   value,
   label,
   name,
   placeholder,
   iconPosition,
   icon,
   color = "white",
   showLabel = false,
   onChange,
}: InputProps) => {
   return (
      <div className="w-full h-11 flex flex-col items-start bg-transparent gap-2">
         <label
            htmlFor={name}
            className={`font-archivo font-medium ${showLabel ? "block" : "hidden"} ${color === "black" ? "text-b-black" : "text-b-white"} text-sm md:text-base`}
         >
            {label}
         </label>
         {icon && iconPosition === "left" && (
            <Image src={icon} width={20} height={20} alt="custom icon" />
         )}
         <div className="w-full">
            <input
               type={type}
               name={name}
               id={name}
               value={value}
               className={`w-full h-11 px-3.5 border-2 rounded-full font-archivo focus:outline-2 ${color === "black" ? "outline-b-dark-gray" : "outline-b-white"} focus:border-none focus:outline-green-600 ${color === "black" ? "placeholder:text-b-black text-b-black" : "text-b-white placeholder:text-b-white"} text-sm`}
               placeholder={placeholder}
               onChange={onChange}
            />
            {icon && iconPosition === "right" && (
               <Image src={icon} width={20} height={20} alt="custom icon" />
            )}
         </div>
      </div>
   );
};
