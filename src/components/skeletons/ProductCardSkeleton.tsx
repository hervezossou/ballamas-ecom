"use client";

export const ProductCardSkeleton = () => {
   return (
      <div className="w-full max-w-[322.67px] flex flex-col gap-4 cursor-pointer animate-pulse">
         {/*Product Featured Image */}
         <div className="w-full h-[405px] flex items-center justify-center rounded-4xl bg-gray-300"></div>

         {/* Product Details */}
         <div className="flex flex-col gap-2">
            <div className="h-8 w-3/4 bg-gray-300 rounded-lg" /> {/* Title */}
            <div className="h-8 w-1/5 bg-gray-300 rounded-lg" /> {/* Price */}
         </div>
      </div>
   );
};
