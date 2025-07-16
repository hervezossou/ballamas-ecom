"use client";

import { ProductDetails } from "@/components/organisms/ProductDetails";
import { ProductCard } from "@/components/organisms/ProductCard";

export default function Home() {
   const summerShirt = {
      id: "cjhfhdfhhjdj",
      title: "Summer Shirt",
      description:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
      price: { amount: 99, currencyCode: "CAD" },
      featuredImage: {
         id: "",
         url: "/images/summer-shirt.png",
      },
   };

   const badacoreShirt = {
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
         <section className="flex flex-col items-center justify-between p-24">
            <h1 className="text-4xl font-medium font-archivo">Archivo</h1>
            <p className="font-chillax text-4xl">Chillax</p>
            <ProductDetails product={badacoreShirt} />
            <ProductCard product={summerShirt} />
         </section>
      </>
   );
}
