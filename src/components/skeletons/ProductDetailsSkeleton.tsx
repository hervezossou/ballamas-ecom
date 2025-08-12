export const ProductDetailsSkeleton = () => {
   return (
      <div className="w-full flex flex-col items-start justify-center gap-8 animate-pulse lg:h-[600px] lg:flex-row lg:gap-10.5">
         <div className="w-full h-80 bg-gray-300 rounded-4xl lg:w-1/2 lg:h-full"></div>
         <div className="w-full flex flex-col items-start justify-between gap-4 lg:w-1/2 lg:gap-5.5">
            <div className="w-full flex flex-col gap-4 h-max lg:h-[410px] lg:gap-5">
               <div className="flex flex-col gap-2 md:gap-3 lg:gap-4.5">
                  <div className="w-3/4 h-6 bg-gray-300 rounded-lg lg:h-10" />
                  <div className="w-1/4 h-6 bg-gray-300 rounded-lg lg:h-10"></div>
                  <div className="flex flex-col gap-2 lg:gap-3">
                     <div className="w-40 h-5 bg-gray-300 rounded-lg lg:h-8"></div>
                     <div className="flex items-center justify-start gap-4">
                        <div className="bg-gray-300 size-6 rounded-full lg:size-8"></div>
                        <div className="bg-gray-300 size-6 rounded-full lg:size-8"></div>
                        <div className="bg-gray-300 size-6 rounded-full lg:size-8"></div>
                        <div className="bg-gray-300 size-6 rounded-full lg:size-8"></div>
                        <div className="bg-gray-300 size-6 rounded-full lg:size-8"></div>
                     </div>
                  </div>
                  <div className="flex flex-col gap-2 lg:gap-3">
                     <div className="w-28 h-5 bg-gray-300 rounded-lg lg:h-8"></div>
                     <div className="flex items-center gap-2">
                        <div className="w-16 h-10 bg-gray-300 rounded-4xl"></div>
                        <div className="w-16 h-10 bg-gray-300 rounded-4xl"></div>
                        <div className="w-16 h-10 bg-gray-300 rounded-4xl"></div>
                        <div className="w-16 h-10 bg-gray-300 rounded-4xl"></div>
                     </div>
                  </div>
               </div>
               <div className="w-full max-w-[579px] flex items-center gap-2">
                  <div className="w-1/2 h-12 bg-gray-300 rounded-4xl lg:h-16"></div>
                  <div className="w-1/2 h-12 bg-gray-300 rounded-4xl lg:h-16"></div>
               </div>
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-2 lg:gap-3.5">
               <div className="w-1/3 h-8 bg-gray-300 rounded-lg"></div>
               <div className="w-full h-40 bg-gray-300 rounded-lg lg:h-30"></div>
            </div>
         </div>
      </div>
   );
};
