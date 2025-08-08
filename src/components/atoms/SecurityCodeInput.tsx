interface SecurityCodeInputProps {
   value: string;
   onChange: (value: string) => void;
   placeholder?: string;
   id?: string;
   name?: string;
}

export const SecurityCodeInput = ({
   value,
   onChange,
   placeholder = "Security code",
   id = "security-code",
   name = "security-code",
}: SecurityCodeInputProps) => {
   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, 4);
      onChange(digitsOnly);
   };

   return (
      <div className="w-full flex flex-col items-start gap-1">
         <label htmlFor={id} className="block sr-only">
            Security code
         </label>
         <input
            type="text"
            id={id}
            name={name}
            inputMode="numeric"
            pattern="[0-9]{3,4}"
            autoComplete="cc-csc"
            className="w-full h-11 px-3.5 border-2 rounded-full font-archivo text-sm placeholder:text-b-black text-b-black focus:outline-2 focus:border-none focus:outline-green-600"
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            maxLength={4}
         />
      </div>
   );
};
