export type Product = {
   handle: string;
   title: string;
   description: string;
   price: { amount: number; currencyCode: string };
   featuredImage: {
      url: string;
   };
};

export type RawProduct = {
   handle: string;
   title: string;
   description: string;
   variants: {
      edges: {
         node: {
            price: {
               amount: string;
               currencyCode: string;
            };
         };
      }[];
   };
   images: {
      edges: {
         node: {
            url: string;
         };
      }[];
   };
};

export type Collection = {
   handle: string;
   title: string;
   description: string;
   image: {
      url: string;
   }
};

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
