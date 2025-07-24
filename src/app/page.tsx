import { ProductDetailsWrapper } from "@/components/organisms/ProductDetailsWrapper";
import { ProductCardWrapper } from "@/components/molecules/ProductCardWrapper";
import { CategoriesFilter } from "@/components/molecules/CategoriesFilter";
import { Button } from "@/components/atoms/Button";

export default function Page() {
   const productId = "gid://shopify/Product/7982905098262";
   const hoodieId = "gid://shopify/Product/7982904639510";
   const slidesId = "gid://shopify/Product/7982853619734";

   return (
      <>
         <section className="w-full flex items-center justify-center py-12">
            <div className="w-full min-h-[372px] bg-hero flex flex-col items-center justify-center rounded-[52px] px-5.5 py-10.5 md:h-[460px] md:px-19.5 md:py-24 xl:h-[500px] xl:gap-10">
               <div className="flex flex-col items-center justify-between gap-5 md:gap-10.5">
                  <div className="flex flex-col items-center justify-center gap-4.5">
                     <div className="flex items-center justify-center gap-3">
                        <div className="w-16.5 h-[0.5px] bg-b-white rounded-full"></div>
                        <p className="font-archivo text-b-white text-sm">
                           We bring new fashion to the world
                        </p>
                        <div className="w-16.5 h-[0.5px] bg-b-white rounded-full"></div>
                     </div>
                     <div className="flex flex-col items-center justify-between gap-5">
                        <h1 className="font-chillax font-bold text-b-white text-xl text-center md:text-3xl xl:text-5xl">
                           DISCOVER THE LATEST FASHION TRENDS HERE
                        </h1>
                        <p className="max-w-[557px] font-archivo text-b-white text-base text-center">
                           Discover a world of fashion with our meticulously
                           curated outfits. Shop now to update your wardrobe
                           with chic and stylish outfits.
                        </p>
                     </div>
                  </div>
                  <div className="flex items-center gap-2">
                     <Button
                        variant="filled"
                        size="small"
                        color="white"
                        layout="default"
                        label="Start shopping"
                     />
                     <Button
                        variant="filled"
                        size="small"
                        color="white"
                        layout="default"
                        icon="/icons/arrow.svg"
                        iconAlt="Arrow up icon"
                     />
                  </div>
               </div>
            </div>
         </section>
         <section className="flex flex-col items-center justify-between py-10 px-10">
            <CategoriesFilter />
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
