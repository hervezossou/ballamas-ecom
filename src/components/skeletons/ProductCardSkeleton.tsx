"use client"

export const ProductCardSkeleton = () => {
   return (
      <div
         className="w-full flex flex-col gap-4 cursor-pointer animate-pulse lg:w-[332.67px]"
      >
         <div className="relative h-[405px] flex items-center justify-center rounded-4xl bg-gray-200">
            <div className="absolute inset-0 bg-gray-300 rounded-4xl" />
         </div>

         <div className="flex flex-col gap-2">
            <div className="h-6 w-3/4 bg-gray-300 rounded-lg" /> {/* Titre */}
            <div className="h-5 w-1/4 bg-gray-300 rounded-lg" /> {/* Prix */}
         </div>
      </div>
   )
};
