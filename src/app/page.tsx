"use client";

import { Footer } from "@/components/organisms/Footer";
import { ProductDetails } from "@/components/organisms/ProductDetails";

export default function Home() {
   const product = {
      id: "cjhfhdfhhjdj",
      title: "Badacore Tshirt",
      description:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
      price: { amount: 80, currencyCode: "CAD" },
      featuredImage: {
         id: "",
         url: "/images/badacore-tshirt.png",
      },
   };
   return (
      <>
         <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-4xl font-medium font-archivo">Archivo</h1>
            <p className="font-chillax text-4xl">Chillax</p>
            <ProductDetails product={product} />
         </main>
         <Footer />
      </>
   );
}
