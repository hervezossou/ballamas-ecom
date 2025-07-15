export interface Product {
   id: string;
   title: string;
   description: string;
   price: { amount: number; currencyCode: string };
   featuredImage: {
      id: string;
      url: string;
   };
}

export type Category = {
   label: string;
   quantity: number;
};

export interface LogoProps {
   variant: "light" | "dark";
}

export interface HamburgerProps {
   isOpen: boolean;
   onClick: () => void;
}

export type ProductSize = "XS" | "S" | "M" | "L" | "XL";

export type ProductColor = "ocean" | "olive" | "purple" | "green";
