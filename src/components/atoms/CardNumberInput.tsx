"use client";

import { useState } from "react";
import { formatCardNumber } from "@/lib/utils";

interface CardNumberInputProps {
   value: string;
   onChange: (value: string) => void;
   placeholder?: string;
   id?: string;
   name?: string;
}

export const CardNumberInput = ({
   value,
   onChange,
   placeholder = "Card number",
   id = "card-number",
   name = "card-number",
}: CardNumberInputProps) => {
   const [visible, setVisible] = useState(true);

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const rawValue = e.target.value;
      const formattedValue = formatCardNumber(rawValue);
      onChange(formattedValue);
   };

   return (
      <div className="w-full flex flex-col items-start gap-1 relative">
         <label htmlFor={id} className="block sr-only">
            Security code
         </label>
         <input
            type={visible ? "text" : "password"}
            id={id}
            name={name}
            inputMode="numeric"
            autoComplete="cc-number"
            className="w-full h-11 px-3.5 border-2 rounded-full font-archivo text-sm placeholder:text-b-black text-b-black focus:outline-2 focus:border-none focus:outline-green-600"
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            maxLength={23}
            spellCheck={false}
         />
         <button
            type="button"
            onClick={() => setVisible((v) => !v)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-900 focus:outline-none"
            aria-label={visible ? "Hide card number" : "Show card number"}
         >
            {/** lock icon */}
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="20"
               height="20"
               viewBox="0 0 20 20"
               fill="none"
            >
               <path
                  d="M10 13.7502V12.0835"
                  stroke="#1D1D1D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
               />
               <path
                  d="M3.55716 15.7039C3.74456 17.0958 4.89743 18.1862 6.30037 18.2507C7.48088 18.305 8.68007 18.3333 10.0007 18.3333C11.3212 18.3333 12.5204 18.305 13.7009 18.2507C15.1039 18.1862 16.2567 17.0958 16.4442 15.7039C16.5665 14.7956 16.6673 13.8647 16.6673 12.9167C16.6673 11.9687 16.5665 11.0378 16.4442 10.1294C16.2567 8.7375 15.1039 7.64707 13.7009 7.58257C12.5204 7.52831 11.3212 7.5 10.0007 7.5C8.68007 7.5 7.48088 7.52831 6.30037 7.58257C4.89743 7.64707 3.74456 8.7375 3.55716 10.1294C3.43485 11.0378 3.33398 11.9687 3.33398 12.9167C3.33398 13.8647 3.43485 14.7956 3.55716 15.7039Z"
                  stroke="#1D1D1D"
                  strokeWidth="1.5"
               />
               <path
                  d="M6.25 7.49984V5.4165C6.25 3.34544 7.92893 1.6665 10 1.6665C12.0711 1.6665 13.75 3.34544 13.75 5.4165V7.49984"
                  stroke="#1D1D1D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
               />
            </svg>
         </button>
      </div>
   );
};
