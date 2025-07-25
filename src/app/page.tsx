import { CollectionProducts } from "@/components/organisms/CollectionProducts";
import { Button } from "@/components/atoms/Button";

export default function Page() {

   return (
      <>
         {/* Home Hero Section */}
         <section className="w-full flex items-center justify-center py-8 lg:py-12">
            <div className="w-full min-h-[372px] bg-hero flex flex-col items-center justify-center rounded-[52px] px-5.5 py-10.5 md:h-[460px] md:px-19.5 md:py-24 xl:h-[500px] xl:gap-10">
               <div className="flex flex-col items-center justify-between gap-5 md:gap-10.5">
                  <div className="flex flex-col items-center justify-center gap-4.5">
                     <div className="flex items-center justify-center gap-3">
                        <div className="w-16.5 h-[0.5px] bg-b-white rounded-full"></div>
                        <p className="font-archivo text-b-white text-xs text-center md:text-sm">
                           We bring new fashion to the world
                        </p>
                        <div className="w-16.5 h-[0.5px] bg-b-white rounded-full"></div>
                     </div>
                     <div className="flex flex-col items-center justify-between gap-5">
                        <h1 className="font-chillax font-bold text-b-white text-xl text-center md:text-[42px] xl:text-5xl">
                           DISCOVER THE LATEST FASHION TRENDS HERE
                        </h1>
                        <p className="max-w-[557px] font-archivo text-b-white text-xs text-center md:text-sm lg:text-base">
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

         {/* Lastest Trends in Summer Fashion */}
         <div className="w-full max-w-[1200px] mb-5">
            <p className="font-chillax font-semibold text-center lg:text-3xl">
               Discover the latest trends in summer fashion. Shop now and refresh your wardrobe with our stylish summer shirts.
            </p>
         </div>

         {/* Categories Filter and Product Cards Section */}
         <CollectionProducts />

         {/* Our Collection Section */}
         <div className="w-full flex items-center justify-center py-10 mb-14">
            <section className="w-full max-w-[1200px] flex flex-col items-center justify-center gap-9">
               <div className="flex flex-col items-center justify-center gap-1">
                  <h2 className="font-chillax font-semibold uppercase text-2xl md:text-3xl lg:text-4xl">
                     Our Collection
                  </h2>
                  <p className="font-archivo text-b-dark-gray text-sm md:text-base lg:text-lg text-center">
                     Our latest collection, where classic and contemporary styles converge in perfect harmony.
                  </p>
               </div>
               <div className="w-full max-w-[996px] flex flex-col gap-4 md:flex-row">
                  <div className="relative bg-tech-mens w-full h-[446px] flex items-center justify-center self-stretch rounded-4xl md:w-1/2 lg:w-1/3">
                     <div className="absolute bottom-8">
                        <Button
                           variant="filled"
                           size="small"
                           color="white"
                           layout="reverse"
                           label="Learn more"
                           icon="/icons/arrow.svg"
                           iconAlt="Arrow Up Icon"
                           className="uppercase"
                        />
                     </div>
                  </div>
                  <div className="bg-george w-full h-[446px] flex items-center justify-center self-stretch rounded-4xl md:w-1/2 lg:w-2/3">
                     <div className="flex flex-col items-center justify-center gap-1">
                        <h1 className="uppercase font-chillax font-bold text-3xl text-transparent stroke-b-white text-stroke-white md:text-3xl lg:text-5xl">
                           Classic Men
                        </h1>
                        <p className="font-archivo text-b-white text-sm md:text-lg">
                           We’re changing the way things get made
                        </p>
                     </div>
                  </div>
               </div>
            </section>
         </div>
      </>
   );
}
