import { ProductDetailsWrapper } from "@/components/organisms/ProductDetailsWrapper";
import { ProductCardWrapper } from "@/components/molecules/ProductCardWrapper";

export default function Page() {

   const productId = "gid://shopify/Product/7982905098262";
   const hoodieId = "gid://shopify/Product/7982904639510"
   const slidesId = "gid://shopify/Product/7982853619734"

   return (
      <>
         <section className="flex flex-col items-center justify-between py-10 px-10">
            <h1 className="text-4xl font-medium font-archivo">Archivo</h1>
            <p className="font-chillax text-4xl">Chillax</p>
            <div className="flex items-center justify-between py-20 gap-8">
               <ProductCardWrapper id={hoodieId} />
               <ProductCardWrapper id={productId} />
               <ProductCardWrapper id={slidesId} />
            </div>
            <ProductDetailsWrapper id="7982905098262" />
         </section>
      </>
   );
}
