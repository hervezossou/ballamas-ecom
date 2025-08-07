import { CheckoutPage } from "@/components/pages/CheckoutPage";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Checkout | Ballamas",
   description: "Checkout now !",
};

export default function Page() {
   return <CheckoutPage />;
}
