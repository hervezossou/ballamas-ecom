export interface Product {
   id: string;
   title: string;
   handle: string;
   price: { amount: number; currencyCode: string };
   image: string;
   description: string;
}

export type Category = {
    label: string;
    quantity: number;
}

export interface LogoProps {
   variant: "light" | "dark";
}

export interface HamburgerProps {
   isOpen: boolean;
   onClick: () => void;
}

export type ProductSize = "XS" | "S" | "M" | "L" | "XL";
