export interface Product {
   id: string;
   title: string;
   handle: string;
   price: { amount: number; currencyCode: string };
   image: string;
   description: string;
}
