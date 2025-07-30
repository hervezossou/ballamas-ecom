import { CartPage } from "@/components/pages/CartPage";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Your Cart | Ballamas",
   description: "See products in your cart and checkout now.",
};

export default function Page() {
   return <CartPage /> ;
}
