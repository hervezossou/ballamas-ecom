import { formatExpiry } from "@/lib/utils";

interface ExpiryDateInputProps {
   value: string;
   onChange: (value: string) => void;
   placeholder?: string;
}

export const ExpiryDateInput = ({
   value,
   onChange,
   placeholder = "MM/YY",
}: ExpiryDateInputProps) => {
   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const formatted = formatExpiry(e.target.value);
      onChange(formatted);
   };

   return (
      <div className="w-full flex flex-col items-start gap-1">
         <label htmlFor="expiration-date" className="block sr-only">
            Expiration date
         </label>
         <input
            type="text"
            id="expirationDate"
            name="expirationDate"
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            maxLength={5}
            inputMode="numeric"
            pattern="(0[1-9]|1[0-2])\/\d{2}"
            autoComplete="cc-exp"
            className="w-full h-11 px-3.5 border-2 rounded-full font-archivo text-sm placeholder:text-b-black text-b-black focus:outline-2 focus:border-none focus:outline-green-600"
         />
      </div>
   );
};
